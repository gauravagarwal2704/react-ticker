import React, {Component} from 'react';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import {toUpperCase, toCamelCase, toDisplayName} from './helpers/case-conversions';
import Card, { CardContent, CardHeader } from 'material-ui/Card';
import Tooltip from 'material-ui/Tooltip';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import NumberFormat from 'react-number-format';
import { SyncLoader } from 'react-spinners';
// import { Btc, Eth, Bch, Ltc, Xmr,/* Iota, Gnt,*/ Omg, Etc, Neo, Zec, Dash, Btg, /*Gas,*/  Xrp, Qtum, Str, Dgb,Sia,Vox,Xvg } from 'react-cryptocoins';
import * as Icon from 'react-cryptocoins';
import './cryptocoins-colors.css';
import './Common.css';

const styles = theme => ({
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
    fontFamily:'Roboto'
  },
  red:{
    color:'red'
  },
  green:{
    color:'green'
  },
  loading:{
    margin: '150px auto'
  }
});

class Exchanges extends Component {

  constructor(props){
    super(props);
    this.state = {
      data:[],
      loading:true
    }
  }

coinType=(coin)=>{
  let Coins = toCamelCase(coin);
  // console.log(Coins);
  let components = {
        Btc:Icon.Btc,
        Bcc:Icon.Bch,
        Bch:Icon.Bch,
        Btg:Icon.Bch,
        Dash:Icon.Dash,
        Etc:Icon.Etc,
        Eth:Icon.Eth,
        Gas:Icon.Neo,
        Ltc:Icon.Ltc,
        Neo:Icon.Neo,
        Omg:Icon.Omg,
        Qtum:Icon.Qtum,
        Xlm:Icon.Str,
        Xmr:Icon.Xmr,
        Xrp:Icon.Xrp,
        Zec:Icon.Zec,
        Dgb:Icon.Dgb,
        Sc:Icon.Sia,
        Vox:Icon.Xvg,
        Xvg:Icon.Xvg,
  };
  // console.log(Icon.Btc);
  // let components = {
  //   [Coins] : Icon.Coins
  // }
  // console.log(components)

  let MyCoin = components[Coins];
  return <MyCoin className={MyCoin.name} size={28}>{Coins}</MyCoin>;
}

  sortExchange(a, b){
          if(a.prices.length == b.prices.length) {
              return 0;
          }
          else if(a.prices.length < b.prices.length) {
              return -1;
          } else {
              return 1;
          }
      }


  render() {
    const { classes } = this.props;
    if(this.props.dataFromApp){
      // const api = this.props.dataFromApp.sort(this.sortExchange);
      var cards = this.props.dataFromApp.map((cd)=>{
        return <Grid item xs={12} sm={6} md={3} lg={3} key={cd.name}>
                  <Card>
                    <CardHeader
                      title={ <Typography component="p">
                                <span className="titles">{toCamelCase(cd.name)}</span>
                              </Typography>
                            }
                      avatar= {
                                <Avatar aria-label="Exchanges"
                                alt={cd.name}
                                src={cd.image}
                                className={classes.bigAvatar}
                                />
                              }
                    />
                    <Divider />

                    <CardContent>
                    <div className={classes.c_container}>
                      <div></div>
                      <div>
                        <Typography component="p">
                          <span  className={classes.heading}><i>Buy &nbsp;&nbsp;</i> |&nbsp;&nbsp; <i>Sell</i></span>
                        </Typography>
                          <br/>
                      </div>
                    </div>

                    {cd.prices.map((p)=>{
                      return <div key={p.name}>
                      <div className={classes.c_container} >
                      <div>
                        
                        <span>
                          <Tooltip id="tooltip-right" title={toDisplayName(p.name)}  placement="right" disableTriggerTouch>
                            <span>{this.coinType(p.name)}</span>
                          </Tooltip>                          
                        </span>
                      </div>
                      <div className={classes.prices}>
                        <Typography component="p">
                          <span className={classes.prices}>
                          ₹ <NumberFormat value={p.buy} displayType={'text'} decimalScale={2} thousandSeparator={true} className={classes.green}/> <b>|</b> 
                          &nbsp;₹ <NumberFormat value={p.sell} displayType={'text'} decimalScale={2} thousandSeparator={true} className={classes.red}/>
                          </span>
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
    }
    else{
      cards = <div className={classes.loading}>
        <SyncLoader
          color={'#2196F3'} 
          loading={this.state.loading} 
        />
      </div>
    }
        return (
          <div style={{ padding: 10 }} spacing={0}>
          <Grid container spacing={24}>
           {cards}
          </Grid>
          </div>
          );

  }
}

Exchanges.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Exchanges);
