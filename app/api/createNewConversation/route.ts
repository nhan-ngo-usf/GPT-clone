import { cookies } from 'next/headers'

const { OpenAI } = require('openai');

const openai = new OpenAI();



export async function GET(
    req: Request,
    res: Response
) {
    // create a new thread
    const thread = await openai.beta.threads.create()

    // get the thread id
    const threadId = thread.id

    // save to cookie
    cookies().set('gpt', threadId)

    // return the okay response
    return new Response(JSON.stringify({
        'status': 'okay'
    }))

}