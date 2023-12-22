import React from 'react'
import ProjectCard from './ProjectCard'
import ProjectSidebar from './ProjectSidebar'

const ProjectScreen = () => {
  return (
    <div
      className='w-full h-screen py-10 bg-slate-100 flex flex-row justify-center'
    >
      <div className='w-4/6 flex flex-col space-y-4'>
        <h1 className='font-bold text-4xl'>Check out some of the project I build</h1>

        <p className='text-lg max-w-3xl text-slate-700'>These are all my projects, most of them have an article explain how I work on them and a demo. A demo may take a bit of time to load, since I put them on AWS and only start the underlying server whenever they have visitors</p>
        <div className='border-2 p-2 w-full flex flex-row h-full rounded-2xl'>

          <ProjectSidebar />
          <div className='w-full h-full max-h-[700px] overflow-y-auto space-y-4 scrollbar-custom-3'>
            <ProjectCard title={"A beautiful Steam Application"} />
            <ProjectCard title={"A beautiful Steam Application"} />

            <ProjectCard title={"A beautiful Steam Application"} />
            <ProjectCard title={"A beautiful Steam Application"} />

          </div>

        </div>
      </div>
    </div>
  )
}

export default ProjectScreen