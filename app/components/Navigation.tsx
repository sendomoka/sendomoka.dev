import React from 'react'
import Link from 'next/link'
import { Box, IconButton, Tooltip } from '@chakra-ui/react'
import {
  FaStickyNote,
  FaHome,
  FaRocket,
  FaUser,
} from 'react-icons/fa'

const Navigation = () => {
  const scrollToSection = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, route: string) => {
    event.preventDefault()
    const element = document.getElementById(route.substring(1))
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
  const navData = [
    { label: 'Home', icon: <FaHome />, route: '/' },
    { label: 'Projects', icon: <FaRocket />, route: '#projects' },
    { label: 'Friends', icon: <FaUser />, route: '#friends' },
  ]
  return (
    <Box>
      {navData.map(({ label, icon, route }, index) => (
        <Link key={index} href={route} onClick={(event) => scrollToSection(event, route)}>
          <Tooltip label={label} aria-label={label}>
            <IconButton
              aria-label={label}
              icon={React.cloneElement(icon)}
              variant="ghost"
              marginRight={index < navData.length - 1 ? 20 : 0}
              style={{
                transform: index === 0 ? 'scale(1.3)' : 'none'  
              }}
            />
          </Tooltip>
        </Link>
      ))}
    </Box>
  )
}

export default Navigation