import { Box, Container, Flex } from "@chakra-ui/react";
import { memo, ReactNode, useEffect, VFC } from "react";
import { Footer } from "../organisms/layout/Footer";
import { Header } from "../organisms/layout/Header";
import { Recommend } from "../organisms/Recommend";
import { Side } from "../organisms/layout/Side";
import { useGetPosts } from "../../hooks/useGetPosts";

type Props = {
  children: ReactNode;
};

export const MultiColumnLayout: VFC<Props> = memo((props) => {
  // console.log("multi render");
  const { children } = props;
  const { posts, getPosts } = useGetPosts();
  useEffect(() => getPosts(), []);
  return (
    <>
      <Header />
      <Container w="100%" maxW="1100px" bg="white">
        <Flex direction={{ base: "column", lg: "row" }} gap="20px">
          <Box flex="1">
            {children}
            <Recommend posts={posts} />
          </Box>
          <Side />
        </Flex>
      </Container>
      <Footer />
    </>
  );
});
