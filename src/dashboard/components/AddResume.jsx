import { Loader2, Plus, FileText, Sparkles, Zap } from 'lucide-react'
import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { v4 as uuidv4 } from 'uuid';
import LocalStorageApi from './../../../service/LocalStorageApi'
import { useUser } from '@clerk/clerk-react'
import { Navigate, useNavigate } from 'react-router-dom'



function AddResume() {

    const [openDialog,setOpenDialog]=useState(false)
    const [resumeTitle,setResumeTitle]=useState();
    const {user}=useUser();
    const [loading,setLoading]=useState(false);
    const navigation=useNavigate();
    const onCreate=async()=>{
        setLoading(true)
        const uuid=uuidv4();
        const data={
            data:{
                title:resumeTitle,
                resumeId:uuid,
                userEmail:user?.primaryEmailAddress?.emailAddress,
                userName:user?.fullName
            }
        }

        LocalStorageApi.CreateNewResume(data).then(resp=>{
            console.log(resp.data.data.documentId);
            if(resp)
            {
                setLoading(false);
                navigation('/dashboard/resume/'+resp.data.data.documentId+"/edit");
            }
        },(error)=>{
            setLoading(false);
        })

    }
  return (
    <div>
        {/* Modern Create Button */}
        <button 
            onClick={()=>setOpenDialog(true)}
            className='w-full group relative overflow-hidden bg-gradient-to-br from-blue-50 to-cyan-50 hover:from-blue-100 hover:to-cyan-100 border-2 border-dashed border-blue-300 hover:border-blue-400 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:scale-105'
        >
            {/* Background Animation */}
            <div className='absolute inset-0 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            
            {/* Content */}
            <div className='relative flex flex-col items-center justify-center space-y-3'>
                {/* Icon with Animation */}
                <div className='relative'>
                    <div className='bg-gradient-to-r from-blue-500 to-cyan-500 p-4 rounded-full group-hover:scale-110 transition-transform duration-300 shadow-lg'>
                        <Plus className='h-8 w-8 text-white' />
                    </div>
                    {/* Pulse Effect */}
                    <div className='absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-ping opacity-20'></div>
                </div>
                
                {/* Text */}
                <div className='text-center'>
                    <h3 className='font-bold text-lg text-gray-800 group-hover:text-blue-700 transition-colors'>
                        Create New Resume
                    </h3>
                    <p className='text-sm text-gray-600 group-hover:text-blue-600 transition-colors'>
                        Start building your professional resume
                    </p>
                </div>
                
                {/* Features */}
                <div className='flex items-center gap-4 text-xs text-gray-500 group-hover:text-blue-500 transition-colors'>
                    <div className='flex items-center gap-1'>
                        <Sparkles className='h-3 w-3' />
                        <span>AI Powered</span>
                    </div>
                    <div className='flex items-center gap-1'>
                        <FileText className='h-3 w-3' />
                        <span>Templates</span>
                    </div>
                    <div className='flex items-center gap-1'>
                        <Zap className='h-3 w-3' />
                        <span>Quick Setup</span>
                    </div>
                </div>
            </div>
        </button>

        {/* Enhanced Dialog */}
        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader className="text-center">
                    <div className='mx-auto mb-4 bg-gradient-to-r from-blue-500 to-cyan-500 p-3 rounded-full w-fit'>
                        <FileText className='h-6 w-6 text-white' />
                    </div>
                    <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                        Create New Resume
                    </DialogTitle>
                    <DialogDescription className="text-gray-600">
                        Give your resume a memorable title to get started
                    </DialogDescription>
                </DialogHeader>
                
                <div className='space-y-4 py-4'>
                    <div className='space-y-2'>
                        <label className='text-sm font-medium text-gray-700'>Resume Title</label>
                        <Input 
                            className="border-2 border-gray-200 focus:border-blue-500 rounded-lg px-4 py-3" 
                            placeholder="e.g., Software Engineer Resume, Marketing Manager CV"
                            value={resumeTitle || ''}
                            onChange={(e)=>setResumeTitle(e.target.value)}
                        />
                    </div>
                    
                    {/* Quick Suggestions */}
                    <div className='space-y-2'>
                        <p className='text-xs text-gray-500'>Quick suggestions:</p>
                        <div className='flex flex-wrap gap-2'>
                            {['Software Developer', 'Product Manager', 'Data Scientist', 'UI/UX Designer', 'Power BI Developer'].map((suggestion) => (
                                <button
                                    key={suggestion}
                                    onClick={() => setResumeTitle(suggestion + ' Resume')}
                                    className='px-3 py-1 text-xs bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-700 rounded-full transition-colors'
                                >
                                    {suggestion}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
                
                <div className='flex gap-3 pt-4'>
                    <Button 
                        onClick={()=>setOpenDialog(false)} 
                        variant="outline" 
                        className="flex-1 border-2 hover:bg-gray-50"
                    >
                        Cancel
                    </Button>
                    <Button 
                        disabled={!resumeTitle?.trim() || loading}
                        onClick={()=>onCreate()}
                        className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                        {loading ? (
                            <>
                                <Loader2 className='animate-spin h-4 w-4 mr-2' />
                                Creating...
                            </>
                        ) : (
                            <>
                                <Zap className='h-4 w-4 mr-2' />
                                Create Resume
                            </>
                        )}
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    </div>
  )
}

export default AddResume