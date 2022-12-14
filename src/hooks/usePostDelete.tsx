import { useCallback, useContext } from "react";
import { PostsContext } from "../providers/PostsProvider";

export const usePostDelete = () => {
  const { posts, setPosts } = useContext(PostsContext);
  const deletePost = useCallback(
    (postId: number) => {
      if (window.confirm("削除してよろしいですか？")) {
        const newPosts = posts.filter((post) => post.id !== postId);
        setPosts(newPosts);
        return true;
      } else {
        return false;
      }
    },
    [posts, setPosts]
  );
  return { deletePost };
};
