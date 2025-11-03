import React from 'react'

function SummeryPreview({resumeInfo}) {
  const getTemplateStyles = () => {
    const template = resumeInfo?.template || 1
    
    const styles = {
      1: 'text-sm leading-relaxed text-justify', // Modern
      2: 'text-base leading-loose text-center font-serif italic', // Classic
      3: 'text-sm leading-tight text-left font-semibold', // Creative
      4: 'text-xs leading-loose text-center font-light tracking-wide', // Minimal
      5: 'text-sm leading-normal text-left', // Corporate
      6: 'text-xs font-mono leading-relaxed text-left text-green-300' // Tech
    }
    
    return styles[template] || styles[1]
  }

  if (!resumeInfo?.summery || resumeInfo.summery.trim() === '') return null

  return (
    <div className='mb-6'>
      <h3 className='font-bold text-sm mb-2' style={{color: resumeInfo?.themeColor}}>
        {resumeInfo?.template === 2 ? 'PROFESSIONAL SUMMARY' : 
         resumeInfo?.template === 4 ? 'OVERVIEW' :
         resumeInfo?.template === 6 ? '> SUMMARY' : 'SUMMARY'}
      </h3>
      <hr className='mb-3' style={{borderColor: resumeInfo?.themeColor}} />
      <p className={getTemplateStyles()}>
        {resumeInfo?.summery}
      </p>
    </div>
  )
}

export default SummeryPreview