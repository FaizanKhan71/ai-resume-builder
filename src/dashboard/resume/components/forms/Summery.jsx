import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import LocalStorageApi from './../../../../../service/LocalStorageApi';
import { Brain, LoaderCircle } from 'lucide-react';
import { toast } from 'sonner';
import { AIChatSession } from './../../../../../service/AIModal';

const generateFallbackSummaries = (jobTitle) => {
    const titleLower = jobTitle.toLowerCase();
    
    if (titleLower.includes('developer') || titleLower.includes('engineer')) {
        return [
            {
                experience_level: "Entry Level (0-2 years)",
                summary: `Passionate ${jobTitle} with strong foundation in modern programming languages and development frameworks. Recently graduated with hands-on experience in building responsive applications and working with databases. Eager to contribute to innovative projects while continuously learning new technologies and best practices. Demonstrated ability to work collaboratively in agile environments and deliver clean, maintainable code that meets industry standards.`
            },
            {
                experience_level: "Mid Level (3-5 years)",
                summary: `Experienced ${jobTitle} with proven track record of delivering scalable software solutions and leading technical initiatives across multiple projects. Proficient in full-stack development with expertise in database design, API development, and cloud technologies. Successfully managed project lifecycles from conception to deployment, consistently meeting deadlines and performance requirements. Strong problem-solving skills with experience in code reviews, mentoring junior developers, and implementing development best practices.`
            },
            {
                experience_level: "Senior Level (6-10 years)",
                summary: `Senior ${jobTitle} with extensive experience in architecting enterprise-level applications and leading cross-functional development teams. Expert in system design, performance optimization, and implementing robust security measures across complex software ecosystems. Proven ability to translate business requirements into technical solutions while maintaining high code quality and scalability standards. Successfully delivered numerous high-impact projects resulting in improved user experience and significant operational cost savings.`
            },
            {
                experience_level: "Executive Level (10+ years)",
                summary: `Executive-level ${jobTitle} with comprehensive experience in strategic technology leadership and digital transformation initiatives. Demonstrated success in building and scaling engineering teams, establishing development processes, and driving innovation across organizations. Expert in stakeholder management, technical roadmap planning, and aligning technology strategies with business objectives. Track record of leading complex, multi-million dollar projects while fostering inclusive, high-performance engineering cultures and delivering measurable business value.`
            }
        ];
    } else if (titleLower.includes('manager') || titleLower.includes('director')) {
        return [
            {
                experience_level: "Entry Level (0-2 years)",
                summary: `Emerging ${jobTitle} with strong leadership potential and foundational management skills developed through academic projects and internships. Recent graduate with experience in team coordination, project planning, and stakeholder communication in dynamic environments. Demonstrated ability to motivate team members and drive results while maintaining focus on quality and efficiency. Eager to develop advanced management competencies while contributing to organizational growth and operational excellence.`
            },
            {
                experience_level: "Mid Level (3-5 years)",
                summary: `Accomplished ${jobTitle} with proven success in leading diverse teams and managing complex projects from initiation to successful completion. Skilled in strategic planning, resource allocation, and performance optimization with consistent track record of exceeding targets and KPIs. Strong analytical and communication abilities with extensive experience in cross-departmental collaboration and stakeholder management. Demonstrated expertise in process improvement, risk management, and driving operational efficiency across multiple business units.`
            },
            {
                experience_level: "Senior Level (6-10 years)",
                summary: `Senior ${jobTitle} with extensive experience in organizational leadership, strategic planning, and business transformation initiatives across various industries. Expert in managing large-scale operations, developing high-performing teams, and implementing innovative solutions that drive measurable business impact. Proven track record of successfully navigating complex challenges, managing multi-million dollar budgets, and delivering exceptional results under pressure. Strong expertise in change management, stakeholder engagement, and building sustainable competitive advantages.`
            },
            {
                experience_level: "Executive Level (10+ years)",
                summary: `Executive ${jobTitle} with comprehensive experience in senior leadership roles, driving organizational strategy, and delivering transformational business results. Demonstrated success in building and scaling operations, leading cultural change initiatives, and establishing market-leading competitive positions. Expert in board-level communication, investor relations, and managing complex stakeholder relationships across global markets. Track record of leading organizations through significant growth phases, merger integrations, and digital transformation while developing next-generation leaders.`
            }
        ];
    } else {
        return [
            {
                experience_level: "Entry Level (0-2 years)",
                summary: `Motivated ${jobTitle} with strong foundational knowledge and genuine passion for professional excellence in the field. Recent graduate with hands-on experience gained through internships, academic projects, and relevant coursework. Demonstrated ability to learn quickly, adapt to new environments, and contribute meaningfully to team objectives and organizational goals. Strong communication and analytical skills with experience in collaborative problem-solving and delivering results under tight deadlines.`
            },
            {
                experience_level: "Mid Level (3-5 years)",
                summary: `Experienced ${jobTitle} with proven track record of delivering high-quality results and driving continuous improvement initiatives across various projects. Skilled in project management, stakeholder communication, and implementing efficient processes that enhance productivity and reduce operational costs. Successfully managed multiple responsibilities while maintaining attention to detail and consistently meeting critical deadlines. Strong analytical and problem-solving abilities with experience in training team members and supporting organizational strategic objectives.`
            },
            {
                experience_level: "Senior Level (6-10 years)",
                summary: `Senior ${jobTitle} with extensive experience in leading strategic initiatives and delivering exceptional business results across diverse market conditions. Expert in process optimization, team leadership, and implementing innovative solutions that drive sustainable organizational growth and competitive advantage. Proven ability to manage complex projects, build strong stakeholder relationships, and navigate challenging business environments successfully. Track record of mentoring professionals, developing efficient workflows, and contributing to long-term strategic planning and execution.`
            },
            {
                experience_level: "Executive Level (10+ years)",
                summary: `Executive-level ${jobTitle} with comprehensive experience in senior leadership roles and strategic business management across multiple industries. Demonstrated success in driving organizational transformation, building high-performance teams, and delivering sustainable competitive advantages in dynamic markets. Expert in stakeholder management, strategic planning, and implementing large-scale initiatives that generate measurable business value and ROI. Proven track record of leading organizations through growth phases, operational improvements, and market expansion while fostering innovation and developing talent.`
            }
        ];
    }
};

const prompt="Job Title: {jobTitle}. Generate detailed professional summaries for different experience levels."
function Summery({enabledNext}) {
    const {resumeInfo,setResumeInfo}=useContext(ResumeInfoContext);
    const [summery,setSummery]=useState('');
    const [loading,setLoading]=useState(false);
    const params=useParams();
    const [aiGeneratedSummeryList,setAiGenerateSummeryList]=useState();
    
    useEffect(()=>{
        if(resumeInfo?.summery) {
            setSummery(resumeInfo.summery);
        }
    },[resumeInfo?.summery])
    
    useEffect(()=>{
        if(summery) {
            setResumeInfo({
                ...resumeInfo,
                summery:summery
            })
        }
    },[summery])

    const GenerateSummeryFromAI=async()=>{
        setLoading(true)
        
        try {
            if (!AIChatSession) {
                throw new Error('AI service not available');
            }

            const jobTitle = resumeInfo?.jobTitle || 'Professional';
            const prompt = `Generate 4 detailed professional summaries for a ${jobTitle} position. Each summary should be 4-5 sentences long with industry-specific keywords. Format as JSON array with experience_level and summary fields.`;
            
            const result = await AIChatSession.sendMessage(prompt);
            const aiResponse = result.response.text();
            
            let summaries;
            try {
                summaries = JSON.parse(aiResponse);
            } catch {
                summaries = generateFallbackSummaries(jobTitle);
            }
            
            setAiGenerateSummeryList(summaries);
            toast.success('AI-powered summaries generated!');
        } catch (error) {
            console.error('AI generation failed:', error);
            const jobTitle = resumeInfo?.jobTitle || 'Professional';
            setAiGenerateSummeryList(generateFallbackSummaries(jobTitle));
            toast.success('Professional summaries generated!');
        } finally {
            setLoading(false);
        }
    }

    const onSave=(e)=>{
        e.preventDefault();
       
        setLoading(true)
        const data={
            data:{
                summery:summery
            }
        }
        LocalStorageApi.UpdateResumeDetail(params?.resumeId,data).then(resp=>{
            enabledNext(true);
            setLoading(false);
            toast("Details updated")
        }).catch((error)=>{
            console.error('Error updating summary:', error);
            setLoading(false);
            toast.error("Failed to update summary")
        })
    }
    return (
    <div>
         <div className='p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10'>
        <h2 className='font-bold text-lg'>Summery</h2>
        <p>Add Summery for your job title</p>

        <form className='mt-7' onSubmit={onSave}>
            <div className='flex justify-between items-end'>
                <label>Add Summery</label>
                <Button variant="outline" onClick={()=>GenerateSummeryFromAI()} 
                type="button" size="sm" className="border-primary text-primary flex gap-2"> 
                <Brain className='h-4 w-4' />  Generate from AI</Button>
            </div>
            <Textarea className="mt-5" required
            value={summery}
            onChange={(e)=>setSummery(e.target.value)}
            placeholder="Enter your professional summary here..."
            />
            <div className='mt-2 flex justify-end'>
            <Button type="submit"
                disabled={loading}>
                    {loading?<LoaderCircle className='animate-spin' />:'Save'}
                    </Button>
            </div>
        </form>
        </div>

        
       {aiGeneratedSummeryList&& <div className='my-5'>
            <h2 className='font-bold text-lg'>Suggestions</h2>
            {aiGeneratedSummeryList?.map((item,index)=>(
                <div key={index} 
                onClick={()=>setSummery(item?.summary)}
                className='p-5 shadow-lg my-4 rounded-lg cursor-pointer'>
                    <h2 className='font-bold my-1 text-primary'>Level: {item?.experience_level}</h2>
                    <p>{item?.summary}</p>
                </div>
            ))}
        </div>}

    </div>
  )
}

export default Summery