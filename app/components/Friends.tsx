import React from 'react'
import { Heading, Box, Image, Text, Link, Tag, HStack } from '@chakra-ui/react'
import { FiExternalLink } from 'react-icons/fi'
import { FaCodeBranch } from 'react-icons/fa'

interface Friend {
    id: string
    image: string
    name: string
    username: string
    role: string
    links: string[]
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
                        <Image width={50} margin='auto' src={friend.image} alt={friend.username} />
                        <Heading size='lg' fontSize={20} lineHeight={1.2} fontWeight='bold'>{friend.name}</Heading>
                        <Text fontSize={14}>{friend.username}</Text>
                        <Text fontSize={14}>{friend.role}</Text>
                        <HStack spacing={6}>
                            {Object.entries(friend.links).map(([key, value]) => (
                                <Link href={value} key={key} target='_blank'>
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
                                    >
                                        {key} <FiExternalLink className='ml-2' />
                                    </Box>
                                </Link>
                            ))}
                        </HStack>
                    </Box>
                ))}
            </div>
        </div>
    )
}

export default Friends