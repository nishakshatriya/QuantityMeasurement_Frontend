import axios from 'axios';

function configuration(data) {   
      return axios({
            method: 'POST',
            url: 'http://localhost:3000/value',
            data: data
        })
}

export default configuration;