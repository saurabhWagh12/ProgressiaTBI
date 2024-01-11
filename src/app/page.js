import Image from 'next/image';
import Navbar from './components/Navbar';
import GifPlayer from './components/GifPlayer';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import Associations from './components/Associations';
import ProgramComponent from './components/ProgramComponent'

export default function Home() {
  return (
    <>
    <div className='bg-gradient-to-r
     from-green-200
     via-green-200
     to-blue-400 min-h-screen text-black font-sans'>

      <Navbar home={false} about={true} programs={true} diy={true}/>
      
      <div className='flex flex-col pt-28 lg:flex-row px-4 lg:px-10'>

        <div className='lg:w-1/2 lg:px-24 sm:px-0'>
          <div className='font-semibold py-10 text-align:left text-4xl lg:text-5xl whitespace-pre-line'>
            BUILDING PATHS 
            FOR TOMORROW'S 
            TECH LEADERS
          </div>

          <p className='text-align:left font-light text-lg lg:text-2xl'>
            At Progressia, we assist students in skill development with a strong focus on practical learning through our programs.
          </p>

          <button className='bg-black text-white my-10 px-6 lg:px-10 py-3 lg:py-4 rounded-full text-lg lg:text-2xl'>Learn More</button>
        </div>

        <div className='w-full lg:w-1/2 flex justify-center items-center'>
          <GifPlayer url={'https://miro.medium.com/v2/resize:fit:679/0*i4ZgFRXHVl1ef4QT.gif'}/>
        </div>

      </div>

    </div>
    <ProgramComponent/>
    <Associations/>
    <Testimonials/>
    <Footer/>
    </>
  );
}
