'use client'

import React from 'react'
import { useToast } from './ui/use-toast'
import { ArrowBigLeftDashIcon, Repeat2Icon } from 'lucide-react'
import { useMessages } from '@/app/chatbot/MessagesState'

import toast from 'react-hot-toast'
import SideBarQuestions from '@/app/chatbot/SideBarQuestions'
import { ArrowLeftIcon } from '@heroicons/react/20/solid'
import { ArrowLeftCircleIcon } from '@heroicons/react/24/outline'

// next header
// import Head from 'next/head'
const axios = require('axios')

const questionList: string[] = [
  "Why are you interested in this job/company?",
  "What are your strengths?",
  "What are your weaknesses?",
  "How do you handle mistakes?",
  "Why are you leaving your present job?",
  "Tell me about yourself.",
  "What salary are you looking for?",
  "Describe a conflict and how you resolved it.",
  "Do you like to work in groups or alone?",
  "What was your favorite/least favorite aspect of your most recent job role?",
  "Tell me about the worst manager you've worked with. How did you handle him/her?",
  "What steps would you take if you were unsatisfied by some part of your job?",
  "How would you handle negative comments from a senior manager who's not your boss?",
  "What would your current/former boss say are your greatest strengths and weaknesses?",
  "If you and a colleague were collaborating on a project but couldn't agree on something, how would you handle it?",
  "What would you do if you were completing a project with a tight deadline and realized you'd made a mistake early in the process, requiring you to start over?"
]

const Sidebar = () => {

  // set the useMessage hook
  const { addMessage, messages, deleteMessage } = useMessages()

  // clear all the messages and have a new conversation

  const NewConversation = async () => {

    try {
      deleteMessage()
      const result = await axios.get('/api/createNewConversation')

      toast.success('New Conversation Created')

    } catch (err) {
      console.log(err);
      toast.error('Error Creating New Conversation')
    }

  }


  return (
    <div className='flex flex-row w-full h-full'>


      <div className='p-2 flex overflow-clip flex-col h-full w-full bg-gray-950 px-2 relative'>

        <div className='flex-1'>

          {/* New Chat */}
          <button
            className='w-full flex'
            onClick={() => {
              console.log('New Chat')

              NewConversation()

            }}
          >
            <div className='flex flex-row items-center text-left w-full text-white bg-transparent hover:bg-red-500 transition duration-200 hover:bg-opacity-80 rounded-xl py-2 cursor-pointer'>
              <Repeat2Icon className='h-6 w-6 mx-2 text-slate-50' />

              <div className=''>Restart Chat</div>
            </div>
          </button>
        </div>

        <div className='flex flex-col ml-2 w-full h-full text-white mt-4 my-10' >
          <h2 className=' font-bold text-xl mb-4'>Some top questions</h2>

          <div className='flex flex-col space-y-4 px-4 w-full max-w-full scroll-py-9 overflow-y-scroll pb-10 pt-4 max-h-[850px] scrollbar-custom'>
            {questionList.map((question, index) => (
              < SideBarQuestions question={question} key={index} />
            )
            )}
          </div>

        </div>


      </div>


      {/* Arrow */}
      <div className='bg-gray-700 h-full w-8 flex items-center justify-center'>
        <button className='text-white text-opacity-50 text-2xl hover:text-opacity-95 '>{'\u003C'}</button>
      </div>


    </div>

  )
}

export default Sidebar