import Header from '@/components/custom/Header'
import { Button } from '@/components/ui/button'
import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import ResumePreview from '@/dashboard/resume/components/ResumePreview'
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import LocalStorageApi from './../../../../service/LocalStorageApi'
import { RWebShare } from 'react-web-share'
import { Download, Share2, Edit3, ArrowLeft, CheckCircle, Sparkles, Eye } from 'lucide-react'

function ViewResume() {
    const [resumeInfo,setResumeInfo]=useState();
    const [isLoading,setIsLoading]=useState(true);
    const {resumeId}=useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        GetResumeInfo();
    },[])
    
    const GetResumeInfo=()=>{
        setIsLoading(true);
        LocalStorageApi.GetResumeById(resumeId).then(resp=>{
            setResumeInfo(resp.data.data || {});
            setIsLoading(false);
        }).catch(error=>{
            console.error('Error fetching resume:', error);
            setResumeInfo({});
            setIsLoading(false);
        })
    }

    const HandleDownload=()=>{
        window.print();
    }
    
    const HandleEdit=()=>{
        navigate(`/dashboard/resume/${resumeId}/edit`);
    }

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading your resume...</p>
                </div>
            </div>
        )
    }

    return (
        <ResumeInfoContext.Provider value={{resumeInfo,setResumeInfo}} >
            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
                <div id="no-print">
                    <Header/>
                    
                    {/* Hero Section */}
                    <div className='relative overflow-hidden'>
                        <div className='absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10'></div>
                        <div className='relative max-w-7xl mx-auto px-6 py-16'>
                            <div className='text-center mb-12'>
                                <div className='flex justify-center mb-6'>
                                    <div className='bg-green-100 p-4 rounded-full'>
                                        <CheckCircle className='h-12 w-12 text-green-600' />
                                    </div>
                                </div>
                                
                                <h1 className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4'>
                                    🎉 Congratulations!
                                </h1>
                                
                                <h2 className='text-2xl md:text-3xl font-semibold text-gray-800 mb-4'>
                                    Your AI-Powered Resume is Ready!
                                </h2>
                                
                                <p className='text-lg text-gray-600 max-w-2xl mx-auto mb-8'>
                                    Your professional resume has been generated with AI precision. Download it now or share the unique URL with potential employers.
                                </p>
                                
                                {/* Action Buttons */}
                                <div className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-8'>
                                    <Button 
                                        onClick={HandleDownload}
                                        className='bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2'
                                    >
                                        <Download className='h-5 w-5' />
                                        Download PDF
                                    </Button>
                                    
                                    <Button 
                                        onClick={HandleEdit}
                                        variant="outline"
                                        className='border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2'
                                    >
                                        <Edit3 className='h-5 w-5' />
                                        Edit Resume
                                    </Button>
                                    
                                    <RWebShare
                                        data={{
                                            text: `Check out ${resumeInfo?.firstName} ${resumeInfo?.lastName}'s professional resume`,
                                            url: `${window.location.origin}/my-resume/${resumeId}/view`,
                                            title: `${resumeInfo?.firstName} ${resumeInfo?.lastName} - Resume`,
                                        }}
                                        onClick={() => console.log("shared successfully!")}
                                    >
                                        <Button 
                                            variant="outline"
                                            className='border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2'
                                        >
                                            <Share2 className='h-5 w-5' />
                                            Share Resume
                                        </Button>
                                    </RWebShare>
                                </div>
                                
                                {/* Stats */}
                                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto'>
                                    <div className='bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-white/20 shadow-lg'>
                                        <div className='flex items-center justify-center gap-2 mb-2'>
                                            <Sparkles className='h-5 w-5 text-blue-600' />
                                            <span className='font-semibold text-gray-800'>AI Enhanced</span>
                                        </div>
                                        <p className='text-sm text-gray-600'>Optimized content</p>
                                    </div>
                                    
                                    <div className='bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-white/20 shadow-lg'>
                                        <div className='flex items-center justify-center gap-2 mb-2'>
                                            <Eye className='h-5 w-5 text-purple-600' />
                                            <span className='font-semibold text-gray-800'>Professional</span>
                                        </div>
                                        <p className='text-sm text-gray-600'>Modern design</p>
                                    </div>
                                    
                                    <div className='bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-white/20 shadow-lg'>
                                        <div className='flex items-center justify-center gap-2 mb-2'>
                                            <Download className='h-5 w-5 text-green-600' />
                                            <span className='font-semibold text-gray-800'>Ready to Use</span>
                                        </div>
                                        <p className='text-sm text-gray-600'>Instant download</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Navigation */}
                    <div className='max-w-7xl mx-auto px-6 pb-8'>
                        <Button 
                            onClick={() => navigate('/dashboard')}
                            variant="ghost"
                            className='flex items-center gap-2 text-gray-600 hover:text-gray-800'
                        >
                            <ArrowLeft className='h-4 w-4' />
                            Back to Dashboard
                        </Button>
                    </div>
                </div>
                
                {/* Resume Preview */}
                <div className='max-w-5xl mx-auto px-6 pb-16'>
                    <div className='bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden'>
                        <div className='bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-4 border-b'>
                            <h3 className='text-lg font-semibold text-gray-800 flex items-center gap-2'>
                                <Eye className='h-5 w-5' />
                                Resume Preview
                            </h3>
                        </div>
                        
                        <div id="print-area" className='p-6'>
                            <ResumePreview/>
                        </div>
                    </div>
                </div>
            </div>
        </ResumeInfoContext.Provider>
    )
}

export default ViewResume