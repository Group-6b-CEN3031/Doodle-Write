import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./pages/Home";
import Testimonials from "./pages/Testimonials";
import ContactUs from "./pages/ContactUs";
import Shop from "./pages/Shop";
import NotFound from "./pages/NotFound";
import Cart from './components/Cart';
import CartItemCard from "./components/CartItemCard";

class App extends React.Component {
  constructor(props) {
    super(props);
  
  }

  render() { 
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/testimonials" component={Testimonials} />
            <Route exact path="/contact-us" component={ContactUs} />
            <Route exact path="/shop" component={Shop} />
            <Route component={NotFound} />
           
          </Switch>
        </Router>
      </React.Fragment>
    )
  }
}
 
export default App;