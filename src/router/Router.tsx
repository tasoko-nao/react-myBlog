import { memo } from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "../components/pages/Home";
import { Page404 } from "../components/pages/Page404";
import { PostCategory } from "../components/pages/PostCategory";
import { PostDetail } from "../components/pages/PostDetail";
import { Layout } from "../components/templates/Layout";

export const Router = memo(() => {
  return (
    <Switch>
      <Route exact path="/">
        <Layout>
          <Home />
        </Layout>
      </Route>
      <Route exact path="/postDetail">
        <Layout>
          <PostDetail />
        </Layout>
      </Route>
      <Route exact path="/postCategory">
        <Layout>
          <PostCategory />
        </Layout>
      </Route>
      <Route path="*">
        <Layout>
          <Page404 />
        </Layout>
      </Route>
    </Switch>
  );
});
