import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
  VFC,
} from "react";
import { Posts, PostType } from "../data/Data";
import { UserType } from "../data/UserData";

type PostContextType = {
  posts: Array<PostType>;
  setPosts: Dispatch<SetStateAction<Array<PostType>>>;
  loginUser: UserType | undefined;
  setLoginUser: Dispatch<SetStateAction<UserType | undefined>>;
};
export const PostsContext = createContext<PostContextType>(
  {} as PostContextType
);

type Props = {
  children: ReactNode;
};
export const PostProvider: VFC<Props> = (props) => {
  const { children } = props;
  const [posts, setPosts] = useState<Array<PostType>>(Posts);
  const [loginUser, setLoginUser] = useState<UserType>();

  return (
    <PostsContext.Provider value={{ posts, setPosts, loginUser, setLoginUser }}>
      {children}
    </PostsContext.Provider>
  );
};
