import HttpRequest from "@/utils/request/luch-request";

export const request = new HttpRequest({
  baseURL: import.meta.env.VITE_REQUEST_BASE_URL,
  header: {
    appid: 'wx123004cdf793dff7'
  }
})
