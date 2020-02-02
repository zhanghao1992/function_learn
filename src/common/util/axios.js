/*
 * @Author: zhanghao23
 * @LastEditors: zhanghao23
 * @Description: file content
 */
import axios from 'axios'
axios.defaults.withCredentials = true

const axiosRequest = function  (url, opts) {
    return axios({
        method: 'get',
        url,
        ...opts
    }).then(res => {
        console.log(res);
       return res.data
    }).catch(error => {
        console.log(error.response)
    })
}

export {
  axiosRequest,
}