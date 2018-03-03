import React from 'react';
import coinComponents from './coinData';

export function toUpperCase(coin){
  let converted = coin.toUpperCase();
  return converted;
}


export function toCamelCase (coin){
  let converted = coin.charAt(0).toUpperCase() + coin.substr(1).toLowerCase();
  return converted;
}

export function sortCoins(prices){
  console.log(prices)
}

let MyCoin;

export function coinType(coin){
  let Coins = toCamelCase(coin);

  MyCoin = coinComponents[Coins];
  return <MyCoin className={Coins} size={28}>{Coins}</MyCoin>;
}

export function sortExchange(a, b){
          if(a.prices.length === b.prices.length) {
              return 0;
          }
          else if(a.prices.length < b.prices.length) {
              return -1;
          } else {
              return 1;
          }
      }

export function sortPrices(json_object, key_to_sort_by) {
    function sortByKey(a, b) {
        var x = a[key_to_sort_by];
        var y = b[key_to_sort_by];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    }
    json_object.sort(sortByKey);
}