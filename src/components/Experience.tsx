import {
    Container,
    Flex,
    Box,
    Text,
    Image,
    useColorModeValue,
    useColorMode,
    UnorderedList,
    ListItem,
    useMediaQuery
} from '@chakra-ui/react'
import { EXPERIENCES } from "@/lib/datas"
import { StaticImageData } from 'next/image';

export default function Experience() {
    const bg = useColorModeValue('white', 'gray.950')
    const cardPrimaryTextColor = useColorModeValue('gray.600', 'gray.300')
    const textColor = useColorModeValue('gray.600', 'gray.300')
    const cardTitleTextColor = useColorModeValue('gray.900', 'gray.300')
    const cardBgColor = useColorModeValue('white', 'gray.800')
    const cardSecondaryTextColor = useColorModeValue('gray.600', 'gray.400')
    const { colorMode } = useColorMode()
    const [isLargerThan768] = useMediaQuery("(min-width: 768px)")

    // Define a function to convert StaticImageData to data URL
    const staticImageToDataURL = (image: StaticImageData): string => {
        // You can't use .resolve with StaticImageData, so use a direct import path instead
        return image.src || ''
    }

    const dateFormatOptions: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'short'
    }

    const desktopLayout = (
        <Container
            bg={bg}
            w={'100%'}
            maxW={'unset'}
        >
            <Container
                maxW={768}
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
                    flexDirection={'column'}
                    gap={10}
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
                                        justifyContent={'space-between'}
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
                                                maxWidth={45}
                                            />
                                        </Flex>
                                        <Flex
                                            flexDirection={'column'}
                                            gap={5}
                                            maxW={'lg'}
                                            flex={1}
                                        >
                                            <Flex
                                                flexDirection={'column'}
                                                gap={1}
                                            >
                                                <Text
                                                    fontWeight={'extrabold'}
                                                    color={cardTitleTextColor}
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
            >
                <Flex
                    flexDirection={'column'}
                    gap={4}
                    textAlign={'center'}
                >
                    <Text
                        fontWeight={'normal'}
                        fontSize={'1rem'}
                        color={textColor}
                    >
                        🖥️ Here is a quick summary of my most recent experiences:
                    </Text>
                </Flex>

                <Flex
                    h={'100%'}
                    pt={10}
                    flexDirection={'column'}
                    gap={10}
                >
                    {
                        EXPERIENCES.map((experience, index) => {
                            const logoCondition =
                                colorMode === 'light' ? experience.logo : experience.darkModeLogo
                            const experienceLogo = logoCondition

                            return (
                                <Box
                                    key={index}
                                    p={6}
                                    bg={cardBgColor}
                                    borderRadius={'2xl'}
                                    boxShadow={'2xl'}
                                >
                                    <Flex
                                        flexDirection={'column'}
                                        gap={5}
                                    >
                                        <Image
                                            src={
                                                typeof experienceLogo === 'string'
                                                    ? experienceLogo
                                                    : staticImageToDataURL(experienceLogo as StaticImageData)
                                            }
                                            alt={experience.logoAlt}
                                            verticalAlign={'top'}
                                            maxWidth={45}
                                        />
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
                                                    color={cardTitleTextColor}
                                                    fontSize={'1.1rem'}
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
                                                <Flex>
                                                    <Text
                                                        color={cardSecondaryTextColor}
                                                        fontSize={'0.7rem'}
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
                                    </Flex>
                                </Box>
                            )
                        })}
                </Flex>
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