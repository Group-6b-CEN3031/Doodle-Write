import React from 'react';
import {Provider} from 'react-redux';
import Store from './redux/store';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './pages/Home';
import Media from './pages/Media';
import Testimonials from './pages/Testimonials';
import ContactUs from './pages/ContactUs';
import Shop from './pages/Shop';
import NotFound from './pages/NotFound';


class App extends React.Component {
  render() { 
    return (
      <Provider store={Store}>
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/media' component={Media} />
            <Route exact path='/testimonials' component={Testimonials} />
            <Route exact path='/contact-us' component={ContactUs} />
            <Route exact path='/shop' component={Shop} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </Provider>
    )
  }
}
 
export default App;