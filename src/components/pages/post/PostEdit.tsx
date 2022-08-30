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
import { ChangeEvent, memo, useEffect, useMemo, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Categories } from "../../../data/Data";
import { useGetPosts } from "../../../hooks/useGetPosts";
export const PostEdit = memo(() => {
  useEffect(() => window.scroll(0, 0), []);
  const [title, setTitle] = useState("");
  const [imgPath, setImgPath] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState<Array<number>>([]);

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
  const history = useHistory();
  const { state } = useLocation<any>();
  const post = useMemo(() => (state ? state.post : null), [state]);

  const { savePost } = useGetPosts();

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setImgPath(post.imgPath);
      setContent(post.content);
      setCategory(post.category);
    }
  }, [post]);

  // 保存時の処理
  async function onSubmitAddPost(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    const documentId = post ? post.documentId : null;
    await savePost(documentId, title, imgPath, content, category);
    console.log("add complete");
    history.push("/");
  }

  return (
    <Box>
      <Heading as="h2" my="1em">
        新規投稿
      </Heading>
      <Stack as="form" spacing="6" onSubmit={onSubmitAddPost}>
        <FormControl>
          <FormLabel>タイトル</FormLabel>
          <Input value={title} required={true} onChange={onChangeTitle} />
        </FormControl>
        <FormControl>
          <FormLabel>キャッチ画像</FormLabel>
          <Input
            value={imgPath}
            required={true}
            placeholder="パスを入力"
            onChange={onChangeImg}
          />
        </FormControl>
        <FormControl>
          <FormLabel>内容</FormLabel>
          <Textarea
            value={content}
            required={true}
            rows={10}
            onChange={onChangeContent}
          />
        </FormControl>
        <FormControl>
          <FormLabel>カテゴリ</FormLabel>
          <CheckboxGroup
            colorScheme="orange"
            value={category.map(String)}
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
