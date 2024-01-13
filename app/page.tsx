import { Box } from '@chakra-ui/react'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Friends from './components/Friends'

export default function Home() {
  return (
    <Box>
      <Header />
      <Hero />
      <Projects />
      <Friends />
      <Footer />
    </Box>
  )
}
