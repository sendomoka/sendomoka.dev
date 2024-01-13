import React from 'react'
import { Heading, Box, Image, Text, Link, Tag, HStack } from '@chakra-ui/react'
import { FiExternalLink } from 'react-icons/fi'
import { FaCodeBranch } from 'react-icons/fa'

interface Project {
    id: string
    title: string
    desc: string
    link: string
    repo: string
    image: string
    tags: string[]
}

const getProjects = async (): Promise<Project[]> => {
    const res = await fetch('https://raw.githubusercontent.com/sendomoka/sendomoka.dev/main/app/api/projects.json')
    if (!res.ok) {
        throw new Error('Failed to fetch projects')
    }
    return res.json()
}

const Projects = async () => {
    const projects: Project[] = await getProjects()
    return (
        <div id='projects' className='mx-5 my-40 lg:mx-[200px]'>
            <Heading size='lg' fontSize={30} lineHeight='1.1' fontWeight='bold' marginBottom={20}>Projects</Heading>
            <Text marginTop={-10} marginBottom={10} opacity={0.7}>Here are some of my projects that I have worked on.</Text>
            <div className='flex gap-4 flex-col lg:flex-row mt-10'>
                {projects.map((project) => (
                    <Box display='flex' flexDirection='column' justifyContent='space-between' gap={6} border='1.5px solid' borderColor='light' borderRadius={7} padding={20} key={project.id}>
                        <Image width={250} margin='auto' src={project.image} alt={project.title} />
                        <Heading size='lg' fontSize={20} lineHeight={1.2} fontWeight='bold'>{project.title}</Heading>
                        <Text fontSize={14}>{project.desc}</Text>
                        <HStack spacing={6}>
                            {project.tags.map((tag) => (
                                <Tag opacity='0.5' fontSize={14} key={tag}>{tag}</Tag>
                            ))}
                        </HStack>
                        <Box display='flex' justifyContent='space-between' alignItems='center'>
                            <Link href={project.link} target='_blank'>
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
                                    view
                                    <FiExternalLink className='ml-2' />
                                </Box>
                            </Link>
                            <Link href={project.repo} target='_blank'>
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
                                    repo
                                    <FaCodeBranch className='ml-2' />
                                </Box>
                            </Link>
                        </Box>
                    </Box>
                ))}
            </div>
        </div>
    )
}

export default Projects