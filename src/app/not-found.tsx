'use client'

import {
    Container,
    Flex,
    Box,
    Icon,
    Text,
    Button,
    Link,
    useColorModeValue
} from '@chakra-ui/react'
import { ChevronLeftIcon } from '@chakra-ui/icons'

export default function NotFound404Page() {
    const bg = useColorModeValue('white', 'gray.950')
    const cardTextColor = useColorModeValue('gray.200', 'gray.300')
    const cardBgColor = useColorModeValue('gray.950', 'gray.800')

    return (
        <>
            <Container
                bg={bg}
                w={'100%'}
                maxW={'unset'}
                minHeight={'calc(100vh)'}
            >
                <Flex
                    alignItems={'center'}
                    justifyContent={'center'}
                    h={'100%'}
                >
                    <Box
                        p={10}
                        bg={cardBgColor}
                        borderRadius={'xl'}
                        boxShadow={'2xl'}
                    >
                        <Flex
                            alignItems={'center'}
                            justifyContent={'center'}
                            flexDirection={'column'}
                            gap={5}
                        >
                            <Text
                                textAlign={'center'}
                                fontWeight={'bold'}
                                color={cardTextColor}
                                fontSize={'1.7rem'}
                            >
                                🧐
                            </Text>
                            <Text
                                textAlign={'center'}
                                fontWeight={'bold'}
                                color={cardTextColor}
                                fontSize={'1.7rem'}
                            >
                                404 | Page Not Found
                            </Text>
                            <Link href='/'>
                                <Button>
                                    <Icon
                                        fontSize={'xl'}
                                        mr={2}
                                    >
                                        <ChevronLeftIcon />
                                    </Icon>
                                    <Text>Back to Home</Text>
                                </Button>
                            </Link>
                        </Flex>
                    </Box>
                </Flex >
            </Container >
        </>
    )
}