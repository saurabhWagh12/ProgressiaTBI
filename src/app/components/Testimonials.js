'use client'
import React, { useState } from 'react';
import Data from '../assets/testimonials.json';
import CardTestimonial from './CardTestimonial';

function Testimonials() {
  const [testimonials, setTestimonials] = useState(Data);

  return (
    
    <div className="flex justify-center items-center py-16 bg-white px-6">
    <div className="w-full">
      <h2 className="text-3xl font-semibold text-center text-teal-500 mb-4">Testimonials</h2>
        <p className='text-center text-black text-xl font-light pb-8'>
         Boost your product and service's credibility by adding testimonials from your clients.
       </p>
      <div className="flex flex-nowrap overflow-x-auto gap-10">
        {testimonials.map((testimonial, index) => (
          <CardTestimonial key={index} name={testimonial.name} message={testimonial.message} image={testimonial.image} company={testimonial.company}/>
        ))}
      </div>
    </div>
  </div>
  );
}

export default Testimonials;
