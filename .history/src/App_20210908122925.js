import React, { Component} from "react";
import {Redirect, Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

// Page Component 
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";




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