import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
  VFC,
} from "react";
import { UserType } from "../data/UserData";

type PostContextType = {
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
  const [loginUser, setLoginUser] = useState<UserType>();

  return (
    <PostsContext.Provider value={{ loginUser, setLoginUser }}>
      {children}
    </PostsContext.Provider>
  );
};
