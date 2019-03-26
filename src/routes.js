import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import {
  Homepage,
  ListingDetail
} from './containers';

import { Header } from '../src/components'

const PublicRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => {
    window.scrollTo(0, 0);
    return (
      <div>
        <Header {...props} />
        <Component {...props} />
      </div>);
  }} />
)

export default () => {

  return (
    <div>
      <Router>
        <div>
          <Switch>
            <PublicRoute exact path='/' component={Homepage} />
            <PublicRoute path='/detail/:id' component={ListingDetail}/>
          </Switch>
        </div>
      </Router>
    </div>
  )

}