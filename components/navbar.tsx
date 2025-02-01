import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import React from 'react'
import CartSVG from './CartSVG'
import CartCount from './CartCount'
import { Cart } from '@/app/api/db'

const Navbar = async({ initialCount }: { initialCount: number }) => {
    const response = await fetch('http://localhost:3000/api/carts', {})

    const carts: Cart[] = await response.json();

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
                        <div className='relative p-3'>
                            <CartSVG />
                            <CartCount initialCount={carts[0]?.cart.length} />
                        </div>
                        <UserButton />
                    </div>
                </SignedIn>
            </div>
        </div>
    )
}

export default Navbar