import React from 'react'
import heroimage from '../assets/drawofMe.jpg'
import {TypeAnimation } from "react-type-animation"

const Hero = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] mx-auto py-8 bg-black'>
        <div className='col-span-1 my-auto mx-auto relative rounded-full overflow-hidden hover:scale-110 transition-transform'>
                <img src={heroimage} alt=""/>
        </div>
        <div className='col-span-2 px-5'>
            <h1 className='text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold'>
                <span className='primary-color'>
                    I'm a
                </span> <br />
                <TypeAnimation
                    sequence={[
                            "Frontend Dev",
                            1000,
                            "Webdesigner",
                            1000,
                            "Backend Dev",
                            1000,
                            "Student",
                            1000
                    ]}
                    wrapper='span'
                    speed={50}
                    repeat={Infinity}
                />
            </h1>

            <p className='text-white sm:text-lg my-6 lg:text-xl'>
                My name is John Doe and I have 5+ years of experience in web development and design.
            </p>

            <div className='my-8'>
                    <a href='/' className='px-6 py-3 w-full rounded-xl border-2 font-medium border-gray-400 hover:border-white  mr-4 bg-gradient-to-br
                     from-blue-500 to-pink-500 text-white hover:text-black ease-in duration-200'>
                        Download CV
                    </a>
                    <a href='#contact' className='px-6 py-3 w-full rounded-xl border-2 font-medium border-gray-400 hover:bg-gradient-to-br 
                     from-blue-500 to-pink-500 text-white hover:border-white hover:text-black ease-in duration-200'>
                        Contact Me
                    </a>
            </div>
        </div>  
    </div>
  )
}

export default Hero