import {
    Flex,
    Link,
    Icon,
    useColorModeValue
} from "@chakra-ui/react";
import { socialLinks } from "@/lib/utilities/data";

export default function Social() {
    const iconColor = useColorModeValue('gray.600', 'gray.400')

    return (
        <>
            <Flex
                gap={5}
            >
                {
                    socialLinks.map((social, index) => {
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