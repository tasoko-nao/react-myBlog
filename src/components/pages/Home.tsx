import { Box, Button, Flex, Img, Stack, Text } from "@chakra-ui/react";
import { memo, useContext, VFC } from "react";
import { useLinkPostDetail } from "../../hooks/useLinkPostDetail";
import { PostsContext } from "../../providers/PostsProvider";
import { PostCard } from "../molecules/PostCard";
import { Recommend } from "../organisms/layout/Recommend";
import { Side } from "../organisms/layout/Side";

export const Home: VFC = memo(() => {
  const { posts } = useContext(PostsContext);
  const caroucelPosts = posts.slice(-5);
  const { LinkDetail } = useLinkPostDetail();

  return (
    <>
      <Box
        my="40px"
        padding="3px"
        width={{ base: "60%", lg: "100%" }}
        overflow="hidden"
        mx="auto"
      >
        <Flex gap="20px" position="relative">
          <Button position="relative" top="85px" left="0" bg="none">
            ＜
          </Button>
          <Flex gap="20px" width="940px" overflow="hidden">
            {caroucelPosts.map((post) => (
              <Stack
                flex="1"
                key={post.id}
                onClick={() => LinkDetail(post.id)}
                cursor="pointer"
              >
                <Img
                  src={post.imgPath}
                  objectFit="cover"
                  minWidth="300px"
                  height="200px"
                />
                <Text fontWeight="bold">{post.title}</Text>
              </Stack>
            ))}
          </Flex>
          <Button position="relative" top="85px" right="0" bg="none">
            ＞
          </Button>
        </Flex>
      </Box>
      <Flex direction={{ base: "column", lg: "row" }} gap="20px">
        <Box flex="1">
          <Stack spacing="6">
            {posts.map((post) => (
              <PostCard post={post} key={post.id} />
            ))}
          </Stack>{" "}
          <Recommend />
        </Box>
        <Side />
      </Flex>
    </>
  );
});
