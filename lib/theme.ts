import {extendTheme, ThemeConfig} from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

export const theme = extendTheme({
  config,
  styles: {
    global: {
      body: {
        bg: '#1A202C',
        color: '#EFEFED',
      },
    },
  },
})
