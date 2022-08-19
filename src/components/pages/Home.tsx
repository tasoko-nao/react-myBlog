import { Box, Flex, Spinner, Stack } from "@chakra-ui/react";
import { memo, useEffect, VFC } from "react";
import { PostCard } from "../molecules/PostCard";
import { HomeCarousel } from "../organisms/HomeCarousel";
import { Recommend } from "../organisms/Recommend";
import { Side } from "../organisms/layout/Side";
import { SectionTitle } from "../atoms/SectionTitle";
import { useGetPosts } from "../../hooks/useGetPosts";
import styled, { keyframes } from "styled-components";

export const Home: VFC = memo(() => {
  // firebase
  const { posts, loading, getPosts } = useGetPosts();
  useEffect(() => getPosts(), [getPosts]);
  posts.sort((prev, next) => next.id - prev.id);
  // --------

  return (
    <>
      {loading ? (
        <Box textAlign="center">
          <Spinner color="gray.200" />
        </Box>
      ) : (
        <FadeWrapper>
          <Box textAlign="center">
            <SectionTitle>よく読まれている記事</SectionTitle>
          </Box>
          <HomeCarousel posts={posts} />
          <Flex direction={{ base: "column", lg: "row" }} gap="20px">
            <Box flex="1">
              <SectionTitle>最新記事</SectionTitle>
              <Stack spacing="6">
                {posts.map((post) => (
                  <PostCard post={post} key={post.id} />
                ))}
              </Stack>
              <Recommend posts={posts} />
            </Box>
            <Side />
          </Flex>
        </FadeWrapper>
      )}
    </>
  );
});

const fadeIn = keyframes`
  from {
    opacity: 0
  }
  to {
    opacity: 1
  }
`;

const FadeWrapper = styled.div`
  opacity: 0;
  animation: ${fadeIn} 0.1s ease forwards;
`;
