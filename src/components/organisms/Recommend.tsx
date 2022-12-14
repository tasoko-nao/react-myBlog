import { Box, Flex } from "@chakra-ui/react";
import { memo, useContext, VFC } from "react";
import { PostsContext } from "../../providers/PostsProvider";
import { SectionTitle } from "../atoms/SectionTitle";
import { PostCardMin } from "../molecules/PostCardMin";

export const Recommend: VFC = memo(() => {
  const { posts } = useContext(PostsContext);
  const copy = posts.slice();
  const recommendPosts = [...Array(4)].map(
    () => copy.splice(Math.floor(Math.random() * copy.length), 1)[0]
  );

  return (
    <Box
      mt="40px"
      bg="orange.100"
      p={{ base: "20px", md: "40px" }}
      borderRadius="10px"
    >
      <SectionTitle>おすすめ記事</SectionTitle>
      <Flex flexWrap="wrap" gap="20px">
        {recommendPosts.map(
          (post) => post && <PostCardMin post={post} key={post.id} />
        )}
      </Flex>
    </Box>
  );
});
