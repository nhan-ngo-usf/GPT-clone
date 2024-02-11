import type { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest, NextResponse } from 'next/server';

import { cookies } from 'next/headers';

import { OpenAI } from 'openai';

const openai = new OpenAI({
	apiKey: process.env.OPENAI_API_KEY,
});
let thread_id = '';

export async function POST(req: Request, res: Response) {
	// get the thread id
	let gptCookie = cookies().get('gpt');
	if (gptCookie && gptCookie.value !== '') {
		// then get the value
		thread_id = gptCookie.value;
	} else {
		// create new thread
		const thread = await openai.beta.threads.create();
		thread_id = thread.id;

		console.log('this is the thread id', thread_id);
		// save to cookie
		cookies().set('gpt', thread_id);
	}
	gptCookie = cookies().get('gpt');

	let threadId = gptCookie.value;

	// the the prompt from the request
	const prompt = await req.json();

	// create a message
	const message = openai.beta.threads.messages.create(threadId, {
		role: 'user',
		content: prompt.prompt,
	});

	// initialize the run
	const run = openai.beta.threads.runs.create(threadId, {
		assistant_id: 'asst_LUl4EKuGMPMZIGPfEUHv2Mlo',
	});

	// return the thread and run id
	return new Response(
		JSON.stringify({
			threadId: threadId,
			runId: (await run).id,
		})
	);
}
