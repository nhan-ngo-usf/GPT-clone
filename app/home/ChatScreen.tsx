import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"



const ChatScreen = () => {

  const handleClick = () => {

  }

  return (
    <div className='h-screen w-full bg-slate-100 flex flex-row '>
      <div className='flex w-1/2 items-center justify-center'>
        <div className='w-1/2 h-full flex flex-col items-start justify-center '>
          <h1 className='text-4xl font-bold'>Got your questions answer within minutes</h1>

          <p className='text-4xl font-bold text-sky-800 mt-14'>You can ask anything you want. Common questions already available</p>
          <p className='text-2xl mt-14'> Whether about the projects I'm working on, technology I'm using or about all the information I have collected about your company so far</p>


          <div >

            <Dialog>
              <DialogTrigger asChild>
                <button className="px-8 mt-14 py-4 font-medium bg-yellow-400 rounded-full text-slate-700 text-2xl w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] hover:bg-orange-200 hover:text-slate-600">Start Chatting Now</button>

              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>⚠️ Warning</DialogTitle>
                  <DialogDescription>
                    The bot is not ready yet, so most of the answers would be inaccurate. I'll finish it as soon as possible 🥺🙏🙇.
                  </DialogDescription>

                  <DialogDescription>
                    But if you want to give it a try, please go ahead. It would be alot of fun 😁.
                  </DialogDescription>

                </DialogHeader>
                <div className="flex items-center space-x-2">
                  <div className="grid flex-1 gap-2">
                    <Label htmlFor="link" className="sr-only">
                      Link
                    </Label>
                    <Input
                      id="link"
                      defaultValue="http://localhost:3000/chatbot"
                      readOnly
                    />
                  </div>
                  <Button type="submit" size="sm" className="px-3">
                    <span className="sr-only">Copy</span>
                  </Button>
                </div>
                <DialogFooter className="sm:justify-start">
                  <DialogClose asChild>
                    <Button type="button" variant="secondary">
                      Close
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
        

          </div>

        </div>
      </div>

      <div className='flex h-full items-center justify-center w-1/2 px-4 '>
        <img src='/ChatBotDemo.gif' alt='ChatScreen' className='object-cover aspect-video border rounded-xl shadow-md shadow-yellow-400' />
      </div>
    </div>
  )
}

export default ChatScreen