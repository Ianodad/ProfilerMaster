import {Route, Switch, Redirect } from "react-router-dom";
import React, { Component} from "react";

import { BrowserRouter } from "react-router-dom";
import ProtectedRoute from "../src/components/Auth/ProtectedRoute";



// Page Component 
import Auth from "./pages/Auth";





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
            <ProtectedRoute path="/" exact component={Main} />
            {/* <Route path="/" exact component={Main} /> */}
            <Route path="/auth" exact component={Auth} />
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