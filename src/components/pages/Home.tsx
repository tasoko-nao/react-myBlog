import { Box, Flex, Stack } from "@chakra-ui/react";
import { memo, useContext, VFC } from "react";
import { PostsContext } from "../../providers/PostsProvider";
import { PostCard } from "../molecules/PostCard";
import { HomeCarousel } from "../organisms/HomeCarousel";
import { Recommend } from "../organisms/Recommend";
import { Side } from "../organisms/layout/Side";
import { SectionTitle } from "../atoms/SectionTitle";

export const Home: VFC = memo(() => {
  const { posts } = useContext(PostsContext);
  posts.sort((prev, next) => next.id - prev.id);

  return (
    <>
      <Box textAlign="center">
        <SectionTitle>よく読まれている記事</SectionTitle>
      </Box>
      <HomeCarousel />
      <Flex direction={{ base: "column", lg: "row" }} gap="20px">
        <Box flex="1">
          <SectionTitle>最新記事</SectionTitle>
          <Stack spacing="6">
            {posts.map((post) => (
              <PostCard post={post} key={post.id} />
            ))}
          </Stack>
          <Recommend />
        </Box>
        <Side />
      </Flex>
    </>
  );
});
