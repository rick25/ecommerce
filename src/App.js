import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import "./App.scss";

import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import ShoppingCart from "./pages/ShopingCart/ShoppingCart";

import store from "../src/redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <>
          <Header />
          <Switch>
            <Route
              exact
              path={"/"}
              render={() => {
                return <Redirect to={"/products"} />;
              }}
            />
            <Route exact path={"/products"} component={Home} />
            <Route exact path={"/products/:id"} component={ProductDetail} />
            <Route exact patr={"/cart"} component={ShoppingCart} />
          </Switch>
          <Footer />
        </>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
