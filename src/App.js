import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import { Layout } from 'antd';
import Converter from './components/Converter.js'
import 'antd/lib/layout/style/css';

const { Header, Content, Footer } = Layout;

class App extends Component {
  render() {
    return (
      <div>
        <Header style={{backgroundColor: 'white'}}>
          <img src={logo} alt="logo" className="App-logo"/>
          <h1 className="App-title">Currency Converter</h1>
        </Header>
        <Content style={{paddingTop: '100px', paddingBottom: '100px', textAlign: 'center'}}>
          <Converter />
        </Content>
      </div>
    );
  }
}

export default App;


