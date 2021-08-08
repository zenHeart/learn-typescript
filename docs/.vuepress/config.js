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
            'tutorial/2.4.template-literal-type',
            'tutorial/2.5.enum',
            'tutorial/3.1.object-types',
            'tutorial/3.2.builtin-literal-object',
            'tutorial/3.3.array',
            'tutorial/3.4.function',
            'tutorial/3.5.class',
            'tutorial/3.6.class-inheritance',
            'tutorial/3.7.decorator',
            'tutorial/3.8.interface',
            'tutorial/3.9.this',
            'tutorial/4.1.union-types',
            'tutorial/4.2.intersection-types',
            'tutorial/5.generics',
            'tutorial/6.1.module',
            'tutorial/6.2.module-resolution',
            'tutorial/7.namespace',
            'tutorial/8.1.declare',
            'tutorial/8.2.declare-ambients',
            'tutorial/8.3.declare-DefinitelyTyped',
            'tutorial/9.config'
          ]
        },
        {
          title: '类型编程',
          collapsable: false,
          children: [
            'type-program/',
            'type-program/1.1.index-type',
            'type-program/1.2.mapped-type',
            'type-program/2.conditional-type',
            'type-program/3.utils-type',  
          ]
        },
        {
          title: '理解类型系统',
          collapsable: false,
          children: [
            '_draft/type-system/type-assertion',
            '_draft/type-system/type-guards',
            '_draft/type-system/type-inference',
            '_draft/type-system/type-scope',
            '_draft/type-system/type-program',
          ]
        },
        {
          title: '工程化',
          collapsable: false,
          children: [
            '_draft/engineering/ffp',
            '_draft/engineering/javascript',
            '_draft/engineering/jsx',
            '_draft/engineering/vue',
            '_draft/engineering/performance',
            '_draft/engineering/validation',
            '_draft/engineering/test',
          ]
        }
      ]
    }
  }
};
