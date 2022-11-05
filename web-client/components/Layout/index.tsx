import { Box } from '@chakra-ui/layout'
import { Avatar, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

interface LayoutProps {
    children: JSX.Element
}

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
    return (
        <Box>
            <Box height={'72px'}>
                <Box
                    marginLeft={5}
                    marginRight={5}
                    marginTop={4}
                    display="flex"
                    justifyContent={'space-between'}
                >
                    <Link href="/">
                        <Box
                            display={'flex'}
                            flexDirection={'row'}
                            alignItems="center"
                            gap={2}
                        >
                            <div
                                style={{
                                    backgroundColor: 'black',
                                    width: 32,
                                    height: 32,
                                    borderRadius: 500,
                                }}
                            ></div>
                            <Text fontWeight={'bold'}>Emotion</Text>
                        </Box>
                    </Link>
                    <Avatar src='/avatar.png' size={'sm'}></Avatar>
                </Box>
            </Box>
            <Box>{children}</Box>
        </Box>
    )
}

export default Layout
