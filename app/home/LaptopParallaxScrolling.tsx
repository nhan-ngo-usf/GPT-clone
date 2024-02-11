'use client'

import { url } from 'inspector'
import React, { useRef, useState } from 'react'

import { useScroll, useTransform, motion } from 'framer-motion'
import { Button } from '@/components/ui/button'


const LaptopParallaxScrolling = () => {

    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })

    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
    const characterY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"])


    // a use state whether the character crying or not
    const [crying, setCrying] = useState(false)



    return (
        <div className='w-full h-screen overflow-hidden relative grid'>
            <div className=' text-slate-800   relative z-10 text-left flex mt-24 ml-32'>
                <div className='flex flex-col items-center  '>
                    <h1 className='font-serif text-5xl drop-shadow-md text-slate-800'>
                        Welcome to my
                    </h1>

                    <h1 className='font-bold text-9xl drop-shadow-md text-green-900'>
                        PORTFOLIO
                    </h1>

                    <div className='w-3/4 my-3 h-0.5 bg-emerald-700' />

                    <h1 className='drop-shadow-md text-slate-800 text-2xl'>
                        What can you expect to see here
                    </h1>

                    <div className='w-3/5 my-3 h-0.5 bg-emerald-600' />

                    <ul className='text-slate-800 text-xl text-left w-fit flex flex-col'>
                        <li className='my-2'>
                            <span className='font-bold'>1. </span>
                            <span>Explore demos of my completed projects</span>
                        </li>

                        <li className='my-2'>
                            <span className='font-bold'>2. </span>
                            <span>Engage with a chatbot to learn more about me</span>
                        </li>

                        <div className="mt-4 flex items-center w-full justify-center">
                            <button className="px-8 py-4 font-medium bg-blue-200 rounded-full text-slate-700 text-2xl w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] hover:bg-orange-200 hover:text-slate-600"
                                onMouseOver={() => setCrying(true)}
                                onMouseLeave={() => setCrying(false)}
                            >
                                {crying ? 'Please :>>' : 'Hire me'}
                            </button>
                        </div>



                    </ul>



                </div>
            </div>


            <motion.img
                src='/Background.png'
                alt='Background'
                className='absolute insert-0 z-0 w-full h-full object-cover'
                style={{
                    y: backgroundY,
                }}
            >
            </motion.img>

            {crying ? (
                <motion.img
                    src='/Crying.png'
                    alt='Sitdown'
                    className='absolute mt-32 ml-[1000px] z-20 w-1/2  object-cover '
                    style={{
                        y: characterY,
                    }}
                >
                </motion.img>

            ) : (
                <motion.img
                src='/Sitdown.png'
                alt='Crying'
                className='absolute mt-32 ml-[1000px] z-20 w-1/2  object-cover '
                style={{
                    y: characterY,
                }}
            >
            </motion.img>

            )}


        </div>

    )
}

export default LaptopParallaxScrolling