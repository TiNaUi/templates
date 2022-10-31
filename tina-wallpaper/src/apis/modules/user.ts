import { request } from "../request"

export namespace User {
  export interface Creator {
    id: number
    user_id: number
    code: string
    status: number
    remark: number
  }
  export interface Profile {
    nickname: string;
    avatar: string;
    gender: number;
    country: string;
    province: string;
    city: string;
    id: number;
    appid: string;
    openid: string;
  }
  export interface Item {
    id: number
    pid: number
    creator: Creator | null
    profile: Profile
    vip_level: number
    score: number
  }
}



export class UserApi {
  /**
   * 登录及获取用户信息
   * @param code 
   * @returns 
   */
  static getOpenId(code: string) {
    return request.get('/user/openId', { code })
  }

  /**
   * 更新用户信息
   * @param params 
   * @returns 
   */
  static updateInfo(params: any) {
    return request.post('/user/updateInfo', params)
  }

  static info(id: number) {
    return request.get<User.Item>('/user/info/' + id)
  }

  /**
   * 申请成为星荐官
   * @param params 
   * @returns 
   */
  static applyCreator(params: { user_id: number; code: string; remark: string }) {
    return request.post<boolean>('/user-creator/apply', params)
  }

  static updateCreator(id: number, params: { remark: string }) {
    return request.put<boolean>('/user-creator/' + id, params)
  }
}