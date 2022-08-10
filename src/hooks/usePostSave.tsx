import { useContext } from "react";
import { PostType } from "../data/Data";
import { PostsContext } from "../providers/PostsProvider";

export const usePostSave = () => {
  const { posts, setPosts, loginUser } = useContext(PostsContext);
  const today = new Date();
  const postIds = posts.map((post) => post.id);
  const maxPostId = Math.max.apply(null, postIds);

  const postSave = (
    title: string,
    imgPath: string,
    content: string,
    category: Array<number>,
    id: number = maxPostId + 1
  ) => {
    const newPosts = [...posts];
    const updatePost = newPosts.find((post) => post.id === id);

    if (updatePost !== undefined) {
      updatePost["title"] = title;
      updatePost["imgPath"] = imgPath;
      updatePost["content"] = content;
      updatePost["category"] = category;
      setPosts(newPosts);
    } else {
      const post: PostType = {
        id,
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
    }
  };
  return { postSave };
};
