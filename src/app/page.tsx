'use client'

import {
  Container,
  useColorModeValue,
} from '@chakra-ui/react'
import HeroHome from '@/components/HeroHome'
import Tech from '@/components/Tech'

export default function HomePage() {
  const bg = useColorModeValue('white', 'gray.950')

  return (
    <>
      <Container
        bg={bg}
        w={'100%'}
        maxW={'unset'}
      >
        <Container
          maxW={1200}
          py={40}
        >
          <HeroHome />
          <Tech />
        </Container>
      </Container >
    </>
  )
}