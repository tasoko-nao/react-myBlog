import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserList } from "../data/UserData";
import { PostsContext } from "../providers/PostsProvider";

export const useAuth = () => {
  const history = useHistory();
  const { setLoginUser } = useContext(PostsContext);

  const onClickLogin = (userId: string, password: string) => {
    const authUser = UserList.find((user) => user.id === userId);
    if (authUser && authUser?.password === password) {
      history.push("/");
      setLoginUser(authUser);
    } else {
      alert("ログインできません");
    }
  };
  return { onClickLogin };
};
