import React from 'react';

import { Switch, Link, Route } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import {
  Navbar,
  Homepage,
  Exchanges,
  Cryptocurrencies,
  CryptoDetails,
  News,
} from './components';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Switch>
              <Route exact path="/">
                <Homepage />
              </Route>
            </Switch>
            <Switch>
              <Route exact path="/exchanges">
                <Exchanges />
              </Route>
            </Switch>
            <Switch>
              <Route exact path="/cryptocurrencies">
                <Cryptocurrencies />
              </Route>
            </Switch>
            <Switch>
              <Route exact path="/crypto/:coinId">
                <CryptoDetails />
              </Route>
            </Switch>
            <Switch>
              <Route exact path="/news">
                <News />
              </Route>
            </Switch>
          </div>
        </Layout>
        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: 'white', textAlign: 'center' }}
          >
            Cryptoverse <br />
            All rights reserved
          </Typography.Title>
          <Space>
            <Link to="/">Homepage</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default App;
