interface Salute {
  hi(str: string): void;
}

interface Salute {
  hi(str: string, name: string): void;
}

/**
 * 声明会合并为
 * interface Salute {
 *  hi(str: string, name: string): void; // 后申明的函数在前面
 *  hi(str: string): void;
 * }
 */
