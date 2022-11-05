import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { wrapper } from '../store/store'
import Layout from '../components/Layout'

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <ChakraProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ChakraProvider>
    )
}

export default wrapper.withRedux(App)
