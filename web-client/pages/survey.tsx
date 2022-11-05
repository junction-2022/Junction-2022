import { useDispatch } from 'react-redux'
import React from 'react'
import {
    Button,
    Text,
    Box,
    Textarea,
    Checkbox,
    Stack,
    Progress,
} from '@chakra-ui/react'
import Head from 'next/head'
import { setConfigState } from '../store/configSlice'
import SurveySlider from '../components/SurveySlider'
import SurveyRadioGroup from '../components/SurveyRadioGroup'
import axios from 'axios'
import { useRouter } from 'next/router'

interface Question {
    question: string
    description?: string
}

const questions: Question[] = [
    {
        question: 'With whom are you spending the day?',
    },
    {
        question: 'How do you find the weather today?',
        description: '1 - 😒 2 - 🙂 3 - 🤩',
    },
    { question: 'How many hours did you sleep today? 😴' },
    {
        question: 'How many hours did you spend on work? 🧑‍💻',
    },
    {
        question: 'How many hours did you spend on education? 📚',
    },
    {
        question:
            'Thinking about recent days, how satisfied are you with the amount of:',
    },
    {
        question: 'Rate your overall health today',
        description: '1 - 🤧 Need to stay in bed, 5 - 🤩 Energized',
    },
    {
        question: 'How would you rate your overall mood today?',
        description:
            '1 - 😞 Unhappy and discouraged, 5 - 🤩 Happy and inspired',
    },
    {
        question: 'Any other thoughts you want to record? 📖',
        description:
            'If anything that particularly affected your mood happened, you can record it here. Later this information can help you explain certain patterns in your mood curve!',
    },
]

interface DataModel {
    name?: string
    timestamp?: string
    family: boolean
    partner: boolean
    friends: boolean
    colleagues: boolean
    weather: number
    sleep: number
    work: number
    study: number
    sports: number
    hobbies: number
    social: number
    health: number
    mood: number
    thoughts: string
}

const postForm = (data: DataModel): Promise<DataModel> => {
    return axios.post('http://10.100.27.14:8000/api/survey/', {
        name: data.name,
        family: data.family,
        partner: data.partner,
        friends: data.friends,
        colleagues: data.colleagues,
        weather: data.weather,
        sleep: data.sleep,
        work: data.work,
        study: data.study,
        sports: data.sports,
        hobbies: data.hobbies,
        social: data.social,
        health: data.health,
        mood: data.mood,
        thoughts: data.thoughts,
    })
}

export default function Survey() {
    const dispatch = useDispatch()
    const router = useRouter()

    const [questionIndex, setQuestionIndex] = React.useState(0)

    const nextQuestion = () => {
        if (questionIndex !== questions.length - 1) {
            setQuestionIndex(questionIndex + 1)
        }
    }
    const previousQuestion = () => {
        if (questionIndex !== 0) setQuestionIndex(questionIndex - 1)
    }

    const [sleepSliderValue, setSleepSliderValue] = React.useState(0)
    const [weatherSliderValue, setWeatherSliderValue] = React.useState(0)
    const [workSliderValue, setWorkSliderValue] = React.useState(0)
    const [educationSliderValue, setEducationSliderValue] = React.useState(0)
    const [
        overallHealthSliderValue,
        setOverallHealthSliderValue,
    ] = React.useState(0)
    const [overallMoodSliderValue, setOverallMoodSliderValue] = React.useState(
        0
    )
    const [sports, setSports] = React.useState('0')
    const [hobbies, setHobbies] = React.useState('0')
    const [socialLife, setSocialLife] = React.useState('0')
    const [family, setFamily] = React.useState(false)
    const [partner, setPartner] = React.useState(false)
    const [friends, setFriends] = React.useState(false)
    const [collegues, setCollegues] = React.useState(false)

    const answerComponents: JSX.Element[] = [
        // TODO: Add values to local store
        <Stack spacing={5} direction="column" key={1}>
            <Checkbox
                isChecked={family}
                onChange={(event) => setFamily(event.target.checked)}
            >
                <Text fontSize={'2xl'}>👨‍👩‍👧‍👦 Family</Text>
            </Checkbox>
            <Checkbox
                isChecked={friends}
                onChange={(event) => setFriends(event.target.checked)}
            >
                <Text fontSize={'2xl'}>🎉 Friends</Text>
            </Checkbox>
            <Checkbox
                isChecked={partner}
                onChange={(event) => setPartner(event.target.checked)}
            >
                <Text fontSize={'2xl'}>💛 Partner</Text>
            </Checkbox>
            <Checkbox
                isChecked={collegues}
                onChange={(event) => setCollegues(event.target.checked)}
            >
                <Text fontSize={'2xl'}>💼 Collegues</Text>
            </Checkbox>
        </Stack>,
        // Weather
        <SurveySlider
            sliderValue={weatherSliderValue}
            key={'weather'}
            setSliderValue={setWeatherSliderValue}
            step={1}
            min={1}
            max={3}
        />,
        // Sleep
        <SurveySlider
            sliderValue={sleepSliderValue}
            key={'sleep'}
            setSliderValue={setSleepSliderValue}
            min={0}
            max={24}
        />,
        // Time spent on work
        <SurveySlider
            sliderValue={workSliderValue}
            key={'work'}
            min={0}
            max={24}
            setSliderValue={setWorkSliderValue}
        />,
        // Time spent on work
        <SurveySlider
            sliderValue={educationSliderValue}
            key={'education'}
            min={0}
            max={24}
            setSliderValue={setEducationSliderValue}
        />,
        <Box key={5} display={'flex'} flexDirection="column" gap={5}>
            <SurveyRadioGroup
                title="Sports:"
                // title="💪 Sports:"
                value={sports}
                setValue={setSports}
            />

            <SurveyRadioGroup
                // title={'🎨 Hobbies:'}
                title={'Hobbies:'}
                value={hobbies}
                setValue={setHobbies}
            />
            <SurveyRadioGroup
                // title="🎉 Social life:"
                title="Social life:"
                value={socialLife}
                setValue={setSocialLife}
            />
        </Box>,
        // overall health
        <SurveySlider
            sliderValue={overallHealthSliderValue}
            key={6}
            min={1}
            max={5}
            step={1}
            setSliderValue={setOverallHealthSliderValue}
        />,
        // overall mood
        <SurveySlider
            sliderValue={overallMoodSliderValue}
            key={'overall mood'}
            step={1}
            min={1}
            setSliderValue={setOverallMoodSliderValue}
            max={10}
        />,
        <Textarea key={8} />,
    ]

    return (
        <Box display="flex" justifyContent="center">
            <Head>
                <title>Survey</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Box
                display="flex"
                flexDirection={'column'}
                alignItems="center"
                justifyContent="space-between"
            >
                <Box
                    display="flex"
                    flexDirection={'column'}
                    alignItems="center"
                    justifyContent="space-between"
                    gap={10}
                >
                    <Progress
                        borderRadius={12}
                        minWidth={300}
                        value={questionIndex + 1}
                        max={questions.length}
                        size="md"
                        colorScheme="blue"
                    />
                    <Box
                        maxWidth={'600px'}
                        display={'flex'}
                        flexDirection={'column'}
                        justifyContent={'center'}
                    >
                        <Text
                            fontSize={'2xl'}
                            textAlign={'center'}
                            fontWeight={'bold'}
                        >
                            {questions[questionIndex].question}
                        </Text>
                        {questions[questionIndex].description && (
                            <Text fontSize={'md'} textAlign={'center'}>
                                {questions[questionIndex].description}
                            </Text>
                        )}
                    </Box>
                    <Box>{answerComponents[questionIndex]}</Box>
                </Box>
                <Box>
                    <Box display={'flex'} marginTop={10} gap={5}>
                        <Button
                            disabled={questionIndex === 0}
                            onClick={previousQuestion}
                        >
                            Previous question
                        </Button>
                        {questionIndex === questions.length - 1 ? (
                            <Button
                                colorScheme="yellow"
                                onClick={() => {
                                    postForm({
                                        name: 'user',
                                        sports: Number.parseInt(sports),
                                        hobbies: Number.parseInt(hobbies),
                                        social: Number.parseInt(socialLife),
                                        family: family,
                                        partner: partner,
                                        friends: friends,
                                        colleagues: collegues,
                                        weather: weatherSliderValue,
                                        sleep: sleepSliderValue,
                                        work: workSliderValue,
                                        study: educationSliderValue,
                                        health: overallHealthSliderValue,
                                        mood: overallMoodSliderValue,
                                        thoughts: '',
                                    })
                                        .then((response) => {
                                            dispatch(setConfigState(true))
                                            router.push('/')
                                        })
                                        .catch((error) =>
                                            console.error(error.response.data)
                                        )
                                }}
                            >
                                Finish survey
                            </Button>
                        ) : (
                            <Button
                                disabled={
                                    questionIndex === questions.length - 1
                                }
                                onClick={nextQuestion}
                            >
                                Next question
                            </Button>
                        )}
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
