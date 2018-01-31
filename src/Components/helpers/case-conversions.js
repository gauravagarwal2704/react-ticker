export function toUpperCase(coin){
  let converted = coin.toUpperCase();
  return converted;
}


export function toCamelCase (coin){
  let converted = coin.charAt(0).toUpperCase() + coin.substr(1).toLowerCase();
  return converted;
}