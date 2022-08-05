import { Flex, Link, Stack, Text } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { PostType } from "../../data/Data";
import { Categories } from "../../data/Data";
import { useLinkPostDetail } from "../../hooks/useLinkPostDetail";
import { CategoryTag } from "../atoms/CategoryTag";
import { PostCardImage } from "../atoms/PostCardImage";

type Props = {
  post: PostType;
};
export const PostCard: VFC<Props> = memo((props) => {
  const { LinkDetail } = useLinkPostDetail();

  const {
    post: { id, title, imgPath, content, created, category },
  } = props;
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
        <Link onClick={() => LinkDetail(id)}>{title}</Link>
      </Text>
      <Flex padding="1rem" wrap="wrap">
        <Link flex="1" width="100%" onClick={() => LinkDetail(id)}>
          <PostCardImage imgPath={imgPath} />
        </Link>
        <Stack flex="1" margin="1rem" spacing="4">
          <Text>{content}</Text>
          <Text>{created}</Text>
          <Flex gap="3" wrap="wrap">
            {category.map((id) => {
              const categoryName = Categories.find((e) => e.id === id)?.name;
              return <CategoryTag key={id} categoryName={categoryName} />;
            })}
          </Flex>
        </Stack>
      </Flex>
    </Stack>
  );
});
