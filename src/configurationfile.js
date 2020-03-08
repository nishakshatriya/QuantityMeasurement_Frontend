import axios from 'axios';

    module.exports={
    getConversion() {
      return axios({
            method: 'GET',
            url: 'http:/localhost:3000/value',
            // data: obj
        }).then(response => {
            console.log("success  ", response.data);

        }).catch(err=>{
            console.log("something went wrong  ",err);
        });

    }
    }
    