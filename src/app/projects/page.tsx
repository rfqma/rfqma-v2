import { Container } from '@chakra-ui/react'
import Projects from '@/components/Projects'
import type { Metadata } from 'next'
import { createClient } from '@/lib/supabase/server'

export const metadata: Metadata = {
    title: 'Projects',
    alternates: {
        canonical: '/projects',
    }
}

export default async function HomePage() {
    const supabase = createClient();
    const { data: projects } = await supabase.from("projects").select();

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
                    pb={40}
                >
                    <Projects props={projects}/>
                </Container>
            </Container >
        </>
    )
}