'use client'
import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Programs from '../assets/programs.json'
import ProgramComponent from '../components/ProgramComponent'

function page() {
  return (
    <>
    <Navbar home={true} about={true} programs={false} diy={true}/>
    <ProgramComponent/>
    <Footer/>
    </>
  )
}

export default page