'use client';

import { PaperAirplaneIcon } from '@heroicons/react/24/outline';
import React from 'react';

import { useEffect } from 'react';

import { Button } from '@/components/ui/button';
import toast from 'react-hot-toast';
import { useMessages } from './MessagesState';
import { MessageType } from '@/types';
import { SendingMessage } from './SendingMessage';

const axios = require('axios');

const ChatInput = () => {
	const [prompt, setPrompt] = React.useState<string>('');

	// set the useMessage hook
	const { addMessage, messages, deleteMessage } = useMessages();

	// // extra functions

	// // check the run status
	// async function CheckRunStatus(runId: string, threadId: string) {
	//   const runResult = await axios.post('/api/checkRunStatus', {
	//     runId: runId,
	//     threadId: threadId
	//   });

	//   console.log('this is run status', runResult);

	//   return runResult.data.runStatus
	// }

	// // updating the messages queue
	// async function updateMessages(threadId: string) {

	//   // toast notification
	//   const updatingMessage = toast.loading('updatingMessage...');

	//   try {

	//     const messageList = await axios.post('/api/getAllMessages', { threadId: threadId })

	//     // delete all the messages first
	//     deleteMessage()

	//     // then add the message
	//     for (var rawMessage of messageList.data.data) {
	//       // set the messages
	//       let id = rawMessage.id
	//       let content = rawMessage.content[0].text.value
	//       let created_at = rawMessage.created_at
	//       let role = rawMessage.role

	//       // create the message
	//       const message: MessageType = {
	//         id: id,
	//         content: content,
	//         created_at: created_at,
	//         role: role
	//       }

	//       // add the message
	//       addMessage(message)
	//       console.log('this is message ', id, 'number ', message);
	//     }

	//     toast.success('Messages updated!', { id: updatingMessage });
	//   } catch (err) {
	//     console.log('error with get all messages', err)

	//     // a toast to notify the user
	//     toast.error('Error with updating messages.', { id: updatingMessage });
	//   }

	// }

	// // function to check the status of the run and get message
	// async function RetrievingResult(runId: string, threadId: string) {

	//   // Notification
	//   const notification = toast.loading('GPT is thinking...');

	//   // Check the run status
	//   try {

	//     // retrieve the run status
	//     let runResult = await CheckRunStatus(runId, threadId)

	//     // if the run is not completed, check again
	//     while (runResult !== 'completed') {
	//       // wait 2 seconds
	//       await new Promise(r => setTimeout(r, 1000));

	//       // call the function again
	//       runResult = await CheckRunStatus(runId, threadId)
	//     }

	//     // if the run is completed, get the message
	//     if (runResult === 'completed') {
	//       toast.success('GPT is done thinking!', { id: notification });

	//       // now update the messages for the useMessage hook
	//       await updateMessages(threadId)

	//     }

	//   } catch (err) {
	//     // Handle error
	//     console.log(err);
	//     toast.error('Error with checkRunStatus request.', { id: notification });

	//   }

	// }

	// // send message
	// async function sendMessage(message: string) {
	//   // Declare response outside of the try-catch block
	//   let response;

	//   // Notification
	//   const notification = toast.loading('Sending message...');

	//   try {
	//     // Await the response from the API
	//     response = await axios.post('/api/gpt', { prompt: message });

	//     // update the message list to show for user
	//     await updateMessages(response.data.threadId)

	//     // now call the checkRunStatus api
	//     await RetrievingResult(response.data.runId, response.data.threadId)

	//     // Handle
	//     if (response.status === 200) {
	//       toast.success('Message sent successfully!', { id: notification });
	//     }

	//   } catch (err) {
	//     // Handle error
	//     console.log(err);
	//     toast.error('Error with GPT request.', { id: notification });

	//     // Optionally, set response to null or handle the error differently
	//     response = null;
	//   }

	//   // Return the response data, or null if there was an error
	//   return response ? response.data : null;
	// }

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		// don't submit if prompt is empty
		if (prompt === '') return;

		// else go on
		const properPrompt = prompt.trim();

		// clear prompt
		setPrompt('');

		// fetch with axios
		// nếu như tên khác với cái bên type, thì đây là cách rename... :>>
		SendingMessage({
			message: properPrompt,
			addMessage: addMessage,
			deleteMessage: deleteMessage,
		});
	};

	return (
		<div className='w-full flex justify-center pb-6 bg-700/50'>
			<form
				className=' border border-white border-opacity-30 flex flex-row items-center w-full lg:w-2/4 p-2 rounded-2xl h-14'
				onSubmit={(e) => {
					handleSubmit(e);
				}}>
				<input
					className='w-full h-full max-w-3xl  bg-inherit text-white  p-4 outline-none rounded-lg text-sm'
					type='text'
					placeholder='Type a message'
					value={prompt}
					onChange={(e) => {
						setPrompt(e.target.value);
					}}
				/>

				<button
					type='submit'
					className='transition duration-200 bg-white rounded-xl bg-opacity-20 hover:bg-opacity-0 hover:border border-white border-opacity-20'>
					<PaperAirplaneIcon className='h-8 w-8 text-black text-opacity-40 p-1.5' />
				</button>
			</form>
		</div>
	);
};

export default ChatInput;
