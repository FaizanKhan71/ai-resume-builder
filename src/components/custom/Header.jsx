import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import { UserButton, useUser } from '@clerk/clerk-react'

function Header() {
    const { user, isSignedIn } = useUser();
    return (
        <div className='px-4 py-2 flex justify-between items-center shadow-md bg-gradient-to-br from-indigo-50 via-purple-100 to-pink-50'>
             <Link to={'/dashboard'}>
            <dotlottie-wc 
              src="https://lottie.host/a785885d-16e9-4bfd-abb0-2226929c795f/xS3czjHmta.lottie" 
              style={{width: '150px', height: '60px', cursor: 'pointer'}} 
              autoplay 
              loop>
            </dotlottie-wc>
            </Link>
            {isSignedIn ?
                <div className='flex gap-3 items-center'>
                    <Link to={'/dashboard'}>
                        <Button variant="outline">Dashboard</Button>
                    </Link>
                    <UserButton />
                </div> :
                <Link to={'/auth/sign-in'}>
                    <Button>Get Started</Button>
                </Link>
            }

        </div>
    )
}

export default Header