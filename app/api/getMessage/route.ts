import type { NextApiRequest, NextApiResponse } from 'next'
import { NextRequest, NextResponse } from 'next/server';

import { cookies } from 'next/headers'

const { OpenAI } = require('openai');

const openai = new OpenAI({apiKey: process.env.OPENAI_API_KEY});


export async function GET(
    req: Request,
    res: Response
) {

    // get 
    // get cookie gpt
    const gptCookie = cookies().get('gpt')
    let thread_id = ''

    if (gptCookie && gptCookie.value !== '') {
        // then get the value
        thread_id = gptCookie.value

    } else {
        // create new thread
        const thread = await openai.beta.threads.create()
        thread_id = thread.id

        console.log('this is the thread id', thread_id)
        // save to cookie
        cookies().set('gpt', thread_id)
    }

    // get the message from the thead
    const messages =  await openai.beta.threads.messages.list(
        thread_id
    )

    // log all the messages
    console.log(messages)
    
    // return the messages
    return new Response(JSON.stringify(messages))


}


