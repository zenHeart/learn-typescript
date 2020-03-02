/**
 * 采用 ThisType<T> 表示符合类型 T 的 this 环境
 * TODO: 补充 thisType 的讲解
 */

// 申请一个对象包含 logError 的输出函数
interface HelperThisValue {
  logError: (error: string) => void;
}
