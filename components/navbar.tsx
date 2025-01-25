import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import React from 'react'

const Navbar = () => {
    return (
        <div className='flex flex-row justify-between px-10 bg-slate-100 py-4 items-center'>
            <h1 className='text-2xl'>TechEcom</h1>

            <div>
                <SignedOut>
                    <div className='flex flex-row gap-4'>
                        <SignInButton />
                        <SignUpButton />
                    </div>
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </div>
    )
}

export default Navbar