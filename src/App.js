import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import { Navbar, Homepage, Exchanges, Craptocurrencies, CryptoDetails, News } from './components';
import './App.css';
const App = () => {
  return (
    <>
    <div className="app">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="main">
          <Layout>
            <div className="routes">
              <Routes>
                <Route exact path="/">
                  <Route exact path="/" element={<Homepage />} />
                </Route>
                <Route exact path="/exchanges">
                  <Route exact path="/exchanges" element={<Exchanges />} />
                </Route>
                <Route exact path="/craptocurrencies">
                  <Route exact path="/craptocurrencies" element={<Craptocurrencies />} />
                </Route>
                <Route exact path="/crypto/:coinId">
                  <Route exact path="/crypto/:coinId" element={<CryptoDetails />} />
                </Route>
                <Route exact path="/news">
                  <Route exact path="/news" element={<News />} />
                </Route>
              </Routes>
            </div>
          </Layout>
        </div>
        <div className="footer">
            
        </div>
    </div>
    </>
  )
}

export default App