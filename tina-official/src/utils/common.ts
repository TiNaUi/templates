import { objectToQuery } from "./object";

/**
 * 跳转
 * @param param0 
 */
export const navigatorTo = ({ url, query = {} }: { url: string; query?: Record<string, string | number> }) => {
  const queryString = objectToQuery(query)
  
  uni.navigateTo({
    url: url + queryString
  })
}