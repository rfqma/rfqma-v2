'use client'

import {
    chakra,
    Container,
    Flex,
    Image,
    Icon,
    Text,
    useColorMode,
    useColorModeValue,
    useMediaQuery,
    IconButton,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerBody,
    VStack
} from '@chakra-ui/react'
import { SunIcon, MoonIcon, HamburgerIcon } from '@chakra-ui/icons'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
    const { colorMode, toggleColorMode } = useColorMode()
    const bg = useColorModeValue('white', 'gray.950')
    const iconColor = useColorModeValue('gray.900', 'gray.50')
    const linkColor = useColorModeValue('gray.600', 'gray.300')
    const [isLargerThan768] = useMediaQuery('(min-width: 768px)')
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    const handleDrawerToggle = () => {
        setIsDrawerOpen(!isDrawerOpen)
    }

    const desktopLayout = (
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
                        <Link href='/projects'>
                            <Text
                                fontWeight={'medium'}
                                fontSize={'0.9rem'}
                                color={linkColor}
                                p={2}
                            >
                                Projects
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
    )

    const mobileLayout = (
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
                            fontSize={'1.3rem'}
                            letterSpacing={'tighter'}
                            color={iconColor}
                        >
                            Maru Archive
                        </Text>
                    </Link>

                    <IconButton
                        aria-label={'Open Menu'}
                        icon={<HamburgerIcon />}
                        display={{ base: 'block', md: 'none' }}
                        onClick={handleDrawerToggle}
                    />

                    <Drawer
                        isOpen={isDrawerOpen}
                        placement='right'
                        onClose={handleDrawerToggle}
                        size={'xs'}
                    >
                        <DrawerOverlay />
                        <DrawerContent>
                            <DrawerCloseButton />
                            <DrawerBody>
                                <VStack
                                    spacing={4}
                                    alignItems={'flex-start'}
                                    pt={10}
                                >
                                    <Link href='/' onClick={handleDrawerToggle}>
                                        <Text
                                            fontWeight={'medium'}
                                            fontSize={'1rem'}
                                            color={linkColor}
                                        >
                                            Home
                                        </Text>
                                    </Link>
                                    <Link href='/about' onClick={handleDrawerToggle}>
                                        <Text
                                            fontWeight={'medium'}
                                            fontSize={'1rem'}
                                            color={linkColor}
                                        >
                                            About
                                        </Text>
                                    </Link>
                                    <Link href='/projects' onClick={handleDrawerToggle}>
                                        <Text
                                            fontWeight={'medium'}
                                            fontSize={'1rem'}
                                            color={linkColor}
                                        >
                                            Projects
                                        </Text>
                                    </Link>
                                    <Icon
                                        fontSize={'lg'}
                                        cursor={'pointer'}
                                        onClick={toggleColorMode}
                                        mt={4}
                                    >
                                        {
                                            colorMode === 'light' ?
                                                <SunIcon /> : <MoonIcon />
                                        }
                                    </Icon>
                                </VStack>
                            </DrawerBody>
                        </DrawerContent>
                    </Drawer>
                </Flex>
            </chakra.header>
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