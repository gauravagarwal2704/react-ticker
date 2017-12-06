// helper.js
import axios from 'axios';

// Autotrade delay
const update_delay = 3000; // millis

// REST endpoint
let api_zebpay = axios.create({
    baseURL: 'https://www.zebapi.com/api/v1/market/ticker/btc/inr',
    timeout: 2500,
    headers:{}
});

let api_throughbit_btc = axios.create({
    baseURL: 'https://www.throughbit.com/tbit_ci/index.php/cryptoprice/type/btc/inr',
    timeout: 2500,
    headers:{}
});

let api_throughbit_eth = axios.create({
    baseURL: 'https://www.throughbit.com/tbit_ci/index.php/cryptoprice/type/eth/inr',
    timeout: 2500,
    headers:{'Access-Control-Allow-Origin':'*', 'Accept': 'application/json','Content-Type': 'application/json'}
});

let api_unocoin = axios.create({
    baseURL: 'https://www.unocoin.com/trade?all',
    timeout: 2000,
    headers:{'Access-Control-Allow-Origin':'*', 'Accept': 'application/json', 'Content-Type': 'application/json'}
});

export { api_zebpay, api_throughbit_btc, api_throughbit_eth, api_unocoin, update_delay };
