'use client'
import React from 'react';
import {FacebookIcon,TwitterIcon,InstagramIcon} from 'next-share';
function Footer() {
  return (
    <div className='font-sans mt-10 flex pb-16 flex-col lg:flex-row'>

      <div className='lg:w-1/2 lg:px-16 sm:px-0'>
        <p className='text-4xl px-4 pb-10 text-align:left font-semibold'>Contact Us</p>
        <p className='font-light px-4 text-xl'>
            We are Progressia, an startup incubated at RCOEM-TBI Foundation. we are into the business of training and internship .We provide comprehensive workshops, internships, and training programs for skill development of students. With a strong focus on practical learning and industry relevance, the company aims to equip participants with the necessary skills and knowledge to thrive in these rapidly advancing technologies.
        </p>


        <div className='text-blue-400 pt-10 px-4 text-2xl'>EMAIl</div>
        <p className='px-4 text-xl'>progressia17@gmail.com</p>

        <div className='text-blue-400 pt-10 px-4 text-2xl'>SOCIAL</div>
        <div className='flex px-4 pt-4 gap-4'>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <FacebookIcon size={40} round={true} />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <TwitterIcon size={40} round={true} href={'www.google.copm'} />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <InstagramIcon size={40} round={true} />
          </a>
        </div>

      </div>

      <div className='w-full lg:w-1/2 flex justify-center items-center'>
            <p>Chat Box</p>
      </div>

    </div>
  );
}

export default Footer;
