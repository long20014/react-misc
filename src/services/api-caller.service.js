import axios from 'axios';

export default async function callApi(apiUrl, endpoint, method = 'GET', body) {
  return axios({
    method,
    url: `${apiUrl}/${endpoint}`,
    data: body
  }).catch(error => {
    console.log(error);    
  })
}