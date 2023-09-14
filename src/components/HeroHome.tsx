'use client'

import {
    Flex,
    Box,
    Icon,
    Text,
    Image,
    Link,
    useColorModeValue,
    useMediaQuery
} from '@chakra-ui/react'
import { HiLocationMarker } from 'react-icons/hi'
import { GoDotFill } from 'react-icons/go'
import { AiFillEye, AiFillCopy } from 'react-icons/ai'
import Social from '@/components/Social'
import { EXTERNAL_LINKS } from '@/lib/datas'
import { copyTextToClipboard } from '@/lib/utils'

export default function HeroHome() {
    const iconColor = useColorModeValue('gray.600', 'gray.400')
    const textColor = useColorModeValue('gray.600', 'gray.300')
    const titleColor = useColorModeValue('gray.900', 'gray.300')
    const cardBgColor = useColorModeValue('white', 'gray.800')
    const buttonBgColor = useColorModeValue('gray.900', 'gray.200')
    const buttonIconColor = useColorModeValue('gray.300', 'gray.600')
    const buttonHoverBgColor = useColorModeValue('gray.200', 'gray.600')
    const buttonHoverIconColor = useColorModeValue('gray.600', 'gray.300')
    const borderColor = useColorModeValue('gray.200', 'gray.600')
    const [isLargerThan768] = useMediaQuery('(min-width: 768px)')

    type CopyValue = 'email'

    const handleCopyText = async (text: string, type: CopyValue) => {
        try {
            await copyTextToClipboard(text)
            let timeoutId: any = setTimeout(() => {
                clearTimeout(timeoutId)
            }, 1500)
        } catch (error) {
            alert('Failed to copy text!')
            console.log(error)
        }
    }

    const desktopLayout = (
        <Flex
            alignItems={'center'}
            justifyContent={'center'}
            h={'100%'}
            gap={20}
        >

            <Box
                p={10}
                bg={cardBgColor}
                borderRadius={'xl'}
                boxShadow={'2xl'}
                pr={'36'}
            >
                <Flex
                    flexDirection={'column'}
                    gap={3}
                >
                    <Flex
                        flexDirection={'column'}
                    >
                        <Text
                            fontWeight={'extrabold'}
                            color={titleColor}
                            fontSize={'3rem'}
                        >
                            Hi, I'm Rifqi
                        </Text>
                        <Text
                            fontWeight={'normal'}
                            color={textColor}
                            fontSize={'0.9rem'}
                        >
                            a 20yo Minimalist. Digital Native, Photography and Videography Enthusiast. <br />
                            Undergraduate student majoring on Computer Engineering.
                        </Text>
                    </Flex>
                    <Flex
                        flexDirection={'column'}
                        gap={1}
                        mt={5}
                    >
                        <Link href={EXTERNAL_LINKS.MAP}>
                            <Flex
                                gap={2}
                            >
                                <Icon as={HiLocationMarker} boxSize={6} color={iconColor} />
                                <Text
                                    fontWeight={'normal'}
                                    color={textColor}
                                    fontSize={'0.9rem'}
                                >
                                    Belitung, Indonesia
                                </Text>
                            </Flex>
                        </Link>
                        <Flex
                            gap={2}
                        >
                            <Icon as={GoDotFill} boxSize={6} color={'emerald'} />
                            <Text
                                fontWeight={'normal'}
                                color={textColor}
                                fontSize={'0.9rem'}
                            >
                                Available for new projects
                            </Text>
                        </Flex>
                    </Flex>
                    <Flex
                        mt={5}
                    >
                        <Social />
                    </Flex>
                </Flex>
            </Box>

            <Box
                p={10}
                pb={5}
                bg={cardBgColor}
                borderRadius={'xl'}
                boxShadow={'2xl'}
                position={'relative'}
            >
                <Flex
                    alignItems={'center'}
                    justifyContent={'center'}
                    flexDirection={'column'}
                >
                    <Image
                        borderRadius={'full'}
                        boxSize={'160px'}
                        src={'/images/rifqimaulana-memoji.png'}
                        alt={'rifqimaulana-memoji.png'}
                        position={'absolute'}
                        top={'-75px'}
                    />
                    <Flex
                        flexDirection={'column'}
                        mt={'65px'}
                        gap={1}
                    >
                        <Text
                            textAlign={'center'}
                            fontWeight={'semibold'}
                            color={titleColor}
                            fontSize={'1rem'}
                        >
                            Rifqi Maulana
                        </Text>
                        <Flex
                            gap={2}
                            alignItems={'center'}
                        >
                            <Link href={EXTERNAL_LINKS.MAILTO}>
                                <Text
                                    textAlign={'center'}
                                    fontWeight={'semibold'}
                                    color={textColor}
                                    fontSize={'0.9rem'}
                                >
                                    {EXTERNAL_LINKS.EMAIL}
                                </Text>
                            </Link>
                            <Icon
                                as={AiFillCopy}
                                boxSize={4}
                                color={iconColor}
                                cursor={'pointer'}
                                onClick={() => handleCopyText(EXTERNAL_LINKS.EMAIL, 'email')}
                            />
                        </Flex>
                    </Flex>
                    <Flex
                        mt={'30px'}
                    >
                        <Flex
                            flexDirection={'column'}
                            alignItems={'center'}
                            p={1}
                            pr={5}
                            gap={4}
                        >
                            <Text
                                color={titleColor}
                                fontWeight={'semibold'}
                                fontSize={'1rem'}
                            >
                                Age
                            </Text>
                            <Text
                                color={textColor}
                                fontSize={'0.9rem'}
                                fontWeight={'normal'}
                            >
                                20
                            </Text>
                        </Flex>
                        <Flex
                            flexDirection={'column'}
                            alignItems={'center'}
                            p={1}
                            pl={5}
                            gap={2}
                            borderLeft={'1px solid'}
                            borderColor={borderColor}
                        >
                            <Text
                                color={titleColor}
                                fontWeight={'semibold'}
                                fontSize={'1rem'}
                            >
                                Curriculum Vitae
                            </Text>
                            <Link href={EXTERNAL_LINKS.CV}>
                                <Box
                                    as='button'
                                    transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
                                    p={1}
                                    borderRadius={'xl'}
                                    bg={buttonBgColor}
                                    color={buttonIconColor}
                                    _hover={{ bg: buttonHoverBgColor, color: buttonHoverIconColor }}
                                >
                                    <Flex
                                        gap={2}
                                        alignItems={'center'}
                                        px={2}
                                    >
                                        <Text
                                            fontWeight={'normal'}
                                            fontSize={'0.8rem'}
                                        >
                                            take a look
                                        </Text>
                                        <Icon
                                            as={AiFillEye}
                                            boxSize={5}
                                        />
                                    </Flex>
                                </Box>
                            </Link>
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
            gap={16}
            flexDirection={'column'}
        >

            <Box
                p={10}
                pb={5}
                bg={cardBgColor}
                borderRadius={'xl'}
                boxShadow={'2xl'}
                position={'relative'}
            >
                <Flex
                    alignItems={'center'}
                    justifyContent={'center'}
                    flexDirection={'column'}
                >
                    <Image
                        borderRadius={'full'}
                        boxSize={'160px'}
                        src={'/images/rifqimaulana-memoji.png'}
                        alt={'rifqimaulana-memoji.png'}
                        position={'absolute'}
                        top={'-75px'}
                    />
                    <Flex
                        flexDirection={'column'}
                        mt={'65px'}
                        gap={1}
                    >
                        <Text
                            textAlign={'center'}
                            fontWeight={'semibold'}
                            color={titleColor}
                            fontSize={'1rem'}
                        >
                            Rifqi Maulana
                        </Text>
                        <Flex
                            gap={2}
                            alignItems={'center'}
                        >
                            <Link href={EXTERNAL_LINKS.MAILTO}>
                                <Text
                                    textAlign={'center'}
                                    fontWeight={'semibold'}
                                    color={textColor}
                                    fontSize={'0.9rem'}
                                >
                                    {EXTERNAL_LINKS.EMAIL}
                                </Text>
                            </Link>
                            <Icon
                                as={AiFillCopy}
                                boxSize={4}
                                color={iconColor}
                                cursor={'pointer'}
                                onClick={() => handleCopyText(EXTERNAL_LINKS.EMAIL, 'email')}
                            />
                        </Flex>
                    </Flex>
                    <Flex
                        mt={'30px'}
                    >
                        <Flex
                            flexDirection={'column'}
                            alignItems={'center'}
                            p={1}
                            pr={5}
                            gap={4}
                        >
                            <Text
                                color={titleColor}
                                fontWeight={'semibold'}
                                fontSize={'1rem'}
                            >
                                Age
                            </Text>
                            <Text
                                color={textColor}
                                fontSize={'0.9rem'}
                                fontWeight={'normal'}
                            >
                                20
                            </Text>
                        </Flex>
                        <Flex
                            flexDirection={'column'}
                            alignItems={'center'}
                            p={1}
                            pl={5}
                            gap={2}
                            borderLeft={'1px solid'}
                            borderColor={borderColor}
                        >
                            <Text
                                color={titleColor}
                                fontWeight={'semibold'}
                                fontSize={'1rem'}
                            >
                                Curriculum Vitae
                            </Text>
                            <Link href={EXTERNAL_LINKS.CV}>
                                <Box
                                    as='button'
                                    transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
                                    p={1}
                                    borderRadius={'xl'}
                                    bg={buttonBgColor}
                                    color={buttonIconColor}
                                    _hover={{ bg: buttonHoverBgColor, color: buttonHoverIconColor }}
                                >
                                    <Flex
                                        gap={2}
                                        alignItems={'center'}
                                        px={2}
                                    >
                                        <Text
                                            fontWeight={'normal'}
                                            fontSize={'0.8rem'}
                                        >
                                            take a look
                                        </Text>
                                        <Icon
                                            as={AiFillEye}
                                            boxSize={5}
                                        />
                                    </Flex>
                                </Box>
                            </Link>
                        </Flex>
                    </Flex>
                </Flex>
            </Box>

            <Box
                p={10}
                bg={cardBgColor}
                borderRadius={'xl'}
                boxShadow={'2xl'}
            >
                <Flex
                    flexDirection={'column'}
                    gap={3}
                    alignItems={'center'}
                    textAlign={'center'}
                >
                    <Flex
                        flexDirection={'column'}
                        gap={1}
                    >
                        <Text
                            fontWeight={'extrabold'}
                            color={titleColor}
                            fontSize={'2.5rem'}
                        >
                            Hi, I'm Rifqi
                        </Text>
                        <Text
                            fontWeight={'normal'}
                            color={textColor}
                            fontSize={'0.9rem'}
                        >
                            I'm a 20yo Minimalist. Digital Native, Photography and Videography Enthusiast. <br />
                            Undergraduate student majoring on Computer Engineering.
                        </Text>
                    </Flex>
                    <Flex
                        flexDirection={'column'}
                        gap={1}
                        mt={5}
                        textAlign={'center'}
                        alignItems={'center'}
                    >
                        <Link href={EXTERNAL_LINKS.MAP}>
                            <Flex
                                gap={2}
                            >
                                <Icon as={HiLocationMarker} boxSize={6} color={iconColor} />
                                <Text
                                    fontWeight={'normal'}
                                    color={textColor}
                                    fontSize={'0.9rem'}
                                >
                                    Belitung, Indonesia
                                </Text>
                            </Flex>
                        </Link>
                        <Flex
                            gap={2}
                        >
                            <Icon as={GoDotFill} boxSize={6} color={'emerald'} />
                            <Text
                                fontWeight={'normal'}
                                color={textColor}
                                fontSize={'0.9rem'}
                            >
                                Available for new projects
                            </Text>
                        </Flex>
                    </Flex>
                    <Flex
                        mt={5}
                    >
                        <Social />
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