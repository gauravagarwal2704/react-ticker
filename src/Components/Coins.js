import React, {Component} from 'react';
import Grid from 'material-ui/Grid';
import { coinType} from './helpers/case-conversions';
import { toDisplayName} from './helpers/coinData';
import Card, { CardContent, CardHeader } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import NumberFormat from 'react-number-format';
// import { Btc, Eth, Bch, Ltc, Xmr,/* Iota, Gnt,*/ Omg, Etc, Neo, Zec, Dash, Btg, /*Gas,*/  Xrp, Qtum, Str } from 'react-cryptocoins';
import './cryptocoins-colors.css';
import './Coins.css';


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
    width: 30,
    height: 30,
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
  red:{
    color:'red'
  },
  green:{
    color:'green'
  },
  prices:{
    paddingTop: '6px',
    fontFamily:'Roboto'
  },
};

class Coins extends Component {

   constructor(props){
    super(props);
    this.state = {
      data:[]
    }
  }

render() {
 var coinNames = new Set();
 var coinSymbols = new Set();

  if(this.props.dataFromApp){
      var cards = this.props.dataFromApp.map(o => {
    o.prices.map(c => coinNames.add(c.name))
    o.prices.map(s=> coinSymbols.add(s.symbol))
    return null;
  })
   var finalCoins = [...coinNames];
   // var finalSymbols = [...coinSymbols];
   // console.log(finalSymbols);
  cards = finalCoins.map((cn, i) => {
    console.log(cn)
    return <Grid item xs={12} sm={6} md={3} lg={3} key={cn}>
                    <Card>
                      <div>
                        <CardHeader
                          title={
                                  <Typography component="p">
                                    <span className="titles">{toDisplayName(cn)}</span>
                                  </Typography>
                                }
                          avatar={
                                  coinType(finalCoins[i])
                                  
                                }
                        />
                        <Divider />
                      </div>
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
                     {
              this.props.dataFromApp.map(o => o.prices.map(p => {
                if (p.name === cn) {
                  //console.log(`${o.name} | ${p.buy} | ${p.sell}`)
                  return <div key={p.name}>
                      <div style={styles.c_container} >
                      <div>
                        <Avatar aria-label="Exchanges"
                                alt={o.name}
                                src={o.image}
                                style={styles.smallAvatar}
                                />
                                
                      </div>
                      <div style={styles.prices}>
                        <Typography component="p">
                        <span style={styles.prices}>
                          ₹ <NumberFormat value={p.buy} displayType={'text'} decimalScale={2} thousandSeparator={true} style={styles.green}/> <b>|</b> 
                          &nbsp;₹ <NumberFormat value={p.sell} displayType={'text'} decimalScale={2} thousandSeparator={true} style={styles.red}/>
                          </span>
                          <br/>
                        </Typography>
                      </div>
                    </div>
                    <Divider inset />
                    </div>
                    }
                    return null;
              })
              )
            }
                    </CardContent>
            </Card>
                 
            </Grid>
  })
}
                
        return (
            <div  style={{ padding: 10 }} spacing={0}>
            <Grid container spacing={24}>
              {cards}
            </Grid>
            </div>
          );

  }
}

export default Coins;
