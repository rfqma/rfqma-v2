import {
    Flex,
    Link,
    Icon,
    useColorModeValue
} from "@chakra-ui/react";
import { SOCIAL_LINKS } from "@/lib/datas";

export default function Social() {
    const iconColor = useColorModeValue('gray.600', 'gray.400')

    return (
        <>
            <Flex
                gap={5}
            >
                {
                    SOCIAL_LINKS.map((social, index) => {
                        return (
                            <>
                                <Link key={index} href={social.url}>
                                    <Icon
                                        as={social.icon}
                                        boxSize={social.name === 'Pexels' ? 6 : 7}
                                        color={iconColor}
                                        _hover={{
                                            transform: 'scale(1.1)'
                                        }}
                                        transition={'transform 0.3s ease'}
                                    />
                                </Link>
                            </>
                        )
                    })
                }
            </Flex>
        </>
    )
}