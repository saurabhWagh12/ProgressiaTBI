"use client"
import Link from 'next/link'
import Image from 'next/image';
import { useState } from 'react';
import Logo from '../assets/logo.png'

const Navbar = (props) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const Modal = () => {
    return (
      <div>
        {/* Modal */}
        {isModalOpen && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
            <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className='flex items-center justify-between gap-10 mb-10'>
                    <h2 className="text-4xl text-black font-semibold ">Items</h2>
                    <button
                        onClick={closeModal}
                        className=" bg-gray-800 text-white px-3 py-1 rounded-full hover:bg-gray-700"
                    >
                        X
                    </button>
              </div>

              <div className="text-2xl">
                <div>
                    {props.home===true?<Link href="/" className="text-black hover:text-gray-300">Home</Link>:<></>}
                </div>
                <div>
                    {props.about===true?<Link href="/about" className="text-black hover:text-gray-300">About</Link>:<></>}
                </div>
                <div>
                    {props.programs===true?<Link href="/programs" className="text-black hover:text-gray-300">Programs</Link>:<></>}
                </div>
                <div>
                    {props.diy===true?<Link href="/diy" className="text-black hover:text-gray-300">DIY</Link>:<></>}
                </div>
            </div>
              
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <nav className="bg-gray-800 p-4 fixed top-0 w-full z-50 font-sans">
      <div className="container mx-auto flex justify-between items-center font-semibold">
        <div>
          <div>
            <a href="/" className="text-white text-lg font-bold">
            <Image src={Logo} alt="Logo" width={80} height={40} />
            </a>
          </div>
        </div>

        {/* Navbar divs */}
        <div className="hidden lg:flex space-x-4">
          <div>
            <Link href="/" className="text-white hover:text-gray-300">Home</Link>
          </div>
          <div>
            <Link href="/about" className="text-white hover:text-gray-300">About</Link>
          </div>
          <div>
            <Link href="/programs" className="text-white hover:text-gray-300">Programs</Link>
          </div>
          <div>
            <Link href="/diy" className="text-white hover:text-gray-300">DIY</Link>
          </div>
        </div>

        {/* Mobile menu button for small screens */}
        <div className="lg:hidden">
          <button className="text-white text-4xl" onClick={openModal}>&#9776;</button>
        </div>

        {/* Render the Modal component */}
        {isModalOpen && <Modal />}
      </div>
    </nav>
  );
};

export default Navbar;
