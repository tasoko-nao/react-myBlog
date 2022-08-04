import { Flex, Img, Stack, Text, } from "@chakra-ui/react";
import { memo, useContext, useEffect, VFC } from "react";
import { useParams } from "react-router-dom";
import { Categories } from "../../data/Data";
import { PostsContext } from "../../providers/PostsProvider";
import { CategoryTag } from "../atoms/CategoryTag";

interface StateType {
  id: string
}

export const PostDetail: VFC = memo(() => {
  const { id } = useParams<StateType>()
  const postId = Number(id)
  const { posts } = useContext(PostsContext)
  const post = posts.find(e => e.id === postId)
  useEffect(() => window.scroll(0, 0), [id]);
  return (
    <Stack flex="1" spacing="6">
      <Text
        as="h2"
        fontSize="2xl"
        fontWeight="bold"
        bg="gray.800"
        color="white"
        p="0.5rem"
      >
        {post?.title}
      </Text>
      <Img
        src={post?.imgPath}
        alt="プロフィール画像"
        width="100%"
        height="400px"
        objectFit="cover"
      />
      <Flex gap="3" wrap="wrap">
        {post?.category.map((id) => {
          const categoryName = Categories.find((e) => e.id === id)?.name;
          return <CategoryTag key={id} categoryName={categoryName} />
        })}
      </Flex>
      <Text>
        投稿日 : {post?.created}
      </Text>
      <Text>
        {post?.content}
      </Text>
    </Stack>
  );
});
