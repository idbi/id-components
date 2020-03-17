import axios from 'axios';

export const getDataByEndpoint = (endpoint: string, payload: any, token: string) =>
  axios.post(endpoint, { ...payload }, { headers: { Authorization: 'Bearer ' + token } });
