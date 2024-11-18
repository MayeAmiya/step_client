// 标签列表 标签序号 类型      组织序号   父级序号  信息列表 名称 日期     坐标
//         绝不重复 公有/私有  0为大地图 0为大地图  TagInfo 名称 更新日期 经纬坐标/相对坐标
class TagInfo {
  id: number
  type: string
  groupid: number
  father: number
  info: string[]
  keywords: string[]
  name: string
  date: string
  location: [number, number]

  constructor(
    id: number,
    type: string,
    groupid: number,
    father: number,
    info: string[],
    keywords: string[],
    name: string,
    date: string,
    location: [number, number]
  ) {
    this.id = id
    this.type = type
    this.groupid = groupid
    this.father = father
    this.info = Array.isArray(info) ? info : [info]
    this.keywords = keywords
    this.name = name
    this.date = date
    this.location = location
  }
}

class TagInfoCollection {
  tags: TagInfo[]
  constructor() {
    this.tags = []
  }

  fromJSON(json: string) {
    const data = JSON.parse(json)
    this.tags = data.map(
      (item: {
        id: number
        type: string
        groupid: number
        father: number
        info: string[]
        keywords: string[]
        name: string
        date: string
        location: [number, number]
      }) =>
        new TagInfo(
          item.id,
          item.type,
          item.groupid,
          item.father,
          item.info,
          item.keywords,
          item.name,
          item.date,
          item.location
        )
    )
  }

  init() {
    this.fromJSON(`[
      {
          "id": 1,
          "type": "Global",
          "groupid": -1,
          "father": 0,
          "info": [0, 1],
          "keywords": ["school"],
          "name": "exampleName",
          "date": "2023-10-01",
          "location": [113.536674,34.817112]
        },
        {
          "id": 2,
          "type": "Global",
          "groupid": 1,
          "father": 0,
          "info": [0, 1],
          "keywords": ["food"],
          "name": "anotherName",
          "date": "2023-10-02",
          "location": [113.525143,34.809434]
        },
        {
          "id": 3,
          "type": "Global",
          "groupid": 2,
          "father": 1,
          "info": [0, 1],
          "keywords": ["gate"],
          "name": "yetAnotherName",
          "date": "2023-10-03",
          "location": [113.535441,34.808542]
        }
      ]`)
  }
}

export { TagInfo, TagInfoCollection }
