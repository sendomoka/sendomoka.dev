'use client'
import { Box, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { useContext } from 'react'
import LogoDark from '../svgs/LogoDark'
import LogoLight from '../svgs/LogoLight'
import { ThemeContext } from './ThemeContext'
import React from 'react'

const Footer = () => {
    const { isDarkMode } = useContext(ThemeContext)
    const [isScaled, setIsScaled] = React.useState(false)
    const [isMobile, setIsMobile] = React.useState(false)

    React.useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 1166) {
                setIsScaled(true)
            } else {
                setIsScaled(false)
            }
            if (window.innerWidth < 600) {
                setIsMobile(true)
            } else {
                setIsMobile(false)
            }
        }

        window.addEventListener('resize', handleResize)

        handleResize()

        return () => window.removeEventListener('resize', handleResize)
    }, [])
    return (
        <Box
            as="footer"
            bottom={0}
            w={isScaled ? '90vw' : '100%'}
            paddingY={20}
            margin={isScaled ? 20 : 0}
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