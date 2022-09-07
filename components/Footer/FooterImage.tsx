import { 
    Box, 
    Flex, 
    Text, 
    InputGroup, 
    Input, 
    InputRightElement, 
    IconButton, 
    useToast,
    FormControl,
    FormErrorMessage,
    FormHelperText,
} from "@chakra-ui/react"
import { SendPlaneIcon } from "../Icons"
import { footerImageBox } from "./style"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { newsLetterInputStyle } from "./style"

interface INewsLetter {
    email: string
}

const EMAIL_REGEX = /^[A-Za-z0-9_\-\.]{4,}[@][a-z]+[\.][a-z]{2,3}$/

const FooterImage = () => {

    const { register, handleSubmit, formState: {errors}, reset} = useForm<INewsLetter>()
    const [loading, setLoading] = useState(false)
    const toast = useToast()

    const onSubmit = handleSubmit((data) => {
        setLoading(true)
        setTimeout(()=>{
            console.log(data)
            setLoading(false)
            toast({
                title: 'Success',
                description: 'Thank You for Subscribing',
                status: 'success',
                position: 'bottom-right',
                isClosable: true,
                duration: 5000,
            })
            reset()
        }, 500)
    })

    return (
        <Box bg="url(/assets/logo_ths.jpg) no-repeat" sx={footerImageBox} >
            <Flex
                bgColor='rgba(0, 0, 0, 0.6)'
                overflow='hidden'
                h='100%'
                justify='center'
            >
                <Flex
                    direction='column'
                    justify='center'
                    w={{lg: '40%'}}
                >
                    <Text fontSize={{lg: 'lg'}} variant='footerImageText'>
                        A wonderful <span style={{color: '#007AFF', fontWeight: '600'}}>  
                            FIRST
                        </span> out of home learning <span style={{color: '#007AFF', fontWeight: '600'}}>
                            EXPERIENCE
                        </span> for your child.
                    </Text>
                    <form onSubmit={onSubmit}>
                        <FormControl isInvalid={!!errors.email}>
                            <InputGroup bg='rgba(0, 0, 0, 0.2)' borderRadius='md'>
                                <Input 
                                    {...register('email', {
                                        required: 'Email is Required',
                                        pattern: {
                                            value: EMAIL_REGEX,
                                            message: 'Invalid Email'
                                        }
                                    })}
                                    type='email'
                                    size={{base: 'md', md: 'lg'}}
                                    placeholder="Enter e-mail to recieve news letter"
                                    sx={newsLetterInputStyle}
                                />
                                <InputRightElement w='42px' h={'90%'} top='2px' right='2px'>
                                    <IconButton
                                        aria-label='Subscribe to Newsletter'
                                        icon={<SendPlaneIcon />}
                                        variant='subNewsletter'
                                        isLoading={loading}
                                        type='submit'
                                    /> 
                                </InputRightElement>
                        </InputGroup>
                        {!!errors.email ? 
                            <FormErrorMessage>{errors.email && errors?.email.message}</FormErrorMessage>
                            :
                            <FormHelperText visibility={'hidden'}>Email</FormHelperText>
                        }
                        </FormControl>
                    </form>
                </Flex>
            </Flex>
        </Box>
    )
}

export default FooterImage