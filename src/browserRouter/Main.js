import React from "react";

import { Route, Switch } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Table from "./Table";
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/About" component={About} />
    <Route path="/Table" component={Table} />
    <Route path="/AddProduct" component={AddProduct} />
    <Route path="/EditProduct/:id" component={EditProduct} />
  </Switch>
);

export default Main;
