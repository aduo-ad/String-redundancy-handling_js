const str= 'http://www.baidu.com?name=前端开发&blog=www.hspstudio.club';

const o = {}

function processQuery(url) {
  const queryStr = url.split('?')[1]

  const queryArr = queryStr.split('&')

  const result = {}
  /**
   * [ 'name=前端开发', 'blog=xxxxxx'  ]
   *
   * {
   *   name: '前端开发'
   * }
   */
  for (let i = 0; i < queryArr.length; i++) {
    const item = queryArr[i]
    const query = item.split('=') // ['name', '前端开发']
    const key = query[0]
    const value = query[1]

    result[key] = value
  }

  return result

}

function processQueryV2(url) {

  const arr = url.split('?')[1].split('&')

  // 规约
  return arr.reduce((res, cur) => {
    const [key, value] = cur.split('=')
    res[key] = value
    console.log('--------->>>>>', res)
    return res
  }, {})

}

console.log(processQueryV2(str))



