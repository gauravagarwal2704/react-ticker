import React, {Component} from 'react';
import Grid from 'material-ui/Grid';
import Card, { CardContent, CardHeader } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import { Btc, Eth, Bch, Ltc, Xmr, Iota, Gnt, Omg, Etc, Neo, Zec, Dash, Btg, Gas, Xrp } from 'react-cryptocoins';
import './cryptocoins-colors.css';
// import * as Icon from 'react-cryptocoins';

const styles = {
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
 
  bigAvatar: {
    width: 45,
    height: 45,
  },
  smallAvatar: {
    width: 45,
    height: 45,
  },
  c_container:{
    display:'flex',
    justifyContent:'space-between',
  },
  heading:{
    fontFamily:'Comfortaa',
    fontWeight:800,
    fontSize:'15px',
  },
  prices:{
    paddingTop: '6px',
    fontFamily:'Josefin Sans'
  }
};

const cardData = [
  {
    "name": "Koinex",
    "image": "images/exchanges/koinex.jpg",
    "prices": [
      {
        "name": "Ethereum",
        "symbol" : "Eth",
        "buy": "77502.0",
        "sell": "77310.0"
      },
      {
        "name": "Bitcoin",
        "symbol" : "Btc",
        "buy": "839998.0",
        "sell": "835001.0"
      },
      {
        "name": "Litecoin",
        "symbol" : "Ltc",
        "buy": "13596.0",
        "sell": "13501.0"
      },
      {
        "name": "Ripple",
        "symbol" : "Xrp",
        "buy": "101.98",
        "sell": "101.55"
      },
      {
        "name": "Bitcoin Cash",
        "symbol" : "Bch",
        "buy": "123499.0",
        "sell": "122280.01"
      }
    ]
  },
  {
    "name": "Zebpay",
    "image": "images/exchanges/zebpay.png",
    "prices": [
      {
        "name": "Bitcoin",
        "symbol" : "Btc",
        "buy": "123",
        "sell": "120"
      },
      {
        "name": "Bitcoin Cash",
        "symbol" : "Bch",
        "buy": "1234",
        "sell": "12345"
      },
      {
        "name": "Litecoin",
        "symbol" : "Ltc",
        "buy": "1234",
        "sell": "12345"
      }
    ]
  },
  {
    "name": "BitBnS",
    "image": "images/exchanges/bitbns.png",
    "prices": [
      {
        "name": "Bitcoin",
        "symbol" : "Btc",
        "buy": "123",
        "sell": "120"
      },
      {
        "name": "Ripple",
        "symbol" : "Xrp",
        "buy": "1234",
        "sell": "12345"
      },
      {
        "name": "NEO",
        "symbol" : "Neo",
        "buy": "1234",
        "sell": "12345"
      },
      
      {
        "name": "Ethereum",
        "symbol" : "Eth",
        "buy": "1234",
        "sell": "12345"
      }
    ]
  },
  {
    "name": "Unocoin",
    "image": "images/exchanges/unocoin.png",
    "prices": [
      {
        "name": "Bitcoin",
        "symbol" : "Btc",
        "buy": "123",
        "sell": "120"
      },
    ]
  },
  {
    "name": "Coinbase",
    "image": "images/exchanges/coinbase.png",
    "prices": [
      {
        "name": "Bitcoin",
        "symbol" : "Btc",
        "buy": "123",
        "sell": "120"
      },
      {
        "name": "Bitcoin Cash",
        "symbol" : "Bch",
        "buy": "123",
        "sell": "120"
      },
      {
        "name": "Ethereum",
        "symbol" : "Eth",
        "buy": "123",
        "sell": "120"
      },
      {
        "name": "Litecoin",
        "symbol" : "Ltc",
        "buy": "123",
        "sell": "120"
      },
    ]
  }
]

class Exchanges extends Component {

coinType=(coin)=>{
  let components = {
     Btc:Btc, Eth:Eth, Bch:Bch, Ltc:Ltc, Xmr:Xmr, Iota:Iota, Gnt:Gnt, Omg:Omg, Etc:Etc, Neo:Neo, Zec:Zec, Dash:Dash, Btg:Btg, Xrp:Xrp 
  };
  let MyCoin = components[coin];
  return <MyCoin className={coin} size={30}/>;
}

  render() {
    var cards = cardData.map((cd)=>{
        return <Grid item xs={12} sm={6} md={3} lg={3} key={cd.name}>
                  <Card>
                    <CardHeader
                      title={ <Typography component="p">
                                <span className="titles">{cd.name}</span>
                              </Typography>
                            }
                      avatar= {
                                <Avatar aria-label="Exchanges"
                                alt={cd.name}
                                src={cd.image}
                                style={styles.bigAvatar}
                                />
                              }
                    />
                    <Divider />

                    <CardContent>
                    <div style={styles.c_container}>
                      <div>
                      </div>
                      <div>
                        <Typography component="p">
                          <span className="prices" style={styles.heading}><i>Buy &nbsp;&nbsp;</i> |&nbsp;&nbsp; <i>Sell</i></span>
                        </Typography>
                          <br/>
                      </div>
                    </div>

                    {cd.prices.map((p)=>{
                      return <div key={p.symbol}>
                      <div style={styles.c_container} >
                      <div>
                        {this.coinType(p.symbol)}                          
                      </div>
                      <div style={styles.prices}>
                        <Typography component="p">
                          <span className="prices" style={styles.prices}> ₹ {p.buy} | ₹ {p.sell}</span>
                          <br/>
                        </Typography>
                      </div>
                    </div>
                    <Divider inset />
                    </div>
            })}
                    </CardContent>
                  </Card>
            </Grid>
      });
        return (
          <div  style={{ padding: 10 }} spacing={0}>
          <Grid container spacing={24}>
            {cards}
          </Grid>
          </div>
          );

  }
}

export default Exchanges;
