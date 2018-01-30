import React, { Component } from 'react';
import {MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import './App.css';
import fetchJsonp from 'fetch-jsonp';
import axios from 'axios';
import Header from './Components/Header';
// import Footer from './Components/Footer';
import Toggle from './Components/Toggle';
import Coins from './Components/Coins';
import Exchanges from './Components/Exchanges';
import PriceCardContainer from './Components/PriceCardContainer';
import { red, blue, lightBlue, cyan, teal, blueGrey } from 'material-ui/colors';

const theme = createMuiTheme({
palette: {
  primary: blue
},
type:'dark'
});

const CLIENT_ID = 'GRH4ZOQ68D';
const CLIENT_SECRET = '518dd973-8886-46cd-a91b-ed7d697a391f';

let urls;
class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      iCoin:false
    }
  }

  handleChoice=(toggleChoice)=>{
    console.log('isCoin', toggleChoice);
    this.setState({
      isCoin:toggleChoice
    })
  }

  render() {
    return (
        <MuiThemeProvider theme={theme}>
            <Header/>
            <br/>
            <Toggle handleChoice={this.handleChoice}/>
            {
                this.state.isCoin 
                ? 
                  <Coins />
                :
                  <Exchanges />
              }
            <div className="App">
            <br/>
            
            </div>
        </MuiThemeProvider>
    );
  }
}

export default App;
