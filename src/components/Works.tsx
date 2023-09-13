import {
    Container,
    Flex,
    Box,
    Text,
    Image,
    Link,
    useColorModeValue,
    Icon
} from '@chakra-ui/react'
import { WORKS } from '@/lib/datas';
import { StaticImageData } from 'next/image';
import { BiLinkExternal } from 'react-icons/bi'

export default function Works() {
    const bg = useColorModeValue('white', 'gray.950')
    const cardPrimaryTextColor = useColorModeValue('gray.600', 'gray.300')
    const cardTitleColor = useColorModeValue('gray.900', 'gray.300')
    const cardBgColor = useColorModeValue('white', 'gray.800')
    const tagBgColor = useColorModeValue('gray.200', 'gray.900')
    const tagHoverBgColor = useColorModeValue('gray.200', 'gray.700')
    const tagTextColor = useColorModeValue('gray.900', 'gray.200')
    const imageBgColor = useColorModeValue('gray.100', 'gray.700')

    // Define a function to convert StaticImageData to data URL
    const staticImageToDataURL = (image: StaticImageData): string => {
        // You can't use .resolve with StaticImageData, so use a direct import path instead
        return image.src || ''
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
                            👷 Some of the projects i've worked before:
                        </Text>
                    </Flex>

                    <Flex
                        alignItems={'center'}
                        justifyContent={'center'}
                        h={'100%'}
                        pt={10}
                        flexDirection={'column'}
                        gap={10}
                    >
                        {
                            WORKS.map((work, index) => {
                                const workPreviewImage = work.previewImage

                                return (
                                    <>
                                        <Box
                                            key={index}
                                            bg={cardBgColor}
                                            borderRadius={'2xl'}
                                            boxShadow={'2xl'}
                                            w={'full'}
                                        >
                                            <Flex>
                                                <Flex
                                                    alignItems={'center'}
                                                    justifyContent={'center'}
                                                    bg={imageBgColor}
                                                    p={8}
                                                    borderLeftRadius={'2xl'}
                                                >
                                                    <Link href={work.url}>
                                                        <Image
                                                            src={
                                                                typeof workPreviewImage === 'string'
                                                                    ? workPreviewImage
                                                                    : staticImageToDataURL(workPreviewImage as StaticImageData)
                                                            }
                                                            alt={`${work.name} preview image`}
                                                            w={500}
                                                            h={300}
                                                            borderRadius={'2xl'}
                                                            boxShadow={'lg'}
                                                            _hover={{
                                                                transform: 'scale(1.05)'
                                                            }}
                                                            transition={'transform 0.3s ease'}
                                                            style={{ objectFit: 'cover' }}
                                                        />
                                                    </Link>
                                                </Flex>
                                                <Flex
                                                    flexDirection={'column'}
                                                    gap={6}
                                                    p={8}
                                                >
                                                    <Text
                                                        fontWeight={'bold'}
                                                        color={cardTitleColor}
                                                        fontSize={'1.2rem'}
                                                    >
                                                        {work.name}
                                                    </Text>
                                                    <Text
                                                        fontWeight={'medium'}
                                                        color={cardPrimaryTextColor}
                                                        fontSize={'1rem'}
                                                    >
                                                        {work.description}
                                                    </Text>
                                                    <Flex
                                                        gap={2}
                                                        flexWrap={'wrap'}
                                                        maxW={'md'}
                                                    >
                                                        {
                                                            work.technologies.map((technology, index) => {
                                                                return (
                                                                    <>
                                                                        <Box
                                                                            key={index}
                                                                            alignItems={'center'}
                                                                            justifyContent={'center'}
                                                                            borderRadius={'xl'}
                                                                            bg={tagBgColor}
                                                                            px={3}
                                                                            py={1}
                                                                        >
                                                                            <Text
                                                                                fontWeight={'medium'}
                                                                                color={tagTextColor}
                                                                                fontSize={'0.9rem'}
                                                                            >
                                                                                {technology}
                                                                            </Text>
                                                                        </Box>
                                                                    </>
                                                                )
                                                            })
                                                        }
                                                    </Flex>
                                                    <Link
                                                        href={work.url}
                                                        alignSelf={'flex-start'}
                                                        borderRadius={'lg'}
                                                        _hover={{ bg: tagHoverBgColor }}
                                                        p={2}
                                                    >
                                                        <Icon as={BiLinkExternal} boxSize={5} />
                                                    </Link>
                                                </Flex>
                                            </Flex>
                                        </Box>
                                    </>
                                )
                            })
                        }
                    </Flex>
                </Container>
            </Container >
        </>
    )
}