import React, { Component } from 'react';
import logo from './logo.svg';
// import _ from 'lodash';
import './App.css';
// import { api_zebpay, api_throughbit_btc, api_throughbit_eth, api_unocoin, update_delay } from './helper.js';

class App extends Component {

  constructor(){
    super();
    this.state = {
      zebpay : {},
      tb_btc : {},
      tb_eth : {},
      unocoin : {}
    }
    //this.getTickerData();
    this.getTickerDataFetch();
  }

  getTickerDataFetch=()=> {
    return fetch('https://www.zebapi.com/api/v1/market/ticker/btc/inr')
      .then(response => response.json())
      .then(responseJson => {
        console.log("Zebpay", responseJson);
        if (responseJson){
          this.setState({
            zebpay : responseJson 
          });
        }
        return responseJson;
      })
      .then(fetch('https://www.throughbit.com/tbit_ci/index.php/cryptoprice/type/btc/inr')
        .then(response => response.json())
        .then(responseJson => {
           console.log("tb_btc", responseJson);
          if (responseJson){
            this.setState({
              tb_btc : responseJson.data.price[0] 
            });
          }
          return responseJson;
        }))
      .then(fetch('https://www.throughbit.com/tbit_ci/index.php/cryptoprice/type/eth/inr')
        .then(response => response.json())
        .then(responseJson => {
           console.log("tb_eth", responseJson);
          if (responseJson){
            this.setState({
              tb_eth : responseJson.data.price[0] 
            });
          }
          return responseJson;
        }))
      .then(fetch('https://www.unocoin.com/trade?buy',{
        headers: {
            'Access-Control-Allow-Origin' : '*',
            'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then(responseJson => {
           console.log("unocoin", responseJson);
          if (responseJson){
            this.setState({
              unocoin : responseJson 
            });
          }
          return responseJson;
        }))
      .catch(error => {
        console.error(error);
      });
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
        <button onClick={this.getTickerDataFetch}>Get Data</button>
        <br/>
        <div className="ticker-data">
        <div>
            <h3>Zebpay</h3>
            <p>Buy Price : {this.state.zebpay.buy}</p>
            <p>Sell Price : {this.state.zebpay.sell}</p>
        </div>
        <div>
            <h3>Throughbit BTC</h3>
            <p>Buy Price : {this.state.tb_btc.buy_price}</p>
            <p>Sell Price : {this.state.tb_btc.sell_price}</p>
        </div>
        <div>
            <h3>Throughbit ETH</h3>
            <p>Buy Price : {this.state.tb_eth.buy_price}</p>
            <p>Sell Price : {this.state.tb_eth.sell_price}</p>
        </div>

           

           

            
        </div>
            
      </div>
    );
  }
}

export default App;
