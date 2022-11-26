import { objectToQuery } from "@/utils"
import { useImagePath } from "./useImgPath"
import { reactive } from 'vue';

export const useShare = ({
  title = '',
  path = '/pages/Index/index',
  imageUrl = '',
  query = {},
  desc = '欢迎使用星图壁纸，每日精美壁纸推荐'
}: {
  title?: string,
  path?: string
  imageUrl?: string,
  query?: Record<string, string>
  desc?: string
}) : Page.CustomShareContent | Promise<Omit<Page.CustomShareContent, "promise">> => {
  const _query = Object.keys(query)
  const url = `${path}${_query.length ? objectToQuery(query) : ''}`
   console.log("🚀 ~ file: useShare.ts ~ line 20 ~ url", url)
   return reactive({
    title: `星图壁纸${title ? '-' + title : ''}`,
    path: url,
    PCPath: url,
    desc: '',
    imageUrl: imageUrl || useImagePath('/logo.jpg')
  })
}

export const useTimelineContent = ({
  title = '',
  query = {},
  imageUrl = ''
}: { title?: string; query: Record<string, any>; imageUrl?: string }): Page.ShareTimelineContent => {
  const _query = Object.keys(query)
  const queryString = `${_query.length ? '?' + objectToQuery(query) : ''}`
  return reactive({
    title: `星图壁纸${title ? '-' + title : ''}`,
    query: queryString,
    imageUrl: imageUrl || useImagePath('/logo.jpg')
  })
}