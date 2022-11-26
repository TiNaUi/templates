import { request } from "../request"

export class CommonApi {
  static qiniuToken() {
    return request.get<string>('/qiniu/token')
  }

  static getDict() {
    return request.get<Dict>('/dict/all')
  }
}