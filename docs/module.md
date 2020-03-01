# 模块

## export
类似 es6 module 规范,类型申明的作用范围为当前文件。
为了复用类型申明,可采用 `export,import` 等语法来导出申明。

你可以复用所有 es6 module 的语法,用于申明类型的导出和引用

注意由于类型申明会和实际模块申明同时存在,所以需要避免命名冲突。

### 导入省略
TypeScript 复用了 es6 模块语法实现类型导出。若 import 导入的只是类型申明, typescript 会在编译后忽略该导入。这导致对于同时是类型或变量的内容会出错。示例 [导入缺省](./type-import-elision/b.ts)

```js
// 文件 a.ts
export class Foo {
  greet() {
    console.log('greet');
  }
}

// 一些全局操作,此处以 console.log 举例
console.log('global init');

// 文件 b.ts
// 由于 typescript 认为此处指类型导入,在编译后会忽略,使得 a.js 中的相关操作无法执行
import { Foo } from './a';

// 为了避免删除的导入缺省,重新导入此文件执行初始化操作
import './a';
```

由于 TypeScript 识别 `Foo` 为类型导出,导致 import 被忽略,使 `a.ts` 无法触发,所以需要导入两次。该缺陷叫做 **导入省略**

> 笔者注: TypeScript 复用 es 模块的语法来实现类型的导入和导出,这产生了二义性(一个语言特性同时具备两种功能),导致引入了新的问题

基于此在 [TypeScript 3.8 Beta](https://devblogs.microsoft.com/typescript/announcing-typescript-3-8-beta/#type-only-imports-exports) 引入了 `import type` 来显示申明类型导出, 避免了此错误

## export =
在 ES 模块系统中并没有此语言特性,该特性来源 Commonjs 和 AMD 。你可以通过 `module.exports` 导出整个模块。基于此 TypeScript 提供了类似机制,示例 [exprot =](./type-export-all/b.ts)

> 由于采用此导出,导入必须使用 `require` 才可生效

## 模块申明 *.d.ts
由于类型的作用于只限定在当前文件,为了实现全局类型的复用。
TypeScript 借鉴了 `C,C++` 语言中的头文件模式,通过定义 `*.d.ts` 的文件。TypeScript 会默认查找此文件该文件中的内容会在全局有效。

## 模块解析
解析规则如下:
1. 采用 `classic，node` 解析规则
2. 再查找 `*.d.ts` 文件


### Classic 策略
1. 相对路径
   1. 先解析 `.ts` 为后缀的文件
   2. 再查找 `.d.ts` 文件
2. 绝对路径则递归向上查找,假设模块为 `moduleB`,规则为
   1. /root/src/folder/moduleB.ts
   2. /root/src/folder/moduleB.d.ts
   3. /root/src/moduleB.ts
   4. /root/src/moduleB.d.ts
   5. /root/moduleB.ts
   6. /root/moduleB.d.ts
   7. /moduleB.ts
   8. /moduleB.d.ts

### Node 策略
加载机制详见 [node 模块加载机制](https://nodejs.org/api/modules.html#modules_addenda_the_mjs_extension)

重点如下:
* 相对路径
  * node 会先加载不带任何后缀的文件作为 js 文件解析,随后按照  `js,json,node` 的后缀加载文件
  * 若文件无法查找到,按照同名文件夹会读取 `package.json` **main** 字段,不存在会查找 `index` 文件按照 `js,json,node` 扩展顺序进行加载
    > 注意此处不会加载没有扩展名文件,若文件夹下 index 无扩展名会直接抛出错误
* 绝对路径
  * 对于不包含路径的模块,会先去加载内部模块若失败,会根据`module.paths` 的一系列目录加载,回逐级向上查找 `node_modules` 目录寻找模块
    > 可以通过 `NODE_PATH` 来增加解析路径。利用 `:` 分隔多个目录。windows 为 `;`


TypeScript 的规则类似

1. 相对路径查找 `./moduleB`
   1. 在当前路径查找名为 `moduleB.ts,moduleB.tsx,moduleB.d.ts` 的文件
   2. 在当前路径的 `package.json` 查找 types 字段对应的文件位置
   3. 在当前路径 `moduleB` 文件夹下查找 `index.ts,index.tsx,index.d.ts` 文件
   4. 若未找到退化到 node 的查找机制
2. 绝对路径,查找 `moduleB`
   1. 在 `node_modules` 目录查找后缀为 `moduleB.ts,moduleB.tsx,moduleB.d.ts`  文件
   2. 在 `node_modules/moduleB/package.json`  `types` 字段查找 `.ts,.tsx,.d.ts` 文件
   3. 在 `node_modules/moduleB`  字段查找 `index.ts,index.tsx,index.d.ts` 文件
   4. 在 `node_modules/@types/moduleB.d.ts`  字段查找 `index.ts,index.tsx,index.d.ts` 文件
   5. 在 `node_modules/@types/moduleB`  字段查找 `index.ts,index.tsx,index.d.ts` 文件
   6. 重复 1-5 向上一层查找 `node_modules` 目录

### 解析配置
除了上述默认查找规则,可以利用如下配置定义解析器查找机制。

* `baseUrl` 所有非相对路径模块导入会参考此地址导入。
* `paths` 有时模块的位置上述查找无法生效,例如 jquery 的编译文件定义在 `node_modules/jquery/dist/jquery` 为了避免查找失败,通过此路径匹配
    > 注意 `paths` 的值是相对于 `baseUrl` 而言的,所以需要设置 `baseUrl` 为 `.` 避免查找失败
    也可利用此示例实现跨模块查找
* `rootDirs` 实现编译时的动态载入,详见 [rootDirs](https://www.typescriptlang.org/docs/handbook/module-resolution.html#virtual-directories-with-rootdirs)
