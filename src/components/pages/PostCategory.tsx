import { Box, Stack, Text } from "@chakra-ui/react";
import { memo, useContext, useEffect, VFC } from "react";
import { PostsContext } from "../../providers/PostsProvider";
import { PostCard } from "../molecules/PostCard";
import { useLocation } from "react-router-dom";
import { CategoryType } from "../../data/Data";
import { SectionTitle } from "../atoms/SectionTitle";

interface stateType {
  Category: CategoryType;
}

export const PostCategory: VFC = memo(() => {
  const { posts } = useContext(PostsContext);
  const {
    state: { Category },
  } = useLocation<stateType>();
  const filteredPosts = posts.filter((post) => {
    return post.category.includes(Category.id);
  });
  useEffect(() => window.scroll(0, 0), [Category]);
  return (
    <Box>
      <SectionTitle>カテゴリ: {Category.name}</SectionTitle>
      <Stack flex="1" spacing="6">
        {filteredPosts.length === 0 ? (
          <Text>投稿が一件もありません</Text>
        ) : (
          filteredPosts.map((post) => <PostCard post={post} key={post.id} />)
        )}
      </Stack>
    </Box>
  );
});
