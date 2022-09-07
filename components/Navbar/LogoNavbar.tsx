import {
    Flex,
    Heading,
    Input,
    InputGroup,
    InputLeftElement,
    Stack,
} from "@chakra-ui/react"
import Image from "next/image"
import SchoolLogo from "../../public/assets/logo_ths.jpg"
import SearchBar from "../SearchBar"

const LogoNavbar = () => {
    return (
        <Flex maxH='14.625rem' align='center' my={4} justify='space-around' mx={3}>
            <Stack direction={{base: 'column', md: 'row'}} align='center' gap={{md: 3.5}}>
                <Image
                    height={93}
                    width={105}
                    src={SchoolLogo}
                    alt='School Logo'
                    loading="eager"
                />
                <Heading variant='logoHeading' fontSize= {{base: '1.4rem', md: '1.6rem'}}>
                    Towering Heights School
                </Heading>
            </Stack>

            <SearchBar />

            {/* <InputGroup display={{base: 'none', md: 'flex'}} width={'35%'}>
                <InputLeftElement 
                    color= 'brand.400'
                    m={{lg: 1}}
                    children={<BiSearchAlt />}
                />
                <Input 
                    variant='filled'
                    size='md'
                    borderRadius={'2xl'}
                    color='font.300'
                    fontSize='sm'
                    type='text' 
                    placeholder='Search' 
                    _placeholder={{
                        color: 'brand.400',
                        fontSize: 'sm'
                    }}
                />
            </InputGroup> */}
        </Flex>
    )
}

export default LogoNavbar