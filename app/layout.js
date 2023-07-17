import './globals.css'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import { BiCar } from 'react-icons/bi'

export const metadata = {
  title: 'Home'
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body >
        <Header />
        <div className='flex  lg:m-8 lg:me-  m-4 me-6 '>
          <Sidebar />
          <div className='w-full  rounded-lg ms-0  me-0   lg:ms-[280px]   mt-[80px]  ' >{children}</div>
        </div>
      </body>
    </html>
  )
}









