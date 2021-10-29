import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { router } from "./router";
import { Header } from "./Components/Header";
import { Home } from "./Components/Home";
import { Sub } from "./Components/Sub";
import { contents } from "./api";

export const BaseWebRoute = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path={router.home} exact>
          <Home></Home>
        </Route>
        <Route path={router.sub1}>
          <Sub
            bg={contents[0].bg}
            title={contents[0].title}
            desc={contents[0].desc}
          />
        </Route>
        <Route path={router.sub2}>
          <Sub
            bg={contents[1].bg}
            title={contents[1].title}
            desc={contents[1].desc}
          />
        </Route>
      </Switch>
    </Router>
  );
};
