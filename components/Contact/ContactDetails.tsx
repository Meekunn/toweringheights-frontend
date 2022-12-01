import { Text, Heading, VStack, Flex, Icon } from "@chakra-ui/react"
import { ImPhone } from "react-icons/im"
import { MdLocationOn, MdEmail } from "react-icons/md"
import { blueIcon } from "../../theme/components/iconStyles"
import { flexStyle } from "./style"

const ContactDetails = () => {
	return (
		<VStack gap={4} w={{ md: "45%" }} align="start">
			<Heading as="h2" variant="h2" textTransform={"uppercase"}>
				Contact Details
			</Heading>
			<Text className="paragraph">
				You can always reach us via the following contact details. We will do
				our best to answer any questions you may have.
			</Text>
			<Flex sx={flexStyle}>
				<Icon as={ImPhone} sx={blueIcon} />
				<Text className="paragraph">
					<a href="tel:+234 814 266 5965">0814 266 5965</a>,
					<a href="tel:++234 810 531 3377"> 0810 531 3377</a>
				</Text>
			</Flex>
			<Flex sx={flexStyle}>
				<Icon as={MdEmail} sx={blueIcon} />
				<Text className="paragraph">
					<a href="mailto:toweringheightsschools@gmail.com">
						toweringheightsschools@gmail.com
					</a>
				</Text>
			</Flex>
			<Flex sx={flexStyle}>
				<Icon as={MdLocationOn} sx={blueIcon} />
				<Text className="paragraph">
					<a
						href="https://www.google.com/maps/place/Towering+Heights+schools+Akure/@7.2356892,5.2367228,17z/data=!3m1!4b1!4m5!3m4!1s0x1047911e388d428b:0x4d0f13c5bcef0489!8m2!3d7.2356892!4d5.2389115"
						target="_blank"
						rel="noreferrer"
					>
						Afrostuff Estate,Alagbaka Extension, off Igbatoro road. Adjacent
						NIMC, Alagbaka, Akure.
					</a>
				</Text>
			</Flex>
		</VStack>
	)
}

export default ContactDetails
