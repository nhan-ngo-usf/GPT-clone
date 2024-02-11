import { MusicalNoteIcon } from '@heroicons/react/24/outline'
import React from 'react'

const SidebarTechnologies = ( {techName} : any ) => {
    return (
        <button className='w-full h-fit p-2 text-md items-center hover:bg-slate-700/10 text-left rounded-xl flex flex-row'>
            <MusicalNoteIcon className='w-4 h-4 mr-2' />
            <p>{techName}</p>
        </button>
    )
}

export default SidebarTechnologies