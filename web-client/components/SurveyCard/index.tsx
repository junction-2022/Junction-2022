import { Box, Image } from '@chakra-ui/react'
import LinkButton from '../LinkButton'

const SurveyCard = () => {
    return (
        <Box
            display={'flex'}
            flexDirection={'column'}
            gap={6}
            alignItems={'center'}
            padding={6}
            boxShadow="xs"
            backgroundColor={'#fafafa'}
            borderRadius={12}
        >
            <Image
                src="/smiling-face.png"
                alt={'smiling face'}
                maxHeight={120}
            />
            <LinkButton
                colorTheme="yellow"
                href="/survey"
                text="Tell us about your mood"
            />
        </Box>
    )
}

export default SurveyCard
