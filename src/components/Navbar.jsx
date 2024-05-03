import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu, AiOutlineGithub, AiFillInstagram, AiFillHome, AiFillMail, AiFillInfoCircle} from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

  return (
        <div className='bg-black text-gray-400 max-w-[1200px] mx-auto flex justify-between items-center'>

            <h1 className='text-3xl font-bold primary-color ml-4 hover:scale-125 transition-transform'>Erick Ruiz</h1>
            <ul className='hidden md:flex'>
                <li className='p-6 pl-2 hover:text-white ease-in duration-300 font-medium text-lg hover:scale-125 transition-transform'><a href='#about'>About</a></li>
                <li className='p-6 pl-2 hover:text-white ease-in duration-200 font-medium text-lg hover:scale-125 transition-transform' ><a href='#work'>Work</a></li>
                <li className='p-6 pl-2 hover:text-white ease-in duration-200 font-medium text-lg hover:scale-125 transition-transform'><a href='#contact'>Contact</a></li>
                <li className='p-6 pl-2 hover:text-white ease-in duration-200 hover:scale-125 transition-transform'><a href="https://github.com/ErickRz21"><AiOutlineGithub size={30} /></a></li>
                <li className='p-6 pl-0 hover:text-white ease-in duration-200 hover:scale-125 transition-transform'><a href="https://www.instagram.com/ericks_ruiz/"><AiFillInstagram size={30} /></a></li>
            </ul>

            <div onClick={handleNav} className='block md:hidden mr-2 p-5 hover:text-white'>
                {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}

            <div className={nav ? 'z-10 fixed h-full left-0 top-0 w-[70%] bg-[#202121] ease-in-out duration-500'
             : 'fixed left-[-100%]'}>
                <h1 className='text-3xl font-bold primary-color m-4 pl-5'>E. Ruiz</h1>
                <ul className='p-8 text-2xl'>
                    <li className='p-2 font-medium flex'><AiFillHome size={30} className='mr-3'/><a href='#about'>About</a></li>
                    <li className='p-2 font-medium flex'><AiFillInfoCircle size={30} className='mr-3'/><a href='#work'>Work</a></li>
                    <li className='p-2 font-medium flex'><AiFillMail size={30} className='mr-3'/><a href='#contact'>Contact</a></li>
                    <li className='p-2 font-medium flex'><AiOutlineGithub size={30} className='mr-3'/><a href='https://github.com/ErickRz21'>GitHub</a></li>
                    <li className='p-2 font-medium flex'><AiFillInstagram size={30} className='mr-3'/><a href='https://www.instagram.com/ericks_ruiz/'>Instagram</a></li>
                </ul>
            </div>
            </div>
        </div>
  )
}

export default Navbar