// 申明全局变量
declare var fooBar: number;
// 申明全局常量
declare const STATE_FOO: number[];
// 申明全局方法
declare function greet(str: string): void;
// 采用命名空间申明全局暴露的对象
declare namespace myLibrary {
  let version: string;
  function hi(): void;
}

// 采用重载定义 getUser 方法
declare function getUser<T>(n: number): T[];
declare function getUser<T>(s: string): T[];

//利用接口抽离不同类型
interface GreetOptions {
  text?: string;
  time?: number;
  color?: string;
}
declare function greetWithOptions(options: GreetOptions): void;
