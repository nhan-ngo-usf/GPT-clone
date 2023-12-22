import React from 'react'
import Sidebar from '@/components/Sidebar'
import { ToastContainer } from 'react-toastify'
import ClientProvider from '@/components/ClientProvider'

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>

        <div className=' flex flex-row w-screen h-screen'>

          <div className='hidden md:block w-1/3 h-full z-10'>
            {/* Side bar */}
            <Sidebar />
          </div>
          {/* ClientProvider - Notification */}
          <ClientProvider />


          <div className='flex-1'> {children} </div>

        </div>

      </body>
    </html>
  )
}
