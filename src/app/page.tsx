import { Container } from '@chakra-ui/react'
import Hero from '@/components/Home/Hero'
import Tech from '@/components/Home/Tech'
import { createClient } from '@/lib/supabase/server'

export default async function HomePage() {
  const supabase = createClient();
  const {data: summaries} = await supabase.from("summaries").select();

  return (
    <>
      <Container
        bg={'white'}
        w={'100%'}
        maxW={'unset'}
        minHeight={'calc(100vh)'}
        _dark={{ bg: 'gray.950' }}
      >
        <Container
          maxW={1200}
          py={40}
        >
          <Hero props={summaries}/>
          <Tech />
        </Container>
      </Container >
    </>
  )
}