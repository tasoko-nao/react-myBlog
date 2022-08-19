import { collection, getDocs, Timestamp } from "firebase/firestore";
import { useCallback, useState } from "react";
import db from "../firebase";

export type PostType = {
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

  const getPosts = useCallback(() => {
    setLoading(true);
    const postData = collection(db, "posts");
    getDocs(postData).then((snapShot) => {
      const docPosts: any = snapShot.docs.map((doc) => ({ ...doc.data() }));
      setPosts(docPosts);
      posts.sort((prev, next) => next.id - prev.id);
      setLoading(false);
    });
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, []);

  return { posts, loading, getPosts };
};
