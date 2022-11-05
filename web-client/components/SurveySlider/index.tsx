import {
    Box,
    Slider,
    SliderThumb,
    SliderTrack,
    SliderFilledTrack,
    Text,
} from '@chakra-ui/react'

interface SurveySliderProps {
    sliderValue: number
    setSliderValue: (value: number) => void
    min?: number
    max?: number
    step?: number
}

const SurveySlider: React.FunctionComponent<SurveySliderProps> = ({
    sliderValue,
    setSliderValue,
    min = 0,
    max = 10,
    step = 0.5,
}) => {
    return (
        <Slider
            minWidth={'300px'}
            key={7}
            colorScheme="blackAlpha"
            aria-label="slider-ex-1"
            step={step}
            min={min}
            max={max}
            value={sliderValue}
            onChange={(value) => setSliderValue(value)}
            defaultValue={sliderValue}
        >
            <SliderTrack>
                <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb padding={4}>
                <Box>
                    <Text>{sliderValue}</Text>
                </Box>
            </SliderThumb>
        </Slider>
    )
}

export default SurveySlider
