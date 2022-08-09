import { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { PostsContext } from "../providers/PostsProvider";

export const LoginedRoute = (props: any) => {
  const { loginUser } = useContext(PostsContext);
  const isLogin = typeof loginUser !== "undefined" ? true : false;
  return isLogin ? (
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
