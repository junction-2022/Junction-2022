import { Box, Skeleton, Text } from '@chakra-ui/react'
import React from 'react'
import Head from 'next/head'
import { useSelector } from 'react-redux'
import { selectConfigState } from '../store/configSlice'
import PraiseCard from '../components/PraiseCard'
import SurveyCard from '../components/SurveyCard'
import LineChart from '../components/LIneChart'
import axios from 'axios'
import CombinedChart from '../components/CombinedChart'

export default function Home() {
    const configState = useSelector(selectConfigState)
    const [isFirstLoaded, setIsFirstLoaded] = React.useState<boolean>(false)
    const [isSecondLoaded, setIsSecondLoaded] = React.useState<boolean>(false)
    const [firstChartData, setFirstChartData] = React.useState<any>({})
    const [secondChartData, setSecondChartData] = React.useState<any>({})
    const [apiData, setData] = React.useState<any>({})

    // TEMP SOLUTION
    // TODO: Add to .env
    const apiURL = 'http://10.100.27.14:8000/api/'

    const getFirstGraphData = async () => {
        const _data: any[] = []
        await axios
            .get(apiURL + 'col4/')
            .then((response) => {
                setFirstChartData(response.data)
                setIsFirstLoaded(true)
            })
            .catch((error) => console.error(error))
    }
    const getSecondGraphData = async () => {
        const _data: any[] = []

        await axios
            .get(apiURL + 'col4n/')
            .then((response) => {
                console.log(response)
                setSecondChartData(response.data)
                setIsSecondLoaded(true)
            })
            .catch((error) => console.error(error))
    }

    React.useEffect(() => {
        getFirstGraphData()
        getSecondGraphData()
    }, [])

    return (
        <Box display="flex" justifyContent="center">
            <Head>
                <title>App</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Box display="flex" gap={8} marginTop={4} justifyContent={'center'}>
                <Box>{configState ? <PraiseCard /> : <SurveyCard />}</Box>
                <Box
                    display={'flex'}
                    flexDirection="column"
                    width={'100%'}
                    minWidth={'800px'}
                    gap={4}
                >
                    <Skeleton isLoaded={isFirstLoaded}>
                        <LineChart data={firstChartData} />
                    </Skeleton>
                    <Text fontWeight={'bold'} textAlign={'center'}>
                        That&apos;s your mood curve of the last 30 days!
                    </Text>
                    <Skeleton isLoaded={isSecondLoaded}>
                        <CombinedChart data={secondChartData} />
                    </Skeleton>
                </Box>
            </Box>
        </Box>
    )
}
