'use client'

import {
    Container,
    useColorModeValue,
} from '@chakra-ui/react'
import HeroAbout from '@/components/HeroAbout'
import Experience from '@/components/Experience'

export default function HomePage() {
    const bg = useColorModeValue('white', 'gray.950')

    return (
        <>
            <Container
                bg={bg}
                w={'100%'}
                maxW={'unset'}
                h={'130vh'}
            >
                <Container
                    maxW={1200}
                    pt={'40'}
                >
                    <HeroAbout />
                    <Experience />
                </Container>
            </Container >
        </>
    )
}