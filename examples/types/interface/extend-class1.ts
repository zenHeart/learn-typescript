class Control {
  private state: any;
}

// 定义 SelectableControl 在 Control 类上扩充 select 方法,并保留 state 私有属性
interface SelectableControl extends Control {
  select(): void;
}

// 由于需要包含 Control 私有属性 state 子类必须继承 Control 再补充实现接口才可以
class Button extends Control implements SelectableControl {
  select() {}
}

// 报错,SelectableControl 包含 Control 私有属性 state 。
// 无法在子类中覆盖 state,必须继承  Control  再实现接口补充方法才生效
class Image implements SelectableControl {
  private state: any;
  select() {}
}
