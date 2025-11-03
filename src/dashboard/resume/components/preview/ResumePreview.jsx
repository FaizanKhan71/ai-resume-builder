import React, { useContext } from 'react'
import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import PersonalDetailPreview from './PersonalDetailPreview'
import SummeryPreview from './SummeryPreview'
import ExperiencePreview from './ExperiencePreview'
import EducationalPreview from './EducationalPreview'
import SkillsPreview from './SkillsPreview'

function ResumePreview() {
  const { resumeInfo } = useContext(ResumeInfoContext)
  
  const getTemplateStyles = () => {
    const template = resumeInfo?.template || 1
    
    const templates = {
      1: { // Modern Professional
        container: 'font-sans bg-white',
        layout: 'max-w-2xl mx-auto p-8',
        spacing: 'space-y-6'
      },
      2: { // Classic Elegant  
        container: 'font-serif bg-white',
        layout: 'max-w-2xl mx-auto p-10 border-2 border-gray-300',
        spacing: 'space-y-8'
      },
      3: { // Creative Bold
        container: 'font-sans bg-gradient-to-br from-purple-50 to-white',
        layout: 'max-w-2xl mx-auto p-6',
        spacing: 'space-y-4'
      },
      4: { // Minimalist Clean
        container: 'font-mono bg-white',
        layout: 'max-w-xl mx-auto p-12',
        spacing: 'space-y-10'
      },
      5: { // Corporate Blue
        container: 'font-sans bg-blue-50',
        layout: 'max-w-2xl mx-auto p-8 border-l-8 border-blue-600',
        spacing: 'space-y-6'
      },
      6: { // Tech Focused
        container: 'font-mono bg-gray-900 text-green-400',
        layout: 'max-w-2xl mx-auto p-6 border border-green-400',
        spacing: 'space-y-4'
      }
    }
    
    return templates[template] || templates[1]
  }

  const styles = getTemplateStyles()

  return (
    <div className={`${styles.container} min-h-screen`}>
      <div className={`${styles.layout} ${styles.spacing}`}>
        <PersonalDetailPreview resumeInfo={resumeInfo} />
        <SummeryPreview resumeInfo={resumeInfo} />
        <ExperiencePreview resumeInfo={resumeInfo} />
        <EducationalPreview resumeInfo={resumeInfo} />
        <SkillsPreview resumeInfo={resumeInfo} />
      </div>
    </div>
  )
}

export default ResumePreview