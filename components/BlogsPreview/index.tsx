import { Box, Button, Stack, Flex, Heading, Icon } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { TiArrowRight } from "react-icons/ti"
import Preview from "./Preview"
import { blogsPreview } from "../../data"
import { smallHeadingBorder } from "../../theme/components/boxStyles"
import { motion } from "framer-motion"
import { headingVariants } from "./AnimatedBlogPreview"

const BlogsPreview = () => {
	const router = useRouter()

	return (
		<Stack bg="brand.500" p={6}>
			<Flex direction="column" align="center" my={6}>
				<motion.div
					variants={headingVariants}
					initial="hidden"
					whileInView="show"
				>
					<Heading as="h3" variant="h3">
						Latest Blog
					</Heading>
				</motion.div>
				<Box sx={smallHeadingBorder} bg="font.400" />
			</Flex>
			<Flex direction="row" flexWrap="wrap" justify="center">
				{blogsPreview.map((blog) => (
					<Preview
						key={blog.id}
						alt={blog.alt}
						img={blog.img}
						summary={blog.summary}
					/>
				))}
			</Flex>
			<Flex justify="center">
				<Button
					onClick={() => router.push("/blog")}
					variant="solid"
					size="lg"
					sx={{ borderRadius: "2xl" }}
				>
					More Articles
					<Icon as={TiArrowRight} mt="0.2rem" fontSize="2xl" />
				</Button>
			</Flex>
		</Stack>
	)
}

export default BlogsPreview
