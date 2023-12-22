const { OpenAI } = require('openai');

const openai = new OpenAI();

export async function POST (
    req: Request,
    res: Response
) {
    // get the thread id
    const request = await req.json()
    // thread id
    const threadId = request.threadId

    // get the list of messages
    const messages = await openai.beta.threads.messages.list(
        threadId
    )

    // return the messages
    return new Response(JSON.stringify(messages))
}
