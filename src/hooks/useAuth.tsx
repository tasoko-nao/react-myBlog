import { useCallback, useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserList } from "../data/UserData";
import { PostsContext } from "../providers/PostsProvider";

export const useAuth = () => {
  const history = useHistory();
  const { setLoginUser } = useContext(PostsContext);

  const onClickLogin = useCallback(
    (userId: string, password: string, pathname: string) => {
      const authUser = UserList.find((user) => user.id === userId);
      if (authUser && authUser?.password === password) {
        history.push(authUser.isAdmin ? pathname : "/");
        setLoginUser(authUser);
      } else {
        alert("ログインできません");
      }
    },
    [history, setLoginUser]
  );
  return { onClickLogin };
};
