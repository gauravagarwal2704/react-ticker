import React, { Component } from 'react';
import {MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
// import _ from 'lodash';
import './App.css';
import fetchJsonp from 'fetch-jsonp';
import Header from './Components/Header';
import PriceCardContainer from './Components/PriceCardContainer';
// import { api_zebpay, api_throughbit_btc, api_throughbit_eth, api_unocoin, update_delay } from './helper.js';
const theme = createMuiTheme();

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      zebpay : {},
      tb_btc : {},
      tb_eth : {},
      unocoin : 0,
      data:[]
    }
  }
  
  componentWillMount() {
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
          this.updateData();
        }
        return responseJson;
      })
      .then(fetch('https://www.throughbit.com/tbit_ci/index.php/cryptoprice/type/eth/inr')
        .then(response => response.json())
        .then(responseJson => {
           console.log("tb_eth", responseJson);
          if (responseJson){
            this.setState({
              tb_eth : responseJson.data.price[0] 
            });
            this.updateData();
          }
          return responseJson;
        }))
      .then(fetch('https://www.throughbit.com/tbit_ci/index.php/cryptoprice/type/btc/inr')
        .then(response => response.json())
        .then(responseJson => {
           console.log("tb_btc", responseJson);
          if (responseJson){
            this.setState({
              tb_btc : responseJson.data.price[0] 
            });
            this.updateData();

          }
          return responseJson;
        }))
        .then(fetchJsonp('https://www.unocoin.com/trade?all')
            .then(function(response) {
              console.log('from-jsonp', response)
              return response.json()
            }).then(function(json) {
              console.log('parsed json', json)
            }).catch(function(ex) {
              console.log('parsing failed', ex)
        }))
      
      .then(fetch('https://www.unocoin.com/trade?all',{
        headers: {
            'Access-Control-Allow-Origin' : '*',
            'Content-Type': 'application/json',
        },
        'dataType': "jsonp",
        'timeout' : 5000,
        'mode':'no-cors',
        'async' : false
      })
        .then(responseJson => {
           console.log("unocoin", responseJson);
          if (responseJson){
            console.log('Unocoin',responseJson)
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

updateData = ()=>{
        this.setState({
          data:[
            {
              "name":"Zebpay",
              "buy": this.state.zebpay.buy,
              "sell":this.state.zebpay.sell,
              "image" : "images/zebpay.png",
              "coin" : "btc",
              "coin_path" : 'images/btc.png'
            },
            {
              "name":"ThroughBit BTC",
              "buy":this.state.tb_btc.buy_price,
              "sell":this.state.tb_btc.sell_price,
              "image" : "images/throughbit.jpg",
              "coin" : "btc",
              "coin_path" : 'images/btc.png'
            },
            {
              "name":"ThroughBit ETH",
              "buy":this.state.tb_eth.buy_price,
              "sell":this.state.tb_eth.sell_price,
              "image" : "images/throughbit.jpg",
              "coin" : "eth",
              "coin_path" : 'images/eth.png'
            }            
          ]
        });
      }

 
  render() {
    return (
        <MuiThemeProvider theme={theme}>
            <Header/>
            <div className="App">
            <br/>
            <PriceCardContainer
              clicked={this.getTickerDataFetch}
              zebpay = {this.state.zebpay}
              tb_btc = {this.state.tb_btc}
              tb_eth = {this.state.tb_eth}
              all_data = {this.state.data}
            />
          </div>
        </MuiThemeProvider>
      
    );
  }
}

export default App;
