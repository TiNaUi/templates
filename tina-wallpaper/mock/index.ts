import Mock from 'mockjs'
import { imageData } from './imageData'

const parseUrl = (url: string) => {
  const query:Record<string, string> = {}
  const queryString = url.split('?')[1]
  const queryArr = queryString.split('&')
  queryArr.forEach(item => {
    const tmp = item.split('=')
    query[tmp[0]] = tmp[1]
  })

  return query
}

let lastIndex = 0

function buildResponce(data: any, message: string = 'success', code: number = 200) {
  return {
    code,
    success: code === 200,
    message: '',
    result: data
  }
}

// 基于我们制定的规则，这里必须做下判断，这个很重要。
if (/\/mock$/.test(import.meta.env.VITE_REQUEST_BASE_URL)) {
  Mock.mock(`${import.meta.env.VITE_REQUEST_BASE_URL}/getUserInfo`, {
    code: 200,
    success: true,
    msg: '',
    result: {
        name: Mock.Random.cname()
    }
  })
  console.log(`${import.meta.env.VITE_REQUEST_BASE_URL}/getResourceList`)
  Mock.mock(/\/mock\/getResourceList/, 'get', (options: any) => {
    const query = parseUrl(options.url)
    const { pageNo, pageSize } = query
    const data = imageData.splice(lastIndex, Number(pageSize)) as string[]
    lastIndex = lastIndex + Number(pageSize)
    const result = [] as any[]
    data.forEach(img => {
      result.push({
        creator: Mock.Random.cname(),
        like: Mock.Random.integer(10, 100000),
        download: Mock.Random.integer(10, 100000),
        resourceUrl: img,
        title: Mock.Random.ctitle(10, 30),
        desc: Mock.Random.cparagraph(20, 64),
        createAt: Mock.Random.date()
      })
    })
    return buildResponce(result)
  })
}
