import React from 'react'

const Contact = () => {
  return (
    <div class='max-w-[1200px] mx-auto bg-black sm:py-20 p-5' id='work'>

        <div className='text-center'>
            <h2 class='text-4xl font-bold leading-tight primary-color'>Contact Me</h2>
        </div>

        <div class='max-w-[800px] mx-auto'>

            <div className='mt-6 bg-[#161616] rounded-xl'>
                <div className='p-10'>

                    <form action="https://getform.io/f/ebpdzzkb" method='POST'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4'>

                            <div>
                                <div className='mt-2.5 '>
                                    <input type="text" name='name' id='' placeholder='Name' 
                                    className='bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border-2
                                    border-gray-500 rounded-lg focus:outline-none focus:border-pink-600 hover:border-blue-500 ease-in duration-200'/>
                                </div>
                            </div>

                            <div>
                                <div className='mt-2.5 '>
                                    <input type="email" name='email' id='' placeholder='Email' 
                                    className='bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border-2
                                    border-gray-500 rounded-lg focus:outline-none focus:border-pink-600 hover:border-blue-500 ease-in duration-200'/>
                                </div>
                            </div>

                            <div className='sm:col-span-2'>
                                <div className='mt-2.5 '>
                                    <textarea name="message" id="" placeholder='Message' 
                                            className='bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border-2
                                    border-gray-500 rounded-lg focus:outline-none focus:border-pink-600 hover:border-blue-500 ease-in duration-200' rows='4'>
                                    </textarea>
                                </div>
                            </div>

                            <div className='sm:col-span-2'>
                                <button type='submit'
                                className='text-xl w-full p-4 mt-2 font-semibold text-white bg-primary-color rounded-md hover:text-gray-200 ease-in hover:scale-105 transition-transform duration-300'>
                                    Send
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact