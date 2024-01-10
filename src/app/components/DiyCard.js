import React from 'react';

function DiyCard(props) {
  return (

    <div className="bg-white p-6 rounded-lg shadow-md pt-8 font-sans">
      <div className="flex justify-center mb-4 px-12 items-center">
        <img src={props.image} alt={`${props.name}'s profile`} className="min-w-64 min-h-20 " />
      </div>
      <h3 className="text-black  text-xl font-semibold py-4">{props.name}</h3>
      <h3 className="text-black text-lg font-light ">{props.data}</h3>

    </div>
  );
}

export default DiyCard;
