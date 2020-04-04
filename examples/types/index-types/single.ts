interface IndexInterface1 {
  [index: string]: number;
  // 报错,相同类型的索引签名最多只能出现一个
  [index: string]: string;
}
interface IndexInterface2 {
  [index: number]: number;
  // 报错,相同类型的索引签名最多只能出现一个
  [index: number]: string;
}

// 合法
interface IndexInterface3 {
  [index: string]: number;
  // 合法,数值和字符串索引同时出现
  [index: number]: number;
}
