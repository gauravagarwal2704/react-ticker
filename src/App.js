import React, { Component } from 'react';
import logo from './logo.svg';
import _ from 'lodash';
import './App.css';
import { api_zebpay, api_throughbit_btc, api_throughbit_eth, api_unocoin, update_delay } from './helper.js';

class App extends Component {

  constructor(){
    super();
    this.state = {
      zebpay : {},
      tb_btc : [],
      tb_eth : []
    }
    this.getTickerData();
  }

  getTickerData = () => {
      api_zebpay.get()
        .then(res => {
          console.log("Zebpay", res);
          this.setState({
            zebpay : res.data 
          });
        });

       api_throughbit_btc.get()
        .then(res => {
          console.log("ThroughBit-BTC", res);
          this.setState({
            tb_btc : res.data.data.price
          });
        });

       api_throughbit_eth.get()
        .then(res => {
          console.log("ThroughBit-ETH", res);
          this.setState({
            tb_eth : res.data.data.price
          });
        });

       // api_unocoin.get()
       //  .then(res => {
       //    console.log("Unocoin",res);
       //  });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.getTickerData}>Get Data</button>
        <br/>
            <h3>Zebpay</h3>
            <p>Buy Price : {this.state.zebpay.buy}</p>
            <p>Sell Price : {this.state.zebpay.sell}</p>
      </div>
    );
  }
}

export default App;
