import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import { Layout } from 'antd';
import Converter from './components/Converter/Converter.js'
import 'antd/lib/layout/style/css';

const { Header, Content } = Layout;

class App extends Component {
  render() {
    return (
      <div>
        <Header style={{backgroundColor: 'white'}}>
          <img src={logo} alt="logo" className="App-logo"/>
        </Header>
        <Content style={{paddingTop: '10px', paddingBottom: '100px', textAlign: 'center'}}>
          <Converter />
        </Content>
      </div>
    );
  }
}

export default App;


