import React from 'react'

function PersonalDetailPreview({resumeInfo}) {
  const getTemplateLayout = () => {
    const template = resumeInfo?.template || 1
    
    const layouts = {
      1: { // Modern Professional
        nameClass: 'text-3xl font-bold text-center mb-2',
        jobClass: 'text-lg text-center text-gray-600 mb-4',
        contactClass: 'flex justify-center gap-6 text-sm',
        photoClass: 'w-24 h-24 rounded-full mx-auto mb-4',
        dividerClass: 'border-t-2 mt-4'
      },
      2: { // Classic Elegant
        nameClass: 'text-4xl font-serif text-center mb-1 tracking-wide',
        jobClass: 'text-xl text-center italic mb-6',
        contactClass: 'text-center space-y-1 text-sm',
        photoClass: 'w-28 h-28 rounded-lg mx-auto mb-6 border-4',
        dividerClass: 'border-t-4 border-double mt-6'
      },
      3: { // Creative Bold
        nameClass: 'text-2xl font-black text-left mb-1 uppercase tracking-wider',
        jobClass: 'text-lg text-left font-semibold mb-3',
        contactClass: 'flex flex-wrap gap-4 text-sm',
        photoClass: 'w-20 h-20 rounded-xl float-right ml-4',
        dividerClass: 'border-t-4 border-gradient mt-4'
      },
      4: { // Minimalist Clean
        nameClass: 'text-2xl font-light text-center mb-8 tracking-widest uppercase',
        jobClass: 'text-base text-center font-normal mb-8',
        contactClass: 'flex justify-center gap-8 text-xs uppercase tracking-wide',
        photoClass: 'w-16 h-16 rounded-none mx-auto mb-8',
        dividerClass: 'border-t mt-8'
      },
      5: { // Corporate Blue
        nameClass: 'text-3xl font-semibold text-left mb-2',
        jobClass: 'text-lg text-left mb-4 font-medium',
        contactClass: 'grid grid-cols-2 gap-2 text-sm',
        photoClass: 'w-24 h-24 rounded-sm float-right ml-6',
        dividerClass: 'border-t-3 mt-4'
      },
      6: { // Tech Focused
        nameClass: 'text-2xl font-mono text-left mb-1 text-green-400',
        jobClass: 'text-base text-left mb-3 text-green-300',
        contactClass: 'flex gap-4 text-xs font-mono',
        photoClass: 'w-20 h-20 rounded-none border border-green-400 float-right ml-4',
        dividerClass: 'border-t border-green-400 mt-4'
      }
    }
    
    return layouts[template] || layouts[1]
  }

  const layout = getTemplateLayout()

  return (
    <div>
        {resumeInfo?.photo && (
          <img 
            src={resumeInfo.photo} 
            alt="Profile" 
            className={layout.photoClass}
            style={{ borderColor: resumeInfo?.themeColor }}
          />
        )}
        
        <h1 className={layout.nameClass}
        style={{
            color:resumeInfo?.themeColor
        }}
        >
            {resumeInfo?.firstName} {resumeInfo?.lastName}
        </h1>
        
        <h2 className={layout.jobClass}>
            {resumeInfo?.jobTitle}
        </h2>
        
        <div className={layout.contactClass}>
            <span style={{color:resumeInfo?.themeColor}}>{resumeInfo?.phone}</span>
            <span style={{color:resumeInfo?.themeColor}}>{resumeInfo?.email}</span>
            <span style={{color:resumeInfo?.themeColor}}>{resumeInfo?.address}</span>
        </div>
        
        <hr className={layout.dividerClass}
        style={{
            borderColor:resumeInfo?.themeColor
        }}
        />
    </div>
  )
}

export default PersonalDetailPreview