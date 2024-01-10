import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function page() {
  return (
    <>
    <Navbar home={true} about={false} programs={true} diy={true}/>
    <div className='min-h-screen text-black font-sans bg-white'>
        
        <div className='pt-28 px-16'>
            <p className='text-align:left font-semibold text-4xl py-10'>ABOUT PROGRESSIA</p>
            <p className='text-align:left font-light text-xl pb-10'>
            We are Progressia, an startup incubated at RCOEM-TBI Foundation. we are into the business of training and internship .We provide comprehensive workshops, internships, and training programs for skill development of students. With a strong focus on practical learning and industry relevance, the company aims to equip participants with the necessary skills and knowledge to thrive in these rapidly advancing technologies.
            </p>

            <div className='text-center font-semibold text-4xl pb-8'> WHY CHOOSE PROGRESSIA </div>
            <div className='flex lg:flex-row flex-col justify-center'>
                <div className='pt-4'>
                    <p className='text-2xl lg:w-1/2'>Structured curriculum designed under expert supervision.</p>
                </div>
                <div className='pt-4'>
                    <p className='text-2xl'>Certification by progressia</p>
                </div>
            </div>

            <div className='py-8 text-center'>
                    <p className='text-2xl'>Innovative and industry relevance teaching methodology</p>
                </div>

        </div>
        
    </div>
    <Footer/>
    </>
  )
}

export default page