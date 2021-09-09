import React, { Component } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import Edit from './pages/Edit';
// Page Component
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <BrowserRouter>
          {/* <Router history={history}> */}
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/profile/:id" exact component={Profile} />
            <Route path="/edit/:id" exact component={Edit} />
            <Route path="/notFound" component={NotFound} />
            <Redirect to="/notFound" />
          </Switch>
          {/* </Router> */}
        </BrowserRouter>
      </>
    );
  }
}

export default App;
