# TypeScript 模块声明扩展与覆盖

> 如何扩展或覆盖第三方模块的类型定义，而不修改原库。

## 一、核心问题

当我们使用第三方库时，库的类型定义可能不完整或不符合我们的需求。如何在不修改原库的情况下扩展其类型定义？

## 二、声明合并（Declaration Merging）

### 2.1 接口合并（Interface Merging）

```typescript
// 原始库类型
declare module 'some-library' {
  interface Config {
    timeout: number;
  }
}

// 扩展：添加新属性
declare module 'some-library' {
  interface Config {
    retry?: number;        // 新增
    onSuccess?: () => void; // 新增
  }
}
```

**原理**：同名的 `interface` 会自动合并成员。

### 2.2 函数重载合并

```typescript
declare module 'some-library' {
  function fetch(url: string): Promise<Response>;
}

// 扩展重载
declare module 'some-library' {
  function fetch(url: string, options?: RequestInit): Promise<Response>;
}
```

### 2.3 命名空间合并

```typescript
declare module 'some-library' {
  namespace MathUtils {
    function add(a: number, b: number): number;
  }
}

// 扩展命名空间
declare module 'some-library' {
  namespace MathUtils {
    function multiply(a: number, b: number): number;
  }
}
```

---

## 三、覆盖第三方类型

### 3.1 module 声明覆盖

通过 `declare module` 重新声明整个模块：

```typescript
// my-types.d.ts
declare module 'some-library' {
  interface ExistingInterface {
    prop: string;
  }
  
  function existingFunction(): void;
  
  export { ExistingInterface, existingFunction };
}
```

### 3.2 extends + interface 扩展

创建扩展接口（不会修改原类型）：

```typescript
import { OriginalType } from 'some-library';

// 新增可选属性
interface ExtendedType extends OriginalType {
  additionalProp?: boolean;
  nestedConfig?: {
    enabled: boolean;
    timeout: number;
  };
}
```

### 3.3 全局声明覆盖

```typescript
// global.d.ts
declare global {
  namespace SomeLibrary {
    interface ExtendedConfig {
      timeout?: number;
      retries?: number;
    }
  }
}

export {};
```

---

## 四、实战：扩展 npm 包类型

### 4.1 场景：扩展 Express Request

```typescript
// types/express-custom.d.ts
import 'express';

declare module 'express' {
  interface Request {
    userId?: string;
    authToken?: string;
    isAdmin?: boolean;
  }
}
```

### 4.2 场景：扩展 Vue 组件

```typescript
// types/vue-custom.d.ts
import { ComponentCustomProperties } from 'vue';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $myPlugin: {
      getVersion: () => string;
      config: Record<string, unknown>;
    };
  }
}
```

### 4.3 场景：扩展 React 组件 props

```typescript
// types/react-custom.d.ts
import 'react';

declare module 'react' {
  interface DOMAttributes<T> {
    'data-testid'?: string;
    'data-cy'?: string;
  }
}
```

### 4.4 场景：扩展 Axios 配置

```typescript
// types/axios-custom.d.ts
import 'axios';

declare module 'axios' {
  interface AxiosRequestConfig {
    _retryCount?: number;
    _startTime?: number;
    customHeaders?: Record<string, string>;
  }
  
  interface AxiosResponse<T = any> {
    data: T;
    _cached?: boolean;
  }
}
```

---

## 五、deep extends — 深层类型扩展

### 5.1 嵌套对象类型扩展

```typescript
// 原始类型
interface OriginalConfig {
  database: {
    host: string;
    port: number;
  };
}

// 扩展
interface ExtendedConfig extends OriginalConfig {
  database: OriginalConfig['database'] & {
    ssl?: boolean;
    connectionLimit?: number;
  };
}
```

### 5.2 使用 Omit + 扩展

```typescript
type ModifiedConfig = Omit<OriginalConfig, 'deprecatedField'> & {
  deprecatedField?: never;
  newField: string;
};
```

---

## 六、satisfies 操作符（TS 4.9+）

`satisfies` 可以在保持类型推断的同时验证类型：

```typescript
import type { Config } from 'some-library';

const myConfig = {
  prop: 'value',
  newProp: 123
} satisfies Config & { newProp: number };

// myConfig.prop 仍然是 string 类型（不是 string | number）
// 但 newProp 被验证为 number
```

### satisfies vs 类型断言

| | `as` 断言 | `satisfies` |
|---|---|---|
| 类型推断 | 会扩大类型 | 保持推断 |
| 类型检查 | 不检查 | 检查 |
| 适用场景 | 已知类型 | 需要保持推断 |

---

## 七、常见问题

### Q1：为什么 declare module 无效？

**检查清单**：
1. 文件是否在 `tsconfig.json` 的 `include` 范围内
2. `moduleResolution` 是否正确（`node` / `bundler`）
3. 声明文件是否被正确引用

```json
{
  "compilerOptions": {
    "moduleResolution": "node"
  },
  "include": ["src/**/*", "types/**/*"]
}
```

### Q2：interface 和 type alias 哪个能合并？

**只有 `interface` 能合并**。`type alias` 无法合并：

```typescript
// ✅ 可以合并
interface A { x: number; }
interface A { y: string; }

// ❌ 不能合并
type B = { x: number; };
type B = { y: string; }; // Error!
```

### Q3：如何扩展函数类型的重载？

```typescript
declare module 'some-library' {
  interface OverloadedFunc {
    (name: string): string;
    (name: string, age: number): string;
  }
  
  export const func: OverloadedFunc;
}
```

---

## 八、最佳实践

1. **优先使用 `declare module`**：扩展接口，而非覆盖整个模块
2. **使用 `interface extends`**：创建新类型，不修改原类型
3. **使用 `satisfies`**：需要保持类型推断时优先使用
4. **命名约定**：`*.d.ts` 文件放在项目根目录的 `types/` 文件夹
5. **避免覆盖**：尽量扩展而非覆盖，保持对原库的兼容性

### 推荐目录结构

```
project/
├── src/
│   └── index.ts
├── types/
│   ├── express-custom.d.ts   # Express 扩展
│   ├── axios-custom.d.ts     # Axios 扩展
│   └── global.d.ts          # 全局声明
├── tsconfig.json
└── package.json
```
