import type { NextApiRequest, NextApiResponse } from 'next'
import { NextRequest, NextResponse } from 'next/server';

import { cookies } from 'next/headers'

import { OpenAI } from 'openai';

console.log('this is the openai key', process.env.OPENAI_API_KEY)

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});


export async function POST(
  req: Request,
  res: Response
) {

  // get the thread id
  const gptCookie = cookies().get('gpt')
  if (!gptCookie) {
    // throw error
    throw new Error('No thread id')
  }

  let threadId = gptCookie.value

  // the the prompt from the request
  const prompt = await req.json()

  console.log('this is the prompt', prompt.prompt)
  
  // create a message
  const message = openai.beta.threads.messages.create(
    threadId, {
      role: 'user',
      content: prompt.prompt
    }
  )

  // initialize the run
  const run = openai.beta.threads.runs.create(
    threadId, {
      assistant_id: 'asst_LUl4EKuGMPMZIGPfEUHv2Mlo'
    }
  )


  // return the thread and run id
  return new Response(JSON.stringify({
    threadId: threadId,
    runId: (await run).id 
  }))

}
