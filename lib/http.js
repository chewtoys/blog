import { baseUrl } from './env'
import axios from 'axios'

export default (url = '', data = {}, type = 'GET', contentType = 'application/json') => {
  return new Promise((resolve, reject) => {
    let requestConfig = {
      method: type,
      url: baseUrl + url,
      headers: {
        'Accept': 'application/json',
        'Content-Type': contentType
      },
      timeout: 10000
    }

    switch (type.toUpperCase()) {
      case "GET": requestConfig.params = data; break;
      case "DELETE": requestConfig.params = data; break;
      case "POST": requestConfig.data = data; break;
      case "PUT": requestConfig.data = data; break;
    }

    axios(requestConfig).then((resp) => {
      resolve(resp.data);
    }).catch((err) => {
      reject(err);
    })
  });
}
