'use client';
import { BeakerIcon } from '@heroicons/react/20/solid';
import {
	BoltIcon,
	ExclamationCircleIcon,
	ExclamationTriangleIcon,
	SunIcon,
} from '@heroicons/react/24/outline';
import React, { use, useEffect, useState } from 'react';
import ChatInput from './ChatInput';
import Chat from './Chat';

import { MessageType } from '@/types';

import { useMessages } from './MessagesState';
import StartingPage from './StartingPage';

// axios
const axios = require('axios');

const chatbot = () => {
	const { messages, addMessage, deleteMessage } = useMessages();

	useEffect(() => {
		// Define an async function inside the useEffect
		const fetchData = async () => {
			try {
				const response = await axios.get('/api/getMessage');
				console.log('this is response', response);
				console.log('this is response.data', response.data.data);
				console.log('length of this', response.data.data.length);

				// set the messages
				if (response.data.data.length > 0) {
					// delete all the messages first
					deleteMessage();

					for (const rawMessage of response.data.data) {
						// set the messages
						let id = rawMessage.id;
						let content = rawMessage.content[0].text.value;
						let created_at = rawMessage.created_at;
						let role = rawMessage.role;

						// create the message
						const message: MessageType = {
							id: id,
							content: content,
							created_at: created_at,
							role: role,
						};

						// add the message
						addMessage(message);
					}
				}
			} catch (err) {
				console.log(err);
			}
		};

		// Call the async function
		fetchData();
	}, []); // Don't forget to include the dependency array as needed

	return (
		<div className='text-white bg-gray-700 items-center justify-center w-full h-screen '>
			{messages.length <= 0 ? (
				<StartingPage />
			) : (
				<div className='h-full w-full flex flex-col items-center pt-10 s '>
					<div className='overflow-y-auto w-full flex justify-center max-h-[800px] scrollbar-custom-2'>
						<Chat />
					</div>

					<div className='bg-slate-700/50 fixed w-3/4 z-0 bottom-0 px-4 max-h-28  '>
						<ChatInput />
					</div>
				</div>
			)}
		</div>
	);
};

export default chatbot;
