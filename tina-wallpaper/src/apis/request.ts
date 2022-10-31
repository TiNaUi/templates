import HttpRequest, { HttpPromise, HttpRequestConfig, HttpResponse } from "@/utils/request/luch-request";

export interface ResponceResult<T = unknown> {
  code: number
  config: any
  data: T
  message: string
  success: boolean
}

export class Request {
  public instance: HttpRequest
  constructor(config: HttpRequestConfig) {
    this.instance = new HttpRequest(config)

    // this.instance.interceptors.response.use((config: HttpResponse<any>) => {
    //   return config.data
    // }, (err) => {
    //   return err
    // })
  }
  get<T = any>(url: string, params: any = {}, config?: HttpRequestConfig<UniApp.RequestTask>): HttpPromise<ResponceResult<T>> {
    return this.instance.get<ResponceResult<T>>(url, {
      params,
      ...config
    })
  };
  upload<T = any>(url: string, config?: HttpRequestConfig<UniApp.UploadTask>): HttpPromise<ResponceResult<T>> {
    return this.instance.upload(url, config)
  };
  delete<T = any>(url: string, data?: AnyObject, config?: HttpRequestConfig<UniApp.RequestTask>): HttpPromise<ResponceResult<T>> {
    return this.instance.delete(url, data, config)
  };
  post<T = any>(url: string, data?: AnyObject, config?: HttpRequestConfig<UniApp.RequestTask>): HttpPromise<ResponceResult<T>> {
    return this.instance.post(url, data, config)
  };
  put<T = any>(url: string, data?: AnyObject, config?: HttpRequestConfig<UniApp.RequestTask>): HttpPromise<ResponceResult<T>> {
    return this.instance.put(url, data, config)
  };
}

export const request = new Request({
  baseURL: import.meta.env.VITE_REQUEST_BASE_URL,
  header: {
    appid: 'wx123004cdf793dff7'
  }
})
