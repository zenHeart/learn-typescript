function buildLabel(name: string): string {
  return buildLabel.prefix + name + buildLabel.suffix;
}

// 采用空间在函数上追加属性
namespace buildLabel {
  export let suffix = '';
  export let prefix = 'Hello, ';
}

console.log(buildLabel('Sam Smith'));
