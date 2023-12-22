
import { url } from 'inspector'
import React, { useRef } from 'react'

import LaptopParallaxScrolling from './LaptopParallaxScrolling'
import { useScroll, useTransform } from 'framer-motion'
import ChatScreen from './ChatScreen'
import ProjectScreen from './ProjectScreen'

const ParallaxScrolling = () => {

    return (
        <div className='flex flex-col'>
            <LaptopParallaxScrolling />

            <ChatScreen />

            <ProjectScreen />

        </div>
    )
}

export default ParallaxScrolling