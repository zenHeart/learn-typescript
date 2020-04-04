// 简化版表示 vue 的 Vnode 节点
type Vnode =
  | string
  | [string, string]
  | [
      string,
      {
        [key: string]: any;
      }
    ]
  | [
      string,
      {
        [key: string]: any;
      },
      Vnode | Vnode[]
    ];

let node: Vnode = 'div';
node = ['div', { id: '#app' }];
node = ['div', { id: '#app' }, 'text'];
node = ['div', { id: '#app' }];
node = ['div', { id: '#app' }, [['p', 'text'], 'br', ['img', { src: 'test' }]]];
