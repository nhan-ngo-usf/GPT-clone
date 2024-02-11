'use client';

import { PaperAirplaneIcon } from '@heroicons/react/24/outline';
import React from 'react';

import { useEffect } from 'react';

import { Button } from '@/components/ui/button';
import toast from 'react-hot-toast';
import { useMessages } from './MessagesState';
import { MessageType } from '@/types';

const axios = require('axios');

export const SendingMessage = async ({
	message,
	addMessage,
	deleteMessage,
}: any) => {
	// extra functions

	// check the run status
	async function CheckRunStatus(runId: string, threadId: string) {
		const runResult = await axios.post('/api/checkRunStatus', {
			runId: runId,
			threadId: threadId,
		});

		return runResult.data.runStatus;
	}

	// updating the messages queue
	async function updateMessages(threadId: string) {
		// toast notification
		const updatingMessage = toast.loading('updatingMessage...');

		try {
			const messageList = await axios.post('/api/getAllMessages', {
				threadId: threadId,
			});

			// delete all the messages first
			deleteMessage();

			// then add the message
			for (var rawMessage of messageList.data.data) {
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

			toast.success('Messages updated!', { id: updatingMessage });
		} catch (err) {
			console.log('error with get all messages', err);

			// a toast to notify the user
			toast.error('Error with updating messages.', { id: updatingMessage });
		}
	}

	// function to check the status of the run and get message
	async function RetrievingResult(runId: string, threadId: string) {
		// Notification
		const notification = toast.loading('GPT is thinking...');

		// Check the run status
		try {
			// retrieve the run status
			let runResult = await CheckRunStatus(runId, threadId);

			// if the run is not completed, check again
			while (runResult !== 'completed') {
				// wait 1 seconds
				await new Promise((r) => setTimeout(r, 1000));

				// call the function again
				runResult = await CheckRunStatus(runId, threadId);
			}

			// if the run is completed, get the message
			if (runResult === 'completed') {
				toast.success('GPT is done thinking!', { id: notification });

				// now update the messages for the useMessage hook
				await updateMessages(threadId);
			}
		} catch (err) {
			// Handle error
			console.log(err);
			toast.error('Error with checkRunStatus request.', { id: notification });
		}
	}

	// send message
	let response;

	// Notification
	const notification = toast.loading('Sending message...');

	try {
		// Await the response from the API
		response = await axios.post('/api/gpt', { prompt: message });

		// update the message list to show for user
		await updateMessages(response.data.threadId);

		// now call the checkRunStatus api
		await RetrievingResult(response.data.runId, response.data.threadId);

		// Handle
		if (response.status === 200) {
			toast.success('Message sent successfully!', { id: notification });
		}
	} catch (err) {
		// Handle error
		console.log(err);
		toast.error('Error with GPT request.', { id: notification });

		// Optionally, set response to null or handle the error differently
		response = null;
	}

	// Return the response data, or null if there was an error
	return response ? response.data : null;
};
