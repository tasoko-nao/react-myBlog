import { useCallback, useEffect } from "react";
// import { PostType } from "../data/Data";
import { useGetPosts } from "./useGetPosts";

export const usePostSave = () => {
  // const { posts, setPosts, loginUser } = useContext(PostsContext);
  // const postIds = posts.map((post) => post.id);
  // const maxPostId = Math.max.apply(null, postIds);

  // const postSave = useCallback(
  //   (
  //     title: string,
  //     imgPath: string,
  //     content: string,
  //     category: Array<number>,
  //     id: number = maxPostId + 1
  //   ) => {
  //     const today = new Date();
  //     const newPosts = [...posts];
  //     const updatePost = newPosts.find((post) => post.id === id);

  //     if (updatePost !== undefined) {
  //       updatePost["title"] = title;
  //       updatePost["imgPath"] = imgPath;
  //       updatePost["content"] = content;
  //       updatePost["category"] = category;
  //       setPosts(newPosts);
  //     } else {
  //       const post: PostType = {
  //         id,
  //         /* @ts-ignore ページがログイン必須のため */
  //         userId: loginUser.id,
  //         title,
  //         imgPath,
  //         content,
  //         created: `${today.getFullYear()}/${
  //           today.getMonth() + 1
  //         }/${today.getDate()}`,
  //         category,
  //       };
  //       setPosts([...posts, post]);
  //     }
  //   },
  //   [loginUser, maxPostId, posts, setPosts]
  // );

  const { posts, getPosts } = useGetPosts();
  useEffect(() => getPosts(), [getPosts]);

  const postIds = [1, 2, 3, 4];

  const maxPostId = Math.max.apply(null, postIds);

  const postSave = useCallback(
    (
      title: string,
      imgPath: string,
      content: string,
      category: Array<number>,
      id: number = maxPostId + 1
    ) => {
      const today = new Date();
      const newPosts = [...posts];
      const updatePost = newPosts.find((post) => post.id === id);
      if (updatePost !== undefined) {
        updatePost["title"] = title;
        updatePost["imgPath"] = imgPath;
        updatePost["content"] = content;
        updatePost["category"] = category;
        console.log(newPosts + "保存");
        // setPosts(newPosts);
      } else {
        // const post: PostType = {
        const post: any = {
          id,
          /* @ts-ignore ページがログイン必須のため */
          userId: loginUser.id,
          title,
          imgPath,
          content,
          // created: `${today.getFullYear()}/${
          //   today.getMonth() + 1
          // }/${today.getDate()}`,
          category,
        };
        // setPosts([...posts, post]);
        console.log(post + "保存");
      }
    },
    [maxPostId, posts]
  );
  return { postSave };
};
