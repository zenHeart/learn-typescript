# Rollup 打包 TypeScript 配置完全指南

## 目录

1. [核心概念](#核心概念)
2. [环境准备](#环境准备)
3. [插件体系](#插件体系)
4. [tsconfig.json 配置](#tsconfigjson-配置)
5. [输出格式](#输出格式)
6. [完整配置示例](#完整配置示例)
7. [常见问题](#常见问题)

---

## 核心概念

### Rollup 是什么

Rollup 是新一代 JavaScript 模块打包工具，专为 ES Module 设计，具有出色的 Tree-shaking 能力。

### Rollup vs Webpack vs Vite

| 特性 | Rollup | Webpack | Vite |
|------|--------|---------|------|
| 定位 | 库/框架打包 | 应用打包 | 开发服务器 |
| Tree-shaking | ✅ 原生支持 | ✅ 支持 | ✅ 基于 Rollup |
| 输出格式 | ES/CJS/UMD/IIFE | 多格式 | ES/CJS |
| 配置复杂度 | 低 | 高 | 低 |
| 插件生态 | 适中 | 丰富 | 适中 |

### Rollup 打包流程

```
Input Files → Plugins → Module Graph → Bundle → Output Plugins → Output Files
```

---

## 环境准备

### 安装依赖

```bash
# 核心依赖
npm install rollup --save-dev

# TypeScript 插件
npm install @rollup/plugin-typescript --save-dev

# 模块解析插件
npm install @rollup/plugin-node-resolve --save-dev

# CommonJS 转换插件
npm install @rollup/plugin-commonjs --save-dev

# 生产环境压缩插件
npm install @rollup/plugin-terser --save-dev

# TypeScript
npm install typescript --save-dev
```

---

## 插件体系

### 1. @rollup/plugin-typescript

TypeScript 编译插件，负责将 TypeScript 代码编译为 JavaScript。

```js
import typescript from '@rollup/plugin-typescript';

export default {
  plugins: [
    typescript({
      // tsconfig.json 路径
      tsconfig: './tsconfig.json',
      
      // 输出声明文件
      declaration: true,
      declarationDir: './dist/types',
      
      // 是否生成 sourceMap
      sourceMap: true,
      
      // 编译目标
      compilerOptions: {
        target: 'ES2020',
        module: 'ESNext'
      }
    })
  ]
};
```

### 2. @rollup/plugin-node-resolve

解析 `node_modules` 中的模块。

```js
import resolve from '@rollup/plugin-node-resolve';

export default {
  plugins: [
    resolve({
      // 查找的扩展名
      extensions: ['.js', '.ts', '.jsx', '.tsx'],
      
      // 是否将第三方包视为外部依赖
      preferBuiltins: false
    })
  ]
};
```

### 3. @rollup/plugin-commonjs

将 CommonJS 模块转换为 ES Module。

```js
import commonjs from '@rollup/plugin-commonjs';

export default {
  plugins: [
    commonjs({
      // 是否排除依赖
      exclude: ['node_modules/**'],
      
      // 自定义转换函数
      transformMixedEsModules: true
    })
  ]
};
```

### 4. @rollup/plugin-terser

生产环境 JavaScript 压缩。

```js
import terser from '@rollup/plugin-terser';

export default {
  plugins: [
    terser({
      compress: {
        drop_console: true,
        pure_funcs: ['console.log']
      }
    })
  ]
};
```

---

## tsconfig.json 配置

### 基础配置

```json
{
  "compilerOptions": {
    // 编译目标：保持 ES Module 特性，让 Rollup 处理
    "target": "ESNext",
    "module": "ESNext",
    
    // 模块解析策略
    "moduleResolution": "node",
    
    // 严格模式
    "strict": true,
    
    // 导出声明
    "declaration": true,
    "declarationDir": "./dist/types",
    
    // 源码映射
    "sourceMap": true,
    
    // 解析根目录
    "rootDir": "./src",
    
    // 允许合成默认导出
    "allowSyntheticDefaultImports": true,
    
    // 支持 ES Module
    "esModuleInterop": true,
    
    // 不再编译 node_modules
    "skipLibCheck": true,
    
    // 输出目录
    "outDir": "./dist"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

### 针对 Rollup 的特殊配置

```json
{
  "compilerOptions": {
    // 关键：Rollup 需要 ESNext module 以保留 import/export
    "target": "ESNext",
    "module": "ESNext",
    
    // 避免 TS 注入 helpers
    "importHelpers": true,
    
    // 防止 TS 折叠 enum
    "preserveConstEnums": true,
    
    // 不生成 __esModule 标记
    "esModuleInterop": true,
    "declaration": true
  }
}
```

---

## 输出格式

Rollup 支持四种输出格式：

### 1. ES Module (ES)

生成 ES Module 格式，适合现代浏览器和打包工具。

```js
export default {
  output: {
    format: 'es',
    file: 'dist/index.mjs'
  }
};
```

### 2. CommonJS (CJS)

生成 CommonJS 格式，适合 Node.js 环境。

```js
export default {
  output: {
    format: 'cjs',
    file: 'dist/index.cjs'
  }
};
```

### 3. UMD (Universal Module Definition)

通用模块格式，同时支持 AMD、CommonJS 和全局变量。

```js
export default {
  output: {
    format: 'umd',
    file: 'dist/index.umd.js',
    name: 'MyLibrary',  // 全局变量名
    globals: {
      // 外部依赖的全局变量名
      lodash: '_'
    }
  }
};
```

### 4. IIFE (Immediately Invoked Function Expression)

自执行函数格式，直接运行于浏览器。

```js
export default {
  output: {
    format: 'iife',
    file: 'dist/index.iife.js',
    name: 'MyLibrary'
  }
};
```

---

## 完整配置示例

### 项目结构

```
my-library/
├── src/
│   ├── index.ts
│   ├── utils.ts
│   └── types.ts
├── dist/
├── rollup.config.js
├── tsconfig.json
└── package.json
```

### rollup.config.js

```js
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';

// 决定是否为生产环境
const production = !process.env.ROLLUP_WATCH;

export default {
  // 入口文件
  input: 'src/index.ts',
  
  // 外部依赖（可选）
  external: ['lodash'],
  
  // 插件
  plugins: [
    // TypeScript 编译
    typescript({
      tsconfig: './tsconfig.json',
      declaration: true,
      declarationDir: './dist/types'
    }),
    
    // 解析 node_modules
    resolve({
      extensions: ['.js', '.ts']
    }),
    
    // CommonJS 转换
    commonjs(),
    
    // 生产环境压缩
    production && terser()
  ],
  
  // 输出配置（数组支持多格式输出）
  output: [
    // ES Module
    {
      format: 'es',
      file: 'dist/index.mjs',
      sourcemap: true
    },
    // CommonJS
    {
      format: 'cjs',
      file: 'dist/index.cjs.js',
      sourcemap: true
    },
    // UMD
    {
      format: 'umd',
      file: 'dist/index.umd.js',
      name: 'MyLibrary',
      globals: {
        lodash: '_'
      },
      sourcemap: true
    }
  ]
};
```

### package.json 配置

```json
{
  "name": "my-library",
  "version": "1.0.0",
  "type": "module",
  "main": "dist/index.cjs.js",
  "module": "dist/index.mjs",
  "types": "dist/types/index.d.ts",
  "exports": {
    ".": {
      "import": "dist/index.mjs",
      "require": "dist/index.cjs.js",
      "types": "dist/types/index.d.ts"
    }
  },
  "scripts": {
    "build": "rollup -c",
    "build:watch": "rollup -c -w"
  }
}
```

### tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ESNext",
    "module": "ESNext",
    "moduleResolution": "node",
    "strict": true,
    "declaration": true,
    "declarationDir": "dist/types",
    "sourceMap": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "outDir": "dist"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

---

## 常见问题

### Q1: declaration 文件生成失败

确保 `tsconfig.json` 中 `declaration: true` 且 `outDir` 正确设置。

```json
{
  "compilerOptions": {
    "declaration": true,
    "declarationDir": "dist/types",
    "outDir": "dist"
  }
}
```

### Q2: Tree-shaking 不生效

1. 确保使用 ES Module 格式输出
2. 检查代码没有使用副作用
3. 使用 `sideEffects: false` 在 package.json 中声明

### Q3: 外部依赖处理

```js
external: [
  'lodash',
  /^@org\/package/  // 支持正则匹配组织包
]
```

### Q4: 类型声明文件导出

确保所有导出的类型都能被正确识别：

```typescript
// types.ts
export interface Config {
  name: string;
}

// index.ts
export { Config } from './types';
```

### Q5: 循环依赖

Rollup 可以正确处理大多数循环依赖，但如果出现问题，考虑：

1. 重构代码避免循环依赖
2. 使用 `context` 选项
3. 检查 `dynamicImport` 的使用

---

## 参考资源

- [Rollup 官方文档](https://rollupjs.org/)
- [@rollup/plugin-typescript](https://github.com/rollup/plugins/tree/master/packages/typescript)
- [TypeScript 官方文档](https://www.typescriptlang.org/)
