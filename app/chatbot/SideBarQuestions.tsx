import React from 'react'
import { SendingMessage } from './SendingMessage'
import { useMessages } from './MessagesState'

interface SideBarQuestionsProps {
    question: string
}

const SideBarQuestions = ({ question }: SideBarQuestionsProps) => {

    // set the useMessage hook
    const { addMessage, deleteMessage } = useMessages()

    const handleClick = (message: string) => {
        console.log('this is the message', message) 

        SendingMessage({message: message, addMessage: addMessage, deleteMessage: deleteMessage})
    }

    return (
        <button className='flex w-full border border-white border-opacity-25  rounded-xl p-2 hover:bg-slate-300 transition duration-200 cursor-pointer hover:bg-opacity-20'
        
        onClick={(e) => {
            handleClick(e.currentTarget.textContent!)
        }}
        >
            <p className='text-opacity-80 text-left text-white'>{question}</p>
        </button>
    )
}

export default SideBarQuestions