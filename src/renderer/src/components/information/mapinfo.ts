// 地图数据 含有 地图名，地图ID，地图更新日期，地图标签列表[所有！]
import { TagData } from './dataType'
class MapData {
  name: string
  index: number
  type: string
  updateDate: string
  tags: TagData[]

  constructor(name: string, index: number, type: string, updateDate: string, tags: TagData[] = []) {
    this.name = name
    this.index = index
    this.type = type
    this.updateDate = updateDate
    this.tags = tags
  }
}

export { MapData }
