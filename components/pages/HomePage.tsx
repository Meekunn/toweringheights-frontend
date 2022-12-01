import { Flex, Heading, Text, Box, Button } from "@chakra-ui/react"
import { useRouter } from "next/router"
import Activities from "../Activities"
import BlogsPreview from "../BlogsPreview"
import Staffs from "../Staffs"
import ImageSlideShow from "../ImageSlideShow"
import GalleryPreview from "../GalleryPreview"
import LatestUpdates from "../LatestUpdates"
import { headingBorder } from "../../theme/components/boxStyles"
import Footer from "../Footer"
import ScrollTopBtn from "../Navbar/ScrollTopBtn"

const HomePage = () => {
	const router = useRouter()

	return (
		<>
			<Flex
				justify="center"
				p={4}
				direction={{
					base: "column",
					md: "row-reverse",
				}}
				gap={4}
			>
				<ImageSlideShow />
				<Box p={{ base: "1rem", md: "2rem" }} w={{ xl: "50%" }}>
					<Text fontSize="xl" pb={2} className="paragraph">
						Welcome to
					</Text>
					<Heading as="h2" variant="h2" color="brand.300">
						Towering Heights Schools
					</Heading>
					<Box bg="brand.100" w={"75%"} sx={headingBorder} />
					<Text pt={4} pb={2} className="paragraph">
						Towering Heights Schools is a centre of education that prides itself
						on creating leaders of tomorrow. We provide not only educated, but
						morally sound students.
					</Text>
					<Text pt={4} pb={8} className="paragraph">
						Our
						<span
							style={{
								fontWeight: "700",
							}}
						>
							mission statement
						</span>
						is building individuals and empowering them with skills and
						confidence to challenge themselves in every aspect of their lives
						and also enrichment of character and sense of identity. We are
						determined to build them into becoming well-balanced, productive,
						and happy individuals.
					</Text>
					<Button
						onClick={() => router.push("/about_us")}
						size="lg"
						variant="solid"
						sx={{
							px: "2rem",
							borderRadius: "3xl",
						}}
					>
						READ MORE
					</Button>
				</Box>
			</Flex>
			<LatestUpdates />
			<Activities />
			<Box bg="brand.500">
				<BlogsPreview />
				<Staffs />
				<GalleryPreview />
			</Box>
			<Footer />
			<ScrollTopBtn />
		</>
	)
}

export default HomePage
