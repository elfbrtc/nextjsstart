"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

const Trial = () => {
  const routerRed = useRouter();

    console.log('trial')
  return (
    <>
    <div onClick={()=>routerRed.push('/about')}>Push</div>
    <div onClick={()=>routerRed.back()}>back</div>
    <div onClick={()=>routerRed.forward()}>forward</div>
    <div onClick={()=>routerRed.refresh()}>refresh</div>
    </>
  )
}

export default Trial