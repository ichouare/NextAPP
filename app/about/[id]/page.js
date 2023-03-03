'use client';

import React from 'react'
import Link  from "next/link"
import {  useRouter } from 'next/navigation'
const Item = () => {
  const router = useRouter()
  console.log(router.query)
  return (
    <div>
      <h1>item Products</h1>
      <Link href="/">
      <button>to to home</button>
      </Link>
      
    </div>
  )
}

export default Item
