// 标签信息 信息序号    信息类型                           数据值     信息列表
//          绝不重复值 string,image,file,components,list  内容/URL   序号列表
class TagData {
  dataTag: number
  type: string
  data: string
  datalist: number[]

  constructor(dataTag: number, type: string, data: string, datalist: number[] = []) {
    this.dataTag = dataTag
    this.type = type
    this.data = data
    this.datalist = datalist
  }
}
class TagDataCollection {
  tagDataArray: TagData[]

  constructor() {
    this.tagDataArray = []
  }

  fromJSON(json: string) {
    const dataArray = JSON.parse(json)
    this.tagDataArray = dataArray.map(
      (data: { dataTag: number; type: string; data: string; datalist: number[] }) =>
        new TagData(data.dataTag, data.type, data.data, data.datalist)
    )
  }

  init() {
    this.fromJSON(`[
    {
      "dataTag": 1,
      "type": "string",
      "data": "Sample text",
      "datalist": []
    },
    {
      "dataTag": 2,
      "type": "string",
      "data": "Sample text",
      "datalist": []
    }
  ]`)
  }
}

export { TagDataCollection, type TagData }
