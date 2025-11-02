import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import LocalStorageApi from './../../../../../service/LocalStorageApi';
import { Brain, LoaderCircle } from 'lucide-react';
import { toast } from 'sonner';
import { AIChatSession } from './../../../../../service/AIModal';

const prompt="Job Title: {jobTitle}. Generate 3 professional summaries for different experience levels (Fresher, Mid Level, Senior) in 3-4 lines each. Format as JSON array with fields: experience_level and summary."
function Summery({enabledNext}) {
    const {resumeInfo,setResumeInfo}=useContext(ResumeInfoContext);
    const [summery,setSummery]=useState();
    const [loading,setLoading]=useState(false);
    const params=useParams();
    const [aiGeneratedSummeryList,setAiGenerateSummeryList]=useState();
    useEffect(()=>{
        summery&&setResumeInfo({
            ...resumeInfo,
            summery:summery
        })
    },[summery])

    const GenerateSummeryFromAI=async()=>{
        setLoading(true)
        
        // Generate smart suggestions based on job title
        const jobTitle = resumeInfo?.jobTitle || 'Professional';
        
        setTimeout(() => {
            setAiGenerateSummeryList([
                {
                    experience_level: "Fresher",
                    summary: `Motivated ${jobTitle} with strong foundational knowledge and eagerness to learn. Committed to delivering quality work and contributing to team success through dedication and attention to detail.`
                },
                {
                    experience_level: "Mid Level",
                    summary: `Experienced ${jobTitle} with proven track record of successful project delivery and team collaboration. Skilled in problem-solving and driving results in fast-paced environments.`
                },
                {
                    experience_level: "Senior",
                    summary: `Senior ${jobTitle} with extensive experience in strategic planning, team leadership, and organizational growth. Expert in driving innovation and mentoring teams to achieve exceptional results.`
                }
            ]);
            toast.success('Professional summaries generated!');
            setLoading(false);
        }, 1000);
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
                defaultValue={summery?summery:resumeInfo?.summery}
            onChange={(e)=>setSummery(e.target.value)}
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