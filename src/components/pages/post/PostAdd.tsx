import {
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import { ChangeEvent, memo, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Categories } from "../../../data/Data";
import { usePostAdd } from "../../../hooks/usePostAdd";
export const PostAdd = memo(() => {
  const [title, setTitle] = useState("");
  const [imgPath, setImgPath] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState<Array<number>>([1]);
  useEffect(() => window.scroll(0, 0), []);

  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const onChangeImg = (e: ChangeEvent<HTMLInputElement>) => {
    setImgPath(e.target.value);
  };
  const onChangeContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };
  const onChangeCategory = (e: Array<number>) => {
    setCategory(e.map(Number));
  };
  const { AddPost } = usePostAdd();
  const history = useHistory();
  const onSubmitAddPost = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    AddPost(title, imgPath, content, category);
    history.push("/");
  };
  return (
    <Box>
      <Heading as="h2" my="1em">
        新規投稿
      </Heading>
      <Stack as="form" spacing="6" onSubmit={onSubmitAddPost}>
        <FormControl>
          <FormLabel>タイトル</FormLabel>
          <Input required={true} onChange={onChangeTitle} />
        </FormControl>
        <FormControl>
          <FormLabel>キャッチ画像</FormLabel>
          <Input
            required={true}
            placeholder="パスを入力"
            onChange={onChangeImg}
          />
        </FormControl>
        <FormControl>
          <FormLabel>内容</FormLabel>
          <Textarea required={true} rows={10} onChange={onChangeContent} />
        </FormControl>
        <FormControl>
          <FormLabel>カテゴリ</FormLabel>
          <CheckboxGroup
            colorScheme="green"
            defaultValue={["1"]}
            onChange={onChangeCategory}
          >
            {Categories.map((category) => (
              <Checkbox key={category.id} value={String(category.id)} mr="1em">
                {category.name}
              </Checkbox>
            ))}
          </CheckboxGroup>
        </FormControl>
        <FormControl>
          <Button type="submit">保存</Button>
        </FormControl>
      </Stack>
    </Box>
  );
});
