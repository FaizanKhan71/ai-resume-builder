import React from 'react'

function ExperiencePreview({resumeInfo}) {
  const getTemplateStyles = () => {
    const template = resumeInfo?.template || 1
    
    const styles = {
      1: { sectionTitle: 'text-lg font-bold mb-3', jobTitle: 'text-base font-semibold', company: 'text-sm text-gray-600 mb-2' },
      2: { sectionTitle: 'text-xl font-serif font-bold mb-4 text-center', jobTitle: 'text-lg font-serif font-bold', company: 'text-base italic mb-3' },
      3: { sectionTitle: 'text-lg font-black uppercase tracking-wider mb-2', jobTitle: 'text-base font-bold uppercase', company: 'text-sm font-semibold mb-2' },
      4: { sectionTitle: 'text-sm font-light uppercase tracking-widest mb-6', jobTitle: 'text-sm font-normal uppercase tracking-wide', company: 'text-xs uppercase tracking-wide mb-4' },
      5: { sectionTitle: 'text-lg font-semibold mb-3 border-b-2 pb-1', jobTitle: 'text-base font-semibold', company: 'text-sm mb-2' },
      6: { sectionTitle: 'text-base font-mono font-bold mb-3 text-green-400', jobTitle: 'text-sm font-mono font-bold text-green-300', company: 'text-xs font-mono text-green-200 mb-2' }
    }
    
    return styles[template] || styles[1]
  }

  const styles = getTemplateStyles()
  
  if (!resumeInfo?.Experience?.length) return null

  return (
    <div className='my-6'>
      <h2 className={styles.sectionTitle} style={{color:resumeInfo?.themeColor}}>
        {resumeInfo?.template === 6 ? '> EXPERIENCE' : 'PROFESSIONAL EXPERIENCE'}
      </h2>
      
      {resumeInfo?.template !== 4 && <hr style={{borderColor:resumeInfo?.themeColor}} />}

      {resumeInfo?.Experience?.map((experience,index)=>(
          <div key={index} className='my-5'>
              <h3 className={styles.jobTitle} style={{color:resumeInfo?.themeColor}}>
                {experience?.title || 'No Title'}
              </h3>
              
              <div className={styles.company}>
                {experience?.companyName}, {experience?.city}, {experience?.state}
                <span className='float-right'>
                  {experience?.startDate} - {experience?.currentlyWorking?'Present':experience?.endDate}
                </span>
              </div>
              
              {experience?.workSummery && (
                <div className='text-sm leading-relaxed' dangerouslySetInnerHTML={{__html:experience.workSummery}} />
              )}
          </div>
      ))}
    </div>
  )
}

export default ExperiencePreview