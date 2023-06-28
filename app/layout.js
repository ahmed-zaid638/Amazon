import './globals.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Head from 'next/head'


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title >Amazon | nextjs</title>
      </Head>
      <body >
        <Header />
        <div className=''>
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  )
}









