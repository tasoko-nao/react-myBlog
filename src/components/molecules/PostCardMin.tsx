import { Box, Text } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { PostType } from "../../data/Data";
import { useLinkPostDetail } from "../../hooks/useLinkPostDetail";
import { PostCardImage } from "../atoms/PostCardImage";

type Props = {
  post: PostType;
};

export const PostCardMin: VFC<Props> = memo((props) => {
  const { post } = props;
  const { LinkDetail } = useLinkPostDetail();

  return (
    <Box
      flex="1"
      key={post.id}
      borderRadius="10px"
      overflow="hidden"
      onClick={() => LinkDetail(post.id)}
      _hover={{ cursor: "pointer" }}
      minWidth="260px"
    >
      <PostCardImage imgPath={post.imgPath} />
      <Text as="h3" fontWeight="bold" p="0.5em" bg="white">
        {post.title}
      </Text>
    </Box>
  );
});
