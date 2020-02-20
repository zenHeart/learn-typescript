/**
 * 采用 Required<T> 设定类型 T 的所有属性为必选
 */

interface Props {
  a?: string;
  b?: number;
}

type P = Required<Props>;

// 变量 prop1 必须包含属性 a,b 否则会报错
let prop1: P = {
  a: '1',
  b: 2
};
