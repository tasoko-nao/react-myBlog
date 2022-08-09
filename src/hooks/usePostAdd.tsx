import { useContext } from "react";
import { PostType } from "../data/Data";
import { PostsContext } from "../providers/PostsProvider";

export const usePostAdd = () => {
  const { posts, setPosts, loginUser } = useContext(PostsContext);
  const today = new Date();

  const AddPost = (
    title: string,
    imgPath: string,
    content: string,
    category: Array<number>
  ) => {
    const post: PostType = {
      id: posts.length + 1,
      /* @ts-ignore ページがログイン必須のため */
      userId: loginUser.id,
      title,
      imgPath,
      content,
      created: `${today.getFullYear()}/${
        today.getMonth() + 1
      }/${today.getDate()}`,
      category,
    };
    setPosts([...posts, post]);
  };
  return { AddPost };
};