import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WebLayout from "./components/web/layouts/WebLayout";
import Web from "./components/web";
import OrgnizationsPage from "./components/web/pages/OrgnizationsPage";
import RepositoriesPage from "./components/web/pages/RepositoriesPage";

const App = () => {
  return (
    <>
      <Router>
        <WebLayout>
          <Switch>
            <Route exact path="/" component={Web} />
            <Route exact path="/repositories" component={RepositoriesPage} />
            <Route exact path="/organizations" component={OrgnizationsPage} />
          </Switch>
        </WebLayout>
      </Router>
    </>
  );
};

export default App;
