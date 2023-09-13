'use client'

import {
    Container,
    Flex,
    Box,
    Icon,
    Text,
    useColorModeValue
} from '@chakra-ui/react'
import { BiSolidCopyright } from 'react-icons/bi'

export default function Footer() {
    const bg = useColorModeValue('gray.50', 'gray.900')
    const iconColor = useColorModeValue('gray.600', 'gray.300')
    const textColor = useColorModeValue('gray.600', 'gray.300')

    const currentDate = new Date()
    const currentYear = currentDate.getFullYear()

    return (
        <>
            <Container
                bg={bg}
                w={'100%'}
                maxW={'unset'}
                position={'sticky'}
                top={0}
                zIndex={2}
            >
                <Flex
                    maxW={1200}
                    m={'auto'}
                    p={5}
                    alignItems={'center'}
                    justifyContent={'center'}
                    h={'100%'}
                >
                    <Flex
                        flexDirection={'row'}
                        alignItems={'center'}
                    >
                        <Icon as={BiSolidCopyright} boxSize={5} color={iconColor} />
                        <Text
                            color={textColor}
                            fontWeight={'regular'}
                            ml={2}
                        >
                            {currentYear} Copyright by Rifqi Maulana
                        </Text>
                    </Flex>
                </Flex>
            </Container>
        </>
    )
}