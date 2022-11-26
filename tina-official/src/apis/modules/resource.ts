/**
 * 资源api
 */

import { request } from "../request"

enum ResourceUrl {
  GET_LIST = '/getResourceList'
}

export const getResourceList = (params: any) => {
  return request.get(ResourceUrl.GET_LIST, {
    params: params
  })
}