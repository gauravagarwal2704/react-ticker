import axios from 'axios';

export const coinRanks = {
    fetchRanks:()=>{
      return axios.get('https://s2.coinmarketcap.com/generated/search/quick_search.json')
      .then(res =>{
        // console.log('ranks', res.data);
        return res.data;
      })
      .catch(err => {
        console.log('error fetching ranks : ', err)
      })
    }
}

export const api = {
  fetchPrices:()=>{
        return axios.get('https://trackcrpto.herokuapp.com/v1/prices')
        .then(response => {
          // console.log('response:',response.data);
          return response.data;
        })
        .catch(error => {
          console.log('Error fetching prices : ', error);
        });
  }
};

// export default api;
