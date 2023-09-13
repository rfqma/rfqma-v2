'use client'

import { CacheProvider } from "@chakra-ui/next-js"
import { ChakraProvider, extendTheme, type ThemeConfig } from "@chakra-ui/react"

const colors = {
    gray: {
        50: '#F9FAFB',
        100: '#F3F4F6',
        200: '#E5E7EB',
        300: '#D1D5DB',
        400: '#9CA3AF',
        500: '#6B7280',
        600: '#4B5563',
        700: '#374151',
        800: '#1F2937',
        900: '#111827',
        950: '#030712'
    },
    emerald: '#10B981',
    white: '#FFFFFF'
}

const config: ThemeConfig = {
    initialColorMode: 'light',
    useSystemColorMode: false
}

export const theme = extendTheme({ config, colors })

export function Providers({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <CacheProvider>
            <ChakraProvider theme={theme}>
                {children}
            </ChakraProvider>
        </CacheProvider>
    )
}