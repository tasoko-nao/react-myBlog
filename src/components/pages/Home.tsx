import { Box, Flex, Stack } from "@chakra-ui/react";
import { memo, useContext, useEffect, useState, VFC } from "react";
import { PostsContext } from "../../providers/PostsProvider";
import { PostCard } from "../molecules/PostCard";
import { HomeCarousel } from "../organisms/HomeCarousel";
import { Recommend } from "../organisms/Recommend";
import { Side } from "../organisms/layout/Side";
import { SectionTitle } from "../atoms/SectionTitle";
import db from "../../firebase";
import { collection, getDocs, Timestamp } from "firebase/firestore";

export type PostType = {
  id: number;
  userId: string;
  title: string;
  imgPath: string;
  content: string;
  created: Timestamp;
  category: Array<number>;
};

export const Home: VFC = memo(() => {
  const { posts } = useContext(PostsContext);
  posts.sort((prev, next) => next.id - prev.id);

  // firebase
  const [dbposts, setDbposts] = useState<Array<PostType>>();
  useEffect(() => {
    const postData = collection(db, "posts");
    getDocs(postData).then((snapShot) => {
      const docPosts: any = snapShot.docs.map((doc) => ({ ...doc.data() }));
      setDbposts(docPosts);
    });
  }, []);
  const dayjs = (dayStore: Date) =>
    `${dayStore.getFullYear()}/${
      dayStore.getMonth() + 1
    }/${dayStore.getDate()}`;
  // --------

  return (
    <>
      <Box textAlign="center">
        <SectionTitle>よく読まれている記事</SectionTitle>
      </Box>
      <HomeCarousel />
      <Flex direction={{ base: "column", lg: "row" }} gap="20px">
        <Box flex="1">
          {dbposts?.map((post) => (
            // <PostCard post={post} key={post.id} />
            <div key={post.id}>{dayjs(post.created.toDate())}</div>
          ))}

          <SectionTitle>最新記事</SectionTitle>
          <Stack spacing="6">
            {posts.map((post) => (
              <PostCard post={post} key={post.id} />
            ))}
          </Stack>
          <Recommend />
        </Box>
        <Side />
      </Flex>
    </>
  );
});
