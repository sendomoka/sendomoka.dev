'use client'
import { Box, Heading, Image, Text, Tooltip, IconButton, Link } from '@chakra-ui/react'
import React from 'react'
import { FaLinkedin, FaGithub, FaInstagram, FaMedium, FaDiscord } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { SiTableau } from 'react-icons/si'

const Hero = () => {
    const socData = [
        { label: 'Linkedin', icon: <FaLinkedin />, route: 'https://www.linkedin.com/in/jehianth/' },
        { label: 'Github', icon: <FaGithub />, route: 'https://github.com/sendomoka' },
        { label: 'Medium', icon: <FaMedium />, route: 'https://medium.com/@sendomoka' },
        { label: 'Tableau', icon: <SiTableau />, route: 'https://public.tableau.com/app/profile/sendo.moka/vizzes' },
        { label: 'Twitter X', icon: <FaXTwitter />, route: 'https://twitter.com/sendomoka' },
        { label: 'Instagram', icon: <FaInstagram />, route: 'https://instagram.com/jehianth' },
        { label: 'Discord', icon: <FaDiscord />, route: 'https://discordapp.com/users/589304761921306638' },
    ]
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
        >
            <Box userSelect='none' transform={isScaled ? 'scale(1.1)' : ''}>
                <Tooltip label="Github Profile Pic" aria-label="A tooltip">
                    <Image
                        src='https://avatars.githubusercontent.com/u/55863992?v=4'
                        alt='Picture of the author'
                        width={70}
                        height={70}
                        borderRadius='70px'
                        border={'2px solid #88beff'}
                    />
                </Tooltip>
                <Image
                    src='https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif'
                    alt='Gif'
                    width={25}
                    height={25}
                    transform={'scaleX(-1) translate(-52px, -30px)'}
                />
            </Box>
            <Heading size='lg' fontSize={isMobile ? '40px' : '50px'} lineHeight='1.1' fontWeight='bold' marginBottom={20}>
                Software Engineer, TypeScript Enthusiast, based in Central Java
            </Heading>
            <Text fontSize='18px' opacity={0.7}>
                I am Jehian Athaya, also known as sendomoka, a software engineer based in Central Java, Indonesia specializing in building (occasionally designing) exceptional websites, applications, and everything in between. Additionally, I am a informatics student at Jenderal Soedirman University.
            </Text>
            <Box transform={isScaled ? 'scale(1.3) translateX(25px)' : ''}>
                {socData.map(({ label, icon, route }, index) => (
                    <Link key={index} href={route}>
                        <Tooltip label={label} aria-label={label}>
                            <IconButton
                                aria-label={label}
                                icon={React.cloneElement(icon)}
                                variant="ghost"
                                marginTop={20}
                                marginRight={index < socData.length - 1 ? 20 : 0}
                                style={{
                                    transform: 'scale(1.3)'
                                }}
                            />
                        </Tooltip>
                    </Link>
                ))}
            </Box>
        </Box>
    )
}

export default Hero
