/// start ,end 说明元祖各位置元素的含义
type RangeTuple = [start: number, end: number]
/// 同样支持标签元祖的可选类型
type RangeTuple1 = [start: number, end?: number]

/// 当有元祖一个元素使用 label 后，所有元祖必须也使用 label,下述申明非法
type RangeTuple2 = [start: number, number]

