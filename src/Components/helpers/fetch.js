import axios from 'axios';

const api = {
  fetchPrices:()=>{
        return axios.get('https://react-ticker-backend.herokuapp.com/v1/prices')
        .then(response => {
          console.log('response:',response.data);
          return response.data;
        })
        .catch(error => {
          console.log('Error fetching and parsing data', error);
        });
  }
};

export default api;
