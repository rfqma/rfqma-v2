'use client'

import {
    Container,
    Flex,
    Text,
    useColorModeValue,
    useMediaQuery
} from '@chakra-ui/react'

export default function Footer() {
    const bg = useColorModeValue('gray.50', 'gray.900')
    const textColor = useColorModeValue('gray.600', 'gray.300')
    const [isLargerThan768] = useMediaQuery('(min-width: 768px)')

    const currentDate = new Date()
    const currentYear = currentDate.getFullYear()

    const desktopLayout = (
        <Container
            bg={bg}
            w={'100%'}
            maxW={'unset'}
            position={'fixed'}
            left={0}
            bottom={0}
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
                    <Text
                        color={textColor}
                        fontWeight={'regular'}
                        ml={2}
                    >
                        &copy; {currentYear} Copyright by Rifqi Maulana
                    </Text>
                </Flex>
            </Flex>
        </Container>
    )

    const mobileLayout = (
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
                    <Text
                        color={textColor}
                        fontWeight={'regular'}
                        ml={2}
                        fontSize={'0.8rem'}
                    >
                        &copy; {currentYear} Copyright by Rifqi Maulana
                    </Text>
                </Flex>
            </Flex>
        </Container>
    )

    return (
        <>
            {
                isLargerThan768 ? desktopLayout : mobileLayout
            }
        </>
    )
}