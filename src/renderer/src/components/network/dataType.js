// 定义一个类来表示标签和数据
class TagInfo {
  constructor(tag, type, father, info, name, date, location) {
    this.tag = tag
    // 数字标签
    this.type = type
    // 类型名:公有/私有
    this.father = father
    // 父级 0为大地图 其他则为父级标签
    this.info = Array.isArray(info) ? info : [info]
    // 包含的数据 指向数据的指针
    this.name = name
    // 标签名
    this.date = date
    // 日期
    this.location = location
    // 位置 大地图的坐标为经纬度 而其他的则为父级标签内容的相对坐标
  }
}

class TagData {
  constructor(dataTag, type, data) {
    this.dataTag = dataTag
    this.type = type
    // 例如 type是text 那么data就是文本 type是image 那么data就是图片的url
    this.data = data
  }
}
