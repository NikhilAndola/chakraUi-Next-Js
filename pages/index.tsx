import type { NextPage } from "next";
import { Container, Flex, VStack } from "@chakra-ui/react";
import Cart from "../src/sections/cart";
import Details from "../src/sections/details";

const Home: NextPage = () => (
  <Container maxW="container.xl" p={0}>
    <Flex h="100vh" py={20}>
     <Details/>
     <Cart/>
    </Flex>
  </Container>
);

export default Home;
