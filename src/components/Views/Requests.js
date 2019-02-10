import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import routes from '../../plugins/router';

class Credits extends Component {
  render() {
    const talepler = routes.find(x => x.path === '/talepler');
    return (
      <React.Fragment>
        <Switch>
          {talepler.routes.map((route, i) => {
            return <Route path={`${talepler.path}${route.path}`} component={route.component} key={`rd-${i}`} />;
          })}
          <Redirect from="/talepler" to="/talepler/taleplerim" />
        </Switch>
      </React.Fragment>
    );
  };
};

export default Credits;