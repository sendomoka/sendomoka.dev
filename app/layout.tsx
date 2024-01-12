import './globals.css'
import { ThemeProvider } from './components/ThemeContext'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Outfit } from 'next/font/google'
import { Fade } from '@chakra-ui/react'

const outfit = Outfit({ subsets: ['latin'] })

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <title>Sendomoka - Personal Dev Website | Jehian</title>
      <ThemeProvider>
        <body className={outfit.className}>
            <Fade in={true} transition={{ enter: { duration: 1 } }}>
            {children}
            </Fade>
          <Analytics />
          <SpeedInsights />
        </body>
      </ThemeProvider>
    </html>
  )
}

export default RootLayout