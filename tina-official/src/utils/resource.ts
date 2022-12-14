import { Resource } from "@/apis";

export function wallpaperListHandler(list: Resource.Item[], flat = false, params?: { w?: number; q?: number }) {
  const res: Array<{ id: number; index: string; like: number; download: number; url: string }> = []
  let w = 200
  let q = 80
  if (params && params.w) {
    w = params.w
  }

  if (params && params.q) {
    q = params.q
  }

  for (let i = 0; i < list.length; i++) {
    const item = list[i]

    if (flat) {
      item.url.forEach((url, idx) => {
        res.push({
          id: item.id,
          index: `${i}_${idx}`,
          like: item.like_num,
          download: item.download_num,
          url: `http://img.zukmb.cn/${url}?imageView2/4/w/${w}/q/${q}/interlace/1/format/jpg`
        })
      })
    } else {
      res.push({
        id: item.id,
        index: `${i}`,
        like: item.like_num,
        download: item.download_num,
        url: `http://img.zukmb.cn/${item.thumb_url}?imageView2/4/w/${w}/q/${q}/interlace/1/format/jpg`
      })
    }
  }

  return res
}