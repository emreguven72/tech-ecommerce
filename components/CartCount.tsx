'use client'

import { useCounterStore } from '@/providers/counter-store-provider'
import React, { useEffect } from 'react'

const CartCount = ({ initialCount }: { initialCount: number }) => {
    const { count, setCount } = useCounterStore((state) => state)

    useEffect(() => {
      setCount(initialCount)
    }, [])
    

  return (
    <div className='absolute top-0 right-0'>{count}</div>
  )
}

export default CartCount