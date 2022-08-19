import { Container, Flex } from "@chakra-ui/react";
import { memo, ReactNode, VFC } from "react";
import { Footer } from "../organisms/layout/Footer";
import { Header } from "../organisms/layout/Header";

type Props = {
  children: ReactNode;
};

export const PostsLayout: VFC<Props> = memo((props) => {
  const { children } = props;

  return (
    <Flex direction="column" minH="100vh" justify="space-between">
      <Header />
      <Container w="100%" maxW="1100px" bg="white">
        {children}
      </Container>
      <Footer />
    </Flex>
  );
});
