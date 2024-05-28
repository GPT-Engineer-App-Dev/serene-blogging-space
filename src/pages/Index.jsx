import { Box, Container, Flex, Heading, Text, VStack, Link, HStack } from "@chakra-ui/react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      <Box as="header" bg="brand.800" color="white" py={4}>
        <Container maxW="container.lg">
          <Flex justify="space-between" align="center">
            <Heading as="h1" size="lg">My Blog</Heading>
            <HStack spacing={4}>
              <Link href="#home" color="white">Home</Link>
              <Link href="#about" color="white">About</Link>
              <Link href="#contact" color="white">Contact</Link>
            </HStack>
          </Flex>
        </Container>
      </Box>

      <Container maxW="container.lg" py={8}>
        <VStack spacing={8} align="stretch">
          <Box as="article" p={5} shadow="md" borderWidth="1px">
            <Heading as="h2" size="md">First Blog Post</Heading>
            <Text mt={4}>This is the content of the first blog post. It's a great place to share your thoughts and ideas.</Text>
          </Box>
          <Box as="article" p={5} shadow="md" borderWidth="1px">
            <Heading as="h2" size="md">Second Blog Post</Heading>
            <Text mt={4}>This is the content of the second blog post. Keep writing and sharing your stories.</Text>
          </Box>
        </VStack>
      </Container>

      <Box as="footer" bg="brand.800" color="white" py={4} mt={8}>
        <Container maxW="container.lg">
          <Flex justify="space-between" align="center">
            <Text>&copy; 2023 My Blog. All rights reserved.</Text>
            <HStack spacing={4}>
              <Link href="https://twitter.com" isExternal>
                <FaTwitter />
              </Link>
              <Link href="https://linkedin.com" isExternal>
                <FaLinkedin />
              </Link>
              <Link href="https://github.com" isExternal>
                <FaGithub />
              </Link>
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;