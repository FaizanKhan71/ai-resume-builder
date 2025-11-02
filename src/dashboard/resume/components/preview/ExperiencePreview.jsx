import React from 'react'

function ExperiencePreview({resumeInfo}) {
  return (
    <div className='my-6'>
        <h2 className='text-center font-bold text-sm mb-2'
        style={{
            color:resumeInfo?.themeColor
        }}
        >Professional Experience</h2>
        <hr style={{
            borderColor:resumeInfo?.themeColor
        }} />

        {resumeInfo?.Experience?.length > 0 ? resumeInfo.Experience.map((experience,index)=>(
            <div key={index} className='my-5'>
                <h2 className='text-sm font-bold'
                 style={{
                    color:resumeInfo?.themeColor
                }}>{experience?.title || 'No Title'}</h2>
                <h2 className='text-xs flex justify-between'>
                    {experience?.companyName || 'Company'}, 
                    {experience?.city || 'City'}, 
                    {experience?.state || 'State'}
                    <span>{experience?.startDate || 'Start'} To {experience?.currentlyWorking?'Present':(experience?.endDate || 'End')} </span>
                </h2>
                {experience?.workSummery && (
                    <div className='text-xs my-2' dangerouslySetInnerHTML={{__html:experience.workSummery}} />
                )}
            </div>
        )) : (
            <p className='text-xs text-gray-500'>No experience added yet</p>
        )}
    </div>
  )
}

export default ExperiencePreview