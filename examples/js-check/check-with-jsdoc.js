// @ts-check
/**
 * @type {string}
 */
var s;
s = 12; // 基于 type 声明判断此处类型只能为 string

/** @type {HTMLElement}  申明为 html 元素*/
var myElement = document.querySelector('div');

/** @type  {string | number} 综合TypeScript 语法声明为联合类型。 */
var foo = 12;
foo = 'demo';
