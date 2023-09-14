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
            >
                <Container
                    maxW={1200}
                    py={'40'}
                >
                    <HeroAbout />
                    <Experience />
                </Container>
            </Container >
        </>
    )
}