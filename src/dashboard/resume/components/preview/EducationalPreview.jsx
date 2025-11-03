import React from 'react'

function EducationalPreview({resumeInfo}) {
  const getTemplateStyles = () => {
    const template = resumeInfo?.template || 1
    
    const styles = {
      1: { sectionTitle: 'text-lg font-bold mb-3', schoolName: 'text-base font-semibold', degree: 'text-sm text-gray-600 mb-2' },
      2: { sectionTitle: 'text-xl font-serif font-bold mb-4 text-center', schoolName: 'text-lg font-serif font-bold', degree: 'text-base italic mb-3' },
      3: { sectionTitle: 'text-lg font-black uppercase tracking-wider mb-2', schoolName: 'text-base font-bold uppercase', degree: 'text-sm font-semibold mb-2' },
      4: { sectionTitle: 'text-sm font-light uppercase tracking-widest mb-6', schoolName: 'text-sm font-normal uppercase tracking-wide', degree: 'text-xs uppercase tracking-wide mb-4' },
      5: { sectionTitle: 'text-lg font-semibold mb-3 border-b-2 pb-1', schoolName: 'text-base font-semibold', degree: 'text-sm mb-2' },
      6: { sectionTitle: 'text-base font-mono font-bold mb-3 text-green-400', schoolName: 'text-sm font-mono font-bold text-green-300', degree: 'text-xs font-mono text-green-200 mb-2' }
    }
    
    return styles[template] || styles[1]
  }

  const styles = getTemplateStyles()
  
  if (!resumeInfo?.education?.length) return null

  return (
    <div className='my-6'>
        <h2 className={styles.sectionTitle} style={{color:resumeInfo?.themeColor}}>
          {resumeInfo?.template === 6 ? '> EDUCATION' : 'EDUCATION'}
        </h2>
        
        {resumeInfo?.template !== 4 && <hr style={{borderColor:resumeInfo?.themeColor}} />}

        {resumeInfo?.education?.map((education,index)=>(
            <div key={index} className='my-5'>
                <h3 className={styles.schoolName} style={{color:resumeInfo?.themeColor}}>
                  {education.universityName}
                </h3>
                
                <div className={styles.degree}>
                  {education?.degree} in {education?.major}
                  <span className='float-right'>
                    {education?.startDate} - {education?.endDate}
                  </span>
                </div>
                
                {education?.description && (
                  <p className='text-sm leading-relaxed'>
                      {education?.description}
                  </p>
                )}
            </div>
        ))}
    </div>
  )
}

export default EducationalPreview