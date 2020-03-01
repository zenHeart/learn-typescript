/**
 * OmitThisParameters<T> 创建忽略 T 函数类型 this 参数后的新函数类型
 */

// 此处限制函数必须为成员调用且对象必须包含 x 属性
function addX(this: { x: number }, y: number): number {
  return y + this.x;
}

let a2 = { x: 1, addX };

console.log(a2.addX(1));

// 该函数忽略 this,是的 ret1 可以直接被调用
let add1: OmitThisParameter<typeof addX> = addX.bind({ x: 1 });

// 此时无论如何传递 this, add1 加 1 操作
console.log(add1.call(null, 10));
