import { Box } from '@chakra-ui/react'
import { Line } from 'react-chartjs-2'
import { faker } from '@faker-js/faker'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'
import React from 'react'

// @ts-ignore
const LineChart = ({ data }) => {
    const options = {
        bezierCurve: true,
        responsive: true,
        plugins: {
            legend: {
                position: 'right' as const,
            },
            title: {
                display: false,
                text: 'Demo data',
            },
        },
    }

    const labels = Array.from(data).map((item) =>
        // @ts-ignore
        new Date(item.timestamp * 1000).getDate()
    )

    // @ts-ignore
    const workDataset = Array.from(data).map((item) => item.work)
    // @ts-ignore
    const sleepDataset = Array.from(data).map((item) => item.sleep)
    // @ts-ignore
    const moodDataset = Array.from(data).map((item) => item.mood)
    // @ts-ignore
    const studyDataset = Array.from(data).map((item) => item.study)

    const chartData = {
        labels,
        datasets: [
            {
                label: 'mood',
                data: moodDataset,
                borderColor: 'rgb(0, 0, 0)',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                lineTension: 0,
            },
            {
                label: 'sleep',
                data: sleepDataset,
                borderColor: '#EA673D',
                backgroundColor: '#EA673D80',
                lineTension: 0,
            },
            {
                label: 'work',
                data: workDataset,
                borderColor: '#ED2939',
                backgroundColor: '#ED293980',
                hidden: true,
                lineTension: 0,
            },
            {
                label: 'study',
                data: studyDataset,
                borderColor: '#2943ed',
                backgroundColor: '#2943ed80',
                hidden: true,
                lineTension: 0,
            },
        ],
    }

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    )

    return (
        <Box
            minWidth={400}
            alignItems={'center'}
            padding={4}
            paddingTop={4}
            paddingBottom={4}
            boxShadow="xs"
            backgroundColor={'#fafafa'}
            borderRadius={12}
        >
            <Line options={options} data={chartData} />
        </Box>
    )
}

export default LineChart
