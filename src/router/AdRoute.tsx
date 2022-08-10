import { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { PostsContext } from "../providers/PostsProvider";

export const AdminRoute = ({ children, ...rest }: any) => {
  const { loginUser } = useContext(PostsContext);
  const isAdminUser = loginUser && loginUser.isAdmin;
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAdminUser ? (
          children
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: location } }} />
        )
      }
    />
  );
  // return isAdminUser ? (
  //   <Route {...props} />
  // ) : (
  //   <Redirect to={{ pathname: "/login" }} />
  // );
};
