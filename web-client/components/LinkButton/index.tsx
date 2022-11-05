import { useRouter } from 'next/router'
import { Button } from '@chakra-ui/react'

interface LinkButtonProps {
    href: string
    text: string
    colorTheme?: string
    size?: string
    onClick?: () => void
}

const LinkButton: React.FunctionComponent<LinkButtonProps> = ({
    href,
    text,
    colorTheme,
    size,
    onClick,
}) => {
    const router = useRouter()

    const handleClick = (e: any) => {
        e.preventDefault()
        router.push(href)
    }

    return (
        <a href={href} onClick={handleClick}>
            <Button
                onClick={onClick}
                colorScheme={colorTheme ? colorTheme : 'teal'}
                size={size && size}
            >
                {text}
            </Button>
        </a>
    )
}

export default LinkButton
