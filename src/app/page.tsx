'use client'

import {
  Container,
  useColorModeValue,
} from '@chakra-ui/react'
import Hero from '@/components/Home/Hero'
import Tech from '@/components/Home/Tech'

export default function HomePage() {
  const bg = useColorModeValue('white', 'gray.950')

  return (
    <>
      <Container
        bg={bg}
        w={'100%'}
        maxW={'unset'}
        minHeight={'calc(100vh)'}
      >
        <Container
          maxW={1200}
          py={40}
        >
          <Hero />
          <Tech />
        </Container>
      </Container >
    </>
  )
}