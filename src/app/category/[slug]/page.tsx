"use client"
import { Metadata } from 'next'
import { useParams } from 'next/navigation'

import React from 'react'



function page() {
    const params =useParams()
    const slug=params?.slug
  return (
    <div>Shop page :{slug}</div>
  )
}

export default page