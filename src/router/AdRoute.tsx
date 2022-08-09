import { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { PostsContext } from "../providers/PostsProvider";

export const AdminRoute = (props: any) => {
  const { loginUser } = useContext(PostsContext);
  // const isLogin = typeof loginUser !== "undefined" ? true : false;
  const isAdminUser = loginUser && loginUser.isAdmin;
  return isAdminUser ? (
    <Route {...props} />
  ) : (
    <Redirect to={{ pathname: "/login" }} />
  );
  // return isLogin ? (
  //   <Route {...props} />
  // ) : (
  //   <Redirect to={{ pathname: "/login" }} />
  // );
};
