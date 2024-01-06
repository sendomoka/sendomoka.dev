'use client'
import { useEffect, useState } from 'react'
import { Spinner } from '@chakra-ui/react'
import './globals.css'
import { ThemeProvider } from './components/ThemeContext'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Outfit } from 'next/font/google'

const outfit = Outfit({ subsets: ['latin'] })

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true)
  const SpinnerLoading = () => {
    return (
      <div className="flex justify-center items-center w-screen h-screen bg-[#171717]">
        <Spinner width={50} height={50} color="white" />
      </div>
    )
  }

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setLoading(false)
      }, 1000)
    }

    window.addEventListener('load', handleLoad)

    return () => {
      window.removeEventListener('load', handleLoad)
    }
  }, [])

  return (
    <html lang="en">
      <title>Sendomoka - Personal Website | Jehian</title>
      <ThemeProvider>
        <body className={outfit.className}>
            {loading && <SpinnerLoading />}
            {!loading && children}
          <Analytics />
          <SpeedInsights />
        </body>
      </ThemeProvider>
    </html>
  )
}

export default RootLayout
