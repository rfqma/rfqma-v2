"use client";

import {
  Flex,
  Box,
  Text,
  Image,
  useColorModeValue,
  useMediaQuery,
} from "@chakra-ui/react";

export default function Hero() {
  const textColor = useColorModeValue("gray.600", "gray.300");
  const titleColor = useColorModeValue("gray.900", "gray.300");
  const cardBgColor = useColorModeValue("white", "gray.800");
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  const desktopLayout = (
    <Flex alignItems={"center"} justifyContent={"center"} h={"100%"} gap={32}>
      <Box
        p={150}
        bg={cardBgColor}
        borderRadius={"3xl"}
        boxShadow={"2xl"}
        position={"relative"}
      >
        <Flex
          alignItems={"center"}
          justifyContent={"center"}
          flexDirection={"column"}
        >
          <Image
            borderRadius={"3xl"}
            boxSize={"300px"}
            src={"/images/rifqimaulana-headshot.png"}
            alt={"/images/rifqimaulana-headshot.png"}
            position={"absolute"}
            top={"-20px"}
            right={"-20px"}
          />
        </Flex>
      </Box>

      <Box p={12} bg={cardBgColor} borderRadius={"xl"} boxShadow={"2xl"}>
        <Flex flexDirection={"column"} gap={3}>
          <Flex flexDirection={"column"} gap={5}>
            <Flex>
              <Text
                fontWeight={"extrabold"}
                color={titleColor}
                fontSize={"2.5rem"}
              >
                Curious about me?
              </Text>
            </Flex>
            <Flex flexDirection={"column"} gap={3}>
              <Text
                fontWeight={"normal"}
                color={textColor}
                fontSize={"0.9rem"}
                className="whitespace-pre-line"
              >
                Im a 21 years old who passionate about photography, videography,
                and computer related stuff. I am an ambitious student pursuing a
                degree on informatics at Universitas Pembangunan Nasional
                Veteran Yogyakarta. Alongside my studies, I actively engage in
                freelance work, utilizing my skills and creativity to capture
                unforgettable moments through photography and videography. With
                a strong technical background and a deep appreciation for visual
                storytelling, I bring a unique blend of expertise to every
                project. Combining my passion for technology and the arts, I am
                dedicated to delivering exceptional visual content that
                resonates with audiences. Lets connect and explore the power of
                visuals together.
              </Text>
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
      gap={10}
      flexDirection={"column"}
    >
      <Box
        p={140}
        pb={115}
        bg={cardBgColor}
        borderRadius={"3xl"}
        boxShadow={"2xl"}
        position={"relative"}
      >
        <Flex
          alignItems={"center"}
          justifyContent={"center"}
          flexDirection={"column"}
        >
          <Image
            borderRadius={"3xl"}
            boxSize={"250px"}
            src={"/images/rifqimaulana-headshot.png"}
            alt={"/images/rifqimaulana-headshot.png"}
            position={"absolute"}
            top={"-10px"}
          />
        </Flex>
      </Box>

      <Box p={9} bg={cardBgColor} borderRadius={"xl"} boxShadow={"2xl"}>
        <Flex flexDirection={"column"} gap={3}>
          <Flex flexDirection={"column"} gap={5}>
            <Flex>
              <Text
                fontWeight={"extrabold"}
                color={titleColor}
                fontSize={"1.4rem"}
              >
                Curious about me?
              </Text>
            </Flex>
            <Flex flexDirection={"column"} gap={3}>
              <Text
                fontWeight={"normal"}
                color={textColor}
                fontSize={"0.9rem"}
                className="whitespace-pre-line"
              >
                Im a 21 years old who passionate about photography, videography,
                and computer related stuff. I am an ambitious student pursuing a
                degree on informatics at Universitas Pembangunan Nasional
                Veteran Yogyakarta. Alongside my studies, I actively engage in
                freelance work, utilizing my skills and creativity to capture
                unforgettable moments through photography and videography. With
                a strong technical background and a deep appreciation for visual
                storytelling, I bring a unique blend of expertise to every
                project. Combining my passion for technology and the arts, I am
                dedicated to delivering exceptional visual content that
                resonates with audiences. Lets connect and explore the power of
                visuals together.
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );

  return <>{isLargerThan768 ? desktopLayout : mobileLayout}</>;
}
