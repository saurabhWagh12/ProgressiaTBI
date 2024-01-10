import React from 'react';

function CardTestimonial(props) {
  return (

    <div className="bg-gray-200 p-6 rounded-lg shadow-md  font-sans">
      <div className="flex justify-center mb-4 px-24 items-center">
        <img src={props.image} alt={`${props.name}'s profile`} className="min-w-24 min-h-20 rounded-full" />
      </div>
      <h3 className="text-black  text-lg font-light ">{props.message}</h3>
      <h3 className="text-teal-500  text-lg font-normal">- {props.name}, {props.company}</h3>

    </div>
  );
}

export default CardTestimonial;
