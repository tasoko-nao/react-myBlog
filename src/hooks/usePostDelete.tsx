import { useCallback, useEffect } from "react";
import { useGetPosts } from "./useGetPosts";

export const usePostDelete = () => {
  // const { posts, setPosts } = useContext(PostsContext);
  const { posts, getPosts } = useGetPosts();
  useEffect(() => getPosts(), [getPosts]);

  const deletePost = useCallback(
    (postId: number) => {
      if (window.confirm("削除してよろしいですか？")) {
        const newPosts = posts.filter((post) => post.id !== postId);
        // setPosts(newPosts);
        console.log(newPosts + "削除");
        return true;
      } else {
        return false;
      }
    },
    [posts]
  );
  return { deletePost };
};
