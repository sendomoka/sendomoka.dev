'use client'
import { createContext, useState } from 'react'

export const ThemeContext = createContext({
    isDarkMode: true, 
    toggleTheme: () => {}  
  })
  
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [isDarkMode, setIsDarkMode] = useState(true)
  
    const toggleTheme = () => {
      setIsDarkMode(prev => !prev)  
    }
  
    return (
      <ThemeContext.Provider
        value={{isDarkMode, toggleTheme}}
      >
        {children} 
      </ThemeContext.Provider>
    ) 
}