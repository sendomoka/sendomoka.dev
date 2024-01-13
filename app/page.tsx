import { Box } from '@chakra-ui/react'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Friends from './components/Friends'
import ScrollToTop from './components/ScrollToTop'

export default function Home() {
  return (
    <Box>
      <Header />
      <Hero />
      <ScrollToTop />
      <Projects />
      <Friends />
      <Footer />
    </Box>
  )
}
