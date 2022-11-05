import { Box, Image, Text } from '@chakra-ui/react'

const PraiseCard = () => {
    return (
        <Box
            display={'flex'}
            flexDirection={'column'}
            gap={6}
            alignItems={'center'}
            padding={8}
            paddingTop={8}
            paddingBottom={8}
            boxShadow="xs"
            backgroundColor={'#fafafa'}
            borderRadius={12}
            maxWidth={340}
        >
            <Image src="/trophy.png" alt={'trophy'} maxHeight={120} />
            <Text fontWeight={'medium'} align={'center'}>
                <strong>You</strong> have completed the survey. Great work
                towards you mental wellbeing! 🎉
            </Text>
        </Box>
    )
}

export default PraiseCard
