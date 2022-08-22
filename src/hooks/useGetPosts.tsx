import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  Timestamp,
} from "firebase/firestore";
import { useCallback, useContext, useState } from "react";
import db from "../firebase";
import { PostsContext } from "../providers/PostsProvider";

export type PostType = {
  documentId: string;
  id: number;
  userId: string;
  title: string;
  imgPath: string;
  content: string;
  created: Timestamp;
  category: Array<number>;
};

export const useGetPosts = () => {
  const [posts, setPosts] = useState<Array<PostType>>([]);
  const [loading, setLoading] = useState(false);
  const { loginUser } = useContext(PostsContext);

  // ポストを取得
  async function fetchPosts() {
    const querySnapShot = await getDocs(collection(db, "posts"));
    return querySnapShot.docs;
  }

  // ポストを取得
  const getPosts = useCallback(() => {
    console.log("getPosts!!");
    setLoading(true);
    const postData = collection(db, "posts");
    getDocs(postData).then((snapShot) => {
      const docPosts: any = snapShot.docs.map((doc) => ({
        documentId: doc.id,
        ...doc.data(),
      }));
      setPosts(docPosts);
      posts.sort((prev, next) => next.id - prev.id);
      setLoading(false);
    });
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, []);

  // ポスト削除
  const deletePost = useCallback((documentId: string) => {
    if (window.confirm("削除してよろしいですか？")) {
      deleteDoc(doc(db, "posts", documentId));
    }
  }, []);

  // ポストを追加
  const savePost = useCallback(
    (
      title: string,
      imgPath: string,
      content: string,
      category: Array<number>
    ) => {
      return new Promise((resolve) => {
        setLoading(true);
        console.log("promise start");
        fetchPosts().then((posts) => {
          const postIds: Array<number> = posts.map((post) => post.data().id);
          const id = Math.max.apply(null, postIds) + 1;
          addDoc(collection(db, "posts"), {
            id,
            title,
            imgPath,
            content,
            category,
            userId: loginUser?.id,
            created: Timestamp.fromDate(new Date()),
          });
          console.log("add doc");
          resolve("");
        });
        setLoading(false);
      });
    },
    [loginUser]
  );

  return { posts, loading, getPosts, savePost, deletePost };
};
