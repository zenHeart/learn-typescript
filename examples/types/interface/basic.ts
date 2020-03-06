interface LabeledValue {
  label: string;
  size?: number;
}

// 采用接口定义对象类型
let label: LabeledValue;
// 合法
label = { size: 10, label: 'Size 10 Object' };
// 合法
label = { label: 'foo' };

// 报错,缺少 label 属性
label = { size: 10 };

interface a string;