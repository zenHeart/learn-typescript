interface Document {
  createElement(tagName: any): Element;
}
interface Document {
  // 由于包含单个字符串字面量该申明会在合并后,提前 2
  createElement(tagName: 'div'): HTMLDivElement;
  // 由于包含单个字符串字面量该申明会在合并后,提前 3
  createElement(tagName: 'span'): HTMLSpanElement;
}
interface Document {
  createElement(tagName: string): HTMLElement;
  // 由于包含单个字符串字面量该申明会在合并后,提前 1
  createElement(tagName: 'canvas'): HTMLCanvasElement;
}

/**
 * 合并后结果,其余保持默认顺序
 * interface Document {
    createElement(tagName: "canvas"): HTMLCanvasElement; // 提前 1
    createElement(tagName: "div"): HTMLDivElement; // 提前 2
    createElement(tagName: "span"): HTMLSpanElement; // 提前 3
    createElement(tagName: string): HTMLElement;
    createElement(tagName: any): Element;
  } 
 */
