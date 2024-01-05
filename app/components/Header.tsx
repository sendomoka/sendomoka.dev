'use client'
import { Box, Flex } from '@chakra-ui/react'
import Link from 'next/link'
import { useContext } from 'react'
import Navigation from './Navigation'
import ThemeToggle from './ThemeToggle'
import LogoDark from './LogoDark'
import LogoLight from './LogoLight'
import { ThemeContext } from './ThemeContext'

const Header = () => {
const { isDarkMode, toggleTheme } = useContext(ThemeContext)
  return (
    <Box
        as="header"
        position="fixed"
        top={0}
        zIndex={5}
        width="100%"
        paddingY={20}
        paddingX={200}
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
            <Flex display={['none', 'flex']}>
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