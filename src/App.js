import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import { LocaleProvider } from 'antd';
import trTR from 'antd/lib/locale-provider/tr_TR';

class App extends Component {
  render() {
    return (
      <LocaleProvider locale={trTR}>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Layout} />
          </Switch>
        </BrowserRouter>
      </LocaleProvider>
    );
  }
}

export default App;
