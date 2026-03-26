# TypeScript 静态类型与运行时行为差异

本节深入探讨 TypeScript 编译期类型检查与运行时实际行为之间的根本差异，帮助开发者避免「编译通过 = 运行时安全」的误区。

## 1. 类型擦除（Type Erasure）

### 核心概念

TypeScript 编译器的首要目标是**类型安全**，但这些类型信息仅存在于编译阶段。一旦编译完成，类型信息会被**完全擦除**，生成的 JavaScript 代码中不包含任何类型注解。

```
TypeScript (有类型)  ──编译──>  JavaScript (无类型)
     ↓
  类型检查
     ↓
  类型擦除
```

### 类型擦除的本质

<<< ./examples/ts/static-vs-runtime/type-erasure.ts

<<< ./examples/ts/static-vs-runtime/type-erasure-compiled.js

观察编译后的 JavaScript 代码，我们发现：

1. 所有类型注解（`: string`, `: number`, `: boolean`）全部消失
2. 泛型 `<T>` 被完全移除
3. 接口、类型别名在运行时不存在

### 运行时不存在 typeof T

<<< ./examples/ts/static-vs-runtime/typeof-generic.ts

<<< ./examples/ts/static-vs-runtime/typeof-generic-demo.ts

**关键点**：`typeof T` 在泛型函数内部永远返回 `"undefined"`（或具体原始类型），因为泛型参数 `T` 在运行时已经被擦除。

:::warning
不要在运行时尝试检查泛型类型！泛型是纯编译期概念，运行时没有任何信息。
:::

## 2. 编译选项与运行时保障

### strictNullChecks

<<< ./examples/ts/static-vs-runtime/strict-null-checks.ts

<<< ./examples/ts/static-vs-runtime/strict-null-checks-demo.js

**核心差异**：
- 编译期：`strictNullChecks` 让你声明 `name: string` 时不能赋值为 `null`
- 运行期：`null` 和 `undefined` 是真实存在的值，没有任何类型保护

| 编译选项 | 编译期行为 | 运行期保障 |
|---------|-----------|-----------|
| `strictNullChecks: true` | 报错 `null` 不能赋给 `string` | **无任何保障** |
| `strictNullChecks: false` | 不报错 | **无任何保障** |

### noImplicitAny

<<< ./examples/ts/static-vs-runtime/implicit-any.ts

<<< ./examples/ts/static-vs-runtime/implicit-any-demo.js

### useDefineForClassFields

此选项影响 class field 的 emit 方式：

<<< ./examples/ts/static-vs-runtime/class-fields.ts

<<< ./examples/ts/static-vs-runtime/class-fields-emit.js

| 选项值 | 编译行为 | 运行时行为 |
|-------|---------|-----------|
| `true` | 使用 `Object.defineProperty` | 符合 `class` 语义 |
| `false` | 直接赋值 | 可能与预期不符 |

## 3. Class Field 的 TS vs JS 行为差异

### declare 字段

<<< ./examples/ts/static-vs-runtime/declare-field.ts

<<< ./examples/ts/static-vs-runtime/declare-field-demo.js

**关键点**：
- `declare` 字段**仅用于类型检查**，编译后完全消失
- 运行时会报错 `Cannot read property`，因为属性不存在

### 抽象类字段

<<< ./examples/ts/static-vs-runtime/abstract-class.ts

<<< ./examples/ts/static-vs-runtime/abstract-class-demo.js

**抽象字段**：
- 编译期：检查子类是否实现了抽象属性
- 运行期：抽象类不能实例化，抽象字段只是类型约束

### 访问器（Accessor）的特殊性

<<< ./examples/ts/static-vs-runtime/accessor.ts

TypeScript 的 `accessor` 关键字会生成 `__accessor` 相关代码，而不仅仅是简单的属性赋值。

## 4. Enum 在运行时的真实形态

### Numeric Enum 编译结果

<<< ./examples/ts/static-vs-runtime/numeric-enum.ts

<<< ./examples/ts/static-vs-runtime/numeric-enum-demo.js

**关键点**：
1. Numeric enum 编译为**双向映射对象**
2. 可以通过值找到名字（反向映射）
3. 运行时是**普通 JavaScript 对象**

### String Enum 编译结果

<<< ./examples/ts/static-vs-runtime/string-enum.ts

<<< ./examples/ts/static-vs-runtime/string-enum-demo.js

**差异**：
- String enum **没有**反向映射
- 编译产物更简单

### 运行时可修改性

<<< ./examples/ts/static-vs-runtime/enum-mutation.ts

<<< ./examples/ts/static-vs-runtime/enum-mutation-demo.js

:::danger
Enum 在运行时应被视为**常量**，但技术上可以被修改！修改后会影响所有引用。
:::

### Const Enum 的特殊性

<<< ./examples/ts/static-vs-runtime/const-enum.ts

<<< ./examples/ts/static-vs-runtime/const-enum-demo.js

**关键点**：
- Const enum 在编译时**内联化**，完全不生成运行时对象
- 但使用 `--preserveConstEnums` 可以保留编译产物

## 5. 类型断言（as）的危险性

### 核心问题

<<< ./examples/ts/static-vs-runtime/type-assertion-danger.ts

<<< ./examples/ts/static-vs-runtime/type-assertion-danger-demo.js

**`as` 只在编译期有效，运行时没有任何类型保障！**

### 常见危险场景

<<< ./examples/ts/static-vs-runtime/assertion-pitfalls.ts

运行时会直接崩溃，因为 `null.toUpperCase()` 不存在。

### 正确的做法：类型守卫

<<< ./examples/ts/static-vs-runtime/type-guard.ts

<<< ./examples/ts/static-vs-runtime/type-guard-demo.js

运行时不崩溃，因为 `typeof value === 'string'` 在运行时是真实的检查。

## 6. Declaration Files (d.ts)

### declare 语句的本质

<<< ./examples/ts/static-vs-runtime/declare-statements.ts

<<< ./examples/ts/static-vs-runtime/declare-statements.js

**关键点**：
- `declare` 语句**只生成类型**，不生成任何 JavaScript 代码
- 编译后 `declare` 语句完全消失

### declare global

<<< ./examples/ts/static-vs-runtime/declare-global.ts

<<< ./examples/ts/static-vs-runtime/declare-global-demo.js

:::warning
`declare global` 只影响全局类型作用域，不会在运行时创建任何全局变量！
:::

### 三斜线指令

<<< ./examples/ts/static-vs-runtime/triple-slash.ts

<<< ./examples/ts/static-vs-runtime/triple-slash-demo.js

三斜线指令在 `.ts` 文件中是引用声明文件，但在 `.js` 文件中会被当作普通注释处理。

## 7. 条件类型（Conditional Types）

### 编译期求值

<<< ./examples/ts/static-vs-runtime/conditional-type.ts

<<< ./examples/ts/static-vs-runtime/conditional-type-demo.js

**关键点**：
- 条件类型在编译期**求值折叠**
- 运行时不存在条件类型，只有具体的结果类型

### 分布式条件类型

<<< ./examples/ts/static-vs-runtime/distributive-conditional.ts

<<< ./examples/ts/static-vs-runtime/distributive-conditional-demo.js

### never 类型在条件类型中

<<< ./examples/ts/static-vs-runtime/conditional-never.ts

<<< ./examples/ts/static-vs-runtime/conditional-never-demo.js

## 8. 常见误区和坑

### 误区一：认为编译通过 = 运行时正确

<<< ./examples/ts/static-vs-runtime/myth-compile-safe.ts

<<< ./examples/ts/static-vs-runtime/myth-compile-safe-demo.js

**编译通过，但运行时报错！**

### 误区二：用 as 假装有类型安全

<<< ./examples/ts/static-vs-runtime/myth-as-safe.ts

<<< ./examples/ts/static-vs-runtime/myth-as-safe-demo.js

### 误区三：忽略 undefined/null 的运行时存在

<<< ./examples/ts/static-vs-runtime/myth-undefined.ts

<<< ./examples/ts/static-vs-runtime/myth-undefined-demo.js

### 误区四：认为接口会在运行时存在

<<< ./examples/ts/static-vs-runtime/myth-interface.ts

<<< ./examples/ts/static-vs-runtime/myth-interface-demo.js

## 9. 运行时类型验证方案

### Zod 的使用

<<< ./examples/ts/static-vs-runtime/zod-example.ts

<<< ./examples/ts/static-vs-runtime/zod-example-demo.js

### io-ts 的使用

<<< ./examples/ts/static-vs-runtime/io-ts-example.ts

<<< ./examples/ts/static-vs-runtime/io-ts-example-demo.js

### 编译期 vs 运行期的双保险

<<< ./examples/ts/static-vs-runtime/runtime-safety.ts

<<< ./examples/ts/static-vs-runtime/runtime-safety-demo.js

## 10. 对比总结表

| 概念 | 编译期 | 运行期 | 危险程度 |
|-----|-------|-------|---------|
| TypeScript 类型 | ✅ 类型检查 | ❌ 不存在 | 🔴 高 |
| `as` 断言 | ✅ 类型覆盖 | ❌ 无检查 | 🔴 高 |
| `declare` | ✅ 类型声明 | ❌ 无代码 | 🟡 中 |
| `strictNullChecks` | ✅ 报错 | ❌ 无保障 | 🟡 中 |
| Enum | ✅ 类型检查 | ✅ 普通对象 | 🟡 中 |
| Const Enum | ✅ 内联 | ❌ 无对象 | 🟢 低 |
| Interface | ✅ 类型检查 | ❌ 不存在 | 🔴 高 |
| 类型守卫 | ✅ 类型收窄 | ✅ 真实检查 | 🟢 低 |
| 运行时验证库 | ❌ 无 | ✅ 真实验证 | 🟢 低 |

## 总结

1. **类型擦除是核心**：TypeScript 的类型在编译后完全消失，运行时没有任何类型信息
2. **编译选项仅影响编译**：即使开启了所有 strict 选项，运行时依然可能出错
3. **as 是危险操作**：只应在你**绝对确定**类型正确时使用
4. **类型守卫是桥梁**：将编译期类型收窄转化为运行时真实检查
5. **运行时验证是必要补充**：对于来自网络、用户输入的数据，必须使用运行时验证库

:::tip 最佳实践
- 不要用 `as` 假装类型安全
- 使用类型守卫处理复杂的类型收窄
- 对外部数据使用 zod/io-ts 等运行时验证库
- 理解 TypeScript 的限制，不要过度依赖编译期检查
:::
