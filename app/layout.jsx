import '@/styles/globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Body from '@/components/layout/Body'
import Sidebar from '@/components/layout/Sidebar'

export const metadata = {
  title: 'Savings',
  description: 'Savings, the place where money grows',
  icons: {
    icon: '/favicon.ico'
  }
}

export default function RootLayout ({ children }) {
  return (
    <html lang='es'>
      <body className='flex flex-row min-h-screen bg-gray-100 text-gray-800'>
        <Sidebar />
        <main className='main flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in'>
          <Header />
          <Body>{children}</Body>
          <Footer />
        </main>
      </body>
    </html>
  )
}
