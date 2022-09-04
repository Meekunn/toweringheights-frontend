import type { ComponentStyleConfig } from "@chakra-ui/theme";

const Link:ComponentStyleConfig = {
    baseStyle: {
        fontWeight: 'medium',
        transition: 'all 0.25s ease-in',
        textDecoration: 'none',
        color: 'white',
    },
    sizes: {
        md: {
            fontSize: 'md',
        }
    },
    variants: {
        'bigNavLinks': {
            p: 6,
            _hover: {
                textDecoration: 'none',
                bgColor: 'rgba(217, 217, 217, 0.3)',
            },
        },
        'crumb': {
            color: 'brand.300',
            _hover: {
                color: '#1768c1',
                textDecoration: 'none',
            }
        }, 
        'viewMore': {
            color:'brand.300', 
            fontWeight:'bold', 
            pb:'0.2rem', 
            borderBottom:'1px'
        }
    }
}

export default Link