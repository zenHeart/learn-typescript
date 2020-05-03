# javascript 文件类型检查

##  js 文件检查

在编写 js 文件时， 利用注释开启 typescript 对 js 文件检查

```js
//@ts-check 在文件头部打开 typescript 类型检查
let a = 1;
a = 'foo';

let b = 12;
//@ts-ignore 忽略当行的类型检查
b = 'bar';
```

也可利用  `tsc --checkJs` 编译并检查所有 js 文件，采用 `@ts-nocheck` 忽略对某些文件的编译检查。

TypeScript 内部会对内容进行智能推导来判断类型是否恰当，
具体说明参看 [TypeScript 检查 js 文件](https://www.typescriptlang.org/docs/handbook/type-checking-javascript-files.html#constructor-functions-are-equivalent-to-classes)

:::tip
`// @ts-nocheck` 也支持在 TypeScript 文件使用,详见 [// @ts-nocheck in TypeScript Files](https://www.typescriptlang.org/docs/handbook/release-notes/overview.html#-ts-nocheck-in-typescript-files)
:::

### 结合 JSDoc
[JSDoc](https://jsdoc.app/) 是一个通过注释生成文档的工具。
例如 [lodash](https://github.com/lodash/lodash)，[express](https://github.com/expressjs/express) 等都利用此工具生成项目的 API 文档。

TypeScript 可以结合 JSDoc 的注释，辅助类型推导。
参考 [官方说明](https://www.typescriptlang.org/docs/handbook/type-checking-javascript-files.html#supported-jsdoc) 支持 JSDoc 注释语法。参看示例 [jsdoc](./check-with-jsdoc.js)

```ts
// @ts-check
/**
 * @type {string}
 */
var s;
s = 12; // 基于 type 声明判断此处类型只能为 string

/** @type {HTMLElement}  申明为 html 元素*/
var myElement = document.querySelector('div');

/** @type  {string | number} 综合TypeScript 语法声明为联合类型。 */
var foo = 12;
foo = 'demo';
```

示例说明除了标准的 JSDoc 类型， 也可在注释中利用  TypeScript 定义的类型语法限定变量。

* [Supported JSDoc](https://www.typescriptlang.org/docs/handbook/type-checking-javascript-files.html#supported-jsdoc)

扩充内容包括:
* [3.8 属性修饰符](https://www.typescriptlang.org/docs/handbook/release-notes/overview.html#jsdoc-property-modifiers)


## 注释汇总
<!-- TODO: ts-expect-error -->
在 ts 3.9 中引入了注释功能用于显示控制错误抛出。
采用 `@ts-expect-error` 静默错误。详细信息参见 [ts-expect-error](https://devblogs.microsoft.com/typescript/announcing-typescript-3-9-rc/#what-about-ts-ignore)



## 总结
该小节讲解了如何在 js 中利用 TypeScript 类型检查。
知识点如下:

1. 采用 `tsc --checkJs` 编译 js 文件来检查 js 
2. 利用注释控制 tsc 对 js 文件的类型检查
    * `// @ts-check` 文件开头申明，开启检查
    * `// @ts-nocheck` 关闭检查
    * `// @ts-igore` 忽略对当行的检查
3. 利用 JSDoc 综合 TypeScript 类型注释 js 来实现类型检查


javascript 迁移到 typescript  https://devblogs.microsoft.com/typescript/how-to-upgrade-to-typescript-without-anybody-noticing-part-1/

