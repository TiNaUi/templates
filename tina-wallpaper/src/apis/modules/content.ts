/**
 * 内容模块api管理
 */

import { ReqPage, ResPage } from '../interface'
import { request } from "../request"

export namespace Banner {
  export interface Item {
    id: string
    appid: string
    position: string
    cover: string
    link: string
    title: string
    background: string
    status: number
    sort: number
    is_deleted: boolean
    create_at: Date
    update_at: Date
  }

  export interface ReqGetParams extends ReqPage {
    name: string
  }
}

export namespace Tag {
  export interface Item {
    id: number
    appid: string
    type: string
    tag_name: string
    remark: string
    sort: number
    status: number
  }
}

export namespace Category {
  export interface Item {
    id: string
    appid: string
    type: string
    name: string
    short_name: string
    cover: string
    keywords: string
    url: string
    description: string
    weigh: number
    type_text: number
    status: number
    is_deleted: boolean
    create_at: Date
    update_at: Date
  }

  export interface ReqGetParams extends ReqPage {
    name: string
  }
}

export namespace Resource {
  export interface Item {
    id: number
    appid: string
    type: string
    name: string
    info: string
    url: string[]
    tags: Tag.Item[]
    categories: Category.Item[]
    thumb_url: string
    upload_type: string
    price: number
    vip_price: number
    is_hot: number
    is_recommend: number
    sort: number
    status: number
    is_deleted: boolean
    create_at: Date
    update_at: Date
  }

  export interface ReqGetParams extends ReqPage {
    name: string
    tagId: number
    categoryId: number
    isHot: boolean;
    isRecommend: boolean;
    search: string;
  }
}

// { tagId: number; categoryId: number; isHot: boolean; isRecommend: boolean; search: string; pageNum?: number; pageSize?: number }

export class ContentApi {
  static bannerList(position: string) {
    return request.get<Banner.Item[]>('/content/banner', { position })
  }

  static tagList() {
    return request.get<Tag.Item[]>('/content/tags')
  }

  static wallpaper(params: Partial<Resource.ReqGetParams>) {
    return request.get<ResPage<Resource.Item>>('/content/wallpaper', params)
  }

  static wallpaperInfo(id: number) {
    return request.get<Resource.Item>('/content/wallpaper/' + id)
  }
}


