import React from 'react';

function ProgramCard(props) {
  return (

    <div className="bg-gray-500 p-6 rounded-lg shadow-md pt-8 font-sans">
      <div className="flex justify-center mb-4 px-24 items-center">
        <img src={props.image} alt={`${props.name}'s profile`} className="min-w-24 min-h-20 rounded-full" />
      </div>
      <h3 className="text-white  text-xl font-semibold py-4">{props.name}</h3>
      <h3 className="text-white text-lg font-light ">{props.data}</h3>

    </div>
  );
}

export default ProgramCard;
