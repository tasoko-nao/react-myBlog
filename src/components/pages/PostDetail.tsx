import { Flex, Img, Stack, Text } from "@chakra-ui/react";
import { memo, useContext, useEffect, VFC } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Categories } from "../../data/Data";
import { useGetPosts } from "../../hooks/useGetPosts";
import { usePostDelete } from "../../hooks/usePostDelete";
import { PostsContext } from "../../providers/PostsProvider";
import { CategoryTag } from "../atoms/CategoryTag";

interface StateType {
  id: string;
}

export const PostDetail: VFC = memo(() => {
  const history = useHistory();
  const { id } = useParams<StateType>();
  const postId = Number(id);
  const { loginUser } = useContext(PostsContext);
  const { posts } = useGetPosts();
  const post = posts.find((e) => e.id === postId);

  const dayjs = (dayStore: Date) =>
    `${dayStore.getFullYear()}/${
      dayStore.getMonth() + 1
    }/${dayStore.getDate()}`;

  useEffect(() => window.scroll(0, 0), [id]);

  // 削除
  const { deletePost } = usePostDelete();
  const onClickDelete = () => {
    deletePost(postId) && history.push("/");
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
