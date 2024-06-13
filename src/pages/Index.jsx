import { Container, Text, VStack, Heading, Button } from "@chakra-ui/react";
import { FaGoogle, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to Futple</Heading>
        <Text fontSize="lg" textAlign="center">Organize and join sports events with communities and teams. Connect with amateur football teams and more!</Text>
        <Button leftIcon={<FaGoogle />} colorScheme="red" size="lg" width="100%">Sign in with Google</Button>
        <Button leftIcon={<FaEnvelope />} colorScheme="blue" size="lg" width="100%">Sign in with Email</Button>
      </VStack>
    </Container>
  );
};

export default Index;