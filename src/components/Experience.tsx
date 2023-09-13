import {
    Container,
    Flex,
    Box,
    Text,
    Image,
    useColorModeValue,
    useColorMode,
    UnorderedList,
    ListItem
} from '@chakra-ui/react'
import { EXPERIENCES } from "@/lib/datas"
import { StaticImageData } from 'next/image';

export default function Experience() {
    const bg = useColorModeValue('white', 'gray.950')
    const cardPrimaryTextColor = useColorModeValue('gray.600', 'gray.300')
    const cardTitleColor = useColorModeValue('gray.900', 'gray.300')
    const cardBgColor = useColorModeValue('white', 'gray.800')
    const cardSecondaryTextColor = useColorModeValue('gray.600', 'gray.400')
    const { colorMode } = useColorMode()

    // Define a function to convert StaticImageData to data URL
    const staticImageToDataURL = (image: StaticImageData): string => {
        // You can't use .resolve with StaticImageData, so use a direct import path instead
        return image.src || ''
    }

    const dateFormatOptions: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'short'
    }

    return (
        <>
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
                            color={cardPrimaryTextColor}
                        >
                            🖥️ Here is a quick summary of my most recent experiences:
                        </Text>
                    </Flex>

                    <Flex
                        alignItems={'center'}
                        justifyContent={'center'}
                        h={'100%'}
                        pt={10}
                    >
                        {
                            EXPERIENCES.map((experience, index) => {
                                const logoCondition =
                                    colorMode === 'light' ? experience.logo : experience.darkModeLogo
                                const experienceLogo = logoCondition

                                return (
                                    <Box
                                        key={index}
                                        p={8}
                                        bg={cardBgColor}
                                        borderRadius={'2xl'}
                                        boxShadow={'2xl'}
                                    >
                                        <Flex
                                            gap={5}
                                        >
                                            <Flex
                                                pr={5}
                                                flexDirection={'column'}
                                            >
                                                <Image
                                                    src={
                                                        typeof experienceLogo === 'string'
                                                            ? experienceLogo
                                                            : staticImageToDataURL(experienceLogo as StaticImageData)
                                                    }
                                                    alt={experience.logoAlt}
                                                    verticalAlign={'top'}
                                                />
                                            </Flex>
                                            <Flex
                                                flexDirection={'column'}
                                                gap={5}
                                                maxW={'lg'}
                                            >
                                                <Flex
                                                    flexDirection={'column'}
                                                    gap={1}
                                                >
                                                    <Text
                                                        fontWeight={'extrabold'}
                                                        color={cardTitleColor}
                                                        fontSize={'1.2rem'}
                                                    >
                                                        {experience.position}
                                                    </Text>
                                                    <Flex
                                                        gap={1}
                                                    >
                                                        <Text
                                                            color={cardSecondaryTextColor}
                                                            fontSize={'0.9rem'}
                                                            fontWeight={'normal'}
                                                        >
                                                            at
                                                        </Text>
                                                        <Text
                                                            color={cardSecondaryTextColor}
                                                            fontSize={'0.9rem'}
                                                            fontWeight={'normal'}
                                                        >
                                                            {experience.name}
                                                        </Text>
                                                    </Flex>
                                                </Flex>
                                                <Flex
                                                    flexDirection={'column'}
                                                    gap={2}
                                                >
                                                    {
                                                        experience.summary.map((summary, index) => {
                                                            return (
                                                                <>
                                                                    <UnorderedList>
                                                                        <ListItem
                                                                            key={index}
                                                                        >
                                                                            <Text
                                                                                fontWeight={'normal'}
                                                                                color={cardPrimaryTextColor}
                                                                                fontSize={'0.9rem'}
                                                                            >
                                                                                {summary}
                                                                            </Text>
                                                                        </ListItem>
                                                                    </UnorderedList>
                                                                </>
                                                            )
                                                        })
                                                    }
                                                </Flex>
                                            </Flex>
                                            <Flex>
                                                <Text
                                                    color={cardSecondaryTextColor}
                                                    fontSize={'0.8rem'}
                                                    fontWeight={'normal'}
                                                >
                                                    {
                                                        new Intl.DateTimeFormat('en-US', dateFormatOptions)
                                                            .format(experience.startDate)
                                                    }
                                                    {' '}
                                                    {'-'}
                                                    {' '}
                                                    {
                                                        experience.currentlyWorkHere
                                                            ? 'Present'
                                                            : experience.endDate ?
                                                                new Intl.DateTimeFormat('en-US', dateFormatOptions).format(experience.endDate)
                                                                : 'NA'
                                                    }
                                                </Text>
                                            </Flex>
                                        </Flex>
                                    </Box>
                                )
                            })}
                    </Flex>
                </Container>
            </Container >
        </>
    )
}