// TODO 含有 发起者，执行者，期限，事件，附加内容，完成条件等
class TODO {
  id: number
  initiator: number
  init_type: string
  executor: number[]
  exec_type: string
  deadline: string
  event: number[]
  additionalContent: string
  completionCriteria: string

  constructor(
    id: number,
    initiator: number,
    init_type: string,
    executor: number[],
    exec_type: string,
    deadline: string,
    event: number[],
    additionalContent: string,
    completionCriteria: string
  ) {
    this.id = id
    this.initiator = initiator
    this.init_type = init_type
    this.executor = executor
    this.exec_type = exec_type
    this.deadline = deadline
    this.event = event
    this.additionalContent = additionalContent
    this.completionCriteria = completionCriteria
  }
}

export { TODO }
