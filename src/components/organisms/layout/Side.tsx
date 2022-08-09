import {
  Box,
  Flex,
  Img,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { memo, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { Categories, CategoryType } from "../../../data/Data";
import { PostsContext } from "../../../providers/PostsProvider";

export const Side = memo(() => {
  const history = useHistory();
  const categoryLink = (category: CategoryType) => {
    history.push({ pathname: "/postCategory", state: { Category: category } });
  };
  const { loginUser, setLoginUser } = useContext(PostsContext);
  const onClickLogout = () => {
    setLoginUser(undefined);
    alert("ログアウトしました");
    window.scroll(0, 0);
  };
  return (
    <Box
      w={{ lg: "300px" }}
      bg="gray.200"
      px="10px"
      borderRadius="10px"
      position="relative"
    >
      <Stack align="center" my="20px">
        <Img
          src="https://source.unsplash.com/sSw9_Sd8hR4"
          boxSize="200px"
          borderRadius="full"
          objectFit="cover"
        />
        <Text fontSize="2xl" fontWeight="bold">
          スーパーマン
        </Text>
        <Text>旅行が大好きなおじさん</Text>
      </Stack>
      <Box my="40px" position="sticky" top="20px">
        <Text fontSize="1.2rem" fontWeight="bolder">
          カテゴリ
        </Text>
        <UnorderedList my="1rem" mx="0">
          {Categories.map((category) => (
            <ListItem
              key={category.id}
              listStyleType="none"
              bg="white"
              my="10px"
              p="10px"
              cursor="pointer"
              onClick={() => categoryLink(category)}
            >
              {category.name}
            </ListItem>
          ))}
        </UnorderedList>
        <Flex justify="space-between">
          <Text>{loginUser ? loginUser.name : "ゲスト"}さん</Text>
          <Text color="blue.600">
            <Link to="/postAdd">新規投稿</Link>
          </Text>
        </Flex>
        <Box textAlign="right" my="1em" fontWeight="bold">
          {loginUser ? (
            <Text onClick={() => onClickLogout()} cursor="pointer">
              ログアウト
            </Text>
          ) : (
            <Link to="/login">ログイン</Link>
          )}
        </Box>
      </Box>
    </Box>
  );
});
