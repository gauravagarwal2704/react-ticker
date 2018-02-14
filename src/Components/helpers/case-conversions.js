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