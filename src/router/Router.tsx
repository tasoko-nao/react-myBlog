import { memo } from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "../components/pages/Home";
import { Login } from "../components/pages/Login";
import { Page404 } from "../components/pages/Page404";
import { PostAdd } from "../components/pages/post/PostAdd";
import { PostCategory } from "../components/pages/PostCategory";
import { PostDetail } from "../components/pages/PostDetail";
import { Layout } from "../components/tems/Layout";
import { MultiColumnLayout } from "../components/tems/MultiColumnLayout";
import { LoginedRoute } from "./LoginedRoute";

export const Router = memo(() => {
  return (
    <Switch>
      {/* ルート */}
      <Route exact path="/">
        <Layout>
          <Home />
        </Layout>
      </Route>

      {/* ログインページ */}
      <Route path="/login">
        <Layout>
          <Login />
        </Layout>
      </Route>

      {/* 新規投稿 */}
      <LoginedRoute path="/postAdd">
        <Layout>
          <PostAdd />
        </Layout>
      </LoginedRoute>

      {/* 投稿詳細 */}
      <Route exact path="/postDetail/:id">
        <MultiColumnLayout>
          <PostDetail />
        </MultiColumnLayout>
      </Route>

      {/* カテゴリページ */}
      <Route exact path="/postCategory">
        <MultiColumnLayout>
          <PostCategory />
        </MultiColumnLayout>
      </Route>

      {/* 404 */}
      <Route path="*">
        <MultiColumnLayout>
          <Page404 />
        </MultiColumnLayout>
      </Route>
    </Switch>
  );
});
