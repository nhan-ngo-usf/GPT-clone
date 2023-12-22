'use client'

import { SunIcon } from 'lucide-react';
import React from 'react';
import ChatInput from './ChatInput';
import { BoltIcon } from '@heroicons/react/24/outline';
import { SendingMessage } from './SendingMessage';
import { useMessages } from './MessagesState';

const StartingPage = () => {

    const { messages, addMessage, deleteMessage } = useMessages()

    const handleClick = (prompt: any) => {
        console.log('this is prompt', prompt);

        SendingMessage({ message: prompt , addMessage: addMessage, deleteMessage: deleteMessage})
    };

    return (
        <div className='flex flex-col flex-grow w-full h-full items-center justify-center'>
            <h1 className='text-5xl font-bold mb-20'>ChatGPT</h1>

            <div className='w-full justify-center flex flex-row space-x-2 '>
                <div className='flex flex-col items-center w-fit justify-center'>
                    <div className='flex flex-col items-center mb-4'>
                        {/* Sun icon */}
                        <SunIcon className="h-8 w-8 text-white" />

                        <h2>Examples</h2>
                    </div>

                    <div className='space-y-2 text-left w-full flex flex-col'>
                        <button onClick={(e) => handleClick(e.currentTarget.textContent)} className='infoText'>
                            <p className='text-left'>"Why are you like this company"</p>
                        </button>
                        <button onClick={(e) => handleClick(e.currentTarget.textContent)} className='infoText'>
                            <p className='text-left'>"What is your strengths"</p>
                        </button>
                        <button onClick={(e) => handleClick(e.currentTarget.textContent)} className='infoText'>
                            <p className='text-left'>"What is your weaknesses"</p>
                        </button>
                    </div>
                </div>

                <div className='flex flex-col items-center w-fit justify-center'>
                    <div className='flex flex-col items-center mb-4'>
                        {/* Bolt icon */}
                        <BoltIcon className="h-8 w-8 text-white" />

                        <h2>Other Examples</h2>
                    </div>

                    <div className='space-y-2 text-left w-full flex flex-col'>
                        <button onClick={(e) => handleClick(e.currentTarget.textContent)} className='infoText'>
                            <p className='text-left'>"Describe how you handle conflict"</p>
                        </button>
                        <button onClick={(e) => handleClick(e.currentTarget.textContent)} className='infoText'>
                            <p className='text-left'>"Tell me about yourself"</p>
                        </button>
                        <button onClick={(e) => handleClick(e.currentTarget.textContent)} className='infoText'>
                            <p className='text-left'>"A random joke, maybe..."</p>
                        </button>
                    </div>
                </div>
            </div>

            <div className='bg-slate-700/50 fixed w-3/4 z-0 bottom-0 px-4 max-h-28'>
                <ChatInput />
            </div>
        </div>
    );
}

export default StartingPage;
