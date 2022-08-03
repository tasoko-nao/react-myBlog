import {
  Container,
  Flex,
  Stack,
} from "@chakra-ui/react";
import { memo, useContext, VFC } from "react";
import { Side } from "../organisms/layout/Side";
import { PostsContext } from "../../providers/PostsProvider"
import { PostCard } from "../molecules/PostCard";

export const Home: VFC = memo(() => {
  const { posts } = useContext(PostsContext)
  return (
    <>
      <Container w="100%" maxW="1100px" bg="white">
        <Flex direction={{ base: "column", lg: "row" }} gap="20px">
          <Stack flex="1" spacing="6">
            {posts.map((post) => (
              <PostCard post={post} key={post.id} />
            ))}
          </Stack>
          <Side />
        </Flex>
      </Container>
    </>
  );
});
