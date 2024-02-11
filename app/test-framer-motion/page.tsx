'use client'

import React from 'react'

import { motion, AnimatePresence } from 'framer-motion'

import { Button } from '@/components/ui/button'

const FramerMotion = () => {

    // show/hide the box
    const [show, setShow] = React.useState(true)

    return (
        <div className='w-screen flex justify-center'>
            <div className='w-[705px] my-4 items-center flex flex-col space-y-4'>

                <AnimatePresence
                    mode='popLayout'
                >

                    {/* A cool box */}
                    {show && (
                        <motion.div
                            className='my-4'

                            initial={{
                                rotate: 0,
                                scale: 0,
                                y: 0
                            }}

                            animate={{
                                rotate: 180,
                                scale: 1,
                                y: [0, 150, 150, 0 ],
                            }}

                            transition={{
                                delay: 0.5,
                                duration: 2,
                                type: 'spring',
                                times: [0, 0.5, 0.75, 1 ],

                            }}

                            exit={
                                {
                                    rotate: 0,
                                    scale: 0,
                                    y: 0
                                }
                            }

                            style={{
                                height: '100px',
                                width: '100px',
                                backgroundColor: 'black'
                            }}
                        >

                        </motion.div>
                    )}

                </AnimatePresence>


                {/* A cool button */}
                <motion.div
                    layout
                >
                    <Button variant={'destructive'}
                        className='w-32 h-12'
                        onClick={() => setShow(!show)}
                    >
                        Show/Hide
                    </Button>
                </motion.div>



            </div>
        </div>)
}

export default FramerMotion