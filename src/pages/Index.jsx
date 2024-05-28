import { Box, Container, Flex, Heading, Text, VStack, Link, HStack, Image } from "@chakra-ui/react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(storedPosts);
  }, []);

  return (
    <Box>
      <Box as="header" bg="brand.800" color="white" py={4}>
        <Container maxW="container.lg">
          <Flex justify="space-between" align="center">
            <Heading as="h1" size="lg">My Blog</Heading>
            <HStack spacing={4}>
              <Link as={RouterLink} to="/" color="white">Home</Link>
              <Link as={RouterLink} to="/add-post" color="white">Add Post</Link>
              <Link href="#about" color="white">About</Link>
              <Link href="#contact" color="white">Contact</Link>
            </HStack>
          </Flex>
        </Container>
      </Box>

      <Container maxW="container.lg" py={8}>
        <VStack spacing={8} align="stretch">
          {posts.map((post, index) => (
            <Box as="article" p={5} shadow="md" borderWidth="1px" key={index}>
              <Heading as="h2" size="md">{post.title}</Heading>
              {post.image && <Image src={post.image} alt={post.title} mt={4} />}
              <Text mt={4}>{post.content}</Text>
            </Box>
          ))}
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