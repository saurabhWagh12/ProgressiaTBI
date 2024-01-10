'use client'
import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Diys from '../assets/diy.json'
import DiyCard from '../components/DiyCard'


function page() {
    const [diys,setDiys] = useState(Diys);
  return (
    <>
    <Navbar home={true} about={true} programs={true} diy={false}/>
    <div className='min-h-screen pt-28 bg-green-200 text-black font-sans px-4'>
        <h1 className='text-gray-600 text-align:left text-4xl font-semibold'>OUR DIY (Do It Yourself) Kits</h1>
        <p className='text-gray-600 font-light text-lg text-align:left py-6'>Using our DIY kit students can developed and build IoT projects there own using our learning videos provided with the Kits.</p>
    
        <div className="flex flex-nowrap overflow-x-auto gap-10 mt-10">
        {diys.map((diy, index) => (
          <DiyCard image={diy.image} name={diy.name} data={diy.data}/>
        ))}
      </div>
    
    </div>
    <Footer/>
    </>
  )
}

export default page