import axios from 'axios';

const updateWinningInfo = (winningInfo) => {
  axios.post(`https://5e9e56abfb467500166c3dce.mockapi.io/react-misc/card-score`, {winningInfo})
    .then(res => {      
      console.log(res.data);
    })
    .catch(error => console.log(error));
}

const getWinningInfo = async () => {
  return axios({
    method: 'GET',
    url: `https://5e9e56abfb467500166c3dce.mockapi.io/react-misc/card-score`
  }).catch(error => console.log(error))  
}

const cardService = {
  updateWinningInfo,
  getWinningInfo
}

export default cardService;