"use client"
import React from 'react'
import {useSearchParams, usePathname} from 'next/navigation'

const page = () => {
  const searchParams = useSearchParams();
  const name = searchParams.get('name')
  console.log(name, 'name')

  const pathname = usePathname();
  console.log(pathname, 'pathname')
  return (
    <div>page about</div>
  )
}

export default page