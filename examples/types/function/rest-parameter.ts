// 定义剩余为字符串数组
function buildName(firstName: string, ...restOfName: string[]) {
  return firstName + ' ' + restOfName.join(' ');
}

let employeeName: string;

// 只要剩余参数为字符串类型,不限制掺入的参数数量
employeeName = buildName('Joseph');
employeeName = buildName('Joseph', 'Samuel');
employeeName = buildName('Joseph', 'Samuel', 'Lucas', 'MacKinzie');
