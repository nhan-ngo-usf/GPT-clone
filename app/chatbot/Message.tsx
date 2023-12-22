import { HandThumbDownIcon, HandThumbUpIcon, UserIcon } from '@heroicons/react/24/outline'
import { BotIcon, CopyIcon } from 'lucide-react'
import React from 'react'

const Message = ({ content, role }: any) => {
  return (
    <div className={`flex flex-col space-x-2 space-y-2 w-full px-10 max-w-3xl  mx-auto `}>

      <div className='flex flex-row'>
        {role === 'assistant' ? (<BotIcon className="w-7 h-7 mr-2 bg-green-300 rounded-full p-1.5" />) :
          (<UserIcon className="w-7 h-7 mr-2 bg-blue-300 rounded-full p-1.5" />)
        }

        <h2 className='text-white'>{role}</h2>
      </div>

      <p className='text-white text-opacity-90 items-baseline '>{content}</p>

      <div className='flex flex-row w-full h-10 space-x-4 items-baseline'>
        <CopyIcon className='h-4 w-4 opacity-60 hover:opacity-100 '/>
        <HandThumbUpIcon className='h-5 w-5 opacity-60 hover:opacity-100 '/>
        <HandThumbDownIcon className='h-5 w-5 opacity-60 hover:opacity-100 '/>

      </div>

    </div>
  )
}

export default Message