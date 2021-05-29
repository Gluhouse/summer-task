import { Switch, Route, Redirect } from "react-router-dom";
import { MainPage, PresentationPage, Page404 } from "pages";
import { HeaderSearchBar } from "modules";

import pageRoutes from "constants/pageRoutes";
import {} from "pages";

function AppRouter() {
  return (
    <Switch>
      <Route exact path={pageRoutes.MAIN}>
        <MainPage />
      </Route>
      <Route exact path={pageRoutes.PRESENTATION}>
        <PresentationPage />
      </Route>
      <Redirect exact from="/" to={pageRoutes.MAIN} />
      <Route>
        <Page404 />
      </Route>
    </Switch>
  );
}

export default AppRouter;
