import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import "./styles.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Review from "./Components/Review/Review";
import Admin from "./Components/Admin/Admin";
import NotFound from "./Components/NotFound/NotFound";
import ProductDetail from "./Components/ProductDetail/ProductDetail";
import Shipment from "./Components/shipment/shipment";
import Login from "./Components/Login/Login";

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
          <Route path="/login">
            {" "}
            <Login />
          </Route>
          <Route path="/shipment">
            {" "}
            <Shipment />
          </Route>
          <Route exact path="/">
            {" "}
            <Home />
          </Route>
          <Route path="/product/:name">
            <ProductDetail />
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
