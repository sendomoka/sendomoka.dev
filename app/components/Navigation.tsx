import React from 'react'
import Link from 'next/link'
import { Box, IconButton, Tooltip } from '@chakra-ui/react'
import {
  FaStickyNote,
  FaFeatherAlt,
  FaHome,
  FaRocket,
  FaUser,
} from 'react-icons/fa'

const Navigation = () => {
  const navData = [
    { label: 'Home', icon: <FaHome />, route: '' },
    { label: 'Blog', icon: <FaStickyNote />, route: '' },
    { label: 'Projects', icon: <FaRocket />, route: '' },
    { label: 'About', icon: <FaUser />, route: '' },
    { label: 'Contact', icon: <FaFeatherAlt />, route: '' },
  ]
  return (
    <Box>
      {navData.map(({ label, icon, route }, index) => (
        <Link key={index} href={route}>
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