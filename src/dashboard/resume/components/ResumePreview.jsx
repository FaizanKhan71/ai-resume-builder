import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import React, { useContext } from 'react'
import PersonalDetailPreview from './preview/PersonalDetailPreview'
import SummeryPreview from './preview/SummeryPreview'
import ExperiencePreview from './preview/ExperiencePreview'
import EducationalPreview from './preview/EducationalPreview'
import SkillsPreview from './preview/SkillsPreview'

function ResumePreview() {
    const {resumeInfo,setResumeInfo}=useContext(ResumeInfoContext)
    
    const getTemplateStyles = () => {
        const template = resumeInfo?.template || 1
        
        const templates = {
            1: { container: 'font-sans bg-white', padding: 'p-14', border: 'border-t-[20px]' },
            2: { container: 'font-serif bg-white', padding: 'p-16', border: 'border-4 border-double' },
            3: { container: 'font-sans bg-gradient-to-br from-purple-50 to-white', padding: 'p-10', border: 'border-l-8' },
            4: { container: 'font-mono bg-white', padding: 'p-20', border: 'border-t-2' },
            5: { container: 'font-sans bg-blue-50', padding: 'p-12', border: 'border-l-8 border-blue-600' },
            6: { container: 'font-mono bg-gray-900 text-green-400', padding: 'p-8', border: 'border border-green-400' }
        }
        
        return templates[template] || templates[1]
    }

    const styles = getTemplateStyles()

    return (
        <div className={`shadow-lg h-full ${styles.container} ${styles.padding} ${styles.border}`}
        style={{
            borderColor: resumeInfo?.template === 6 ? '#4ade80' : resumeInfo?.themeColor
        }}>
            {/* Personal Detail  */}
            <PersonalDetailPreview resumeInfo={resumeInfo} />
            
            {/* Summary - Always show if exists */}
            {resumeInfo?.summery && <SummeryPreview resumeInfo={resumeInfo} />}
            
            {/* Professional Experience  */}
            {resumeInfo?.Experience?.length > 0 && <ExperiencePreview resumeInfo={resumeInfo} />}
            
            {/* Educational  */}
            {resumeInfo?.education?.length > 0 && <EducationalPreview resumeInfo={resumeInfo} />}
            
            {/* Skills  */}
            {resumeInfo?.skills?.length > 0 && <SkillsPreview resumeInfo={resumeInfo}/>}
        </div>
    )
}

export default ResumePreview