import React, { useState } from 'react'
import PersonalDetail from './forms/PersonalDetail'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight, Home, LayoutGrid } from 'lucide-react'
import Summery from './forms/Summery';
import Experience from './forms/Experience';
import Education from './forms/Education';
import Skills from './forms/Skills';
import Templates from './forms/Templates';
import Photo from './forms/Photo';
import { Link, Navigate, useParams } from 'react-router-dom';
import ThemeColor from './ThemeColor';

function FormSection() {
  const [activeFormIndex,setActiveFormIndex]=useState(1);
  const [enableNext,setEnableNext]=useState(true);
  const {resumeId}=useParams();
  return (
    <div>
        <div className='flex justify-between items-center'>
          <div className='flex gap-5'>
            <Link to={"/dashboard"}>
          <Button><Home/></Button>
          </Link>
          <ThemeColor/>
         
          </div>
          <div className='flex gap-2'>
            {activeFormIndex>1
            &&<Button size="sm" 
            onClick={()=>{
                if(activeFormIndex > 1) {
                    setActiveFormIndex(activeFormIndex-1)
                }
            }}> <ArrowLeft/> </Button> }
            <Button 
            disabled={!enableNext || activeFormIndex >= 8}
            className="flex gap-2" size="sm"
            onClick={()=>{
                if(activeFormIndex < 8) {
                    setActiveFormIndex(activeFormIndex+1)
                }
            }}
            > Next 
            <ArrowRight/> </Button>
          </div>
        </div>
        {/* Personal Detail  */}
        {activeFormIndex==1?  
        <PersonalDetail enabledNext={(v)=>setEnableNext(v)} />
        :activeFormIndex==2?
        <Templates enabledNext={(v)=>setEnableNext(v)} />
        :activeFormIndex==3?
        <Photo enabledNext={(v)=>setEnableNext(v)} />
        :activeFormIndex==4?
              <Summery  enabledNext={(v)=>setEnableNext(v)} />
        :activeFormIndex==5?
          <Experience />  
          :activeFormIndex==6?
          <Education/>
          :activeFormIndex==7?
          <Skills/>
          :activeFormIndex==8?
          <Navigate to={'/my-resume/'+resumeId+"/view"}/>
              
        :null
          }
        

      {/* Experience  */}

      {/* Educational Detail  */}

      {/* Skills  */}

    </div>
  )
}

export default FormSection