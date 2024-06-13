import { getProviders, signIn } from "next-auth/react";
import { Container, VStack, Button, Heading } from "@chakra-ui/react";
import { FaGoogle, FaEnvelope } from "react-icons/fa";

export default function SignIn({ providers }) {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Sign In</Heading>
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            {provider.name === "Google" && (
              <Button leftIcon={<FaGoogle />} colorScheme="red" size="lg" width="100%" onClick={() => signIn(provider.id)}>
                Sign in with Google
              </Button>
            )}
            {provider.name === "Email" && (
              <Button leftIcon={<FaEnvelope />} colorScheme="blue" size="lg" width="100%" onClick={() => signIn(provider.id)}>
                Sign in with Email
              </Button>
            )}
          </div>
        ))}
      </VStack>
    </Container>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}