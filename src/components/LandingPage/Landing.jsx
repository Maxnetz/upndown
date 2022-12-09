import React from 'react'
import Image from './pictures/run.png'
const LandingPage = () => {
    return (
        <div className='flex h-screen w-full bg-white text-black'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
                <div className='flex flex-col justify-center h-full px-8'>
                    <h3 className='text-4xl sm:text-7xl font-bold'>.upndown </h3>
                    <p className='py-4 mx-w-md text-black'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis aliquam eius, mollitia facilis nam asperiores consectetur sit, autem eveniet veniam, laborum adipisci dicta. Minus iusto optio inventore. Sit, reiciendis inventore.</p>

                    <div>
                    <button className='focus:outline-none text-white bg-purple-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-indigo-600 dark:hover:bg-indigo-800 dark:focus:ring-indigo-400'>
                        Sign in                        
                    </button>
                    </div>
                </div>
                <img src={Image} alt="3dmodel" className='mx-auto w-1/2 md:w-3/4 px-4'/>

            </div>
        </div>
    )
}

export default LandingPage
