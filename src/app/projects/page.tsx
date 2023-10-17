import { Container } from '@chakra-ui/react'
import Projects from '@/components/Projects'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Projects',
    alternates: {
        canonical: '/projects',
    }
}

export default function HomePage() {
    return (
        <>
            <Container
                bg={'white'}
                w={'100%'}
                maxW={'unset'}
                minHeight={'calc(100vh)'}
                _dark={{ bg: 'gray.950' }}
            >
                <Container
                    maxW={1200}
                    pb={40}
                >
                    <Projects />
                </Container>
            </Container >
        </>
    )
}