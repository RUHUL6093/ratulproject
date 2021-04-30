import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import "./styles.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Review from "./Components/Review/Review";
import Admin from "./Components/Admin/Admin";
import NotFound from "./Components/NotFound/NotFound";
import ProductDetail from "./Components/ProductDetail/ProductDetail";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/home">
            {" "}
            <Home />
          </Route>
          <Route path="/review">
            {" "}
            <Review />
          </Route>
          <Route path="/admin">
            {" "}
            <Admin />
          </Route>
          <Route exact path="/">
            {" "}
            <Home />
            <Route path="/product/:productname">
              <ProductDetail />
            </Route>
          </Route>
          <Route path="*">
            {" "}
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
