import React from 'react'
import Technologies from './Technologies'
import { Button } from '@/components/ui/button'

const ProjectCard = ({ title }: any) => {
  return (
    <div className='flex flex-row w-full overflow-hidden h-56 rounded-xl shadow '>

      {/* the image */}
      <div className='object-cover w-96  overflow-hidden  '>
        <img src='/nightsky.png' alt='Project' className='w-full h-full transform object-cover rounded-l-xl transition-transform hover:scale-110' />
      </div>

      {/* the text */}
      <div className='ml-8 my-2 w-full flex flex-col relative items-start '>
        <h1 className='text-xl font-bold'>{title}</h1>

        <div className='w-full h-full flex justify-evenly flex-col'>

          <div className='text-md'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi .
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi .

          </div>

          <div className='flex flex-row space-x-2'>
            <Technologies />
            <Technologies />
            <Technologies />
            <Technologies />
          </div>

          <div className='flex flex-row space-x-4'>
            <button className='px-4 py-2 bg-slate-200/50 hover:bg-slate-300/50 rounded-xl text-slate-800 font-bold'>View Project</button>

            <button className='px-4 py-2 bg-slate-200/50 hover:bg-slate-300/50 rounded-xl text-slate-800 font-bold'>Read Article</button>
          </div>

        </div>

      </div>


    </div>
  )
}

export default ProjectCard