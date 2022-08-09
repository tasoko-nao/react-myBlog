import { useContext } from "react";
import { PostsContext } from "../providers/PostsProvider";

export const usePostEdit = () => {
  const { posts, setPosts } = useContext(PostsContext);
  const EditPost = (
    id: number,
    title: string,
    imgPath: string,
    content: string,
    category: Array<number>
  ) => {
    const newPosts = [...posts]
    const savePost = newPosts.find((post) => post.id === id)
    if (savePost !== undefined) {
      savePost["title"] = title
      savePost["imgPath"] = imgPath
      savePost["content"] = content
      savePost["category"] = category
    }
    setPosts(newPosts)
  };
  return { EditPost };
};
