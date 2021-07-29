import React from 'react'
import Index from './Index.js';
import Routers from './route.js';
import Course from './Course.js';
import Lotrinh from './lotrinh.js';
import {Route} from "react-router-dom";
export default class DieuHuongURL extends React.Component {
	
	render() {
		return (
		      <div>
		          <Route exact path="/">
		            <Index />
		          </Route>
		          <Route  path="/Course/">
		            <Course />
		          </Route>
		          <Route path="/Lo-trinh">
		            <Routers />
		          </Route>
		          <Route path="/Lo-trinh.:id" component={Lotrinh} />

		      </div>

		)
	}
}