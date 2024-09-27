"use client";

import {
  Flex,
  Box,
  Icon,
  Text,
  Image,
  Link,
  useColorModeValue,
  useMediaQuery,
} from "@chakra-ui/react";
import { HiLocationMarker } from "react-icons/hi";
import { GoDotFill } from "react-icons/go";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Social from "@/components/Socials";
import { externalLinks } from "@/lib/utilities/data";

export default function Hero() {
  const iconColor = useColorModeValue("gray.600", "gray.400");
  const textColor = useColorModeValue("gray.600", "gray.300");
  const titleColor = useColorModeValue("gray.900", "gray.300");
  const cardBgColor = useColorModeValue("white", "gray.800");
  const buttonBgColor = useColorModeValue("gray.900", "gray.200");
  const buttonIconColor = useColorModeValue("gray.300", "gray.600");
  const buttonHoverBgColor = useColorModeValue("gray.200", "gray.600");
  const buttonHoverIconColor = useColorModeValue("gray.600", "gray.300");
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  const desktopLayout = (
    <Flex alignItems={"center"} justifyContent={"center"} h={"100%"} gap={40}>
      <Box
        p={10}
        bg={cardBgColor}
        borderRadius={"xl"}
        boxShadow={"2xl"}
        pr={"40"}
      >
        <Flex flexDirection={"column"} gap={3}>
          <Flex flexDirection={"column"}>
            <Text fontWeight={"extrabold"} color={titleColor} fontSize={"3rem"}>
              Hi, Im Rifqi
            </Text>
            <Text
              fontWeight={"normal"}
              color={textColor}
              fontSize={"0.9rem"}
              className="whitespace-pre-line"
            >
              Im a 21yo Minimalist, Photography and Videography Enthusiast.
              Undergraduate student majoring on Informatics.
            </Text>
          </Flex>
          <Flex flexDirection={"column"} gap={1} mt={5}>
            <Link href={externalLinks.MAP}>
              <Flex gap={2}>
                <Icon as={HiLocationMarker} boxSize={6} color={iconColor} />
                <Text
                  fontWeight={"normal"}
                  color={textColor}
                  fontSize={"0.9rem"}
                >
                  Yogyakarta, Indonesia
                </Text>
              </Flex>
            </Link>
            <Flex gap={2}>
              <Icon as={GoDotFill} boxSize={6} color={"emerald"} />
              <Text fontWeight={"normal"} color={textColor} fontSize={"0.9rem"}>
                Available for new projects
              </Text>
            </Flex>
          </Flex>
          <Flex mt={5}>
            <Social />
          </Flex>
        </Flex>
      </Box>

      <Box
        p={10}
        pb={5}
        bg={cardBgColor}
        borderRadius={"xl"}
        boxShadow={"2xl"}
        position={"relative"}
      >
        <Flex
          alignItems={"center"}
          justifyContent={"center"}
          flexDirection={"column"}
        >
          <Image
            borderRadius={"full"}
            boxSize={"160px"}
            src={"/images/rifqimaulana-memoji.png"}
            alt={"/images/rifqimaulana-memoji.png"}
            position={"absolute"}
            top={"-75px"}
          />
          <Flex flexDirection={"column"} mt={"65px"} gap={1}>
            <Text
              textAlign={"center"}
              fontWeight={"semibold"}
              color={titleColor}
              fontSize={"1rem"}
            >
              Rifqi Maulana
            </Text>
            <Flex gap={2} alignItems={"center"}>
              <Link href={externalLinks.MAILTO}>
                <Text
                  textAlign={"center"}
                  fontWeight={"semibold"}
                  color={textColor}
                  fontSize={"0.9rem"}
                >
                  {externalLinks.EMAIL}
                </Text>
              </Link>
            </Flex>
          </Flex>
          <Flex mt={"30px"}>
            <Flex flexDirection={"column"} alignItems={"center"}>
              <Link target="_blank" href={externalLinks.CV}>
                <Box
                  as="button"
                  transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                  p={1}
                  borderRadius={"xl"}
                  bg={buttonBgColor}
                  color={buttonIconColor}
                  _hover={{
                    bg: buttonHoverBgColor,
                    color: buttonHoverIconColor,
                  }}
                >
                  <Flex gap={2} alignItems={"center"} px={2}>
                    <Text fontWeight={"normal"} fontSize={"0.8rem"}>
                      My Resume
                    </Text>
                    <Icon as={HiOutlineArrowNarrowRight} boxSize={4} />
                  </Flex>
                </Box>
              </Link>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );

  const mobileLayout = (
    <Flex
      alignItems={"center"}
      justifyContent={"center"}
      h={"100%"}
      gap={16}
      flexDirection={"column"}
    >
      <Box
        p={10}
        pb={5}
        bg={cardBgColor}
        borderRadius={"xl"}
        boxShadow={"2xl"}
        position={"relative"}
      >
        <Flex
          alignItems={"center"}
          justifyContent={"center"}
          flexDirection={"column"}
        >
          <Image
            borderRadius={"full"}
            boxSize={"160px"}
            src={"/images/rifqimaulana-memoji.png"}
            alt={"/images/rifqimaulana-memoji.png"}
            position={"absolute"}
            top={"-75px"}
          />
          <Flex flexDirection={"column"} mt={"65px"} gap={1}>
            <Text
              textAlign={"center"}
              fontWeight={"semibold"}
              color={titleColor}
              fontSize={"1rem"}
            >
              Rifqi Maulana
            </Text>
            <Flex gap={2} alignItems={"center"}>
              <Link href={externalLinks.MAILTO}>
                <Text
                  textAlign={"center"}
                  fontWeight={"semibold"}
                  color={textColor}
                  fontSize={"0.9rem"}
                >
                  {externalLinks.EMAIL}
                </Text>
              </Link>
            </Flex>
          </Flex>
          <Flex mt={"25px"}>
            <Flex flexDirection={"column"} alignItems={"center"}>
              <Link target="_blank" href={externalLinks.CV}>
                <Box
                  as="button"
                  transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                  p={1}
                  borderRadius={"xl"}
                  bg={buttonBgColor}
                  color={buttonIconColor}
                  _hover={{
                    bg: buttonHoverBgColor,
                    color: buttonHoverIconColor,
                  }}
                >
                  <Flex gap={2} alignItems={"center"} px={2}>
                    <Text fontWeight={"normal"} fontSize={"0.8rem"}>
                      My Resume
                    </Text>
                    <Icon as={HiOutlineArrowNarrowRight} boxSize={4} />
                  </Flex>
                </Box>
              </Link>
            </Flex>
          </Flex>
        </Flex>
      </Box>

      <Box p={7} py={10} bg={cardBgColor} borderRadius={"xl"} boxShadow={"2xl"}>
        <Flex
          flexDirection={"column"}
          gap={3}
          alignItems={"center"}
          textAlign={"center"}
        >
          <Flex flexDirection={"column"} gap={1}>
            <Text
              fontWeight={"extrabold"}
              color={titleColor}
              fontSize={"2.5rem"}
            >
              Hi, Im Rifqi
            </Text>
            <Text
              fontWeight={"normal"}
              color={textColor}
              fontSize={"0.9rem"}
              className="whitespace-pre-line"
            >
              Im a 21yo Minimalist, Photography and Videography Enthusiast.
              Undergraduate student majoring on Informatics.
            </Text>
          </Flex>
          <Flex
            flexDirection={"column"}
            gap={1}
            mt={5}
            textAlign={"center"}
            alignItems={"center"}
          >
            <Link href={externalLinks.MAP}>
              <Flex gap={2}>
                <Icon as={HiLocationMarker} boxSize={6} color={iconColor} />
                <Text
                  fontWeight={"normal"}
                  color={textColor}
                  fontSize={"0.9rem"}
                >
                  Yogyakarta, Indonesia
                </Text>
              </Flex>
            </Link>
            <Flex gap={2}>
              <Icon as={GoDotFill} boxSize={6} color={"emerald"} />
              <Text fontWeight={"normal"} color={textColor} fontSize={"0.9rem"}>
                Available for new projects
              </Text>
            </Flex>
          </Flex>
          <Flex mt={5}>
            <Social />
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );

  return <>{isLargerThan768 ? desktopLayout : mobileLayout}</>;
}
