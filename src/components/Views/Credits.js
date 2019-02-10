import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import routes from '../../plugins/router';

class Credits extends Component {
  render() {
    const krediler = routes.find(x => x.path === '/krediler');
    return (
      <React.Fragment>
        <Switch>
          {krediler.routes.map((route, i) => {
            return <Route path={`${krediler.path}${route.path}`} component={route.component} key={`rd-${i}`} />;
          })}
          <Redirect from="/krediler" to="/krediler/kredilerim" />
        </Switch>
      </React.Fragment>
    );
  };
};

export default Credits;