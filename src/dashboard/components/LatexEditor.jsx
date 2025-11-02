import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Play, FileText, Menu, FileDown, Brain, Loader2, FileType, ZoomIn, ZoomOut } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { AIChatSession } from '../../../service/AIModal'
import { latexTemplates } from './LatexTemplates'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

// Component to handle PDF pages with overflow warning
const PDFPages = ({ content, allowMultiplePages, onPageOverflow, onTextClick }) => {
  const [pages, setPages] = React.useState(['', '']);
  
  React.useEffect(() => {
    if (!content) {
      setPages(['', '']);
      return;
    }
    
    // Clean content and remove extra spaces
    let cleanContent = content
      .replace(/\s+/g, ' ')
      .replace(/<br>\s*<br>/g, '<br>')
      .replace(/\n\s*\n/g, '<br>')
      .trim();
    
    // Force exactly 2 pages - split content intelligently
    const maxCharsPerPage = 3200; // Increased for better content distribution
    const midPoint = Math.floor(cleanContent.length / 2);
    
    // Find best split point near middle (look for section breaks)
    let splitPoint = midPoint;
    const searchRange = 800;
    
    // Look for section breaks around midpoint
    for (let i = midPoint - searchRange; i < midPoint + searchRange; i++) {
      if (i > 0 && i < cleanContent.length) {
        const substr = cleanContent.substring(i, i + 4);
        if (substr === '<h2>' || substr === '</ul>' || substr === '</div>') {
          splitPoint = i;
          break;
        }
      }
    }
    
    // Ensure we don't split in middle of tags
    while (splitPoint < cleanContent.length && cleanContent[splitPoint] !== '<' && cleanContent[splitPoint - 1] !== '>') {
      splitPoint++;
    }
    
    const page1 = cleanContent.substring(0, splitPoint).trim();
    const page2 = cleanContent.substring(splitPoint).trim();
    
    // Always show exactly 2 pages
    setPages([page1 || '', page2 || '']);
  }, [content, allowMultiplePages]);
  
  return (
    <div className="space-y-4">
      {pages.map((pageContent, index) => (
        <div key={index} className="bg-white shadow-lg relative" style={{
          width: '210mm',
          height: '297mm',
          minWidth: '210mm',
          minHeight: '297mm',
          padding: '12mm 15mm',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          fontSize: '10pt',
          lineHeight: '1.3',
          overflow: 'hidden',
          margin: '0 auto 10px auto',
          textAlign: 'left',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <div 
            style={{ 
              fontFamily: "'Times New Roman',serif", 
              lineHeight: '1.3', 
              color: '#333',
              textAlign: 'left'
            }}
            onDoubleClick={(e) => {
              const selectedText = window.getSelection().toString().trim();
              if (selectedText && onTextClick) {
                onTextClick(selectedText);
              }
            }}
            dangerouslySetInnerHTML={{ __html: pageContent || '<div style="color:#ccc;text-align:center;margin-top:100px;">Page content will appear here</div>' }} 
          />
          <div style={{ 
            position: 'absolute', 
            bottom: '15mm', 
            right: '20mm', 
            fontSize: '8pt', 
            color: '#666'
          }}>
            Page {index + 1} of {pages.length}
          </div>
        </div>
      ))}
    </div>
  );
};

const defaultLatexCode = `\\documentclass[11pt,a4paper]{article}
\\usepackage[utf8]{inputenc}
\\usepackage[margin=1in]{geometry}
\\usepackage{enumitem}
\\usepackage{titlesec}

\\titleformat{\\section}{\\large\\bfseries}{}{0em}{}[\\titlerule]
\\titlespacing{\\section}{0pt}{10pt}{5pt}

\\begin{document}

\\begin{center}
{\\LARGE \\textbf{Your Name}}\\\\
\\vspace{2pt}
Email: your.email@example.com | Phone: (123) 456-7890\\\\
LinkedIn: linkedin.com/in/yourprofile | GitHub: github.com/yourusername
\\end{center}

\\section{PROFESSIONAL SUMMARY}
Experienced professional with expertise in [your field]. Proven track record of [key achievements]. Seeking to leverage [skills] in a [target role] position.

\\section{EXPERIENCE}
\\textbf{Job Title} \\hfill \\textbf{Month Year - Present}\\\\
\\textit{Company Name, Location}
\\begin{itemize}[leftmargin=*]
    \\item Achievement or responsibility with quantifiable results
    \\item Another key accomplishment demonstrating impact
    \\item Technical skills or leadership experience
\\end{itemize}

\\section{EDUCATION}
\\textbf{Degree Name} \\hfill \\textbf{Graduation Year}\\\\
\\textit{University Name, Location}\\\\
GPA: X.X/4.0 (if above 3.5)

\\section{SKILLS}
\\textbf{Technical:} Programming languages, frameworks, tools\\\\
\\textbf{Languages:} English (Native), Other languages

\\end{document}`;

function LatexEditor() {
  const [latexCode, setLatexCode] = useState(defaultLatexCode);
  const apiUrl = `${import.meta.env.VITE_API_URL || 'http://localhost:3001'}/compile-latex`;
  
  useEffect(() => {
    // Load MathJax for LaTeX math rendering
    if (!window.MathJax) {
      const script = document.createElement('script');
      script.src = 'https://polyfill.io/v3/polyfill.min.js?features=es6';
      document.head.appendChild(script);
      
      const mathJaxScript = document.createElement('script');
      mathJaxScript.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js';
      mathJaxScript.async = true;
      document.head.appendChild(mathJaxScript);
      
      window.MathJax = {
        tex: {
          inlineMath: [['$', '$'], ['\\(', '\\)']],
          displayMath: [['$$', '$$'], ['\\[', '\\]']]
        },
        options: {
          skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre']
        }
      };
    }
  }, []);
  const [isCompiling, setIsCompiling] = useState(false);
  const [compiledOutput, setCompiledOutput] = useState('');
  const [aiPrompt, setAiPrompt] = useState('');
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [allowMultiplePages, setAllowMultiplePages] = useState(false);
  const [showTemplates, setShowTemplates] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(0.6);
  const textareaRef = React.useRef(null);

  const handleTemplateSelect = (template) => {
    setLatexCode(template.code);
    setShowTemplates(false);
  };

  const handleCompile = async () => {
    setIsCompiling(true);
    
    try {
      // Method 1: Try server-side LaTeX compilation
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ latexCode, format: 'html' })
      });
      
      if (response.ok) {
        const result = await response.json();
        if (result.success && result.html) {
          setCompiledOutput(result.html);
          setIsCompiling(false);
          return;
        }
      }
    } catch (error) {
      console.log('Server LaTeX compilation failed:', error);
    }
    
    // Method 2: Enhanced custom renderer with better template support
    const templateType = detectTemplateType(latexCode);
    let preview = renderTemplatePreview(latexCode, templateType);
    setCompiledOutput(preview);
    
    // Render math with MathJax after setting content
    setTimeout(() => {
      if (window.MathJax && window.MathJax.typesetPromise) {
        window.MathJax.typesetPromise();
      }
    }, 100);
    
    setIsCompiling(false);
  };

  const detectTemplateType = (code) => {
    if (code.includes('moderncv')) return 'moderncv';
    if (code.includes('cernatsnote')) return 'academic';
    if (code.includes('documentTitle')) return 'minimalist';
    if (code.includes('customcventry')) return 'marketing';
    if (code.includes('RTL')) return 'arabic';
    if (code.includes('EDMSabstract')) return 'corporate';
    return 'standard';
  };

  const renderTemplatePreview = (latexCode, templateType) => {
    let preview = latexCode;
    
    // Remove all preamble content (everything before \begin{document})
    const docStart = preview.indexOf('\\begin{document}');
    if (docStart !== -1) {
      preview = preview.substring(docStart + 16); // Remove \begin{document}
    }
    
    // Remove \end{document}
    preview = preview.replace(/\\end\{document\}/g, '');
    
    // Remove comments
    preview = preview.replace(/%.*$/gm, '');
    
    // Template-specific rendering
    if (templateType === 'moderncv') {
      preview = renderModernCVTemplate(preview);
    } else if (templateType === 'academic') {
      preview = renderAcademicTemplate(preview);
    } else if (templateType === 'arabic') {
      preview = renderArabicTemplate(preview);
    } else if (templateType === 'marketing') {
      preview = renderMarketingTemplate(preview);
    } else if (templateType === 'corporate') {
      preview = renderCorporateTemplate(preview);
    }
    
    // Handle custom commands first - improved documentTitle handling
    preview = preview.replace(/\\documentTitle\{([^}]+)\}\{([\s\S]*?)\}/g, (match, title, contact) => {
      let cleanContact = contact
        // Replace FontAwesome icons with appropriate symbols
        .replace(/\\faEnvelope\s*/g, '📧 ')
        .replace(/\\faPhone\*?\s*/g, '📞 ')
        .replace(/\\faLinkedinIn\s*/g, '💼 ')
        .replace(/\\faLink\s*/g, '🌐 ')
        .replace(/\\faGithub\s*/g, '💻 ')
        .replace(/\\fa[A-Za-z]+\*?\s*/g, '🔗 ')
        // Handle href links - create proper hyperlinks
        .replace(/\\href\{([^}]*)\}\{([^}]*)\}/g, '<a href="$1" style="color:#004F90;text-decoration:none;">$2</a>')
        // Handle spacing commands
        .replace(/\\hspace\{[^}]*\}/g, '')
        .replace(/\\hspace[^{]*\{[^}]*\}/g, '')
        .replace(/\\hspace[0-9.]+cm/g, '')
        .replace(/\\,/g, '')
        .replace(/\\\s+/g, ' ')
        // Handle line breaks and separators
        .replace(/\\\\\\\\|\\\\\s*/g, '<br>')
        .replace(/\\\\\s*/g, '<br>')
        .replace(/\s*\|\s*/g, ' | ')
        // Clean up extra spaces and braces
        .replace(/\{|\}/g, '')
        .replace(/\s+/g, ' ')
        .trim();
      
      return `<h1 style="font-size:28px;font-weight:bold;text-align:center;margin:20px 0;color:#004F90;">${title}</h1><div style="text-align:center;font-size:12px;margin:10px 0;line-height:1.4;">${cleanContact}</div><hr style="border:1px solid #999999;margin:15px 0;">`;
    });
    
    // Handle headingBf and headingIt
    preview = preview.replace(/\\headingBf\{([^}]+)\}\{([^}]*)\}/g, '<div style="display:flex;justify-content:space-between;font-weight:bold;margin:8px 0;"><span>$1</span><span>$2</span></div>');
    preview = preview.replace(/\\headingIt\{([^}]+)\}\{([^}]*)\}/g, '<div style="display:flex;justify-content:space-between;font-style:italic;margin:4px 0;color:#666;"><span>$1</span><span>$2</span></div>');
    
    // Handle sections with consistent spacing
    preview = preview.replace(/\\section\*?\{([^}]+)\}/g, '<h2 style="font-size:14px;font-weight:bold;margin:12px 0 6px 0;border-bottom:1px solid #333;padding-bottom:2px;color:#333;text-transform:uppercase;letter-spacing:0.5px;">$1</h2>');
    
    // Handle lists with proper spacing
    preview = preview.replace(/\\begin\{resume_list\}/g, '<ul style="margin:4px 0;padding-left:15px;list-style-type:disc;">');
    preview = preview.replace(/\\end\{resume_list\}/g, '</ul>');
    preview = preview.replace(/\\begin\{itemize\}[^\n]*\n?/g, '<ul style="margin:4px 0;padding-left:15px;list-style-type:disc;">');
    preview = preview.replace(/\\end\{itemize\}/g, '</ul>');
    preview = preview.replace(/\\item\s+/g, '<li style="margin:2px 0;line-height:1.3;">');
    
    // Handle tables with better spacing
    preview = preview.replace(/\\begin\{tabularx\}\{[^}]*\}\{[^}]*\}/g, '<table style="width:100%;margin:6px 0;border-collapse:collapse;">');
    preview = preview.replace(/\\end\{tabularx\}/g, '</table>');
    
    // Convert table rows
    const tableRows = preview.match(/<table[^>]*>[\s\S]*?<\/table>/g);
    if (tableRows) {
      tableRows.forEach(table => {
        let tableContent = table.replace(/<table[^>]*>/, '').replace(/<\/table>/, '');
        const rows = tableContent.split('\\\\');
        let newTable = '<table style="width:100%;margin:10px 0;border-collapse:collapse;">';
        rows.forEach(row => {
          if (row.trim()) {
            const cells = row.split('&');
            newTable += '<tr>';
            cells.forEach(cell => {
              newTable += `<td style="padding:4px 8px;vertical-align:top;">${cell.trim()}</td>`;
            });
            newTable += '</tr>';
          }
        });
        newTable += '</table>';
        preview = preview.replace(table, newTable);
      });
    }
    
    // Handle text formatting with consistent styling
    preview = preview.replace(/\\textbf\{([^}]+)\}/g, '<strong style="font-weight:600;">$1</strong>');
    preview = preview.replace(/\\textit\{([^}]+)\}/g, '<em style="font-style:italic;color:#555;">$1</em>');
    preview = preview.replace(/\\Large/g, '');
    preview = preview.replace(/\\large/g, '');
    preview = preview.replace(/\\small/g, '');
    
    // Handle line breaks and spacing more precisely
    preview = preview.replace(/\\\\\s*/g, '<br style="margin:2px 0;">');
    preview = preview.replace(/\\vspace\{[^}]*\}/g, '<div style="margin:4px 0;"></div>');
    preview = preview.replace(/\\hspace\{[^}]*\}/g, '');
    preview = preview.replace(/\\hfill/g, '');
    
    // Handle special characters
    preview = preview.replace(/\\&/g, '&');
    preview = preview.replace(/\\,/g, ' ');
    // Handle remaining FontAwesome icons with appropriate symbols
    preview = preview.replace(/\\faEnvelope\s*/g, '📧 ');
    preview = preview.replace(/\\faPhone\*?\s*/g, '📞 ');
    preview = preview.replace(/\\faLinkedinIn\s*/g, '💼 ');
    preview = preview.replace(/\\faLink\s*/g, '🌐 ');
    preview = preview.replace(/\\faGithub\s*/g, '💻 ');
    preview = preview.replace(/\\fa[A-Za-z]+\*?/g, '🔗 ');
    // Handle remaining href links - create hyperlinks
    preview = preview.replace(/\\href\{([^}]*)\}\{([^}]*)\}/g, '<a href="$1" style="color:#004F90;text-decoration:none;">$2</a>');
    
    // Clean up extra whitespace and fix alignment
    preview = preview.replace(/\n\s*\n+/g, '<br>');
    preview = preview.replace(/\s{2,}/g, ' ');
    preview = preview.replace(/<br>\s*<br>+/g, '<br>');
    preview = preview.replace(/(<h[1-6][^>]*>)\s+/g, '$1');
    preview = preview.replace(/\s+(<\/h[1-6]>)/g, '$1');
    preview = preview.replace(/\s*\\\\\s*/g, '<br>');
    preview = preview.replace(/\{\s*\}/g, '');
    preview = preview.trim();
    
    // Apply template-specific styling with proper alignment and spacing
    const templateStyles = {
      moderncv: 'font-family:"Helvetica",sans-serif;background:#f8f9fa;text-align:left;font-size:10pt;',
      academic: 'font-family:"Computer Modern",serif;line-height:1.3;text-align:justify;font-size:10pt;',
      minimalist: 'font-family:"CormorantGaramond",serif;color:#0e6e55;text-align:left;font-size:10pt;',
      marketing: 'font-family:"Times New Roman",serif;text-align:left;font-size:10pt;',
      arabic: 'font-family:"Times New Roman",serif;direction:rtl;text-align:right;font-size:10pt;',
      corporate: 'font-family:"Arial",sans-serif;line-height:1.3;text-align:left;font-size:10pt;',
      standard: 'font-family:"Times New Roman",serif;text-align:left;font-size:10pt;'
    };

    const baseStyle = templateStyles[templateType] || templateStyles.standard;
    return `<div style="${baseStyle}line-height:1.3;color:#333;margin:0;padding:0;height:100%;display:flex;flex-direction:column;">${preview}</div>`;
  };

  const renderModernCVTemplate = (content) => {
    content = content.replace(/\\name\{([^}]+)\}\{([^}]+)\}/g, '<h1 style="color:#2E74B5;font-size:20px;margin:8px 0;text-align:center;font-weight:bold;">$1 $2</h1>');
    content = content.replace(/\\moderncvstyle\{[^}]+\}/g, '');
    content = content.replace(/\\moderncvcolor\{[^}]+\}/g, '');
    content = content.replace(/\\cventry\{([^}]+)\}\{([^}]+)\}\{([^}]+)\}\{([^}]+)\}\{([^}]+)\}\{([^}]*)\}/g, 
      '<div style="margin:6px 0;border-left:2px solid #2E74B5;padding-left:8px;"><div style="font-weight:600;font-size:11pt;">$2</div><div style="font-style:italic;color:#666;font-size:9pt;margin:1px 0;">$3, $4</div><div style="font-size:9pt;line-height:1.2;">$6</div></div>');
    return content;
  };

  const renderAcademicTemplate = (content) => {
    content = content.replace(/\\title\{([^}]+)\}/g, '<h1 style="text-align:center;font-size:16px;margin:10px 0;color:#000080;font-weight:bold;">$1</h1>');
    content = content.replace(/\\author\{([\s\S]*?)\}/g, '<div style="text-align:center;margin:6px 0;font-size:11pt;">$1</div>');
    content = content.replace(/\\maketitle/g, '');
    content = content.replace(/\\begin\{abstract\}/g, '<div style="margin:8px 0;padding:8px;background:#f8f9fa;border-left:2px solid #000080;"><h4 style="margin:0 0 4px 0;color:#000080;font-size:11pt;">Abstract</h4>');
    content = content.replace(/\\end\{abstract\}/g, '</div>');
    content = content.replace(/\\tableofcontents/g, '<div style="margin:8px 0;font-weight:600;color:#000080;font-size:11pt;">Table of Contents</div>');
    return content;
  };

  const renderArabicTemplate = (content) => {
    // Arabic RTL template rendering
    content = content.replace(/\\begin\{RTL\}/g, '<div style="direction:rtl;text-align:right;">');
    content = content.replace(/\\end\{RTL\}/g, '</div>');
    content = content.replace(/\\begin\{multicols\}\{2\}/g, '<div style="columns:2;column-gap:20px;">');
    content = content.replace(/\\end\{multicols\}/g, '</div>');
    return content;
  };

  const renderMarketingTemplate = (content) => {
    content = content.replace(/\\customcventry\{([^}]+)\}\{([^}]+)\}\{([^}]+)\}\{([^}]+)\}\{[^}]*\}\{([\s\S]*?)\}/g, 
      '<div style="margin:6px 0;border-left:2px solid #2E74B5;padding-left:8px;"><div style="display:flex;justify-content:space-between;font-weight:600;margin-bottom:2px;font-size:10pt;"><span>$3</span><span style="color:#666;font-size:9pt;">$1</span></div><div style="font-style:italic;color:#666;margin-bottom:3px;font-size:9pt;">$2, $4</div><div style="line-height:1.2;font-size:9pt;">$5</div></div>');
    content = content.replace(/\\makecvtitle/g, '');
    return content;
  };

  const renderCorporateTemplate = (content) => {
    // Corporate EDMS template
    content = content.replace(/\\begin\{EDMSabstract\}/g, '<div style="background:#e8f4f8;padding:20px;margin:20px 0;border-radius:5px;"><h3 style="color:#004F90;">Executive Summary</h3>');
    content = content.replace(/\\end\{EDMSabstract\}/g, '</div>');
    content = content.replace(/\\input\{[^}]+\}/g, '<div style="color:#666;font-style:italic;">[Content from external file]</div>');
    return content;
  };

  const handleDownloadTex = () => {
    const element = document.createElement('a');
    const file = new Blob([latexCode], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'resume.tex';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handleDownloadPdf = async () => {
    try {
      // Try server-side compilation first
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ latexCode })
      });
      
      if (response.ok) {
        const result = await response.json();
        if (result.success) {
          // Convert base64 to blob and download
          const pdfBlob = new Blob([Uint8Array.from(atob(result.pdf), c => c.charCodeAt(0))], { type: 'application/pdf' });
          const url = URL.createObjectURL(pdfBlob);
          const a = document.createElement('a');
          a.href = url;
          a.download = 'resume.pdf';
          a.click();
          URL.revokeObjectURL(url);
          return;
        }
      }
    } catch (error) {
      console.log('Server compilation failed:', error);
    }
    
    // Fallback message
    alert('For PDF generation, download the .tex file and compile it with Overleaf or install LaTeX locally.');
  };

  const handleDownloadWord = async () => {
    try {
      // Try server-side conversion first
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ latexCode, format: 'docx' })
      });
      
      if (response.ok) {
        const result = await response.json();
        if (result.success) {
          const docxBlob = new Blob([Uint8Array.from(atob(result.docx), c => c.charCodeAt(0))], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
          const url = URL.createObjectURL(docxBlob);
          const a = document.createElement('a');
          a.href = url;
          a.download = 'resume.docx';
          a.click();
          URL.revokeObjectURL(url);
          return;
        }
      }
    } catch (error) {
      console.log('Server Word generation failed, using fallback:', error);
    }
    
    // Fallback: Create RTF file (opens in Word)
    try {
      const templateType = detectTemplateType(latexCode);
      let rtfContent = convertLatexToRTF(latexCode, templateType);
      
      const rtfBlob = new Blob([rtfContent], { type: 'application/rtf' });
      const url = URL.createObjectURL(rtfBlob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'resume.rtf';
      a.click();
      URL.revokeObjectURL(url);
      
      alert('Downloaded as RTF file (opens in Word). For full DOCX support, install Pandoc.');
    } catch (error) {
      alert('Word generation failed. Install Pandoc for full Word support.');
    }
  };

  const convertLatexToRTF = (latexCode, templateType) => {
    let content = latexCode;
    
    // Remove LaTeX preamble
    const docStart = content.indexOf('\\begin{document}');
    if (docStart !== -1) {
      content = content.substring(docStart + 16);
    }
    content = content.replace(/\\end\{document\}/g, '');
    
    // Convert LaTeX to RTF format
    content = content.replace(/\\section\*?\{([^}]+)\}/g, '\\par\\b $1\\b0\\par');
    content = content.replace(/\\textbf\{([^}]+)\}/g, '\\b $1\\b0');
    content = content.replace(/\\textit\{([^}]+)\}/g, '\\i $1\\i0');
    content = content.replace(/\\\\\s*/g, '\\par');
    content = content.replace(/\\begin\{itemize\}[^\n]*\n?/g, '');
    content = content.replace(/\\end\{itemize\}/g, '');
    content = content.replace(/\\item\s+/g, '\\par • ');
    content = content.replace(/\{|\}/g, '');
    content = content.replace(/\\[a-zA-Z]+/g, '');
    
    return `{\\rtf1\\ansi\\deff0 {\\fonttbl {\\f0 Times New Roman;}}\\f0\\fs22 ${content}}`;
  };

  const handleAiEnhance = async () => {
    if (!aiPrompt.trim()) return;
    
    setIsAiLoading(true);
    try {
      if (!AIChatSession) {
        throw new Error('AI service not available');
      }

      const prompt = `You are a LaTeX expert. Enhance this LaTeX resume code based on the request: "${aiPrompt}". 

Current LaTeX code:
${latexCode}

Provide ONLY the complete enhanced LaTeX code starting with \\documentclass and ending with \\end{document}. Do not include any explanations or markdown formatting.`;
      
      console.log('Sending AI request...');
      const result = await AIChatSession.sendMessage(prompt);
      const enhancedCode = result.response.text();
      
      console.log('AI Response received:', enhancedCode);
      
      // Clean and extract LaTeX code
      let cleanCode = enhancedCode.trim();
      
      // Remove markdown code blocks if present
      cleanCode = cleanCode.replace(/```latex\n?/g, '').replace(/```\n?/g, '');
      
      // Extract LaTeX document
      const latexMatch = cleanCode.match(/\\documentclass[\s\S]*?\\end\{document\}/s);
      
      if (latexMatch) {
        setLatexCode(latexMatch[0]);
        alert('LaTeX code enhanced successfully!');
      } else if (cleanCode.includes('\\documentclass')) {
        setLatexCode(cleanCode);
        alert('LaTeX code enhanced successfully!');
      } else {
        throw new Error('Invalid LaTeX code received from AI');
      }
      
      setAiPrompt('');
    } catch (error) {
      console.error('AI Enhancement Error:', error);
      
      // Provide fallback enhancement based on common requests
      const fallbackEnhancements = {
        'professional': () => setLatexCode(latexCode.replace(/\\section\{/g, '\\section*{').replace(/article\}/g, 'article}\n\\usepackage{xcolor}\n\\definecolor{darkblue}{RGB}{0,0,139}')),
        'skills': () => {
          if (!latexCode.includes('TECHNICAL SKILLS')) {
            const skillsSection = `\n\\section{TECHNICAL SKILLS}
\\textbf{Programming:} Python, JavaScript, Java, C++\\\\
\\textbf{Frameworks:} React, Node.js, Django, Spring\\\\
\\textbf{Tools:} Git, Docker, AWS, MongoDB\n`;
            setLatexCode(latexCode.replace('\\end{document}', skillsSection + '\n\\end{document}'));
          }
        },
        'format': () => setLatexCode(latexCode.replace(/\\usepackage\{geometry\}/g, '\\usepackage[margin=0.75in]{geometry}'))
      };
      
      // Try fallback based on prompt keywords
      const lowerPrompt = aiPrompt.toLowerCase();
      if (lowerPrompt.includes('professional')) fallbackEnhancements.professional();
      else if (lowerPrompt.includes('skill')) fallbackEnhancements.skills();
      else if (lowerPrompt.includes('format')) fallbackEnhancements.format();
      else alert(`AI service error: ${error.message}. Try a simpler request like "make it more professional" or "add skills section".`);
      
      setAiPrompt('');
    } finally {
      setIsAiLoading(false);
    }
  };

  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="bg-white text-gray-800 border-gray-300 hover:bg-gray-100 hover:text-gray-900">
                <Menu className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={handleDownloadTex}>
                <FileText className="h-4 w-4 mr-2" />
                Download .tex
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleDownloadPdf}>
                <FileDown className="h-4 w-4 mr-2" />
                Download PDF
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleDownloadWord}>
                <FileType className="h-4 w-4 mr-2" />
                Download Word
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            <h1 className="text-lg font-semibold">LaTeX Resume Editor</h1>
          </div>
        </div>
        <div className="flex gap-2">
          <Dialog open={showTemplates} onOpenChange={setShowTemplates}>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" className="bg-white text-gray-800 border-gray-300 hover:bg-gray-100 hover:text-gray-900">
                <FileText className="h-4 w-4 mr-2" />
                Templates
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Choose a LaTeX Resume Template</DialogTitle>
              </DialogHeader>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                {latexTemplates.map((template) => (
                  <div key={template.id} className="border rounded-lg p-3">
                    <div className="bg-gray-100 h-32 rounded mb-2 flex items-center justify-center text-xs text-gray-500">
                      Preview
                    </div>
                    <h3 className="font-semibold text-sm mb-1">{template.name}</h3>
                    <p className="text-xs text-gray-600 mb-2">{template.description}</p>
                    <Button 
                      size="sm" 
                      className="w-full text-xs"
                      onClick={() => handleTemplateSelect(template)}
                    >
                      Use Template
                    </Button>
                  </div>
                ))}
              </div>
            </DialogContent>
          </Dialog>
          <Button 
            onClick={handleCompile} 
            disabled={isCompiling}
            className="bg-green-600 hover:bg-green-700"
          >
            {isCompiling ? (
              <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
            ) : (
              <Play className="h-4 w-4" />
            )}
            {isCompiling ? 'Compiling...' : 'Compile'}
          </Button>
        </div>
      </div>

      {/* AI Helper */}
      <div className="bg-purple-50 border-b p-3">
        <div className="flex gap-2 max-w-4xl mx-auto">
          <Input
            placeholder="Ask AI to enhance your LaTeX code (e.g., 'make it more professional', 'add skills section')"
            value={aiPrompt}
            onChange={(e) => setAiPrompt(e.target.value)}
            className="flex-1"
            onKeyPress={(e) => e.key === 'Enter' && handleAiEnhance()}
          />
          <Button 
            onClick={handleAiEnhance} 
            disabled={isAiLoading || !aiPrompt.trim()}
            className="bg-purple-600 hover:bg-purple-700"
          >
            {isAiLoading ? (
              <Loader2 className="h-4 w-4" />
            ) : (
              <Brain className="h-4 w-4" />
            )}
            AI Enhance
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex">
        {/* Code Editor */}
        <div className="w-1/2 border-r">
          <div className="bg-gray-100 p-2 border-b">
            <h2 className="font-semibold text-sm">LaTeX Source</h2>
          </div>
          <textarea
            ref={textareaRef}
            value={latexCode}
            onChange={(e) => setLatexCode(e.target.value)}
            className="w-full h-full p-4 font-mono text-sm resize-none border-none outline-none"
            style={{ fontFamily: 'Monaco, Consolas, "Courier New", monospace' }}
            placeholder="Enter your LaTeX code here..."
          />
        </div>

        {/* Preview */}
        <div className="w-1/2">
          <div className="bg-gray-100 p-2 border-b flex justify-between items-center">
            <div className="flex items-center gap-2">
              <h2 className="font-semibold text-sm">LaTeX Preview</h2>
              <div className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                Enhanced Rendering
              </div>
            </div>
          </div>
          <div className="h-full overflow-auto bg-gray-400 p-4">
            <div className="flex justify-center gap-2 mb-4 sticky top-0 bg-gray-400 py-2 z-10">
              <Button 
                size="sm" 
                variant="outline" 
                onClick={() => setZoomLevel(prev => Math.min(prev + 0.1, 1.5))}
                className="bg-white"
              >
                <ZoomIn className="h-4 w-4" />
              </Button>
              <span className="bg-white px-2 py-1 rounded text-sm">{Math.round(zoomLevel * 100)}%</span>
              <Button 
                size="sm" 
                variant="outline" 
                onClick={() => setZoomLevel(prev => Math.max(prev - 0.1, 0.3))}
                className="bg-white"
              >
                <ZoomOut className="h-4 w-4" />
              </Button>
            </div>
            {compiledOutput ? (
              <div className="flex flex-col items-center" style={{transform: `scale(${zoomLevel})`, transformOrigin: 'top center'}}>
                <PDFPages 
                  content={compiledOutput} 
                  allowMultiplePages={allowMultiplePages}
                  onPageOverflow={() => {}} // Always force 2 pages
                  onTextClick={(selectedText) => {
                    if (textareaRef.current && selectedText.length > 2) {
                      const textarea = textareaRef.current;
                      const text = textarea.value;
                      const index = text.indexOf(selectedText);
                      
                      if (index !== -1) {
                        textarea.focus();
                        textarea.setSelectionRange(index, index + selectedText.length);
                        
                        // Calculate line number for scrolling
                        const beforeText = text.substring(0, index);
                        const lineNumber = beforeText.split('\n').length;
                        const lineHeight = 20; // Approximate line height
                        const scrollTop = (lineNumber - 5) * lineHeight; // Scroll with some padding
                        
                        textarea.scrollTop = Math.max(0, scrollTop);
                      }
                    }
                  }}
                />
              </div>
            ) : (
              <div className="flex items-center justify-center h-full text-gray-500">
                <div className="text-center max-w-md">
                  <FileText className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Click "Compile" to see your resume preview</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LatexEditor;