# Axios 拦截器管理与移除

## 概述

Axios 拦截器（Interceptors）是全局请求/响应处理的机制，通过 `axios.interceptors.request.use()` 和 `axios.interceptors.response.use()` 注册。管理这些拦截器的生命周期，尤其是**移除（eject）**已注册的拦截器，是本文档的核心主题。

## 核心机制

### 拦截器注册返回值

```ts
// 注册请求拦截器，返回数字 ID
const requestInterceptorId = axios.interceptors.request.use(
  (config) => {
    // 处理请求
    return config;
  },
  (error) => {
    // 处理请求错误
    return Promise.reject(error);
  }
);

// 注册响应拦截器，返回数字 ID
const responseInterceptorId = axios.interceptors.response.use(
  (response) => {
    // 处理响应
    return response;
  },
  (error) => {
    // 处理响应错误
    return Promise.reject(error);
  }
);
```

`use()` 方法返回一个数字 ID，用于后续取消拦截器。

## 移除拦截器的方法

### 方法一：eject（推荐）

```ts
// 移除请求拦截器
axios.interceptors.request.eject(requestInterceptorId);

// 移除响应拦截器
axios.interceptors.response.eject(responseInterceptorId);
```

### 方法二：delete

```ts
// 使用 delete 移除
delete axios.interceptors.request.handlers[requestInterceptorId];
delete axios.interceptors.response.handlers[responseInterceptorId];
```

### 方法三：清空所有拦截器

```ts
// 清空所有请求拦截器
axios.interceptors.request.handlers = [];

// 清空所有响应拦截器
axios.interceptors.response.handlers = [];
```

### 常见错误

```ts
// ❌ 错误：直接赋值为 null 或 undefined
axios.interceptors.request.use = null; // 无效

// ❌ 错误：没有保存 ID，无法移除
axios.interceptors.request.use(onFulfilled, onRejected);
// 如果不保存返回的 ID，无法后续移除

// ✅ 正确：始终保存返回的 ID
const id = axios.interceptors.request.use(onFulfilled, onRejected);
axios.interceptors.request.eject(id);
```

## handlers 数组结构

```ts
// 查看所有已注册的请求拦截器
console.log(axios.interceptors.request.handlers);
// [interceptor | null, interceptor | null, ...]
// 索引位置就是 use() 返回的 ID

// 查看所有已注册的响应拦截器
console.log(axios.interceptors.response.handlers);
```

## 实际应用场景

### 场景一：测试环境中清除全局拦截器

```ts
// jest / vitest setup
beforeEach(() => {
  // 清除所有拦截器
  axios.interceptors.request.handlers = [];
  axios.interceptors.response.handlers = [];
});
```

### 场景二：动态 Token 刷新

```ts
let requestInterceptorId: number | null = null;
let responseInterceptorId: number | null = null;

// 设置拦截器（带 Token）
function setupInterceptors(token: string) {
  // 先移除旧的
  if (requestInterceptorId !== null) {
    axios.interceptors.request.eject(requestInterceptorId);
  }
  if (responseInterceptorId !== null) {
    axios.interceptors.response.eject(responseInterceptorId);
  }

  // 添加新的
  requestInterceptorId = axios.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  });

  responseInterceptorId = axios.interceptors.response.use(
    (response) => response,
    async (error) => {
      if (error.response?.status === 401) {
        // Token 过期，刷新并重试
        const newToken = await refreshToken();
        setupInterceptors(newToken);
        // 重试原始请求
        error.config.headers.Authorization = `Bearer ${newToken}`;
        return axios(error.config);
      }
      return Promise.reject(error);
    }
  );
}
```

### 场景三：按请求禁用拦截器

```ts
// 创建独立的 axios 实例
const axiosNoIntercept = axios.create();

// 复制配置，但不复制拦截器
axiosNoIntercept.defaults = { ...axios.defaults };

// 或者显式移除
const instance = axios.create();
instance.interceptors.request.handlers = [];
instance.interceptors.response.handlers = [];
```

## axios vs axios.create() 拦截器隔离

```ts
// 全局 axios 实例的拦截器
axios.interceptors.request.use(...); // 全局生效

// 创建独立实例，拦截器隔离
const api = axios.create({ baseURL: '/api' });
api.interceptors.request.use(...); // 仅对 api 实例生效
```

| 实例 | 拦截器范围 | 使用场景 |
|------|-----------|---------|
| axios（全局） | 全局所有请求 | 通用逻辑（Token、错误处理） |
| axios.create() | 仅该实例 | 特定 API 分组、不同配置 |

## 与 Vue / React 集成

### React 类组件中管理拦截器

```ts
// api.js
import axios from 'axios';

let requestInterceptorId: number | null = null;
let responseInterceptorId: number | null = null;

export function setupInterceptors(token: string) {
  requestInterceptorId = axios.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  });
}

export function clearInterceptors() {
  if (requestInterceptorId !== null) {
    axios.interceptors.request.eject(requestInterceptorId);
    requestInterceptorId = null;
  }
  if (responseInterceptorId !== null) {
    axios.interceptors.response.eject(responseInterceptorId);
    responseInterceptorId = null;
  }
}

// App.jsx
import { useEffect } from 'react';
import { setupInterceptors, clearInterceptors } from './api';

useEffect(() => {
  setupInterceptors(token);
  return () => clearInterceptors(); // 组件卸载时清理
}, [token]);
```

### Vue 3 Composition API

```ts
// api.ts
import axios from 'axios';

let requestInterceptorId: number | null = null;

export function useAuthInterceptor(token: Ref<string>) {
  watch(token, (newToken) => {
    if (requestInterceptorId !== null) {
      axios.interceptors.request.eject(requestInterceptorId);
    }
    requestInterceptorId = axios.interceptors.request.use((config) => {
      config.headers.Authorization = `Bearer ${newToken}`;
      return config;
    });
  }, { immediate: true });
}
```

## 拦截器执行顺序

```
请求拦截器按注册顺序倒序执行（最后注册的先执行）
响应拦截器按注册顺序正序执行（最先注册的先执行）
```

```ts
axios.interceptors.request.use(
  (config) => { console.log('req #1'); return config; }
);
axios.interceptors.request.use(
  (config) => { console.log('req #2'); return config; }
);
// 请求发出时，输出顺序：req #2 → req #1

axios.interceptors.response.use(
  (res) => { console.log('res #1'); return res; }
);
axios.interceptors.response.use(
  (res) => { console.log('res #2'); return res; }
);
// 响应接收时，输出顺序：res #1 → res #2
```

## 常见问题

### Q: eject 后重新 use，ID 会复用吗？

不会复用。每次 `use()` 调用都会在 `handlers` 数组末尾添加新条目，`eject` 只是将该位置设为 `null`，不会压缩数组。

```ts
const id1 = axios.interceptors.request.use(fn1); // handlers[0]
const id2 = axios.interceptors.request.use(fn2); // handlers[1]
axios.interceptors.request.eject(id1);             // handlers[0] = null
const id3 = axios.interceptors.request.use(fn3); // handlers[2]（新的 ID = 2）
// handlers 实际内容：[null, fn2, fn3]
```

### Q: 如何查看当前有多少拦截器？

```ts
const activeRequestInterceptors = axios.interceptors.request.handlers.filter(Boolean);
const activeResponseInterceptors = axios.interceptors.response.handlers.filter(Boolean);

console.log(`请求拦截器数量: ${activeRequestInterceptors.length}`);
console.log(`响应拦截器数量: ${activeResponseInterceptors.length}`);
```

### Q: eject 一个不存在的 ID 会报错吗？

不会报错。`eject` 方法内部会检查 ID 是否在有效范围内。

## 最佳实践

1. **始终保存 use() 返回值**：保存到变量或数组中，便于后续管理
2. **在组件卸载时清理**：使用 `useEffect` / `onBeforeUnmount` 清理拦截器
3. **使用 eject 而非直接操作 handlers**：更安全、更语义化
4. **测试中使用独立的 axios 实例**：避免全局拦截器影响测试隔离性
5. **Token 刷新场景**：确保移除旧拦截器后再添加新拦截器

## 参考

- [Axios 官方文档 - Interceptors](https://axios-http.com/docs/interceptors)
- [GitHub: axios/axios - Interceptor Discussion](https://github.com/axios/axios/issues)
