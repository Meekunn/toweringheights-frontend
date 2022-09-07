import {
    Flex,
    HStack,
    Icon,
    Link as ChakraLink, 
    Text
} from '@chakra-ui/react'
import Link from 'next/link'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { crumbIcon } from '../../theme/components/iconStyles'

interface crumbProps {
    text: string,
    last: boolean,
    href: string,
    newPath?: string,
    lastPath?: string,
    transformPath: (text: string) => string
}

// const transformPath= (str: string) => {
//     let arr: string[] = str.toLowerCase().split(' ')
//     for (let i = 0; i < arr.length; i++) {
//          arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substring(1)
//     }
//     return arr.join(' ')
// }

const Crumb = ({text, href, last = false, newPath, transformPath, lastPath}: crumbProps) => {
    const transformLabel = (str: string, newText: string) => {
        const label = str.replace(str, newText)
        return transformPath(label)
    }

    if(last && newPath) {
        const replacedTitlePath = transformLabel(text, newPath)
        return (
            <Text color="font.200"  m={'0 !important'}> {replacedTitlePath} </Text>
        )
    } 
    else if(!last && newPath){
        const replacedTitlePath = transformLabel(text, newPath)
        return (
            <Text color="font.200"  m={'0 !important'}> {text} </Text>
        )
    }
    else if (last) {
        const titlePath = transformPath(text)
        return (
            <Text color="font.200"  m={'0 !important'}> {titlePath} </Text>
        )
    }

    return (
        <HStack align='center'> 
            <Link href={href} passHref>
                <ChakraLink  variant='crumb'> {text} </ChakraLink>
            </Link>
            <Icon 
                as={MdOutlineKeyboardArrowRight} 
                sx={crumbIcon}
            />
        </HStack>
    )
}

export default Crumb