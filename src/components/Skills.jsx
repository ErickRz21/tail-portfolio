import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'

const Skills = () => {
  return (
    <div className='border-2 rounded-xl border-gray-700 bg-black text-gray-300 md:h-[150px] sm:max-w-[900px] xl:max-w-[1200px] lg:mx-auto mx-5 grid grid-cols-6
    place-items-center md:flex md:justify-between md:items-center lg:text-base text-xs'>

        <h2 className='text-gray-100 lg:text-4xl md:text-2xl text-lg font-bold m-5'>
            My <br /> Tech <br /> Stack
        </h2>

        <div className='flex flex-col items-center m-5 sm:my-0 w-[40px] md:w-[100px]'>
            <img src={html} alt="" />
            <p className='mt-2'>HTML</p>
        </div>

        <div className='flex flex-col items-center m-5 sm:my-0 w-[40px] md:w-[100px]'>
            <img src={css} alt="" width={100} height={100} />
            <p className='mt-2'>CSS</p>
        </div>

        <div className='flex flex-col items-center m-5 sm:my-0 w-[40px] md:w-[100px]'>
            <img src={javascript} alt="" width={100} height={100} />
            <p className='mt-2'>JavaScript</p>
        </div>

        <div className='flex flex-col items-center m-5 sm:my-0 w-[40px] md:w-[100px]'>
            <img src={tailwind} alt="" width={100} height={100} />
            <p className='mt-2'>Tailwind</p>
        </div>

        <div className='flex flex-col items-center m-5 sm:my-0 w-[40px] md:w-[100px]'>
            <img src={react} alt="" width={100} height={100} />
            <p className='mt-2'>React</p>
        </div>
        
    </div>
  )
}

export default Skills