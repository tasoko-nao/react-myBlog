import {
  Stack,
} from "@chakra-ui/react";
import { memo, useContext, VFC } from "react";
import { PostsContext } from "../../providers/PostsProvider"
import { PostCard } from "../molecules/PostCard";

export const Home: VFC = memo(() => {
  const { posts } = useContext(PostsContext)
  return (
    <>
      <Stack flex="1" spacing="6">
        {posts.map((post) => (
          <PostCard post={post} key={post.id} />
        ))}
      </Stack>
    </>
  );
});
