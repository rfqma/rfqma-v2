'use client'

import {
    Container,
    useColorModeValue,
} from '@chakra-ui/react'
import Hero from '@/components/About/Hero'
import Experience from '@/components/About/Experience'

export default function HomePage() {
    const bg = useColorModeValue('white', 'gray.950')

    return (
        <>
            <Container
                bg={bg}
                w={'100%'}
                maxW={'unset'}
                minHeight={'calc(100vh)'}
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