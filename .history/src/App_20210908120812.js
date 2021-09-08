import {Route, Switch, Redirect } from "react-router-dom";
import React, { Component} from "react";

import { BrowserRouter } from "react-router-dom";



// Page Component 
import Home from "./pages/Home";





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
            <Redirect to="/notFound" />
          </Switch>
          {/* </Router> */}
        </BrowserRouter>
      </>
    );
	}
}

export default App;