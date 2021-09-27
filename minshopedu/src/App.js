import './App.css';
import React from "react";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Home from "./Page/Home"
import Nav from "./Componets/Nav"
import Footer from "./Componets/Footer"
import Product from './Page/Product';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
        {/* <Switch> */}
          {/* <Route exact path="/product"  component={Product} /> */}
          {/* <Route exact path="/"  component={Home} /> */}
          <Route exact path="/" render={() => <Home />} />
          <Route  path="/product" render={() => <Product />} />
        {/* </Switch> */}
        {/* <Home/> */}
    {/* <Product /> */}
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
