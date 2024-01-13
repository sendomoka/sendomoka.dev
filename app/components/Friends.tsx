import React from 'react'
import { Heading, Box, Image, Text, Link, HStack } from '@chakra-ui/react'
import { FiExternalLink } from 'react-icons/fi'
import { FaGithub, FaGlobe } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

interface Friend {
    id: string
    image: string
    name: string
    username: string
    role: string
    links: { label: string, url: string }[]
}

const getFriends = async (): Promise<Friend[]> => {
    const res = await fetch('https://raw.githubusercontent.com/sendomoka/sendomoka.dev/main/app/api/friends.json')
    if (!res.ok) {
        throw new Error('Failed to fetch friends')
    }
    return res.json()
}

const Friends = async () => {
    const friends: Friend[] = await getFriends()
    return (
        <div id='friends' className='mx-5 my-40 lg:mx-[200px]'>
            <Heading size='lg' fontSize={30} lineHeight='1.1' fontWeight='bold' marginBottom={20}>Friends</Heading>
            <Text marginTop={-10} marginBottom={10} opacity={0.7}>Meet my friends, they are awesome.</Text>
            <div className='flex gap-4 flex-col lg:flex-row mt-10'>
                {friends.map((friend) => (
                    <Box display='flex' flexDirection='column' justifyContent='space-between' alignItems='center' gap={6} border='1.5px solid' borderColor='light' borderRadius={7} padding={20} key={friend.id}>
                        <Image boxSize='80px' margin='auto' borderRadius='80px' bg='white' src={friend.image} alt={friend.username} />
                        <Heading size='lg' fontSize={20} lineHeight={1.2} fontWeight='bold'>{friend.name}</Heading>
                        <Text fontSize={14} opacity={0.5}>{friend.username}</Text>
                        <Text fontSize={14} bg='rgba(136, 190, 255, 0.50)' paddingY={3} paddingX={6} rounded={4}>{friend.role}</Text>
                        <HStack spacing={6}>
                            {friend.links.map((link) => (
                                <Box
                                    as='button'
                                    display='inline-flex'
                                    alignItems='center'
                                    justifyContent='center'
                                    transition='0.3s'
                                    _hover={{
                                        transform: 'translateY(-3px)',
                                        textDecoration: 'underline'
                                    }}
                                    key={link.label}
                                >
                                    <Link href={link.url} target='_blank' display='inline-flex' alignItems='center' gap={6}> 
                                        {link.label === 'Github' ? (
                                            <>
                                            <FaGithub className='ml-2' /> {link.label}
                                            </>
                                        ) : link.label === 'Website' ? (
                                            <>
                                            <FaGlobe className='ml-2' /> {link.label}
                                            </>
                                        ) : link.label === 'Twitter' ? (
                                            <>
                                            <FaXTwitter className='ml-2' /> {link.label}
                                            </>
                                        ) : (
                                            <>
                                            <FiExternalLink className='ml-2' /> {link.label}
                                            </>
                                        )}
                                    </Link>
                                </Box>
                            ))}
                        </HStack>
                    </Box>
                ))}
                <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' gap={6} border='1.5px solid' borderColor='light' borderRadius={7} padding={20} opacity={0.3}>
                    <Text fontSize={14}>Want to be my friend?</Text>
                    <Text fontSize={14}>DM me on <Link href='https://twitter.com/sendomoka' target='_blank' textDecoration='underline'>Twitter!</Link></Text>
                </Box>
            </div>
        </div>
    )
}

export default Friends