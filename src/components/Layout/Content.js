import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Layout } from 'antd';

class Content extends Component {
  render() {
    let { routes } = this.props;

    return (
      <Layout.Content className="vdf-content">
        <Switch>
          {routes.map((route, i) => {
            return <Route
              path={route.path}
              component={route.component}
              key={`r-${i}`}
            />;
          })}
          <Redirect from="/" to="/anasayfa" />
        </Switch>
      </Layout.Content>
    );
  };
};

export default Content;