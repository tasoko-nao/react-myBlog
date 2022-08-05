import { useHistory } from "react-router-dom";

export const useLinkPostDetail = () => {
  const history = useHistory();
  const LinkDetail = (postId: number) => {
    history.push(`/postDetail/${postId}`);
  };
  return { LinkDetail };
};
