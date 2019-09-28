import axios from 'axios'
axios.defaults.withCredentials = true

const axiosRequest = function  (url, opts) {
    return axios({
        method: 'get',
        url,
        ...opts
    }).then(res => {
       return res.data
    }).catch(error => {
        console.log(error.response)
    })
}

export {
  axiosRequest,
}