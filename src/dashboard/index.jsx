import React, { useEffect, useState } from 'react'
import AddResume from './components/AddResume'
import { useUser } from '@clerk/clerk-react'
import { useNavigate } from 'react-router-dom'
import LocalStorageApi from './../../service/LocalStorageApi';
import ResumeCardItem from './components/ResumeCardItem';

function Dashboard() {

  const {user}=useUser();
  const navigate = useNavigate();
  const [resumeList,setResumeList]=useState([]);
  useEffect(()=>{
    user&&GetResumesList()
  },[user])

  /**
   * Used to Get Users Resume List
   */
  const GetResumesList=()=>{
    if (!user?.primaryEmailAddress?.emailAddress) {
      console.warn('No user email found');
      return;
    }
    
    LocalStorageApi.GetUserResumes(user.primaryEmailAddress.emailAddress)
    .then(resp=>{
      setResumeList(resp.data?.data || []);
    })
    .catch(error=>{
      console.error('Error fetching resumes:', error);
      setResumeList([]);
    })
  }
  return (
    <div className='h-screen flex flex-col'>
      <div className='p-6 border-b flex justify-between items-center'>
        <div>
          <h2 className='font-bold text-3xl'>Resume Builder Dashboard</h2>
          <p>Choose your preferred method to create your resume</p>
        </div>
      </div>
      
      <div className='flex-1 flex'>
        {/* LaTeX Code Section */}
        <div className='w-1/3 border-r flex flex-col'>
          <div className='bg-purple-100 p-4 border-b'>
            <h3 className='font-bold text-lg text-purple-800'>LaTeX Code Editor</h3>
            <p className='text-sm text-purple-600'>Professional LaTeX resume coding</p>
          </div>
          <div className='flex-1 p-4'>
            <button 
              onClick={() => navigate('/dashboard/latex-editor')}
              className='w-full h-32 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold text-lg transition-colors'
            >
              Open LaTeX Editor
            </button>
            <div className='mt-4 text-sm text-gray-600'>
              <p>• Professional LaTeX coding</p>
              <p>• AI-powered enhancements</p>
              <p>• Export to .tex and PDF</p>
            </div>
          </div>
        </div>

        {/* Manual Resume Builder Section */}
        <div className='w-1/3 border-r flex flex-col'>
          <div className='bg-blue-100 p-4 border-b'>
            <h3 className='font-bold text-lg text-blue-800'>Manual Resume Builder</h3>
            <p className='text-sm text-blue-600'>Form-based resume creation</p>
          </div>
          <div className='flex-1 p-4'>
            <div className='mb-4'>
              <AddResume/>
            </div>
            <div className='grid grid-cols-1 gap-3 max-h-96 overflow-y-auto'>
              {resumeList.length>0?resumeList.map((resume,index)=>(
                <ResumeCardItem resume={resume} key={index} refreshData={GetResumesList} />
              )):
              [1,2].map((item,index)=>(
                <div key={index} className='h-20 rounded-lg bg-slate-200 animate-pulse'>
                </div>
              ))
              }
            </div>
          </div>
        </div>

        {/* Generated Resume Preview Section */}
        <div className='w-1/3 flex flex-col'>
          <div className='bg-green-100 p-4 border-b'>
            <h3 className='font-bold text-lg text-green-800'>Generated Resume</h3>
            <p className='text-sm text-green-600'>Live preview of your resume</p>
          </div>
          <div className='flex-1 p-4 bg-gray-50'>
            <div className='w-full h-full bg-white rounded-lg shadow-sm border flex items-center justify-center'>
              <div className='text-center text-gray-500'>
                <div className='text-4xl mb-2'>📄</div>
                <p>Resume preview will appear here</p>
                <p className='text-sm mt-2'>Create or edit a resume to see preview</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard