class Group {
  id: number
  father: number
  son: number[]
  mapid: number
  name: string
  type: string
  members: number[]
  activities: number[]
  masterID: number
  adminID: number[]
  info: number[]
  tag: string[]

  constructor(
    id: number,
    father: number,
    son: number[],
    mapid: number,
    name: string,
    type: string,
    members: number[],
    activities: number[],
    masterID: number,
    adminID: number[],
    info: number[],
    tag: string[]
  ) {
    this.id = id
    this.father = father
    this.son = son
    this.mapid = mapid
    this.name = name
    this.type = type
    this.members = members
    this.activities = activities
    this.masterID = masterID
    this.adminID = adminID
    this.info = info
    this.tag = tag
  }

  addMember(member: number): void {
    this.members.push(member)
  }

  removeMember(member: number): void {
    this.members = this.members.filter((m) => m !== member)
  }

  getMemberCount(): number {
    return this.members.length
  }
}

export { Group }
