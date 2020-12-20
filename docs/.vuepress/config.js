const path = require('path');
const fs = require('fs');

module.exports = {
  markdown: {
    config: md => {
      md.use(require('markdown-it-task-lists'));
    }
  },
  title: 'TypeScript 学习指南',
  base:'/learn-typescript/',
  themeConfig: {
    sidebarDepth: 2,
    nav: [
      { text: '教程', link: '/' },
      { text: 'cheatsheet', link: '/cheatsheet' }
    ],
    sidebar: {
      '/': [
        '',
        {
          title: '类型系统',
          collapsable: false,
          children: [
            'tutorial/1.basic-concept',
            'tutorial/2.1.primitive-types',
            'tutorial/2.2.special-primitive-types',
            'tutorial/2.3.literal-types',
            'tutorial/2.4.enum',
            'tutorial/3.1.object-types',
            'tutorial/3.2.builtin-literal-object',
            'tutorial/3.3.array',
            'tutorial/3.4.function',
            'tutorial/3.5.class',
            'tutorial/3.6.class-inheritance',
            'tutorial/4.1.union-types',
            'tutorial/4.2.intersection-types',
            'tutorial/5.generics',
            'tutorial/6.module',
            'tutorial/7.namespace',
            'tutorial/8.declare',
            'tutorial/9.config'
          ]
        },
        {
          title: '草稿',
          collapsable: false,
          children: [
            '_draft/advance-types',
            '_draft/decorator',
            '_draft/ffp',
            '_draft/index-type',
            '_draft/interface',
            '_draft/javascript-check',
            '_draft/jsx',
            '_draft/new-feature',
            '_draft/operator',
            '_draft/tsconfig',
            '_draft/type-assertion',
            '_draft/type-guards',
            '_draft/type-inference',
            '_draft/type-scope',
            '_draft/types-operation',
            '_draft/typescript-test',
            '_draft/understanding-type-system',
          ]
        }
      ]
    }
  }
};
