import { Button } from '@/components/ui/button';
import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import { Brain, LoaderCircle } from 'lucide-react';
import React, { useContext, useState } from 'react'
import { BtnBold, BtnBulletList, BtnClearFormatting, BtnItalic, BtnLink, BtnNumberedList, BtnStrikeThrough, BtnStyles, BtnUnderline, Editor, EditorProvider, HtmlButton, Separator, Toolbar } from 'react-simple-wysiwyg'
import { AIChatSession } from './../../../../service/AIModal';
import { toast } from 'sonner';
const PROMPT='position titile: {positionTitle} , Depends on position title give me 5-7 bullet points for my experience in resume (Please do not add experince level and No JSON array) , give me result in HTML tags'
function RichTextEditor({onRichTextEditorChange,index,defaultValue}) {
    const [value,setValue]=useState(defaultValue || '');
    const {resumeInfo,setResumeInfo}=useContext(ResumeInfoContext)
    const [loading,setLoading]=useState(false);
    
    // Update value when defaultValue changes
    React.useEffect(() => {
        if (defaultValue !== undefined) {
            setValue(defaultValue);
        }
    }, [defaultValue]);
    const GenerateSummeryFromAI=async()=>{
      if(!resumeInfo?.Experience[index]?.title) {
        toast.error('Please add a position title first');
        return;
      }
      
      setLoading(true);
      const jobTitle = resumeInfo.Experience[index].title;
      
      try {
        console.log('AI Service available:', !!AIChatSession);
        
        const prompt = `Generate 5 professional bullet points for a ${jobTitle} position. Each bullet point should highlight specific achievements, responsibilities, and measurable impact. Format the response as an HTML unordered list using <ul> and <li> tags only. Do not include any markdown, code blocks, or additional formatting.`;
        
        console.log('Sending AI request for:', jobTitle);
        
        const result = await AIChatSession.sendMessage(prompt);
        let resp = result.response.text();
        console.log('Raw AI Response:', resp);
        
        // Clean the response thoroughly
        resp = resp
          .replace(/```html/gi, '')
          .replace(/```/g, '')
          .replace(/\*\*/g, '')
          .trim();
        
        // Ensure proper HTML structure
        if (!resp.includes('<ul>') || !resp.includes('<li>')) {
          // Parse lines and create proper HTML
          const lines = resp.split('\n')
            .map(line => line.trim())
            .filter(line => line && !line.startsWith('<') && line.length > 10)
            .slice(0, 5); // Take first 5 lines
          
          if (lines.length > 0) {
            resp = '<ul>' + lines.map(line => {
              // Remove bullet points and clean text
              const cleanLine = line.replace(/^[•\-\*\d\.\)\s]+/, '').trim();
              return `<li>${cleanLine}</li>`;
            }).join('') + '</ul>';
          } else {
            throw new Error('No valid content in AI response');
          }
        }
        
        setValue(resp);
        // Trigger the onChange event to update parent component
        const syntheticEvent = {
            target: { value: resp }
        };
        onRichTextEditorChange(syntheticEvent);
        toast.success('AI content generated successfully!');
        
      } catch (error) {
        console.error('AI Generation Error:', error);
        
        // Enhanced fallback content with job-specific details
        const fallbackContent = `<ul>
          <li>Successfully managed ${jobTitle} responsibilities and delivered measurable business results</li>
          <li>Collaborated with cross-functional teams to achieve strategic objectives and exceed performance targets</li>
          <li>Implemented industry best practices and innovative solutions to improve operational efficiency by 20%</li>
          <li>Consistently delivered high-quality projects on time and within budget while maintaining attention to detail</li>
          <li>Demonstrated strong leadership and problem-solving skills in fast-paced, dynamic work environments</li>
        </ul>`;
        
        setValue(fallbackContent);
        // Trigger the onChange event to update parent component
        const syntheticEvent = {
            target: { value: fallbackContent }
        };
        onRichTextEditorChange(syntheticEvent);
        toast.success('Professional content generated using templates!');
        
      } finally {
        setLoading(false);
      }
    }
  
    return (
    <div>
      <div className='flex justify-between my-3'>
        <label className='text-sm font-medium'>Work Summary</label>
        <Button variant="outline" size="sm" 
        onClick={GenerateSummeryFromAI}
        disabled={loading}
        className="flex gap-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors">
          {loading?
          <LoaderCircle className='animate-spin h-4 w-4'/>:  
          <>
           <Brain className='h-4 w-4'/> Generate from AI 
           </>
        }
         </Button>
      </div>
    <EditorProvider>
      <Editor 
        value={value} 
        onChange={(e)=>{
          console.log('Editor onChange:', e.target.value);
          setValue(e.target.value);
          onRichTextEditorChange(e)
        }}
        containerProps={{
          style: {
            minHeight: '120px',
            fontSize: '14px',
            lineHeight: '1.5',
            border: '1px solid #e2e8f0',
            borderRadius: '8px'
          }
        }}
      >
         <Toolbar>
          <BtnBold />
          <BtnItalic />
          <BtnUnderline />
          <BtnStrikeThrough />
          <Separator />
          <BtnNumberedList />
          <BtnBulletList />
          <Separator />
          <BtnLink />
        </Toolbar>
      </Editor>
      </EditorProvider>
    </div>
  )
}

export default RichTextEditor