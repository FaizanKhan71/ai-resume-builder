import React, { useContext, useState } from 'react'
import { Button } from '@/components/ui/button'
import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import { useParams } from 'react-router-dom'
import LocalStorageApi from './../../../../../service/LocalStorageApi'
import { toast } from 'sonner'
import { LoaderCircle, Check } from 'lucide-react'

const resumeTemplates = [
  {
    id: 1,
    name: 'Modern Professional',
    preview: '/templates/modern.jpg',
    colors: { primary: '#2563eb', secondary: '#f1f5f9' },
    style: 'modern'
  },
  {
    id: 2,
    name: 'Classic Elegant',
    preview: '/templates/classic.jpg',
    colors: { primary: '#1f2937', secondary: '#f9fafb' },
    style: 'classic'
  },
  {
    id: 3,
    name: 'Creative Bold',
    preview: '/templates/creative.jpg',
    colors: { primary: '#7c3aed', secondary: '#faf5ff' },
    style: 'creative'
  },
  {
    id: 4,
    name: 'Minimalist Clean',
    preview: '/templates/minimal.jpg',
    colors: { primary: '#059669', secondary: '#f0fdf4' },
    style: 'minimal'
  },
  {
    id: 5,
    name: 'Corporate Blue',
    preview: '/templates/corporate.jpg',
    colors: { primary: '#1e40af', secondary: '#eff6ff' },
    style: 'corporate'
  },
  {
    id: 6,
    name: 'Tech Focused',
    preview: '/templates/tech.jpg',
    colors: { primary: '#dc2626', secondary: '#fef2f2' },
    style: 'tech'
  }
];

function Templates({ enabledNext }) {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const [selectedTemplate, setSelectedTemplate] = useState(resumeInfo?.template || 1);
  const [loading, setLoading] = useState(false);
  const params = useParams();

  const handleTemplateSelect = (template) => {
    setSelectedTemplate(template.id);
    setResumeInfo({
      ...resumeInfo,
      template: template.id,
      templateStyle: template.style,
      themeColor: template.colors.primary
    });
  };

  const onSave = () => {
    setLoading(true);
    const data = {
      data: {
        template: selectedTemplate,
        templateStyle: resumeTemplates.find(t => t.id === selectedTemplate)?.style,
        themeColor: resumeTemplates.find(t => t.id === selectedTemplate)?.colors.primary
      }
    };

    LocalStorageApi.UpdateResumeDetail(params?.resumeId, data).then(resp => {
      enabledNext(true);
      setLoading(false);
      toast('Template updated successfully!');
    }).catch((error) => {
      console.error('Error updating template:', error);
      setLoading(false);
      toast.error('Failed to update template');
    });
  };

  return (
    <div className='p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10'>
      <h2 className='font-bold text-lg'>Choose Resume Template</h2>
      <p>Select a professional template that matches your style</p>

      <div className='grid grid-cols-2 md:grid-cols-3 gap-4 mt-5'>
        {resumeTemplates.map((template) => (
          <div
            key={template.id}
            onClick={() => handleTemplateSelect(template)}
            className={`relative border-2 rounded-lg p-3 cursor-pointer transition-all hover:shadow-lg ${
              selectedTemplate === template.id 
                ? 'border-primary bg-primary/5' 
                : 'border-gray-200 hover:border-primary/50'
            }`}
          >
            {selectedTemplate === template.id && (
              <div className='absolute top-2 right-2 bg-primary text-white rounded-full p-1'>
                <Check className='h-4 w-4' />
              </div>
            )}
            
            <div 
              className='w-full h-32 rounded-md mb-3 flex items-center justify-center text-white font-semibold'
              style={{ backgroundColor: template.colors.primary }}
            >
              <div className='text-center'>
                <div className='text-sm'>Resume</div>
                <div className='text-xs opacity-80'>Preview</div>
              </div>
            </div>
            
            <h3 className='font-semibold text-sm text-center'>{template.name}</h3>
            <div className='flex justify-center gap-1 mt-2'>
              <div 
                className='w-3 h-3 rounded-full' 
                style={{ backgroundColor: template.colors.primary }}
              ></div>
              <div 
                className='w-3 h-3 rounded-full' 
                style={{ backgroundColor: template.colors.secondary }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <div className='mt-6 flex justify-end'>
        <Button 
          onClick={onSave} 
          disabled={loading}
          className='flex gap-2'
        >
          {loading ? <LoaderCircle className='animate-spin h-4 w-4' /> : 'Save Template'}
        </Button>
      </div>
    </div>
  )
}

export default Templates