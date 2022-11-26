/**
 * 组装img地址
*/

import { imgHost } from "@/config"

export const useImagePath = (url: string) => {
  return imgHost + url
}