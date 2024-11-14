// 活动数据 含有 活动序号 活动信息列表，最近刷新日期，每次刷新都根据当前地图标签从服务请求活动信息列表
class ActivityData {
  activityList: unknown
  lastRefreshDate: string

  constructor(activityList: unknown, lastRefreshDate: string) {
    this.activityList = activityList
    this.lastRefreshDate = lastRefreshDate
  }
}

export { ActivityData }
