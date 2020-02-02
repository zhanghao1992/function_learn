/*
 * @Author: zhanghao23
 * @LastEditors: zhanghao23
 * @Description: file content
 */
import { axiosRequest }from '../common/util/axios'

const getNews = () => {
  return axiosRequest('https://xiaoce-discount-storage-api-ms.juejin.im/v1/getNewUserDiscountTicketDetail?uid=&client_id=&token=&src=web')
}

export {
  getNews
}