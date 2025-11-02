const express = require('express');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json({ limit: '10mb' }));

// For Vercel serverless
if (process.env.VERCEL) {
  module.exports = app;
} else {
  const PORT = 3001;
  app.listen(PORT, () => {
    console.log(`LaTeX compiler server running on port ${PORT}`);
  });
}

app.post('/compile-latex', async (req, res) => {
  const { latexCode, format = 'pdf' } = req.body;
  
  if (!latexCode) {
    return res.status(400).json({ error: 'No LaTeX code provided' });
  }

  const tempDir = path.join(__dirname, 'temp');
  const fileName = `resume_${Date.now()}`;
  const texFile = path.join(tempDir, `${fileName}.tex`);
  const pdfFile = path.join(tempDir, `${fileName}.pdf`);

  try {
    if (!fs.existsSync(tempDir)) {
      fs.mkdirSync(tempDir, { recursive: true });
    }

    fs.writeFileSync(texFile, latexCode);

    let command;
    if (format === 'html') {
      command = `pandoc "${texFile}" -o "${tempDir}/${fileName}.html" --mathjax`;
    } else if (format === 'docx') {
      command = `pandoc "${texFile}" -o "${tempDir}/${fileName}.docx"`;
    } else {
      command = `pdflatex -output-directory="${tempDir}" "${texFile}"`;
    }
    
    exec(command, (error, stdout, stderr) => {
      if (error) {
        return res.status(500).json({ 
          error: 'LaTeX compilation failed', 
          details: stderr || error.message 
        });
      }

      let outputFile;
      if (format === 'html') {
        outputFile = path.join(tempDir, `${fileName}.html`);
      } else if (format === 'docx') {
        outputFile = path.join(tempDir, `${fileName}.docx`);
      } else {
        outputFile = pdfFile;
      }
      
      if (fs.existsSync(outputFile)) {
        if (format === 'html') {
          const htmlContent = fs.readFileSync(outputFile, 'utf8');
          res.json({ 
            success: true, 
            html: htmlContent
          });
        } else if (format === 'docx') {
          const docxBuffer = fs.readFileSync(outputFile);
          const docxBase64 = docxBuffer.toString('base64');
          res.json({ 
            success: true, 
            docx: docxBase64
          });
        } else {
          const pdfBuffer = fs.readFileSync(outputFile);
          const pdfBase64 = pdfBuffer.toString('base64');
          res.json({ 
            success: true, 
            pdf: pdfBase64
          });
        }
        
        try {
          fs.unlinkSync(texFile);
          if (fs.existsSync(outputFile)) fs.unlinkSync(outputFile);
        } catch (cleanupError) {
          console.warn('Cleanup error:', cleanupError);
        }
      } else {
        res.status(500).json({ 
          error: `${format.toUpperCase()} generation failed`
        });
      }
    });

  } catch (err) {
    res.status(500).json({ 
      error: 'Server error', 
      details: err.message 
    });
  }
});

