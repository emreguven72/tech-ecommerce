import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import React from 'react'
import CartSVG from './CartSVG'

const Navbar = () => {
    return (
        <div className='flex flex-row justify-between px-20 bg-slate-100 py-4 items-center'>
            <h1 className='text-2xl'>TechEcom</h1>

            <div>
                <SignedOut>
                    <div className='flex flex-row gap-4'>
                        <SignInButton />
                        <SignUpButton />
                    </div>
                </SignedOut>
                <SignedIn>
                    <div className='flex flex-row gap-4'>
                        <CartSVG />
                        <UserButton />
                    </div>
                </SignedIn>
            </div>
        </div>
    )
}

export default Navbar