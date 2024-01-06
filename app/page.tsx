import { Box } from "@chakra-ui/react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <Box>
      <Header />
      <Hero />
      <Footer />
    </Box>
  )
}
