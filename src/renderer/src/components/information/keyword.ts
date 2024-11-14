class Keyword {
  public selected: string[]
  public candidate: string[]
  public user: string[]

  constructor(selected: string[] = [], candidate: string[] = [], user: string[] = []) {
    this.selected = selected
    this.candidate = candidate
    this.user = user
  }
  public setCandidatesFromTagInfo(tagInfoList: { keywords: string[] }[]): void {
    this.candidate = tagInfoList.reduce((acc: string[], tagInfo) => {
      return acc.concat(tagInfo.keywords)
    }, [] as string[])
  }
}

export { Keyword }
