'use client'

import {
    Flex,
    Box,
    Text,
    Image,
    useColorModeValue,
    useMediaQuery
} from '@chakra-ui/react'

export default function Hero({props}: {props: any}) {
    const textColor = useColorModeValue('gray.600', 'gray.300')
    const titleColor = useColorModeValue('gray.900', 'gray.300')
    const cardBgColor = useColorModeValue('white', 'gray.800')
    const [isLargerThan768] = useMediaQuery('(min-width: 768px)')

    const desktopLayout = (
        <Flex
            alignItems={'center'}
            justifyContent={'center'}
            h={'100%'}
            gap={32}
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
                        src={props[0].image}
                        alt={props[0].image}
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
                                {props[0].title}
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
                                className='whitespace-pre-line'
                            >
                                {props[0].description}
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
            gap={10}
            flexDirection={'column'}
        >

            <Box
                p={140}
                pb={115}
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
                        boxSize={'250px'}
                        src={props[0].image}
                        alt={props[0].image}
                        position={'absolute'}
                        top={'-10px'}
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
                                fontSize={'1.4rem'}
                            >
                                {props[0].title}
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
                                className='whitespace-pre-line'
                            >
                                {props[0].description}
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