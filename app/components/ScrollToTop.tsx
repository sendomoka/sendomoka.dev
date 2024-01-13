'use client'
import React, { useRef } from 'react'
import { IconButton } from '@chakra-ui/react'
import { FaArrowUp } from 'react-icons/fa'

const ScrollToTop = () => {
  const buttonRef = useRef(null)
  const handleScrollToTop = () => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }

  return (
    <div ref={buttonRef}>
      <IconButton
        icon={<FaArrowUp />}
        isRound
        size='lg'
        position='fixed'
        bottom={20}
        right={20}
        border={'2px solid'}
        borderColor='gray'
        padding={8}
        rounded={18}
        color='gray'
        _hover={{
          bg: 'teal.600'
        }}
        onClick={handleScrollToTop}
        aria-label='Scroll to top'
      />
    </div>
  )
}

export default ScrollToTop
