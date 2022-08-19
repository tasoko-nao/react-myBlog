import { useHistory } from "react-router-dom";
import { PostType } from "./useGetPosts";

export const useLinkPostDetail = () => {
  const history = useHistory();
  const LinkDetail = (post: PostType) => {
    history.push({ pathname: `/postDetail/${post.id}`, state: { post } });
  };
  return { LinkDetail };
};
