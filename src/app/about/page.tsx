import { Container } from '@chakra-ui/react'
import Hero from '@/components/About/Hero'
import Experience from '@/components/About/Experience'
import type { Metadata } from 'next'
import { createClient } from '@/lib/supabase/server'

export const metadata: Metadata = {
    title: 'About',
    alternates: {
        canonical: '/about',
    }
}

export default async function HomePage() {
    const supabase = createClient();
    const { data: experiences } = await supabase.from("experiences").select();
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
                    py={'20'}
                >
                    <Hero props={summaries}/>
                    <Experience props={experiences}/>
                </Container>
            </Container >
        </>
    )
}