'use client'
import { Box, Flex } from '@chakra-ui/react'
import Link from 'next/link'
import { useContext } from 'react'
import Navigation from './Navigation'
import ThemeToggle from './ThemeToggle'
import LogoDark from '../svgs/LogoDark'
import LogoLight from '../svgs/LogoLight'
import { ThemeContext } from './ThemeContext'
import React from 'react'

const Header = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext)
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
      as="header"
      top={0}
      w={isScaled ? '90vw' : '100%'}
      paddingY={20}
      paddingX={isScaled ? 0 : 200}
      margin={isScaled ? 20 : 0}
    >
      <Flex layerStyle="layoutBlock" alignItems="center" justifyContent="space-between">
        <Link href="/">
          {isDarkMode ? (
            <LogoDark width='170px' height='40px' />
          ) : (
            <LogoLight width='170px' height='40px' />
          )
          }
        </Link>
        <Flex alignItems="center" gap={4}>
          <Flex display={isMobile ? 'none' : 'flex'}>
            <Navigation />
          </Flex>
          <Flex>
            <ThemeToggle
              isDarkMode={isDarkMode}
              setIsDarkMode={toggleTheme}
            />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Header