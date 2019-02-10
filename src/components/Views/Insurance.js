import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import routes from '../../plugins/router';

class Insurance extends Component {
  render() {
    const sigortalar = routes.find(x => x.path === '/sigortalar');
    return (
      <React.Fragment>
        <Switch>
          {sigortalar.routes.map((route, i) => {
            return <Route path={`${sigortalar.path}${route.path}`} component={route.component} key={`rd-${i}`} />;
          })}
          <Redirect from="/sigortalar" to="/sigortalar/bildirimlerim" />
        </Switch>
      </React.Fragment>
    );
  };
};

export default Insurance;