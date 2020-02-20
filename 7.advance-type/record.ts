/**
 * 采用 Record<K,T> 定义键名为特定值,键值为 T 的类型
 */

interface PageInfo {
  title: string;
}

type Page = 'home' | 'about' | 'contact';

const x: Record<Page, PageInfo> = {
  home: {
    title: 'home'
  },
  about: {
    title: 'about'
  },
  contact: {
    title: 'contact'
  }
};
console.log(x);
