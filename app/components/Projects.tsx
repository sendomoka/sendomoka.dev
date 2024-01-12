import React from 'react'
import { Heading, Box, Image, Text, Link, Button, Tag, HStack } from '@chakra-ui/react'
import { RiGitRepositoryFill } from 'react-icons/ri'
import { FiExternalLink } from 'react-icons/fi'

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
            <div className='flex gap-4 flex-col lg:flex-row mt-10'>
                {projects.map((project) => (
                    <Box display='flex' flexDirection='column' justifyContent='space-between' gap={6} border='1.5px solid' borderColor='light' borderRadius={7} padding={20} key={project.id}>
                        <Image width={250} margin='auto' src={project.image} alt={project.title} />
                        <Heading size='lg' fontSize={20} lineHeight={1.2} fontWeight='bold'>{project.title}</Heading>
                        <Text lineHeight={1.2}>{project.desc}</Text>
                        <HStack spacing={6}>
                            {project.tags.map((tag) => (
                                <Tag opacity='0.5' key={tag}>{tag}</Tag>
                            ))}
                        </HStack>
                        <Box display='flex' justifyContent='space-between' alignItems='center'>
                            <Link href={project.link}>
                                <Button rightIcon={<FiExternalLink />} size='md'>view</Button>
                            </Link>
                            <Link href={project.repo}>
                                <Button rightIcon={<RiGitRepositoryFill />} size='md'>repo</Button>
                            </Link>
                        </Box>
                    </Box>
                ))}
            </div>
        </div>
    )
}

export default Projects