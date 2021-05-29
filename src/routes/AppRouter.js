import { Switch, Route, Redirect } from "react-router-dom";
import { MainPage, PresentationPage } from "pages";

import { pageRoutes } from "constants/pageRoutes";
import {} from "pages";

function AppRouter() {
  return (
    <Switch>
      <Route exact path={pageRoutes.PRESENTATION}>
        <PresentationPage />
      </Route>
      <Redirect exact from="/" to={pageRoutes.MAIN} />
      <Route>
        <MainPage />
      </Route>
    </Switch>
  );
}

export default AppRouter;
