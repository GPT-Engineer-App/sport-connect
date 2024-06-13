import { Container, Text, VStack, Heading, Button, Input, useToast } from "@chakra-ui/react";
import { FaGoogle, FaEnvelope } from "react-icons/fa";
import { signIn } from "next-auth/react";
import { useState } from "react";

const Index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toast = useToast();

  const handleGoogleSignIn = async () => {
    try {
      await signIn("google");
      // Redirect or show success message
    } catch (error) {
      console.error("Google sign-in error:", error);
      toast({
        title: "Google sign-in error",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const handleEmailSignIn = async () => {
    try {
      await signIn("email", { email, password });
      // Redirect or show success message
    } catch (error) {
      console.error("Email sign-in error:", error);
      toast({
        title: "Email sign-in error",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" p={4}>
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to Futple</Heading>
        <Text fontSize="lg" textAlign="center">Organize and join sports events with communities and teams. Connect with amateur football teams and more!</Text>
        <Button leftIcon={<FaGoogle />} colorScheme="red" size="lg" width="100%" onClick={handleGoogleSignIn} boxShadow="md">Sign in with Google</Button>
        <VStack spacing={2} width="100%">
          <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} boxShadow="sm" />
          <Input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} boxShadow="sm" />
          <Button leftIcon={<FaEnvelope />} colorScheme="blue" size="lg" width="100%" onClick={handleEmailSignIn} boxShadow="md">Sign in with Email</Button>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;