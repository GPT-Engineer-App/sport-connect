import { Container, Text, VStack, Heading, Button, Input } from "@chakra-ui/react";
import { FaGoogle, FaEnvelope } from "react-icons/fa";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { auth, googleProvider } from "../firebaseConfig";
import { useState } from "react";

const Index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      // Redirect or show success message
    } catch (error) {
      console.error("Google sign-in error:", error);
    }
  };

  const handleEmailSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Redirect or show success message
    } catch (error) {
      console.error("Email sign-in error:", error);
    }
  };
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to Futple</Heading>
        <Text fontSize="lg" textAlign="center">Organize and join sports events with communities and teams. Connect with amateur football teams and more!</Text>
        <Button leftIcon={<FaGoogle />} colorScheme="red" size="lg" width="100%" onClick={handleGoogleSignIn}>Sign in with Google</Button>
        <VStack spacing={2} width="100%">
          <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <Button leftIcon={<FaEnvelope />} colorScheme="blue" size="lg" width="100%" onClick={handleEmailSignIn}>Sign in with Email</Button>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;