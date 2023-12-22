

const { OpenAI } = require('openai');

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });


export async function POST(
    req: Request,
    res: Response
) {

    console.log('somebody called me pls')

    try {


        // get the thread id
        const request = await req.json()

        // thread id
        const threadId = request.threadId

        // run id
        const runId = request.runId

        // get the run
        const run = await openai.beta.threads.runs.retrieve(
            threadId, runId
        )

        // log the status
        console.log(run.status)

        // return the status
        return new Response(JSON.stringify({
            'runStatus': run.status
        }))



    } catch (error) {
        console.log(error)

        return new Response(JSON.stringify({
            'runStatus': 'error'
        }))
    }

}
