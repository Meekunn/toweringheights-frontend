import {
	Box,
	Flex,
	Heading,
	Stack,
	Text,
	OrderedList,
	ListItem,
	Table,
	TableContainer,
	Thead,
	Tbody,
	Th,
	Tr,
	Td,
} from "@chakra-ui/react"
import Image from "next/image"
import BreadCrumbNav from "../BreadCrumb"
import AboutImage from "../../assets/class_img/InShot_20220728_100338428.jpg"
import Footer from "../Footer"
import ScrollTopBtn from "../Navbar/ScrollTopBtn"

const AboutPage = () => {
	return (
		<>
			<Stack px={2} py={4} p={{ md: "0" }}>
				<Flex
					justify="center"
					position="relative"
					w={{ base: "100%" }}
					h={{
						base: "239px",
						md: "500px",
						lg: "650px",
					}}
				>
					<Image
						src={AboutImage}
						layout="fill"
						priority
						alt="Students in Uniform"
					/>
				</Flex>
				<Flex
					mx={{
						md: "6 !important",
						lg: "12 !important",
					}}
				>
					<BreadCrumbNav />
				</Flex>
			</Stack>
			<Stack p={{ base: 4, md: "1.5rem 3rem" }} mx={{ md: "5" }} gap={4}>
				<Heading as="h2" variant="h2" mb={4} color="brand.300" fontSize="3xl">
					About Us
				</Heading>
				<Heading as="h3" color="brand.300" fontWeight="semibold" variant="h3">
					Welcome to the Towering Heights Schools website
				</Heading>
				<Box>
					<Text mb={4} className="paragraph" lineHeight={7}>
						Towering Heights Schools is a top educational institution that aims
						to provide a warm,safe and caring learning environment for all our
						pupils. A place where each boy and girl can feel empowered to
						explore ,grow and realise their full potential, nurtured and helped
						by expert practitioners who are passionate about their craft and
						committed to meeting the needs of the children in their care.
					</Text>
					<Text mb={4} className="paragraph" lineHeight={7}>
						We hope that the information and content on this site will give you
						an overview into the life and work of our school.
					</Text>
					<Text mb={4} className="paragraph" lineHeight={7}>
						The school’s curriculum is carefully developed,with a focus on
						fostering excellent standards of literacy and numeracy. A sufficient
						amount of resources and additional employees are available to
						support our efforts in meeting the unique requirements of the kids.
						We put a lot of effort into making sure every child has the study
						skills needed to advance to the next level of education.
					</Text>
					<Text mb={4} className="paragraph" lineHeight={7}>
						A positive partnership with parents is vital in achieving our aims -
						indeed our mission statement is “Building a Brighter Future”. Home
						and school must work together and we need your supportand
						co-operation. As the saying goes, it takes a village to raise a
						child, and we honoured to be part of your village. In return, we
						hope you will find the school welcoming as we are willing to listen
						and respond to your questions,concerns or suggestions.
					</Text>
					<Text mb={4} className="paragraph" lineHeight={7}>
						We hope you all enjoy visiting our school as much as our love
						working here and as much as our children love coming here.
					</Text>
				</Box>
				<Heading as="h3" color="brand.300" fontWeight="semibold" variant="h3">
					Our working hours are as follows:
				</Heading>
				<TableContainer mb={4} w={{ md: "70%" }} className="paragraph">
					<Table variant="striped" colorScheme="blue">
						<Thead>
							<Tr>
								<Th>Day</Th>
								<Th>Time</Th>
							</Tr>
						</Thead>
						<Tbody>
							<Tr>
								<Td>Monday</Td>
								<Td>7:30 AM - 5:00 PM</Td>
							</Tr>
							<Tr>
								<Td>Tuesday</Td>
								<Td>7:30 AM - 5:00 PM</Td>
							</Tr>
							<Tr>
								<Td>Wednesday</Td>
								<Td>7:30 AM - 5:00 PM</Td>
							</Tr>
							<Tr>
								<Td>Thursday</Td>
								<Td>7:30 AM - 5:00 PM</Td>
							</Tr>
							<Tr>
								<Td>Friday</Td>
								<Td>7:30 AM - 2:00 PM</Td>
							</Tr>
							<Tr>
								<Td>Saturday</Td>
								<Td>CLOSED</Td>
							</Tr>
							<Tr>
								<Td>Sunday</Td>
								<Td>CLOSED</Td>
							</Tr>
						</Tbody>
					</Table>
				</TableContainer>
				<Heading as="h3" color="brand.300" fontWeight="semibold" variant="h3">
					Our Values
				</Heading>
				<Text mb={4} className="paragraph" lineHeight={7}>
					At Towering Heights School, we value with high regard,high
					performance, independent thinking, individualism; we believe in
					helping each child find their natural gifts and helping them to
					nurture and grow them in a place where they feel :
				</Text>
				<OrderedList mb={4} className="paragraph">
					<ListItem ml={16} pl={2}>
						Kindness
					</ListItem>
					<ListItem ml={16} pl={2}>
						Respect
					</ListItem>
					<ListItem ml={16} pl={2}>
						Integrity
					</ListItem>
					<ListItem ml={16} pl={2}>
						Inclusiveness
					</ListItem>
					<ListItem ml={16} pl={2}>
						Excellence
					</ListItem>
				</OrderedList>
				<Heading as="h3" color="brand.300" fontWeight="semibold" variant="h3">
					Our Mission & Vision
				</Heading>
				<Box>
					<Text mb={4} className="paragraph" lineHeight={7}>
						<strong>Our Mission Statement</strong> at Towering Heights Schools
						is building a brighter future.
					</Text>
					<Text mb={4} className="paragraph" lineHeight={7}>
						<strong>Our Vision</strong>- Picture a school where children use
						their creativity and problem solving to steer their future,where
						knowledge is a foundation of all learning,and where every individual
						is respected and similarities and differences are celebrated. A
						school where confidence grows and engagement develops. By offering a
						balanced curriculum created to meet the academic,cultural,and social
						needs of children from diverse backgrounds in our community,
						Towering Heights aims to ensure that students adapt to and
						contribute to a world that is constantly changing as well as engage
						in continuous lifelong learning.
					</Text>
					<Text mb={4} className="paragraph" lineHeight={7}>
						That’s Towering Heights School!
					</Text>
				</Box>
				<Heading as="h3" color="brand.300" fontWeight="semibold" variant="h3">
					Background
				</Heading>
				<Box>
					<Text mb={4} className="paragraph" lineHeight={7}>
						Towering Heights Schools started as solace for office workers in the
						Alagbaka area with newborns to take care of. Our creche became a day
						home for the children we like to call “The First Five”. Since its
						opening in 2017, THS has grown in number, facilities,and resources.
						From an established residence for the primary school, to a brand new
						computer room for the children to engage with.
					</Text>
					<Text mb={4} className="paragraph" lineHeight={7}>
						All these would not be possible without our parents that choose to
						bring their wards into our care.
					</Text>
				</Box>
			</Stack>
			<Footer />
			<ScrollTopBtn />
		</>
	)
}

export default AboutPage