import { memo } from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "../components/pages/Home";
import { Login } from "../components/pages/Login";
import { Page404 } from "../components/pages/Page404";
import { PostEdit } from "../components/pages/post/PostEdit";
import { PostCategory } from "../components/pages/PostCategory";
import { PostDetail } from "../components/pages/PostDetail";
import { PostsLayout } from "../components/temps/PostsLayout";
import { MultiColumnLayout } from "../components/temps/MultiColumnLayout";
import { AdminRoute } from "./AdRoute";

export const Router = memo(() => {
  return (
    <Switch>
      {/* ルート */}
      <Route exact path="/">
        <PostsLayout>
          <Home />
        </PostsLayout>
      </Route>

      {/* ログインページ */}
      <Route path="/login">
        <PostsLayout>
          <Login />
        </PostsLayout>
      </Route>

      {/* 新規投稿 */}
      <AdminRoute path="/postAdd">
        <PostsLayout>
          <PostEdit />
        </PostsLayout>
      </AdminRoute>

      {/* 投稿詳細 */}
      <Route exact path="/postDetail/:id">
        <MultiColumnLayout>
          <PostDetail />
        </MultiColumnLayout>
      </Route>

      {/* カテゴリページ */}
      <Route exact path="/postCategory">
        <PostsLayout>
          <PostCategory />
        </PostsLayout>
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
