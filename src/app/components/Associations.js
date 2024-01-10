import React from 'react'
import Image from 'next/image';
import JIT from '../assets/centers/JIT.png';
import JDCOEM from '../assets/centers/JDCOEM.png';
import Palloti from '../assets/centers/Palloti.png';
import SBJAIN from '../assets/centers/SBJAIN.png';
import SYOMBIOSIS from '../assets/centers/SYOMBIOSIS.png';

import RCOEM from '../assets/associations/RCOEM.png';
import TBI from '../assets/associations/TBI.png';


function Associations() {
  return (
    <div className='py-10 text-black bg-green-200 text-center font-sans'>
        <h1 className='text-4xl font-semibold pb-6'>OUR ASSOCIATIONS</h1>

        <div className='flex justify-center pb-6'>
        <div className='flex flex-wrap gap-6'>
            <Image src={TBI} alt="Logo" width={200} height={100} />
            <Image src={RCOEM} alt="Logo" width={200} height={100} />
            

        </div>
        </div>

        <h1 className='text-4xl font-semibold py-8'>OUR CENTERS</h1>
        <div className='flex justify-center'>
        <div className='flex flex-wrap gap-6'>
            <Image src={JIT} alt="Logo" width={200} height={100} />
            <Image src={JDCOEM} alt="Logo" width={200} height={100} />
            <Image src={Palloti} alt="Logo" width={200} height={100} />
            <Image src={SYOMBIOSIS} alt="Logo" width={200} height={100} />
            <Image src={SBJAIN} alt="Logo" width={200} height={100} />

        </div>
        </div>

    </div>
  )
}

export default Associations