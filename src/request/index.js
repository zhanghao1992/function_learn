import { axiosRequest }from '../common/util/axios'

const getNews = () => {
  return axiosRequest('http://scmp-portal.guazi.com/scmp/home')
}

export {
  getNews
}