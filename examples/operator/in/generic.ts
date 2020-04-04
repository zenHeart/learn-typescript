// 采用泛型映射 K 类型的键名为 T 类型
type MapK<K extends string, T> = {
  readonly [key in K]: T;
};
type PageInfo = {
  title: string;
};
type Pages = 'home' | 'about';

// 迭代 Pages 字面量类型的值作为键名,并要求值为 PageInfo 类型
let pages: MapK<Pages, PageInfo> = {
  home: {
    title: 'home'
  },
  about: {
    title: 'about'
  }
};
