import React from 'react'

function PersonalDetailPreview({resumeInfo}) {
  return (
    <div>
        <div className='flex items-center gap-4 mb-4'>
          {resumeInfo?.photo && (
            <img 
              src={resumeInfo.photo} 
              alt="Profile" 
              className='w-20 h-20 rounded-full object-cover border-2'
              style={{ borderColor: resumeInfo?.themeColor }}
            />
          )}
          <div className='flex-1'>
            <h2 className='font-bold text-xl text-center'
            style={{
                color:resumeInfo?.themeColor
            }}
            >
                {resumeInfo?.firstName} {resumeInfo?.lastName}</h2>
            <h2 className='text-center text-sm font-medium'
           >{resumeInfo?.jobTitle}</h2>
           <h2 className='text-center font-normal text-xs'
            style={{
                color:resumeInfo?.themeColor
            }}>{resumeInfo?.address}</h2>
          </div>
        </div>

        <div className='flex justify-between'>
            <h2 className='font-normal text-xs'
             style={{
                color:resumeInfo?.themeColor
            }}>{resumeInfo?.phone}</h2>
            <h2 className='font-normal text-xs'
             style={{
                color:resumeInfo?.themeColor
            }}>{resumeInfo?.email}</h2>

        </div>
        <hr className='border-[1.5px] my-2'
        style={{
            borderColor:resumeInfo?.themeColor
        }}
        />
    </div>
  )
}

export default PersonalDetailPreview