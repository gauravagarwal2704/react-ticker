import React, { Component } from 'react';
import {MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
// import _ from 'lodash';
import './App.css';
import fetchJsonp from 'fetch-jsonp';
import Header from './Components/Header';
import PriceCardContainer from './Components/PriceCardContainer';
// import { api_zebpay, api_throughbit_btc, api_throughbit_eth, api_unocoin, update_delay } from './helper.js';
import { red, purple, blue, indigo, pink, lightBlue, cyan, teal, blueGrey } from 'material-ui/colors';

const theme = createMuiTheme({
palette: {
  primary: blue
},
});

let urls;


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      data:[]
    }
  }
  
  componentDidMount() {
    this.getTickerDataFetch();
    // this.fetchUnocoin();
  }



  getTickerDataFetch=()=> {
    urls = [
      "https://www.zebapi.com/api/v1/market/ticker/btc/inr",
      'https://www.throughbit.com/tbit_ci/index.php/cryptoprice/type/btc/inr',
      'https://www.throughbit.com/tbit_ci/index.php/cryptoprice/type/eth/inr',
      'https://koinex.in/api/ticker',
      'https://api.coinbase.com/v2/prices/BTC-INR/buy',
      'https://api.coinbase.com/v2/prices/BTC-INR/sell',
      'https://api.coinbase.com/v2/prices/ETH-INR/buy',
      'https://api.coinbase.com/v2/prices/ETH-INR/sell',
      'https://api.coinbase.com/v2/prices/BCH-INR/buy',
      'https://api.coinbase.com/v2/prices/BCH-INR/sell',
      'https://api.coinbase.com/v2/prices/LTC-INR/buy',
      'https://api.coinbase.com/v2/prices/LTC-INR/sell',
      // 'https://bitbns.com/order/getTickerAll'
    ];

    var promises = urls.map(url => fetch(url).then(y => y.json()));
    Promise.all(promises).then(results => {
        console.log(results);
        this.setState({
          zebpay:{buy:results[0].buy, sell:results[0].sell},
          throughbit:{
            btc : {buy:results[1].data.price[0].buy_price, sell:results[1].data.price[0].sell_price},
            eth : {buy:results[2].data.price[0].buy_price, sell:results[2].data.price[0].sell_price}
          },
          koinex:{
            btc  : {buy:results[3].stats.BCH.lowest_ask, sell:results[3].stats.BCH.highest_bid},
            bch  : {buy:results[3].stats.BTC.lowest_ask, sell:results[3].stats.BTC.highest_bid},
            eth  : {buy:results[3].stats.ETH.lowest_ask, sell:results[3].stats.ETH.highest_bid},
            ltc  : {buy:results[3].stats.LTC.lowest_ask, sell:results[3].stats.LTC.highest_bid},
            xrp  : {buy:results[3].stats.XRP.lowest_ask, sell:results[3].stats.XRP.highest_bid},
            iota : {buy:results[3].prices.MIOTA},
            gnt  : {buy:results[3].prices.GNT}
          },
          coinbase:{
            btc : {buy: results[4].data.amount, sell:results[5].data.amount},
            eth : {buy: results[6].data.amount, sell:results[7].data.amount},
            bch : {buy: results[8].data.amount, sell:results[9].data.amount},
            ltc : {buy: results[10].data.amount, sell:results[11].data.amount}
          },
          bitbns:{}
        });
        this.updateData();
        console.log(this.state);
    });
    return promises
  }

// fetchUnocoin = () =>{
//   fetch('https://www.unocoin.com/trade?all', {mode : 'no-cors'})
//           .then(function(response) {
//             console.log('from-jsonp', response)
//             //return response.text()
//           })
//         //   .then(function(json) {
//         //     console.log('parsed json', json)
//         //   })
//         //   .catch(function(ex) {
//         //     console.log('parsing failed', ex)
//         // })
// }

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
              "buy":this.state.throughbit.btc.buy,
              "sell":this.state.throughbit.btc.sell,
              "image" : "images/throughbit.jpg",
              "coin" : "btc",
              "coin_path" : 'images/btc.png'
            },
            {
              "name":"ThroughBit ETH",
              "buy":this.state.throughbit.eth.buy,
              "sell":this.state.throughbit.eth.sell,
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
