'use client'

import {
    chakra,
    Container,
    Flex,
    Image,
    Icon,
    Text,
    useColorMode,
    useColorModeValue
} from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import Link from 'next/link'

export default function Header() {
    const { colorMode, toggleColorMode } = useColorMode()
    const bg = useColorModeValue('white', 'gray.950')
    const iconColor = useColorModeValue('gray.900', 'gray.50')
    const linkColor = useColorModeValue('gray.600', 'gray.300')

    return (
        <>
            <Container
                bg={bg}
                w={'100%'}
                maxW={'unset'}
                padding={2}
                position={'sticky'}
                top={0}
                zIndex={2}
            >
                <chakra.header maxW={1200} m={'auto'} id='header'>
                    <Flex
                        w={'100%'}
                        py={1}
                        alignItems={'center'}
                        justify={'space-between'}
                    >
                        <Link href='/'>
                            <Text
                                fontWeight={'bold'}
                                fontSize={'1.5rem'}
                                letterSpacing={'tighter'}
                                color={iconColor}
                            >
                                Maru Archive
                            </Text>
                        </Link>

                        <Flex
                            display={'inherit'}
                            alignItems={'center'}
                            fontSize={'1rem'}
                            gap={5}
                        >
                            <Link href='/'>
                                <Text
                                    fontWeight={'medium'}
                                    fontSize={'0.9rem'}
                                    color={linkColor}
                                    p={2}
                                >
                                    Home
                                </Text>
                            </Link>
                            <Link href='/about'>
                                <Text
                                    fontWeight={'medium'}
                                    fontSize={'0.9rem'}
                                    color={linkColor}
                                    p={2}
                                >
                                    About
                                </Text>
                            </Link>
                            <Link href='/works'>
                                <Text
                                    fontWeight={'medium'}
                                    fontSize={'0.9rem'}
                                    color={linkColor}
                                    p={2}
                                >
                                    Works
                                </Text>
                            </Link>
                            <Icon
                                fontSize={'lg'}
                                cursor={'pointer'}
                                ml={5}
                                onClick={toggleColorMode}
                            >
                                {
                                    colorMode === 'light' ?
                                        <SunIcon /> : <MoonIcon />
                                }
                            </Icon>
                        </Flex>
                    </Flex>
                </chakra.header>
            </Container>
        </>
    )
}