
// * 分页响应参数
export interface ResPage<T> {
  rows: T[]
  pageNum: number
  pageSize: number
  total: number
}

// * 分页请求参数
export interface ReqPage {
  pageNum: number
  pageSize: number
}