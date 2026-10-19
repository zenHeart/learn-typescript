# TypeScript 模块系统详解

本教程聚焦于 TypeScript 模块系统的**导入导出语法**，通过实例对比帮助理解各种语法的适用场景。与 [模块](./6.1.module.md) 和 [模块解析](./6.2.module-resolution.md) 配合阅读效果更佳。

## 1. 模块系统概述

TypeScript 基于 ES6 模块系统，提供了丰富的导入导出语法。合理选择语法变体，可以：

- 提升代码可读性
- 优化编译产物大小
- 避免类型与值的混淆
- 实现更好的 tree-shaking

---

## 2. 导出语法

### 2.1 命名导出 (Named Export)

每个模块可以有多个命名导出。

```ts
// math.ts
export const PI = 3.14159;
export function add(a: number, b: number): number {
  return a + b;
}
export class Calculator {
  multiply(a: number, b: number) { return a * b; }
}
```

### 2.2 默认导出 (Default Export)

每个模块**只能有一个**默认导出。

```ts
// logger.ts
export default class Logger {
  log(msg: string) {
    console.log(msg);
  }
}

// 或者函数作为默认值
export default function greet(name: string): string {
  return `Hello, ${name}!`;
}

// 或者常量作为默认值
export default 42;
```

### 2.3 混合导出

同时使用命名导出和默认导出。

```ts
// utils.ts
export default class Utils {
  static format = (str: string) => str.trim();
}

export const VERSION = '1.0.0';
export function helper() { }
```

### 2.4 重导出 (Re-export)

在不导入的情况下，将一个模块的导出直接转发给当前模块。

```ts
// index.ts
// 从外部模块重新导出命名导出
export { PI, add } from './math';
export { Logger } from './logger';

// 重新导出并重命名
export { Calculator as Calc } from './math';

// 重新导出所有命名导出
export * from './math';

// 重新导出默认导出（需要命名）
export { default as App } from './app';
```

### 2.5 类型导出 (Type Export)

TypeScript 3.8+ 支持纯类型导出，编译后完全移除。

```ts
// types.ts
export type ID = string | number;
export interface User {
  name: string;
  age: number;
}

// 内联类型导出
export { type ID, type User };
```

---

## 3. 导入语法

### 3.1 默认导入

导入模块的默认导出。

```ts
import Logger from './logger';
const log = new Logger();
log.log('Hello');
```

### 3.2 命名导入

导入模块的命名导出，需要使用 `{}` 包裹。

```ts
import { PI, add } from './math';
console.log(add(PI, 1));
```

### 3.3 命名导入重命名

使用 `as` 关键字重命名，避免命名冲突。

```ts
import { Calculator as Calc } from './math';

const calc = new Calc();
calc.multiply(3, 4);
```

### 3.4 命名空间导入

将所有导出作为对象的属性访问。

```ts
import * as Math from './math';

console.log(Math.PI);
Math.add(1, 2);
```

### 3.5 混合导入

同时导入默认导出和命名导出。

```ts
import Logger, { VERSION, helper } from './utils';

const logger = new Logger();
logger.log(`Version: ${VERSION}`);
```

### 3.6 仅类型导入 (Type-Only Import)

仅导入类型信息，编译后完全移除。

```ts
import type { User, ID } from './types';

// 仅导入类型（3.8+ 简化语法）
import type { User } from './types';
```

### 3.7 内联类型导入 (Inline Type Import)

导入时声明该导入仅为类型使用。

```ts
import { type User, type ID } from './types';
```

### 3.8 副作用导入 (Side-effect Import)

仅执行模块的初始化代码，不导入任何绑定。

```ts
// polyfill.ts
import './polyfill'; // 执行初始化逻辑
```

---

## 4. 导入导出语法对比

### 4.1 导入语法矩阵

| 语法 | 导入内容 | 编译后保留 | 典型场景 |
|------|----------|------------|----------|
| `import X from 'm'` | 默认导出 | 是 | 类、函数、主模块 |
| `import { X } from 'm'` | 命名导出 | 是 | 工具函数、常量 |
| `import { X as Y } from 'm'` | 重命名导入 | 是 | 避免命名冲突 |
| `import * as X from 'm'` | 命名空间导入 | 是 | 批量导入、结构化访问 |
| `import X, { Y } from 'm'` | 混合导入 | 是 | 同时需要默认和命名 |
| `import type { X } from 'm'` | 仅类型 | **否** | 仅需要类型定义 |
| `import { type X } from 'm'` | 内联类型 | **否** | 同上（3.8+ 语法） |
| `import 'm'` | 副作用导入 | **否** | 执行初始化代码 |

### 4.2 导出语法矩阵

| 语法 | 导出内容 | 特点 |
|------|----------|------|
| `export const X = 1` | 命名导出 | 直接导出变量 |
| `export { X }` | 命名导出 | 导出已有绑定 |
| `export { X as Y }` | 重命名导出 | 导出时重命名 |
| `export { X } from 'm'` | 重导出 | 转发其他模块导出 |
| `export * from 'm'` | 批量重导出 | 导出所有命名导出 |
| `export default X` | 默认导出 | 唯一默认导出 |
| `export type { X }` | 类型导出 | 仅导出类型信息 |

### 4.3 语法选择建议

```
场景                     推荐语法
─────────────────────────────────────────────────────
导出类/主对象            export default class {}
导出工具函数/常量         export function/const {}
同时导出多个相关项        export { func1, func2 }
重新分发其他模块导出      export * from './other'
只需要类型定义           export type { MyType }
导入时仅需要类型          import type { MyType }
执行初始化代码            import './init'
```

---

## 5. 动态导入

ES2020 引入的动态 `import()` 返回 Promise，支持按需加载和条件加载。

### 5.1 基础用法

```ts
// 懒加载模块
button.addEventListener('click', async () => {
  const { default: Logger } = await import('./logger');
  new Logger().log('clicked');
});
```

### 5.2 条件导入

```ts
const module = environment === 'production'
  ? await import('./prodLogger')
  : await import('./devLogger');
```

### 5.3 类型安全

使用 `typeof` 获取模块类型：

```ts
const math = await import('./math');
type MathModule = typeof math;
// MathModule 包含 math 模块所有导出类型
```

---

## 6. CommonJS 兼容语法

TypeScript 支持导入 CommonJS 格式的模块 (`module.exports = X`)。

### 6.1 导入 CommonJS 默认导出

```ts
import Logger from './cjsLogger';

// 编译为:
const Logger = require('./cjsLogger');
```

### 6.2 CommonJS 风格的命名导入

```ts
import { readFile } from 'fs';

// 编译为:
const { readFile } = require('fs');
```

### 6.3 `export =` 语法

当模块使用 `export =` 导出时（TypeScript 特有），必须使用以下方式导入：

```ts
// 导出方 (oldModule.ts)
export = class OldModule {
  static create() { return new OldModule(); }
}

// 导入方
import OldModule = require('./oldModule');
const instance = OldModule.create();
```

> 注意：`export =` 与 ES6 `export default` 不能混用。

---

## 7. 实战示例

### 7.1 模块结构设计

```ts
// types/user.ts
export interface User {
  id: string;
  name: string;
}

export type UserRole = 'admin' | 'user' | 'guest';

// types/index.ts
export type { User, UserRole } from './user';

// services/userService.ts
import type { User, UserRole } from '../types';
import { API } from './config';

export async function fetchUser(id: string): Promise<User> {
  const response = await fetch(`${API}/users/${id}`);
  return response.json();
}

// utils/index.ts
export { fetchUser } from './userService';
export * from './format';
export * from './validation';
```

### 7.2 Barrel 模式 (Barrel Pattern)

使用 `index.ts` 作为统一导出入口：

```ts
// components/
//   ├── Button/
//   │   ├── Button.tsx
//   │   └── index.ts      -> export { Button } from './Button';
//   ├── Modal/
//   │   ├── Modal.tsx
//   │   └── index.ts      -> export { Modal } from './Modal';
//   └── index.ts          -> 导出所有组件

// 使用方只需:
import { Button, Modal } from './components';
```

### 7.3 循环依赖处理

```ts
// a.ts
import { b } from './b';
export const a = 'a';
export function getB() { return b; }

// b.ts
import { a } from './a'; // 初次导入时 a 尚未完成初始化
export const b = 'b';
export function getA() { return a; }

// 解决方案：使用函数调用延迟访问
console.log(getB()); // 运行时访问，避免初始化问题
```

---

## 8. 常见问题

### 8.1 导入省略 (Import Elision)

当 TypeScript 识别到导入仅用于类型时，编译后会忽略该导入，可能导致模块副作用不执行：

```ts
// a.ts
export class A {}
console.log('A module loaded');

// b.ts
import { A } from './a'; // A 仅作为类型使用
new A(); // 运行时错误！模块未被加载
```

**解决方案**：使用 `import type` 或 `import './a'` 显式导入。

### 8.2 `typeof` 配合默认导入

```ts
import MyClass from './MyClass';
type MyClassType = InstanceType<typeof MyClass>;
```

### 8.3 ESM 与 CommonJS 互操作

```ts
// esm.mjs
export default class Logger { }

// cjs.cjs
const Logger = require('./esm.mjs');
// 需要通过 esm 包装或配置 interop
```

---

## 9. 知识点总结

1. **模块系统基础**
   - ES6 模块系统是 TypeScript 模块的基础
   - 每个文件视为独立模块，变量和函数作用域仅限当前文件

2. **导出语法选择**
   - 默认导出适合作为模块的主入口
   - 命名导出适合工具函数、常量、接口
   - `export type` 专门用于纯类型导出

3. **导入语法选择**
   - `import type` / `import { type }` 确保编译后不包含类型导入
   - 副作用导入用于执行初始化逻辑

4. **编译优化**
   - 正确使用类型导入可减小输出文件体积
   - `esModuleInterop` 配置影响默认导入的编译方式

5. **实际应用**
   - Barrel 模式简化导入路径
   - 动态导入实现代码分割
   - 注意循环依赖问题
