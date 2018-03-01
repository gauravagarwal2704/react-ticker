import React from 'react';
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
        'Xvg':'Verge',
        'Req': 'Request Network',
        'Dbc': 'DeepBrain Chain',
        'Rpx': 'Red Pulse',
	'Zrx': '0x'
  }
  let camel = toCamelCase(coin);
  let converted = coinNames[camel] + " ("+toUpperCase(coin)+")";
  return converted;
}

let MyCoin;

export function coinType(coin){
  let Coins = toCamelCase(coin);
  let components = {
			Bcc:Icon.Bch,//wrong
			Bch:Icon.Bch,
			Btg:Icon.Bch,//wrong
			Gas:Icon.Neo,//wrong
			Xlm:Icon.Str,//wrong
			Sc:Icon.Sia,//wrong
			Vox:Icon.Eth, //wrong
			Req:Icon.Eth, //wrong
			Dbc:Icon.Neo, //wrong
			Rpx:Icon.Qtum, //wrong
			Zrx:Icon.Xrp,//wrong
	  		Ae:Icon.Amp,//wrong
			Adc : Icon.Adc,
			Aeon : Icon.Aeon,
			Amp : Icon.Amp,
			Anc : Icon.Anc,
			Arch : Icon.Arch,
			Ardr : Icon.Ardr,
			Aur : Icon.Aur,
			Banx : Icon.Banx,
			Bat : Icon.Bat,
			Bay : Icon.Bay,
			Bc : Icon.Bc,
			Bcn : Icon.Bcn,
			Bft : Icon.Bft,
			Brk : Icon.Brk,
			Brx : Icon.Brx,
			Bsd : Icon.Bsd,
			Bta : Icon.Bta,
			Btc : Icon.Btc,
			Btcd : Icon.Btcd,
			Bts : Icon.Bts,
			Clam : Icon.Clam,
			Cloak : Icon.Cloak,
			Dao : Icon.Dao,
			Dash : Icon.Dash,
			Dcr : Icon.Dcr,
			Dct : Icon.Dct,
			Dgb : Icon.Dgb,
			Dgd : Icon.Dgd,
			Dgx : Icon.Dgx,
			Dmd : Icon.Dmd,
			Doge : Icon.Doge,
			Emc : Icon.Emc,
			Eos : Icon.Eos,
			Erc : Icon.Erc,
			Etc : Icon.Etc,
			Eth : Icon.Eth,
			Fc2 : Icon.Fc2,
			Fct : Icon.Fct,
			Flo : Icon.Flo,
			Frk : Icon.Frk,
			Ftc : Icon.Ftc,
			Game : Icon.Game,
			Gdc : Icon.Gdc,
			Gemz : Icon.Gemz,
			Gld : Icon.Gld,
			Gno : Icon.Gno,
			Gnt : Icon.Gnt,
			Golos : Icon.Golos,
			Grc : Icon.Grc,
			Grs : Icon.Grs,
			Heat : Icon.Heat,
			Icn : Icon.Icn,
			Ifc : Icon.Ifc,
			Incnt : Icon.Incnt,
			Ioc : Icon.Ioc,
			Iota : Icon.Iota,
			Jbs : Icon.Jbs,
			Kmd : Icon.Kmd,
			Kobo : Icon.Kobo,
			Kore : Icon.Kore,
			Lbc : Icon.Lbc,
			Ldoge : Icon.Ldoge,
			Lisk : Icon.Lisk,
			Ltc : Icon.Ltc,
			Maid : Icon.Maid,
			Mco : Icon.Mco,
			Mint : Icon.Mint,
			Mona : Icon.Mona,
			Mrc : Icon.Mrc,
			Msc : Icon.Msc,
			Mtr : Icon.Mtr,
			Mue : Icon.Mue,
			Nbt : Icon.Nbt,
			Neo : Icon.Neo,
			Neos : Icon.Neos,
			Neu : Icon.Neu,
			Nlg : Icon.Nlg,
			Nmc : Icon.Nmc,
			Note : Icon.Note,
			Nvc : Icon.Nvc,
			Nxt : Icon.Nxt,
			Ok : Icon.Ok,
			Omg : Icon.Omg,
			Omni : Icon.Omni,
			Opal : Icon.Opal,
			Part : Icon.Part,
			Piggy : Icon.Piggy,
			Pink : Icon.Pink,
			Pivx : Icon.Pivx,
			Pot : Icon.Pot,
			Ppc : Icon.Ppc,
			Qtum:Icon.Qtum,
			Qrk : Icon.Qrk,
			Rads : Icon.Rads,
			Rbies : Icon.Rbies,
			Rbt : Icon.Rbt,
			Rby : Icon.Rby,
			Rdd : Icon.Rdd,
			Rep : Icon.Rep,
			Rise : Icon.Rise,
			Sar : Icon.Sar,
			Scot : Icon.Scot,
			Sdc : Icon.Sdc,
			Sia : Icon.Sia,
			Sjcx : Icon.Sjcx,
			Slg : Icon.Slg,
			Sls : Icon.Sls,
			Snrg : Icon.Snrg,
			Start : Icon.Start,
			Steem : Icon.Steem,
			Str : Icon.Str,
			Strat : Icon.Strat,
			Swift : Icon.Swift,
			Sync : Icon.Sync,
			Sys : Icon.Sys,
			Trig : Icon.Trig,
			Tx : Icon.Tx,
			Ubq : Icon.Ubq,
			Unity : Icon.Unity,
			Usdt : Icon.Usdt,
			Vior : Icon.Vior,
			Vnl : Icon.Vnl,
			Vpn : Icon.Vpn,
			Vrc : Icon.Vrc,
			Vtc : Icon.Vtc,
			Waves : Icon.Waves,
			Xai : Icon.Xai,
			Xbs : Icon.Xbs,
			Xcp : Icon.Xcp,
			Xem : Icon.Xem,
			Xmr : Icon.Xmr,
			Xpm : Icon.Xpm,
			Xrp : Icon.Xrp,
			Xtz : Icon.Xtz,
			Xvg : Icon.Xvg,
			Ybc : Icon.Ybc,
			Zec : Icon.Zec,
			Zeit : Icon.Zeit
  };
  // console.log(Icon.Btc);
  // let components = {
  //   [Coins] : Icon.Coins
  // }
  // console.log(components)

  MyCoin = components[Coins];
  return <MyCoin className={Coins} size={28}>{Coins}</MyCoin>;
}
