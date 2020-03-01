/**
 * 类型注释的方法
 */

// 采用 :类型 进行注解
let fooA: string = '1';

let o1 = { ax: 1, bx: 'demo' };
// 解构对象注解,此处申明的是 ax ,bx 的类型
let { ax, bx }: { ax: number; bx: string } = o1;

// 函数内联注解
let fa1: {
  (a: string): void;
  (a: string, b: string): void;
  (a: string, b: string, c: string): void;
} = (a: string, b?: string, c?: string) => {};

type aq = <T, U>(x: T, y: U) => void;

let gl: aq<string, number> = (x: string, y: number) => {
  console.log(x, y);
};
gl('d', 'demo');
