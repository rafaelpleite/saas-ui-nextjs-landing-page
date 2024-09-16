import { chakra, HTMLChakraProps, useColorModeValue } from '@chakra-ui/react'

export const Logo: React.FC<HTMLChakraProps<'img'>> = (props) => {
  const imageSrc = useColorModeValue('/static/images/dark.png', '/static/images/white.png')
  return (
    <chakra.img
      src={imageSrc}
      alt="Logo"
      {...props}
    />
  )
}
