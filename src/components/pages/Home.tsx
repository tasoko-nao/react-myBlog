import { Box, Flex, Stack } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { PostCard } from "../molecules/PostCard";
import { HomeCarousel } from "../organisms/HomeCarousel";
import { Recommend } from "../organisms/Recommend";
import { Side } from "../organisms/layout/Side";
import { SectionTitle } from "../atoms/SectionTitle";
import { useGetPosts } from "../../hooks/useGetPosts";

export const Home: VFC = memo(() => {
  // firebase
  const { posts } = useGetPosts();
  posts.sort((prev, next) => next.id - prev.id);
  // --------

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
