import { Box } from '@chakra-ui/react'
import { Chart } from 'react-chartjs-2'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Tooltip,
    Title,
    LineController,
    BarController,
    Legend,
} from 'chart.js'
import React from 'react'

// @ts-ignore
const CombinedChart = ({ data }) => {
    const options = {
        type: 'bar',
        bezierCurve: true,
        responsive: true,
        plugins: {
            legend: {
                position: 'right' as const,
            },
            title: {
                display: false,
                text: "That's your mood curve for the last 30 days",
            },
        },
    }

    const labels = Array.from(data).map((item) =>
        // @ts-ignore
        new Date(item.timestamp * 1000).getDate()
    )

    // @ts-ignore
    const healthDataset = Array.from(data).map((item) => item.health)
    // @ts-ignore
    const moodDataset = Array.from(data).map((item) => item.mood)
    // @ts-ignore
    const weatherDataset = Array.from(data).map((item) => item.weather)
    // @ts-ignore
    const sportsDataset = Array.from(data).map((item) => item.sports)

    const chartData = {
        labels,
        datasets: [
            {
                type: 'line' as const,
                label: 'mood',
                data: moodDataset,
                borderColor: 'rgb(0, 0, 0)',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                lineTension: 0,
            },
            {
                type: 'bar' as const,
                label: 'health',
                data: healthDataset,
                borderColor: '#EA673D',
                backgroundColor: '#EA673D80',
                lineTension: 0,
            },
            {
                type: 'bar' as const,
                label: 'weather',
                data: weatherDataset,
                borderColor: '#ED2939',
                backgroundColor: '#ED293980',
                hidden: true,
                lineTension: 0,
            },
            {
                type: 'bar' as const,
                label: 'sport',
                data: sportsDataset,
                borderColor: '#2943ed',
                backgroundColor: '#2943ed80',
                hidden: true,
                lineTension: 0,
            },
        ],
    }

    ChartJS.register(
        LinearScale,
        CategoryScale,
        BarElement,
        PointElement,
        LineElement,
        Legend,
        Tooltip,
        LineController,
        BarController
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
            <Chart type="bar" options={options} data={chartData} />
        </Box>
    )
}

export default CombinedChart
