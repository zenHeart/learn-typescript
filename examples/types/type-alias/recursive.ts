type Json =
  | string
  | number
  | boolean
  | null
  | {
      [property: string]: Json;
    }
  | Json[];

let json1: Json = {
  a: 'foo',
  f: 1
};
// 支持嵌套结构
json1.t = json1;
