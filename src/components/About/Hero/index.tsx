'use client'

import {
    Flex,
    Box,
    Text,
    Image,
    useColorModeValue,
    useMediaQuery
} from '@chakra-ui/react'

export default function Hero() {
    const textColor = useColorModeValue('gray.600', 'gray.300')
    const titleColor = useColorModeValue('gray.900', 'gray.300')
    const cardBgColor = useColorModeValue('white', 'gray.800')
    const [isLargerThan768] = useMediaQuery('(min-width: 768px)')

    const desktopLayout = (
        <Flex
            alignItems={'center'}
            justifyContent={'center'}
            h={'100%'}
            gap={20}
        >

            <Box
                p={150}
                bg={cardBgColor}
                borderRadius={'3xl'}
                boxShadow={'2xl'}
                position={'relative'}
            >
                <Flex
                    alignItems={'center'}
                    justifyContent={'center'}
                    flexDirection={'column'}
                >
                    <Image
                        borderRadius={'3xl'}
                        boxSize={'300px'}
                        src={'/images/rifqimaulana-headshot.png'}
                        alt={'rifqimaulana-headshot.png'}
                        position={'absolute'}
                        top={'-20px'}
                        right={'-20px'}
                    />
                </Flex>
            </Box>

            <Box
                p={12}
                bg={cardBgColor}
                borderRadius={'xl'}
                boxShadow={'2xl'}
            >
                <Flex
                    flexDirection={'column'}
                    gap={3}
                >
                    <Flex
                        flexDirection={'column'}
                        gap={5}
                    >
                        <Flex>
                            <Text
                                fontWeight={'extrabold'}
                                color={titleColor}
                                fontSize={'2.5rem'}
                            >
                                Curious about me?
                            </Text>
                        </Flex>
                        <Flex
                            flexDirection={'column'}
                            gap={3}
                        >
                            <Text
                                fontWeight={'normal'}
                                color={textColor}
                                fontSize={'0.9rem'}
                            >
                                I&apos;m a 20 years old who passionate about photography, videography, and informatics,
                                I am an ambitious student pursuing a degree in informatics at Universitas Pembangunan Nasional Veteran Yogyakarta.
                            </Text>
                            <Text
                                fontWeight={'normal'}
                                color={textColor}
                                fontSize={'0.9rem'}
                            >
                                Alongside my studies, I actively engage in freelance work,
                                utilizing my skills and creativity to capture unforgettable moments through photography and videography.
                                With a strong technical background and a deep appreciation for visual storytelling,
                                I bring a unique blend of expertise to every project.
                            </Text>
                            <Text
                                fontWeight={'normal'}
                                color={textColor}
                                fontSize={'0.9rem'}
                            >
                                Combining my passion for technology and the arts,
                                I am dedicated to delivering exceptional visual content that resonates with audiences.
                                Let&apos;s connect and explore the power of visuals together.
                            </Text>
                        </Flex>
                    </Flex>
                </Flex>
            </Box>
        </Flex>
    )

    const mobileLayout = (
        <Flex
            alignItems={'center'}
            justifyContent={'center'}
            h={'100%'}
            gap={12}
            flexDirection={'column'}
        >

            <Box
                p={150}
                bg={cardBgColor}
                borderRadius={'3xl'}
                boxShadow={'2xl'}
                position={'relative'}
            >
                <Flex
                    alignItems={'center'}
                    justifyContent={'center'}
                    flexDirection={'column'}
                >
                    <Image
                        borderRadius={'3xl'}
                        boxSize={'300px'}
                        src={'/images/rifqimaulana-headshot.png'}
                        alt={'rifqimaulana-headshot.png'}
                        position={'absolute'}
                        top={'-20px'}
                        right={'-20px'}
                    />
                </Flex>
            </Box>

            <Box
                p={9}
                bg={cardBgColor}
                borderRadius={'xl'}
                boxShadow={'2xl'}
            >
                <Flex
                    flexDirection={'column'}
                    gap={3}
                >
                    <Flex
                        flexDirection={'column'}
                        gap={5}
                    >
                        <Flex>
                            <Text
                                fontWeight={'extrabold'}
                                color={titleColor}
                                fontSize={'2rem'}
                            >
                                Curious about me?
                            </Text>
                        </Flex>
                        <Flex
                            flexDirection={'column'}
                            gap={3}
                        >
                            <Text
                                fontWeight={'normal'}
                                color={textColor}
                                fontSize={'0.9rem'}
                            >
                                I&apos;m a 20 years old who passionate about photography, videography, and informatics,
                                I am an ambitious student pursuing a degree in informatics at Universitas Pembangunan Nasional Veteran Yogyakarta.
                            </Text>
                            <Text
                                fontWeight={'normal'}
                                color={textColor}
                                fontSize={'0.9rem'}
                            >
                                Alongside my studies, I actively engage in freelance work,
                                utilizing my skills and creativity to capture unforgettable moments through photography and videography.
                                With a strong technical background and a deep appreciation for visual storytelling,
                                I bring a unique blend of expertise to every project.
                            </Text>
                            <Text
                                fontWeight={'normal'}
                                color={textColor}
                                fontSize={'0.9rem'}
                            >
                                Combining my passion for technology and the arts,
                                I am dedicated to delivering exceptional visual content that resonates with audiences.
                                Let&apos;s connect and explore the power of visuals together.
                            </Text>
                        </Flex>
                    </Flex>
                </Flex>
            </Box>
        </Flex>
    )

    return (
        <>
            {
                isLargerThan768 ? desktopLayout : mobileLayout
            }
        </>
    )
}