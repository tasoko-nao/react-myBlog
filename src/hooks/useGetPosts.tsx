import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  Timestamp,
  updateDoc,
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
    fetchPosts().then((docs) => {
      const docPosts: any = docs.map((doc) => ({
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

  // ポストを保存
  const savePost = useCallback(
    (
      documentId: string,
      title: string,
      imgPath: string,
      content: string,
      category: Array<number>
    ) => {
      return new Promise((resolve) => {
        if (documentId === null) {
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
            }).then(() => resolve(""));
          });
        } else {
          const obj = doc(db, "posts", documentId);
          updateDoc(obj, {
            title,
            imgPath,
            content,
            category,
          }).then(() => resolve(""));
        }
      });
    },
    [loginUser]
  );
  return { posts, loading, getPosts, savePost, deletePost };
};
