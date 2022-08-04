import { memo } from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "../components/pages/Home";
import { Page404 } from "../components/pages/Page404";
import { PostCategory } from "../components/pages/PostCategory";
import { PostDetail } from "../components/pages/PostDetail";
import { MultiColumnLayout } from "../components/tems/MultiColumnLayout";

export const Router = memo(() => {
  return (
    <Switch>
      <Route exact path="/">
        <MultiColumnLayout>
          <Home />
        </MultiColumnLayout>
      </Route>
      <Route exact path="/postDetail/:id">
        <MultiColumnLayout>
          <PostDetail />
        </MultiColumnLayout>
      </Route>
      <Route exact path="/postCategory">
        <MultiColumnLayout>
          <PostCategory />
        </MultiColumnLayout>
      </Route>
      <Route path="*">
        <MultiColumnLayout>
          <Page404 />
        </MultiColumnLayout>
      </Route>
    </Switch>
  );
});
