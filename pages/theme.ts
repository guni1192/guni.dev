import {extendTheme, ThemeConfig} from '@chakra-ui/react'

const config: ThemeConfig = {
    initialColorMode: 'dark',
    useSystemColorMode: true,
    base: 'gray.50',
}

const theme = extendTheme({config})
export default theme
