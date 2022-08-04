import { Box, Flex, Img, Stack, Text } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { PostType } from "../../data/Data";
import { Categories } from "../../data/Data";

type Props = {
  post: PostType;
};
export const PostCard: VFC<Props> = memo((props) => {
  const {
    post: { title, imgPath, content, created, category },
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
        {title}
      </Text>
      <Flex padding="1rem">
        <Img
          src={imgPath}
          alt="プロフィール画像"
          maxW="300px"
          height="200px"
          objectFit="cover"
          flex="1"
        />
        <Box flex="1" margin="1rem">
          <Text>{content}</Text>
          <Text>{created}</Text>
          <Flex gap="3" wrap="wrap">
            {category.map((id) => {
              const categoryName = Categories.find((e) => e.id === id)?.name;
              return (
                <Text
                  key={id}
                  bg="orange.400"
                  color="white"
                  padding="5px 10px"
                  fontSize="small"
                  borderRadius="10px"
                >
                  {categoryName}
                </Text>
              );
            })}
          </Flex>
        </Box>
      </Flex>
    </Stack>
  );
});
