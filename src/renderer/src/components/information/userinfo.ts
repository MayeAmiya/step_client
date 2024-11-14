// 当前使用者的个人信息，起始地图参数，TODO列表，群组信息
class UserData {
  name: string
  index: number
  cookies: string
  type: string

  mapid: number
  location: number[]

  TODO: number[]

  group: number[]
  inf: number[]

  constructor(
    name: string,
    index: number,
    cookies: string,
    type: string,
    mapid: number,
    location: number[],
    TODO: number[],
    group: number[],
    inf: number[]
  ) {
    this.name = name
    this.index = index
    this.cookies = cookies
    this.type = type
    this.mapid = mapid
    this.location = location
    this.TODO = TODO
    this.group = group
    this.inf = inf
  }
}

function createUserDataArrayFromJson(json: string): UserData[] {
  const data = JSON.parse(json)
  return data.map(
    (item: {
      name: string
      index: number
      cookies: string
      type: string
      mapid: number
      location: number[]
      TODO: number[]
      group: number[]
      inf: number[]
    }) =>
      new UserData(
        item.name,
        item.index,
        item.cookies,
        item.type,
        item.mapid,
        item.location,
        item.TODO,
        item.group,
        item.inf
      )
  )
}

class UserDataManager {
  private userDataArray: UserData[]

  constructor(json: string) {
    this.userDataArray = createUserDataArrayFromJson(json)
  }

  getUserDataArray(): UserData[] {
    return this.userDataArray
  }
}

export { UserDataManager }

export { UserData }
