import React, { Fragment } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Default from './Components/Default/Default';
import Details from './Components/Details/Details';
import Cart from './Components/Cart/Cart';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import ProductList from './Components/Products/ProductList';
import Model from './Components/Model/Model';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Fragment>
          <Navbar></Navbar>
          <Model></Model>
          <Switch>
            <Route exact path="/" component={ProductList}></Route>
            <Route path="/details" component={Details}></Route>
            <Route path="/cart" component={Cart}></Route>
            <Route component={Default}></Route>
          </Switch>
        </Fragment>
      </BrowserRouter>
    </div>
  );
}

export default App;
