'use client'

import { Button } from '@/components/ui/button'
import React from 'react'

import { useCounter } from './useCounter'

const TestZustand = () => {

  const { counter, increment } = useCounter()

  return (
    <div className='flex flex-col items-center justify-center space-y-4 p-6'>
      <p>{counter}</p>
      <Button variant={'outline'}
        onClick={increment}
      >Increment</Button>
    </div>
  )
}

export default TestZustand