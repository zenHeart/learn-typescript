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
      { text: 'cheatsheet', link: '/cheatsheet/' },
      { text: '新特性', link: '/new-feature' }
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
            'tutorial/3.7.decorator',
            'tutorial/4.1.union-types',
            'tutorial/4.2.intersection-types',
            'tutorial/5.generics',
            'tutorial/6.module',
            'tutorial/7.namespace',
            'tutorial/8.1.declare',
            'tutorial/8.2.declare-ambients',
            'tutorial/8.3.declare-DefinitelyTyped',
            'tutorial/9.config'
          ]
        },
        {
          title: '深入类型',
          collapsable: false,
          children: [
            'dig-type/',
            'dig-type/1.index-type',
            'dig-type/advance-types',
            'dig-type/interface',
            'dig-type/type-assertion',
            'dig-type/type-guards',
            'dig-type/type-inference',
            'dig-type/type-scope',
            'dig-type/types-operation',
          ]
        },
        {
          title: '使用案例',
          collapsable: false,
          children: [
            'use-case/ffp',
            'use-case/javascript',
            'use-case/jsx',
            'use-case/performance',
            'use-case/validation',
            'use-case/test',
          ]
        }
      ]
    }
  }
};
