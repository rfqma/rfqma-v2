'use client'

import {
    Container,
    Grid,
    GridItem,
    Flex,
    Text,
    Link,
    Image,
    useColorModeValue,
    useColorMode,
    useMediaQuery,
} from '@chakra-ui/react'
import { techStacks } from "@/lib/utilities/data"
import { StaticImageData } from 'next/image';

export default function Tech() {
    const bg = useColorModeValue('white', 'gray.950')
    const textColor = useColorModeValue('gray.600', 'gray.300')
    const { colorMode } = useColorMode()
    const [isLargerThan768] = useMediaQuery('(min-width: 768px)')

    const staticImageToDataURL = (image: StaticImageData): string => {
        return image.src || ''
    }

    const desktopLayout = (
        <Container
            bg={bg}
            w={'100%'}
            maxW={'unset'}
        >
            <Container
                maxW={1200}
                pt={'40'}
            >
                <Flex
                    display={'flex'}
                    flexDirection={'column'}
                    alignItems={'center'}
                    gap={4}
                >
                    <Text
                        fontWeight={'normal'}
                        fontSize={'1.1rem'}
                        color={textColor}
                    >
                        ⛏️ The tools and technologies I usually use:
                    </Text>
                </Flex>
                <Grid
                    templateColumns={'repeat(4, minmax(0, 1fr))'}
                    rowGap={12}
                    mt={10}
                >
                    {
                        techStacks.map((tech, index) => {
                            const logoCondition =
                                colorMode === 'light' ? tech.logo : tech.darkModeLogo
                            const techLogo = logoCondition

                            return (
                                <GridItem
                                    key={index}
                                    display={'flex'}
                                    flexDirection={'column'}
                                    alignItems={'center'}
                                    gap={2}
                                >
                                    <Link href={tech.url}>
                                        <Image
                                            src={
                                                typeof techLogo === 'string'
                                                    ? techLogo
                                                    : staticImageToDataURL(techLogo as StaticImageData)
                                            }
                                            alt={tech.label}
                                            _hover={{
                                                transform: 'scale(1.1)'
                                            }}
                                            transition={'transform 0.3s ease'}
                                            width={65}
                                            height={65}
                                        />
                                    </Link>
                                    <Text
                                        fontWeight={'normal'}
                                        fontSize={'0.8rem'}
                                        color={textColor}
                                    >
                                        {tech.label}
                                    </Text>
                                </GridItem>
                            )
                        })
                    }
                </Grid>
            </Container>
        </Container >
    )

    const mobileLayout = (
        <Container
            bg={bg}
            w={'100%'}
            maxW={'unset'}
        >
            <Container
                maxW={1200}
                pt={'40'}
                textAlign={'center'}
                alignItems={'center'}
            >
                <Flex
                    display={'flex'}
                    flexDirection={'column'}
                    gap={4}
                >
                    <Text
                        fontWeight={'normal'}
                        fontSize={'1rem'}
                        color={textColor}
                    >
                        🔨 The tools and technologies I usually use:
                    </Text>
                </Flex>
                <Grid
                    templateColumns={'repeat(3, minmax(0, 1fr))'}
                    rowGap={8}
                    mt={10}
                >
                    {
                        techStacks.map((tech, index) => {
                            const logoCondition =
                                colorMode === 'light' ? tech.logo : tech.darkModeLogo
                            const techLogo = logoCondition

                            return (
                                <GridItem
                                    key={index}
                                    display={'flex'}
                                    flexDirection={'column'}
                                    alignItems={'center'}
                                    textAlign={'center'}
                                    gap={2}
                                >
                                    <Link href={tech.url}>
                                        <Image
                                            src={
                                                typeof techLogo === 'string'
                                                    ? techLogo
                                                    : staticImageToDataURL(techLogo as StaticImageData)
                                            }
                                            alt={tech.label}
                                            _hover={{
                                                transform: 'scale(1.1)'
                                            }}
                                            transition={'transform 0.3s ease'}
                                            width={50}
                                            height={50}
                                        />
                                    </Link>
                                    <Text
                                        fontWeight={'normal'}
                                        fontSize={'0.7rem'}
                                        color={textColor}
                                    >
                                        {tech.label}
                                    </Text>
                                </GridItem>
                            )
                        })
                    }
                </Grid>
            </Container>
        </Container >
    )

    return (
        <>
            {
                isLargerThan768 ? desktopLayout : mobileLayout
            }
        </>
    )
}