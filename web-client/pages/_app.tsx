import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { wrapper } from '../store/store'

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <ChakraProvider>
            <Component {...pageProps} />
        </ChakraProvider>
    )
}

export default wrapper.withRedux(App)
