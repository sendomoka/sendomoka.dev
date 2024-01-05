'use client'
import { Box, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { useContext } from 'react'
import LogoDark from './LogoDark'
import LogoLight from './LogoLight'
import { ThemeContext } from './ThemeContext'

const Footer = () => {
  const { isDarkMode } = useContext(ThemeContext)
  return (
    <Box
        as="footer"
        position="fixed"
        bottom={0}
        zIndex={5}
        width="100%"
        paddingY={20}
    >
        <Text fontSize={12} userSelect='none' textAlign='center'>
            © {new Date().getFullYear()} - 
            <Link href="/" style={{ display: 'inline-flex', transform: 'translate(5px, 15px)' }}>
                {isDarkMode ? (
                    <LogoDark width='110px' height='40px' />
                    ) : (
                    <LogoLight width='110px' height='40px' />
                    )
                }
            </Link>
        </Text>
    </Box>
  )
}

export default Footer