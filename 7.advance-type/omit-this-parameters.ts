/**
 * OmitThisParameters<T> 创建忽略 T 函数类型 this 参数后的新函数类型
 */

function toHex(this: number) {
  return this.toString(16);
}

let bindToHex: OmitThisParameter<typeof toHex> = toHex.bind(10);

console.log(bindToHex);
