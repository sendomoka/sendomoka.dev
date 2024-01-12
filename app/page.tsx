import { Box } from '@chakra-ui/react'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Project from './components/Projects'

export default function Home() {
  return (
    <Box>
      <Header />
      <Hero />
      <Project />
      <Footer />
    </Box>
  )
}
