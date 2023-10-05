'use client'

import {
    Container,
    useColorModeValue,
} from '@chakra-ui/react'
import Works from '@/components/Projects'

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
                    pb={40}
                >
                    <Works />
                </Container>
            </Container >
        </>
    )
}