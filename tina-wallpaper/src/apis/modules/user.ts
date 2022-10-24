import { request } from "../request"

export class UserApi {
  static getOpenId(code: string) {
    return request.get('/user/openId', { code })
  }

  static updateInfo(params: any) {
    return request.post('/user/updateInfo', params)
  }
}