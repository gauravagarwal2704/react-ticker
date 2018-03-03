import React, { Component } from 'react';
import {MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import {api, coinRanks} from './Components/helpers/fetch'
import {sortPrices} from './Components/helpers/case-conversions';
import Header from './Components/Header';
// import Footer from './Components/Footer';
import Toggle from './Components/Toggle';
import Coins from './Components/Coins';
import Exchanges from './Components/Exchanges';
import {blue} from 'material-ui/colors';
import './App.css';

const theme = createMuiTheme({
palette: {
  primary: blue,
  secondary: blue
},
});

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      iCoin:false
    }
  }

  handleChoice=(toggleChoice)=>{
    // console.log('isCoin', toggleChoice);
    this.setState({
      isCoin:toggleChoice
    })
  }

  componentDidMount(){

let pricesForRank = [];
let result;
coinRanks.fetchRanks().then(fetchRanks =>{
  this.setState({ ranks: fetchRanks });
  return fetchRanks;
})
.then((fr)=>{
  let ranks = fr;

  api.fetchPrices().then(fetchPrices => {
    result = fetchPrices.map((o) => {
      let newObj = { ...o };
      
      newObj.prices = o.prices.map((pp) => ({...pp}));
      newObj.prices.forEach((p) => {
        let found = ranks.find((d) => d.symbol.toUpperCase() === p.name.toUpperCase());
        if (found) p.rank = found.rank;
      });
      sortPrices(newObj.prices, 'rank');
      pricesForRank.push(newObj)
      return newObj;
    })
    // console.log("res", result)
    this.setState({ data: result });
  })
  })
  }

  render() {
    return (
        <MuiThemeProvider theme={theme}>
            <Header/>
            <Toggle className="myToggle" handleChoice={this.handleChoice}/>
            {
                this.state.isCoin 
                ? 
                  <Coins dataFromApp={this.state.data}/>
                :
                  <Exchanges dataFromApp={this.state.data} ranks={this.state.ranks}/>
              }
            <div className="App">
            <br/>
            
            </div>
        </MuiThemeProvider>
    );
  }
}

export default App;
