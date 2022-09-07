import { Box, Flex, Link as ChakraLink, Heading } from "@chakra-ui/react"
import Link from "next/link"
import Image1 from '../../public/assets/logo_ths.jpg'
import Image2 from '../../public/assets/logo_ths.jpg'
import Image3 from '../../public/assets/logo_ths.jpg'
import { ISlideShow } from '../../types/imageTypes'
import EachImage from "./EachImage"
import { smallHeadingBorder } from "../../theme/components/boxStyles"

const galleryPreviews: ISlideShow[] = [
  {
    img: Image1,
    alt: 'image1'
  }, {
    img: Image2,
    alt: 'image2'
  }, {
    img: Image3,
    alt: 'image3'
  }
]

const GalleryPreview = () => {
    return (
        <Flex direction='column' p={8} gap={6}>
            <Flex direction='column' align='center' mx={6}>
              <Heading as='h3' variant='h3'>
                Our Gallery
              </Heading>
              <Box sx={smallHeadingBorder} bg='font.400' />
            </Flex>
            <Flex m={4} direction='row' flexWrap='wrap' gap={6} justify='center'>
              {galleryPreviews.map((preview, idx) => (
                <EachImage key={idx} alt={preview.alt} img={preview.img} />
              ))}
            </Flex>
            <Flex justify='center'>
              <Link href='/gallery' passHref>
                <ChakraLink variant='viewMore'>
                  Click here to see more
                </ChakraLink>
              </Link>
            </Flex>
          </Flex>
    )
}

export default GalleryPreview