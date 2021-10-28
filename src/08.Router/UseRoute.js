import {
  BrowserRouter,
  HashRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import { Home } from "./Components/Home";
import { Sub1 } from "./Components/Sub1";
import { Sub2 } from "./Components/Sub2";
import { Header } from "./Components/Header";
import { HelmetProvider } from "react-helmet-async";
// =>as 를 이용하면 별칭을 만들 수 있음

export const UseRoute = () => {
  return (
    <HelmetProvider>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home></Home>
          </Route>
          <Route path="/sub1">
            <Sub1></Sub1>
          </Route>
          <Route path="/sub2">
            <Sub2></Sub2>
          </Route>
        </Switch>
      </Router>
    </HelmetProvider>
  );
};
