import React, { useEffect, useState } from 'react'
import AddResume from './components/AddResume'
import { useUser } from '@clerk/clerk-react'
import { useNavigate } from 'react-router-dom'
import LocalStorageApi from './../../service/LocalStorageApi';
import ResumeCardItem from './components/ResumeCardItem';
import { Code2, FileText, Eye, Plus, Menu, Sparkles, Download, Zap } from 'lucide-react';

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
    <div className='min-h-screen bg-gradient-to-br from-slate-50 to-blue-50'>
      {/* Enhanced Header */}
      <div className='bg-white shadow-sm border-b'>
        <div className='p-6'>
          <div className='flex items-center justify-between'>
            <div>
              <h1 className='text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
                Resume Builder Dashboard
              </h1>
              <p className='text-gray-600 mt-2'>Choose your preferred method to create your professional resume</p>
            </div>
            <div className='flex items-center gap-3'>
              <div className='bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium'>
                ✨ AI Powered
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className='p-6'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto'>
          {/* LaTeX Code Editor Card */}
          <div className='bg-white rounded-2xl shadow-lg border border-purple-100 overflow-hidden hover:shadow-xl transition-all duration-300'>
            <div className='bg-gradient-to-r from-purple-500 to-indigo-600 p-6 text-white'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                  <div className='bg-white/20 p-3 rounded-xl'>
                    <Code2 className='h-8 w-8' />
                  </div>
                  <div>
                    <h3 className='text-2xl font-bold'>LaTeX Code Editor</h3>
                    <p className='text-purple-100'>Professional LaTeX resume coding</p>
                  </div>
                </div>
                <Menu className='h-6 w-6 text-purple-200' />
              </div>
            </div>
            
            <div className='p-6'>
              <button 
                onClick={() => navigate('/dashboard/latex-editor')}
                className='w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3'
              >
                <Zap className='h-5 w-5' />
                Open LaTeX Editor
              </button>
              
              <div className='mt-6 grid grid-cols-1 gap-3'>
                <div className='flex items-center gap-3 text-gray-600'>
                  <div className='bg-purple-100 p-2 rounded-lg'>
                    <Sparkles className='h-4 w-4 text-purple-600' />
                  </div>
                  <span>AI-powered code enhancement</span>
                </div>
                <div className='flex items-center gap-3 text-gray-600'>
                  <div className='bg-purple-100 p-2 rounded-lg'>
                    <FileText className='h-4 w-4 text-purple-600' />
                  </div>
                  <span>8 professional templates</span>
                </div>
                <div className='flex items-center gap-3 text-gray-600'>
                  <div className='bg-purple-100 p-2 rounded-lg'>
                    <Download className='h-4 w-4 text-purple-600' />
                  </div>
                  <span>Export PDF, Word & LaTeX</span>
                </div>
              </div>
            </div>
          </div>

          {/* Manual Resume Builder Card */}
          <div className='bg-white rounded-2xl shadow-lg border border-blue-100 overflow-hidden hover:shadow-xl transition-all duration-300'>
            <div className='bg-gradient-to-r from-blue-500 to-cyan-600 p-6 text-white'>
              <div className='flex items-center gap-3'>
                <div className='bg-white/20 p-3 rounded-xl'>
                  <FileText className='h-8 w-8' />
                </div>
                <div>
                  <h3 className='text-2xl font-bold'>Manual Resume Builder</h3>
                  <p className='text-blue-100'>Form-based resume creation</p>
                </div>
              </div>
            </div>
            
            <div className='p-6'>
              <div className='mb-6'>
                <AddResume/>
              </div>
              
              <div className='space-y-3'>
                <h4 className='font-semibold text-gray-800 flex items-center gap-2'>
                  <Eye className='h-4 w-4' />
                  Your Resumes
                </h4>
                <div className='max-h-80 overflow-y-auto space-y-3'>
                  {resumeList.length > 0 ? resumeList.map((resume, index) => (
                    <div key={index} className='transform hover:scale-105 transition-transform'>
                      <ResumeCardItem resume={resume} refreshData={GetResumesList} />
                    </div>
                  )) : (
                    <div className='space-y-3'>
                      {[1, 2].map((item, index) => (
                        <div key={index} className='h-20 rounded-xl bg-gradient-to-r from-slate-200 to-slate-300 animate-pulse'></div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              
              <div className='mt-6 grid grid-cols-1 gap-3'>
                <div className='flex items-center gap-3 text-gray-600'>
                  <div className='bg-blue-100 p-2 rounded-lg'>
                    <Plus className='h-4 w-4 text-blue-600' />
                  </div>
                  <span>Easy form-based creation</span>
                </div>
                <div className='flex items-center gap-3 text-gray-600'>
                  <div className='bg-blue-100 p-2 rounded-lg'>
                    <Sparkles className='h-4 w-4 text-blue-600' />
                  </div>
                  <span>AI summary generation</span>
                </div>
                <div className='flex items-center gap-3 text-gray-600'>
                  <div className='bg-blue-100 p-2 rounded-lg'>
                    <Eye className='h-4 w-4 text-blue-600' />
                  </div>
                  <span>Real-time preview</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Quick Stats */}
        <div className='mt-8 max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <div className='bg-white rounded-xl p-6 shadow-lg border border-green-100'>
              <div className='flex items-center gap-4'>
                <div className='bg-green-100 p-3 rounded-xl'>
                  <FileText className='h-6 w-6 text-green-600' />
                </div>
                <div>
                  <h4 className='font-bold text-xl text-gray-800'>{resumeList.length}</h4>
                  <p className='text-gray-600'>Resumes Created</p>
                </div>
              </div>
            </div>
            
            <div className='bg-white rounded-xl p-6 shadow-lg border border-purple-100'>
              <div className='flex items-center gap-4'>
                <div className='bg-purple-100 p-3 rounded-xl'>
                  <Code2 className='h-6 w-6 text-purple-600' />
                </div>
                <div>
                  <h4 className='font-bold text-xl text-gray-800'>8</h4>
                  <p className='text-gray-600'>LaTeX Templates</p>
                </div>
              </div>
            </div>
            
            <div className='bg-white rounded-xl p-6 shadow-lg border border-blue-100'>
              <div className='flex items-center gap-4'>
                <div className='bg-blue-100 p-3 rounded-xl'>
                  <Sparkles className='h-6 w-6 text-blue-600' />
                </div>
                <div>
                  <h4 className='font-bold text-xl text-gray-800'>AI</h4>
                  <p className='text-gray-600'>Enhanced</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard