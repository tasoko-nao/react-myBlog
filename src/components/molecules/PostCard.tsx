import { Box, Flex, Img, Link, Stack, Text } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { useHistory } from "react-router-dom";
import { PostType } from "../../data/Data";
import { Categories } from "../../data/Data";
import { CategoryTag } from "../atoms/CategoryTag";

type Props = {
  post: PostType;
};
export const PostCard: VFC<Props> = memo((props) => {
  const history = useHistory()
  const {
    post: { id, title, imgPath, content, created, category },
  } = props;
  const onClickDetail = (postId: number) => {
    history.push(`/postDetail/${postId}`)
  }
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
        <Link onClick={() => onClickDetail(id)}>
          {title}
        </Link>
      </Text>
      <Flex padding="1rem">
        <Link maxW="300px" width="100%" onClick={() => onClickDetail(id)}>
          <Img
            src={imgPath}
            alt="プロフィール画像"
            width="100%"
            height="200px"
            objectFit="cover"
            flex="1"
          />
        </Link>
        <Box flex="1" margin="1rem">
          <Text>{content}</Text>
          <Text>{created}</Text>
          <Flex gap="3" wrap="wrap">
            {category.map((id) => {
              const categoryName = Categories.find((e) => e.id === id)?.name;
              return <CategoryTag key={id} categoryName={categoryName} />
            })}
          </Flex>
        </Box>
      </Flex>
    </Stack>
  );
});
