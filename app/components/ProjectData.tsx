'use client'
import { Box, Heading } from '@chakra-ui/react'
import React from 'react'

const ProjectsData = () => {
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
            w={isScaled ? '90vw' : '100%'}
            h={isMobile ? 'auto' : '70vh'}
            paddingX={isScaled ? 0 : 200}
            display='flex'
            justifyContent='center'
            alignItems='start'
            flexDirection='column'
            marginLeft={isScaled ? 20 : 0}
            marginRight={isScaled ? -70 : 0}
            id='projectsData'
        >
            <Heading size='lg' fontSize='30px' lineHeight='1.1' fontWeight='bold' marginBottom={20}>
                ProjectsData
            </Heading>
            
        </Box>
    )
}

export default ProjectsData