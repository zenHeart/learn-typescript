# 类型编程

本章将从语言的角度深入分析，基于 Typescript 提供的类型表示能力，
如何采用类似编程的方式解决复杂类型处理。该章节受 [TypeScript Berlin Meetup #2: Generics, Conditional types and Mapped types](https://www.youtube.com/watch?v=PJjeHzvi_VQ&list=PLy3Kqj2R0dpcQ_bRRE8NrS0vBIK1hn7Pk&index=1) 启发产生。

## 基本的映射关系

javascript | typescript
:---|:---|
原始值、数组、对象| 原始类型、元祖类型、结构类型
变量| 泛型
循环语句| 映射类型
判断语句| 条件类型
函数 | type