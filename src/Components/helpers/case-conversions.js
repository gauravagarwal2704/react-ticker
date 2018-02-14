import React, {Component} from 'react';
import * as Icon from 'react-cryptocoins';

export function toUpperCase(coin){
  let converted = coin.toUpperCase();
  return converted;
}


export function toCamelCase (coin){
  let converted = coin.charAt(0).toUpperCase() + coin.substr(1).toLowerCase();
  return converted;
}

export function toDisplayName (coin){
	let coinNames = {
        'Btc':'Bitcoin',
        'Bcc':'Bitcoin Cash',
        'Bch':'Bitcoin Cash',
        'Btg':'Bitcoin Gold',
        'Dash':'DASH',
        'Etc':'Ethereum Classic',
        'Eth':'Ethereum',
        'Gas':'Gas',
        'Ltc':'Litecoin',
        'Neo':'NEO',
        'Omg':'OmiseGo',
        'Qtum':'Quantum',
        'Xlm':'Stellar',
        'Xmr':'Monero',
        'Xrp':'Ripple',
        'Zec':'Zcash',
        'Dgb':'DigiByte',
        'Sc':'Sia Coin',
        'Vox':'Voxelus',
        'Xvg':'Verge'
  }
  let camel = toCamelCase(coin);
  let converted = coinNames[camel] + " ("+toUpperCase(coin)+")";
  return converted;
}

let MyCoin;

export function coinType(coin){
  let Coins = toCamelCase(coin);
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

  MyCoin = components[Coins];
  return <MyCoin className={Coins} size={28}>{Coins}</MyCoin>;
}