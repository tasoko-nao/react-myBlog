import { Flex, Img, Stack, Text } from "@chakra-ui/react";
import { memo, useContext, useEffect, VFC } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Categories } from "../../data/Data";
import { PostType } from "../../hooks/useGetPosts";
import { usePostDelete } from "../../hooks/usePostDelete";
import { PostsContext } from "../../providers/PostsProvider";
import { CategoryTag } from "../atoms/CategoryTag";

interface StateType {
  post: PostType;
}

export const PostDetail: VFC = memo(() => {
  const history = useHistory();
  const { loginUser } = useContext(PostsContext);
  const {
    state: { post },
  } = useLocation<StateType>();
  const dayjs = (dayStore: Date) =>
    `${dayStore.getFullYear()}/${
      dayStore.getMonth() + 1
    }/${dayStore.getDate()}`;

  useEffect(() => window.scroll(0, 0), [post]);

  // 削除
  const { deletePost } = usePostDelete();
  const onClickDelete = () => {
    deletePost(post.id) && history.push("/");
  };
  // 編集
  const onClickEdit = () =>
    history.push({ pathname: "/postAdd", state: { post } });

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
      {loginUser?.isAdmin && (
        <Flex justify="flex-end" gap="1em" fontWeight="bold">
          <Text
            color="blue.600"
            _hover={{ cursor: "pointer" }}
            onClick={() => onClickEdit()}
          >
            編集
          </Text>
          <Text
            color="red.600"
            _hover={{ cursor: "pointer" }}
            onClick={() => onClickDelete()}
          >
            削除
          </Text>
        </Flex>
      )}
      <Flex gap="3" wrap="wrap">
        {post?.category.map((id) => {
          const categoryName = Categories.find((e) => e.id === id)?.name;
          return <CategoryTag key={id} categoryName={categoryName} />;
        })}
      </Flex>
      <Text>投稿日 : {post && dayjs(post.created.toDate())}</Text>
      <Text>{post?.content}</Text>
    </Stack>
  );
});
