import React, { useEffect, useState } from 'react'
import AddResume from './components/AddResume'
import { useUser } from '@clerk/clerk-react'
import { useNavigate } from 'react-router-dom'
import LocalStorageApi from './../../service/LocalStorageApi';
import { toast } from 'sonner';
import ResumeCardItem from './components/ResumeCardItem';
import { Code2, FileText, Eye, Plus, Menu, Sparkles, Download, Zap, MoreVertical, Edit, Share2, Trash2 } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

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
  
  const handleDeleteResume = (documentId) => {
    LocalStorageApi.DeleteResumeById(documentId)
    .then(resp => {
      toast.success('Resume deleted successfully!');
      GetResumesList(); // Refresh the list
    })
    .catch(error => {
      console.error('Error deleting resume:', error);
      toast.error('Failed to delete resume');
    });
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
                    <h3 className='text-xl font-bold'>LaTeX Editor</h3>
                    <p className='text-purple-100 text-sm'>Professional coding</p>
                  </div>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className='p-2 hover:bg-white/20 rounded-lg transition-colors'>
                      <MoreVertical className='h-5 w-5 text-purple-200' />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuItem onClick={() => navigate('/dashboard/latex-editor')}>
                      <Edit className='h-4 w-4 mr-2' />
                      Open LaTeX Editor
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => navigate('/dashboard/latex-editor')}>
                      <FileText className='h-4 w-4 mr-2' />
                      Browse Templates
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => window.open('https://www.overleaf.com/learn/latex', '_blank')}>
                      <Sparkles className='h-4 w-4 mr-2' />
                      LaTeX Documentation
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => navigate('/dashboard/latex-editor')}>
                      <Download className='h-4 w-4 mr-2' />
                      Export Options
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            
            <div className='p-6'>
              <button 
                onClick={() => navigate('/dashboard/latex-editor')}
                className='w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3'
              >
                <Zap className='h-4 w-4' />
                Open Editor
              </button>
              
              <div className='mt-4 space-y-2'>
                <div className='flex items-center gap-2 text-sm text-gray-600'>
                  <Sparkles className='h-3 w-3 text-purple-600' />
                  <span>AI-powered enhancement</span>
                </div>
                <div className='flex items-center gap-2 text-sm text-gray-600'>
                  <FileText className='h-3 w-3 text-purple-600' />
                  <span>8 professional templates</span>
                </div>
                <div className='flex items-center gap-2 text-sm text-gray-600'>
                  <Download className='h-3 w-3 text-purple-600' />
                  <span>Multiple export formats</span>
                </div>
              </div>
            </div>
          </div>

          {/* Manual Resume Builder Card */}
          <div className='bg-white rounded-2xl shadow-lg border border-blue-100 overflow-hidden hover:shadow-xl transition-all duration-300'>
            <div className='bg-gradient-to-r from-blue-500 to-cyan-600 p-4 text-white'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                  <div className='bg-white/20 p-2 rounded-lg'>
                    <FileText className='h-6 w-6' />
                  </div>
                  <div>
                    <h3 className='text-lg font-bold'>Manual Builder</h3>
                    <p className='text-blue-100 text-xs'>Form-based creation</p>
                  </div>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className='p-2 hover:bg-white/20 rounded-lg transition-colors'>
                      <MoreVertical className='h-4 w-4 text-blue-200' />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuItem onClick={() => document.querySelector('[data-create-resume]')?.click()}>
                      <Plus className='h-4 w-4 mr-2' />
                      Create New Resume
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => navigate('/dashboard')}>
                      <Eye className='h-4 w-4 mr-2' />
                      View All Resumes ({resumeList.length})
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => navigate('/dashboard/resume/new/edit')}>
                      <Sparkles className='h-4 w-4 mr-2' />
                      AI Resume Builder
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            
            <div className='p-4'>
              {/* Create New Resume Button */}
              <div className='mb-4' data-create-resume>
                <AddResume/>
              </div>
              
              {/* Quick Stats */}
              <div className='grid grid-cols-2 gap-2 mb-4'>
                <div className='bg-blue-50 rounded-lg p-3 text-center'>
                  <div className='text-lg font-bold text-blue-600'>{resumeList.length}</div>
                  <div className='text-xs text-blue-600'>Total Resumes</div>
                </div>
                <div className='bg-green-50 rounded-lg p-3 text-center'>
                  <div className='text-lg font-bold text-green-600'>{resumeList.filter(r => r.status === 'completed').length || 0}</div>
                  <div className='text-xs text-green-600'>Completed</div>
                </div>
              </div>
              
              {/* Recent Resumes */}
              <div className='space-y-2'>
                <div className='flex items-center justify-between'>
                  <h4 className='font-semibold text-gray-800 text-sm flex items-center gap-2'>
                    <Eye className='h-3 w-3' />
                    Recent Resumes
                  </h4>
                  {resumeList.length > 3 && (
                    <button className='text-xs text-blue-600 hover:text-blue-800'>
                      View All ({resumeList.length})
                    </button>
                  )}
                </div>
                
                <div className='space-y-2 max-h-40 overflow-y-auto'>
                  {resumeList.length > 0 ? resumeList.slice(0, 3).map((resume, index) => (
                    <div key={index} className='bg-gray-50 hover:bg-gray-100 rounded-lg p-3 transition-colors cursor-pointer group'>
                      <div className='flex items-center justify-between'>
                        <div className='flex-1 min-w-0'>
                          <h5 className='font-medium text-sm text-gray-800 truncate'>
                            {resume?.title || 'Untitled Resume'}
                          </h5>
                          <p className='text-xs text-gray-500'>
                            {resume?.jobTitle || 'No job title'}
                          </p>
                        </div>
                        <div className='flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity'>
                          <button 
                            onClick={() => navigate(`/dashboard/resume/${resume.documentId}/edit`)}
                            className='p-1 hover:bg-blue-100 rounded text-blue-600'
                            title='Edit Resume'
                          >
                            <Edit className='h-3 w-3' />
                          </button>
                          <button 
                            onClick={() => navigate(`/my-resume/${resume.documentId}/view`)}
                            className='p-1 hover:bg-green-100 rounded text-green-600'
                            title='View Resume'
                          >
                            <Eye className='h-3 w-3' />
                          </button>
                          <button 
                            onClick={() => {
                              if (confirm(`Are you sure you want to delete "${resume.title}"?`)) {
                                handleDeleteResume(resume.documentId);
                              }
                            }}
                            className='p-1 hover:bg-red-100 rounded text-red-600'
                            title='Delete Resume'
                          >
                            <Trash2 className='h-3 w-3' />
                          </button>
                        </div>
                      </div>
                    </div>
                  )) : (
                    <div className='text-center py-6'>
                      <div className='bg-gray-100 rounded-full p-3 w-12 h-12 mx-auto mb-2 flex items-center justify-center'>
                        <FileText className='h-6 w-6 text-gray-400' />
                      </div>
                      <p className='text-xs text-gray-500 mb-2'>No resumes yet</p>
                      <p className='text-xs text-gray-400'>Create your first resume to get started</p>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Features */}
              <div className='mt-4 pt-3 border-t border-gray-100'>
                <div className='grid grid-cols-1 gap-2'>
                  <div className='flex items-center gap-2 text-xs text-gray-600'>
                    <div className='w-2 h-2 bg-blue-400 rounded-full'></div>
                    <span>AI-powered summaries</span>
                  </div>
                  <div className='flex items-center gap-2 text-xs text-gray-600'>
                    <div className='w-2 h-2 bg-green-400 rounded-full'></div>
                    <span>Real-time preview</span>
                  </div>
                  <div className='flex items-center gap-2 text-xs text-gray-600'>
                    <div className='w-2 h-2 bg-purple-400 rounded-full'></div>
                    <span>Multiple templates</span>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
        
        {/* All Resumes Section */}
        {resumeList.length > 0 && (
          <div className='mt-12 max-w-7xl mx-auto'>
            <div className='bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden'>
              <div className='bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-4 border-b'>
                <h3 className='text-xl font-bold text-gray-800 flex items-center gap-2'>
                  <FileText className='h-6 w-6' />
                  All Your Resumes ({resumeList.length})
                </h3>
              </div>
              
              <div className='p-6'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                  {resumeList.map((resume, index) => (
                    <div key={index} className='bg-gray-50 hover:bg-gray-100 rounded-xl p-4 transition-all duration-300 group border border-gray-200 hover:border-blue-300 hover:shadow-md'>
                      <div className='flex items-start justify-between mb-3'>
                        <div className='flex-1 min-w-0'>
                          <h4 className='font-semibold text-gray-800 truncate mb-1'>
                            {resume?.title || 'Untitled Resume'}
                          </h4>
                          <p className='text-sm text-gray-500 truncate'>
                            {resume?.jobTitle || 'No job title specified'}
                          </p>
                          <p className='text-xs text-gray-400 mt-1'>
                            Created: {new Date(resume?.createdAt || Date.now()).toLocaleDateString()}
                          </p>
                        </div>
                        
                        <div className='flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity'>
                          <button 
                            onClick={() => navigate(`/dashboard/resume/${resume.documentId}/edit`)}
                            className='p-2 hover:bg-blue-100 rounded-lg text-blue-600 transition-colors'
                            title='Edit Resume'
                          >
                            <Edit className='h-4 w-4' />
                          </button>
                          <button 
                            onClick={() => navigate(`/my-resume/${resume.documentId}/view`)}
                            className='p-2 hover:bg-green-100 rounded-lg text-green-600 transition-colors'
                            title='View Resume'
                          >
                            <Eye className='h-4 w-4' />
                          </button>
                          <button 
                            onClick={() => {
                              if (confirm(`Are you sure you want to delete "${resume.title}"? This action cannot be undone.`)) {
                                handleDeleteResume(resume.documentId);
                              }
                            }}
                            className='p-2 hover:bg-red-100 rounded-lg text-red-600 transition-colors'
                            title='Delete Resume'
                          >
                            <Trash2 className='h-4 w-4' />
                          </button>
                        </div>
                      </div>
                      
                      <div className='flex items-center justify-between pt-3 border-t border-gray-200'>
                        <div className='flex items-center gap-2'>
                          <div className='w-2 h-2 bg-green-400 rounded-full'></div>
                          <span className='text-xs text-gray-500'>Ready</span>
                        </div>
                        <button 
                          onClick={() => navigate(`/my-resume/${resume.documentId}/view`)}
                          className='text-xs bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-full transition-colors'
                        >
                          View
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
        
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