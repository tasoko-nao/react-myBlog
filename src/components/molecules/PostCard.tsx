import { Flex, Link, Stack, Text } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { Categories } from "../../data/Data";
import { UserList } from "../../data/UserData";
import { PostType } from "../../hooks/useGetPosts";
import { useLinkPostDetail } from "../../hooks/useLinkPostDetail";
import { CategoryTag } from "../atoms/CategoryTag";
import { PostCardImage } from "../atoms/PostCardImage";

type Props = {
  post: PostType;
};
export const PostCard: VFC<Props> = memo((props) => {
  const { LinkDetail } = useLinkPostDetail();
  const { post } = props;
  const dayjs = (dayStore: Date) =>
    `${dayStore.getFullYear()}/${
      dayStore.getMonth() + 1
    }/${dayStore.getDate()}`;

  return (
    <Stack border="1px solid gray" borderRadius="10px" overflow="hidden">
      <Text
        as="h2"
        fontSize="2xl"
        fontWeight="bold"
        bg="gray.800"
        color="white"
        p="0.5rem"
      >
        <Link onClick={() => LinkDetail(post)}>{post.title}</Link>
      </Text>
      <Flex padding="1rem" wrap="wrap">
        <Link flex="1" width="100%" onClick={() => LinkDetail(post)}>
          <PostCardImage imgPath={post.imgPath} />
        </Link>
        <Stack flex="1" margin="1rem" spacing="4">
          <Text
            display="-webkit-box"
            overflow="hidden"
            style={{ WebkitBoxOrient: "vertical", WebkitLineClamp: "2" }}
          >
            {post.content}
          </Text>
          <Flex gap="3" wrap="wrap">
            {post.category.map((id) => {
              const categoryName = Categories.find((e) => e.id === id)?.name;
              return <CategoryTag key={id} categoryName={categoryName} />;
            })}
          </Flex>
          <Text fontSize="sm">{dayjs(post.created.toDate())}</Text>
          <Text fontSize="sm">
            {UserList.find((user) => user.id === post.userId)?.name}
          </Text>
        </Stack>
      </Flex>
    </Stack>
  );
});
