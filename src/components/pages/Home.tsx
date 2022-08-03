import {
  Box,
  Container,
  Flex,
  Img,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { memo, VFC } from "react";

const Posts = [
  {
    title: "タイトル1",
    imgPath: "https://source.unsplash.com/random",
    content: "内容です",
  },
  {
    title: "タイトル2",
    imgPath: "https://source.unsplash.com/random",
    content: "内容です",
  },
  {
    title: "タイトル3",
    imgPath: "https://source.unsplash.com/random",
    content: "内容です",
  },
];

const Categories = ["HTML", "CSS", "JavaScript", "Python", "Vue", "React"];
export const Home: VFC = memo(() => {
  return (
    <>
      <Container w="100%" maxW="1100px" bg="white">
        <Flex>
          <Box flex="1">
            {Posts.map((post) => (
              <Stack my="40px">
                <Img
                  src={post.imgPath}
                  alt="プロフィール画像"
                  maxW="660px"
                  height="420px"
                  objectFit="cover"
                />
                <Text as="h2" fontSize="3xl" fontWeight="bold">
                  {post.title}
                </Text>
                <p>{post.content}</p>
              </Stack>
            ))}
          </Box>
          <Box w="300px" bg="gray.200" px="10px">
            <Stack align="center" my="20px">
              <Img
                src="https://source.unsplash.com/random"
                boxSize="200px"
                borderRadius="full"
                objectFit="cover"
              />
              <Text fontSize="2xl" fontWeight="bold">
                スーパーマン
              </Text>
              <Text>開発経歴：react3年</Text>
            </Stack>
            <Box my="40px">
              <Text fontSize="1.2rem" fontWeight="bolder">
                カテゴリ
              </Text>
              <UnorderedList my="1rem" mx="0">
                {Categories.map((category) => (
                  <ListItem listStyleType="none" bg="white" my="10px" p="10px">
                    {category}
                  </ListItem>
                ))}
              </UnorderedList>
            </Box>
          </Box>
        </Flex>
      </Container>
    </>
  );
});
