'use client';

import React from 'react';
import Message from './Message';

import { useMessages } from './MessagesState';

const Chat = () => {
	// get all the messages from useMessages
	const { messages, addMessage } = useMessages();

	// if the data is not undefined

	return (
		<div className='flex flex-col space-y-6 w-full items-start scrollbar-custom'>
			{messages
				.slice()
				.reverse()
				.map((message) => (
					<Message
						key={message.id}
						content={message.content}
						role={message.role}
					/>
				))}
		</div>
	);
};

export default Chat;
