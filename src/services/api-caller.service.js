import axios from 'axios';
import constants from 'shared/constants';

const config = constants.config;

export default async function callApi(endpoint, method = 'GET', body) {
  return axios({
    method,
    url: `${config.API_URL}/${endpoint}`,
    data: body
  }).catch(error => {
    console.log(error);    
  })
}