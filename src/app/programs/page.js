'use client'
import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProgramCard from '../components/ProgramCard'
import Programs from '../assets/programs.json'

function page() {
    const [programs,setPrograms] = useState(Programs);
  return (
    <>
    <Navbar home={true} about={true} programs={false} diy={true}/>
    <div className='min-h-screen pt-28 bg-gray-700 text-black font-sans px-4'>
        <h1 className='text-white text-center text-4xl font-semibold'>TRENDING TRAINING INTERNSHIP PROGRAMS</h1>
        <p className='text-white font-light text-lg text-center py-6'>Want to be a part of the most trending and exciting internships today? Check out our trending internship programs today.</p>
    
        <div className="flex flex-nowrap overflow-x-auto gap-10 mt-10">
        {programs.map((program, index) => (
          <ProgramCard image={program.image} name={program.name} data={program.data}/>
        ))}
      </div>
    
    </div>
    <Footer/>
    </>
  )
}

export default page