import { Box, Heading, Text, Icon, Flex, Link } from "@chakra-ui/react"
import Image from "next/image"
import { RiWhatsappLine } from "react-icons/ri"
import { MdMailOutline } from "react-icons/md"
import { imageBox, contentBox, staffName } from "./style"
import { IStaffProps } from "../../types/imageTypes"

const StaffCard = ({ sName, img, role, whatsapp, email }: IStaffProps) => {
	return (
		<Flex justify="center">
			<Box sx={imageBox}>
				<Image layout="fill" src={img} alt={sName} priority />
			</Box>
			<Box sx={contentBox}>
				<Heading as="h5" sx={staffName}>
					{sName}
				</Heading>
				<Text variant="staffLabel" px={2}>
					{role}
				</Text>
				<Flex mb={4} justify="center" gap={6} px={2}>
					{/* <Link variant={"staffCardLink"} href={whatsapp} isExternal>
						<Icon
							as={RiWhatsappLine}
							w={{ base: 5, lg: 6 }}
							h={{ base: 5, lg: 6 }}
						/>
					</Link>
					<Link variant={"staffCardLink"} href={email} isExternal>
						<Icon
							as={MdMailOutline}
							w={{ base: 5, lg: 6 }}
							h={{ base: 5, lg: 6 }}
						/>
					</Link> */}
				</Flex>
			</Box>
		</Flex>
	)
}

export default StaffCard
