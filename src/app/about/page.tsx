import { Container } from '@chakra-ui/react'
import Hero from '@/components/About/Hero'
import Experience from '@/components/About/Experience'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'About',
    description: 'Rifqi Maulana Personal Portfolio Website',
    alternates: {
        canonical: '/about',
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
                    py={'40'}
                >
                    <Hero />
                    <Experience />
                </Container>
            </Container >
        </>
    )
}