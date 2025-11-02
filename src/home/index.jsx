import Header from '@/components/custom/Header'
import { UserButton } from '@clerk/clerk-react'
import { AtomIcon, Edit, Share2, Mail, Linkedin, Github } from 'lucide-react'
import React, { useEffect, useRef } from 'react'
import './Home.css'

function Home() {
  const audioRef = useRef(null);

  useEffect(() => {
    // Load Lottie script
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@lottiefiles/dotlottie-wc@0.8.5/dist/dotlottie-wc.js';
    script.type = 'module';
    document.head.appendChild(script);
    
    // Play background music
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      audioRef.current.play().catch(e => console.log('Audio autoplay blocked'));
    }
    
    return () => {
      document.head.removeChild(script);
      // Stop music when component unmounts
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  return (
    <div>
      <audio 
        ref={audioRef}
        loop 
        preload="auto"
        style={{display: 'none'}}
      >
        <source src="/background-music.mp3" type="audio/mpeg" />
      </audio>
        <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-indigo-50 via-purple-100 to-pink-50 text-center px-6">
          <div className="mb-8">
            <dotlottie-wc 
              src="https://lottie.host/a785885d-16e9-4bfd-abb0-2226929c795f/xS3czjHmta.lottie" 
              style={{width: '300px', height: '200px'}} 
              autoplay 
              loop>
            </dotlottie-wc>
          </div>
          <div className="animate-pulse mb-6">
            <span className="inline-flex items-center px-12 py-6 text-2xl font-bold text-purple-700 bg-purple-100 rounded-full shadow-lg">
              ✨ AI-Powered Resume Builder
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
            Build Your <span className="text-purple-600 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Resume with AI</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mb-8 leading-relaxed">
            Effortlessly craft a standout resume with our AI-powered builder. No design skills needed—just smart, fast, and recruiter-ready results in minutes.
          </p>
          <div className="flex justify-center mb-12">
            <a href="/dashboard" className="button-85">
              Get Started Free
            </a>
          </div>
          <div className="flex items-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              No Credit Card Required
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              Free Templates
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
              AI-Generated Content
            </div>
          </div>
        </section>

        <section className="py-8 bg-white z-50 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <h2 className="font-bold text-3xl">How it Works?</h2>
          <h2 className="text-md text-gray-500">Create your resume in just 3 simple steps</h2>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <a
              className="block rounded-xl border bg-white border-gray-200 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
              href="#"
            >
             <AtomIcon className='h-8 w-8'/>
             <h2 className="mt-4 text-xl font-bold text-black">Fill in Your Details</h2>
             <p className="mt-1 text-sm text-gray-600">
               Start by entering your personal information, work experience, education, and skills.
             </p>
            </a>

            <a
              className="block rounded-xl border bg-white border-gray-200 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
              href="#"
            >
            <Edit className='h-8 w-8'/>
            <h2 className="mt-4 text-xl font-bold text-black">AI Enhancement</h2>
            <p className="mt-1 text-sm text-gray-600">
              Let our AI generate professional summaries and optimize your content for better impact.
            </p>
            </a>

            <a
              className="block rounded-xl border bg-white border-gray-200 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
              href="#"
            >
            <Share2 className='h-8 w-8' />
            <h2 className="mt-4 text-xl font-bold text-black">Download & Share</h2>
            <p className="mt-1 text-sm text-gray-600">
              Download your professional resume and share it with potential employers.
            </p>
            </a>
          </div>

          <div className="mt-12 text-center">
            <a href="/dashboard" className="button-85">
              Get Started Today
            </a>
          </div>
        </section>
        
        <footer className="bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 text-white py-4">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Let's Connect
              </h2>
              <p className="text-gray-300 text-base">Ready to build something amazing together?</p>
            </div>
            
            <div className="flex justify-center gap-8 mb-6">
              <a href="mailto:faizankhanofficial71@gmail.com" 
                 className="flex flex-col items-center group hover:transform hover:scale-110 transition duration-300">
                <div className="bg-gradient-to-r from-red-500 to-pink-500 p-3 rounded-full mb-2 group-hover:shadow-lg group-hover:shadow-red-500/25">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition text-xs">
                  faizankhanofficial71@gmail.com
                </span>
              </a>
              
              <a href="https://linkedin.com/in/faizankhanofficial71" 
                 target="_blank" rel="noopener noreferrer"
                 className="flex flex-col items-center group hover:transform hover:scale-110 transition duration-300">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-3 rounded-full mb-2 group-hover:shadow-lg group-hover:shadow-blue-500/25">
                  <Linkedin className="h-5 w-5 text-white" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition text-xs">
                  faizankhanofficial71
                </span>
              </a>
              
              <a href="https://github.com/FaizanKhan71" 
                 target="_blank" rel="noopener noreferrer"
                 className="flex flex-col items-center group hover:transform hover:scale-110 transition duration-300">
                <div className="bg-gradient-to-r from-gray-700 to-gray-800 p-3 rounded-full mb-2 group-hover:shadow-lg group-hover:shadow-gray-500/25">
                  <Github className="h-5 w-5 text-white" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition text-xs">
                  FaizanKhan71
                </span>
              </a>
            </div>
            
            <div className="border-t border-gray-700 pt-4 text-center">
              <p className="text-gray-400 text-sm">
                © 2024 <span className="text-purple-400 font-semibold">Mohammad Faizan Khan</span>. Crafted with ❤️ passion for data-driven insights.
              </p>
            </div>
          </div>
        </footer>
    </div>
  )
}

export default Home