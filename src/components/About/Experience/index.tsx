'use client'

import {
    Container,
    Flex,
    Box,
    Text,
    Image,
    useColorModeValue,
    useMediaQuery,
    ListItem,
    UnorderedList
} from '@chakra-ui/react'
import {formatDate}  from '@/lib/helpers/formatDate'
import { ExperienceProps } from '@/lib/utilities/types';
import { Key } from 'react';

export default function Experience({props}: {props: any}) {
    const bg = useColorModeValue('white', 'gray.950')
    const cardPrimaryTextColor = useColorModeValue('gray.600', 'gray.300')
    const textColor = useColorModeValue('gray.600', 'gray.300')
    const cardTitleTextColor = useColorModeValue('gray.900', 'gray.300')
    const cardBgColor = useColorModeValue('white', 'gray.800')
    const cardSecondaryTextColor = useColorModeValue('gray.600', 'gray.400')
    const [isLargerThan768] = useMediaQuery("(min-width: 768px)")

    const desktopLayout = (
        <Container
            bg={bg}
            w={'100%'}
            maxW={'unset'}
        >
            <Container
                maxW={768}
                pt={'40'}
                pb={'20'}
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
                        props.map((prop: ExperienceProps, index: Key | null | undefined) => {
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
                                                src={prop.company_logo}
                                                alt={prop.company_logo}
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
                                                    {prop.title}
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
                                                        {prop.company_name}
                                                    </Text>
                                                </Flex>
                                            </Flex>
                                            <Flex
                                                flexDirection={'column'}
                                                gap={2}
                                            >
                                                 {
                                                    prop.description.split('\n\n').map((item, index) => {
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
                                                                            {item}
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
                                                {formatDate(prop.start_date)}
                                                {' '}
                                                {'-'}
                                                {' '}
                                                {formatDate(prop.end_date)}
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
            pt={'20'}
            pb={'20'}
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
                    props.map((prop: ExperienceProps, index: Key | null | undefined) => {
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
                                        src={prop.company_logo}
                                        alt={prop.company_logo}
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
                                                {prop.title}
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
                                                    {prop.company_name}
                                                </Text>
                                            </Flex>
                                            <Flex>
                                                <Text
                                                    color={cardSecondaryTextColor}
                                                    fontSize={'0.7rem'}
                                                    fontWeight={'normal'}
                                                >
                                                    {formatDate(prop.start_date)}
                                                    {' '}
                                                    {'-'}
                                                    {' '}
                                                    {formatDate(prop.end_date)}
                                                </Text>
                                            </Flex>
                                        </Flex>
                                        <Flex
                                            flexDirection={'column'}
                                            gap={2}
                                        >
                                            {
                                                    prop.description.split('\n\n').map((item, index) => {
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
                                                                            {item}
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
    )

    return (
        <>
            {
                isLargerThan768 ? desktopLayout : mobileLayout
            }
        </>
    )
}