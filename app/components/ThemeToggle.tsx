'use client'
import { IconButton, Tooltip } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'

const ThemeToggle = ({ isDarkMode, setIsDarkMode }: { isDarkMode: boolean, setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const [darkMode, setDarkMode] = useState(isDarkMode)
  const [tooltipLabel, setTooltipLabel] = useState('Dark Mode')

  const toggleTheme = () => {
    setDarkMode(!darkMode)
    setIsDarkMode(!darkMode)
  }

  useEffect(() => {
    const theme = localStorage.getItem('theme')
    if (theme === 'dark') {
      setDarkMode(true)
      setTooltipLabel('Dark Mode')
    }
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.remove('light')
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      setTooltipLabel('Dark Mode')
    } else {
      document.documentElement.classList.remove('dark')
      document.documentElement.classList.add('light')
      localStorage.setItem('theme', 'light')
      setTooltipLabel('Light Mode')
    }
  }, [darkMode])

  return (
    <Tooltip label={tooltipLabel} aria-label={tooltipLabel}>
      <IconButton
        aria-label={`Toggle ${darkMode ? 'Dark' : 'Light'} Mode`}
        icon={darkMode ? <FaMoon /> : <FaSun />}
        variant="ghost"
        onClick={toggleTheme}
        marginLeft={18}
        style={{ transform: 'translateY(1.5px)' }}
      />
    </Tooltip>
  )
}

export default ThemeToggle