import React, { Component } from 'react';
import {MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import api from './Components/helpers/fetch'
import Header from './Components/Header';
// import Footer from './Components/Footer';
import Toggle from './Components/Toggle';
import Coins from './Components/Coins';
import Exchanges from './Components/Exchanges';
import {blue} from 'material-ui/colors';
import './App.css';

const theme = createMuiTheme({
palette: {
  primary: blue
},
type:'dark'
});

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

  componentDidMount(){
    api.fetchPrices().then(fetchPrices => this.setState({ data: fetchPrices }))
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
                  <Exchanges dataFromApp={this.state.data}/>
              }
            <div className="App">
            <br/>
            
            </div>
        </MuiThemeProvider>
    );
  }
}

export default App;
