import React from 'react'

function SkillsPreview({resumeInfo}) {
  const getTemplateStyles = () => {
    const template = resumeInfo?.template || 1
    
    const styles = {
      1: { // Modern
        sectionTitle: 'text-lg font-bold mb-3',
        skillsGrid: 'grid grid-cols-2 gap-3',
        skillItem: 'flex justify-between items-center',
        skillName: 'text-sm font-medium',
        skillRating: 'flex gap-1'
      },
      2: { // Classic
        sectionTitle: 'text-xl font-serif font-bold mb-4 text-center',
        skillsGrid: 'space-y-3',
        skillItem: 'text-center',
        skillName: 'text-base font-serif',
        skillRating: 'flex justify-center gap-1 mt-1'
      },
      3: { // Creative
        sectionTitle: 'text-lg font-black uppercase tracking-wider mb-2',
        skillsGrid: 'flex flex-wrap gap-2',
        skillItem: 'bg-purple-100 px-3 py-1 rounded-full',
        skillName: 'text-sm font-bold',
        skillRating: 'hidden'
      },
      4: { // Minimal
        sectionTitle: 'text-sm font-light uppercase tracking-widest mb-6',
        skillsGrid: 'grid grid-cols-3 gap-6',
        skillItem: 'text-center',
        skillName: 'text-xs uppercase tracking-wide',
        skillRating: 'mt-2 flex justify-center gap-1'
      },
      5: { // Corporate
        sectionTitle: 'text-lg font-semibold mb-3 border-b-2 pb-1',
        skillsGrid: 'grid grid-cols-2 gap-4',
        skillItem: 'flex justify-between items-center border-b pb-2',
        skillName: 'text-sm font-medium',
        skillRating: 'flex gap-1'
      },
      6: { // Tech
        sectionTitle: 'text-base font-mono font-bold mb-3 text-green-400',
        skillsGrid: 'space-y-2',
        skillItem: 'flex justify-between items-center font-mono',
        skillName: 'text-sm text-green-300',
        skillRating: 'flex gap-1'
      }
    }
    
    return styles[template] || styles[1]
  }

  const renderStars = (rating, template) => {
    const stars = []
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <div
          key={i}
          className={`w-3 h-3 rounded-full ${
            i <= rating 
              ? template === 6 ? 'bg-green-400' : 'bg-current'
              : template === 6 ? 'bg-gray-600' : 'bg-gray-300'
          }`}
          style={i <= rating ? { color: resumeInfo?.themeColor } : {}}
        />
      )
    }
    return stars
  }

  const styles = getTemplateStyles()
  
  if (!resumeInfo?.skills?.length) return null

  return (
    <div className='my-6'>
      <h2 className={styles.sectionTitle} style={{color:resumeInfo?.themeColor}}>
        {resumeInfo?.template === 6 ? '> SKILLS' : 
         resumeInfo?.template === 4 ? 'SKILLS' : 'TECHNICAL SKILLS'}
      </h2>
      
      {resumeInfo?.template !== 4 && resumeInfo?.template !== 3 && (
        <hr style={{borderColor:resumeInfo?.themeColor}} />
      )}

      <div className={styles.skillsGrid}>
        {resumeInfo?.skills?.map((skill, index) => (
          <div key={index} className={styles.skillItem}>
            <span className={styles.skillName} style={{color: resumeInfo?.themeColor}}>
              {skill.name}
            </span>
            <div className={styles.skillRating}>
              {renderStars(skill.rating, resumeInfo?.template)}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SkillsPreview