import './globals.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Head from 'next/head'
import { BiCar } from 'react-icons/bi'
export const metadata = {
  title: 'Home'
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        <title >Amazon | nextjs</title>
      </Head>
      <body >
        <Header />
        <div className='flex  lg:m-8 lg:me-10  m-4 me-6 '>
          <Sidebar />
          <div className='w-full  rounded-lg ms-2 me-3  lg:ms-[330px]   mt-[80px]  ' >{children}</div>
        </div>
      </body>
    </html>
  )
}









