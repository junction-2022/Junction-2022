import { Box, Radio, RadioGroup, Stack, Text } from '@chakra-ui/react'

interface SurveyRadioGroupProps {
    value: string
    setValue: (value: string) => void
    title: string
}

const SurveyRadioGroup: React.FunctionComponent<SurveyRadioGroupProps> = ({
    value,
    setValue,
    title,
}) => {
    return (
        <Box
            padding={5}
            paddingLeft={8}
            paddingRight={8}
            backgroundColor={'#f0f0f0'}
            borderRadius={12}
            display={'flex'}
            flexDirection={'column'}
            gap={2}
        >
            <Text fontWeight={'bold'}>{title}</Text>
            <RadioGroup value={value} onChange={setValue}>
                <Stack spacing={5} direction={'row'}>
                    <Radio value={'1'}>
                        🙈 I didn&apos;t spend any time on it
                    </Radio>
                    <Radio value={'2'}>😐 It could be better</Radio>
                    <Radio value={'3'}>🙂 It&apos;s going well</Radio>
                    <Radio value={'4'}>🤩 Very satisfied, I am happy</Radio>
                </Stack>
            </RadioGroup>
        </Box>
    )
}

export default SurveyRadioGroup
