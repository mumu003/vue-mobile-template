import HttpRequest from './axios'
const request = new HttpRequest()
/**
 * 获取类目
 */
export const getCategoryList = () => request.post('/category/list')

export const apiLogin = (params) => request.post('/base/login', params)