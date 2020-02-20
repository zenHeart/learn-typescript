/**
 * 字符串字面量类型
 * 利用 type 定义取值只能为特定几个,效果类似枚举
 */
type warn = 'red' | 'yellow';

// 取值只能为设定值
let warnColor: warn = 'red';
