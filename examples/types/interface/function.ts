// interface 定义一个搜索函数类型
interface SearchFunc {
  (source: string, subString: string): boolean;
}

// 定义变量类型只接受搜索函数
let searchStr: SearchFunc;

searchStr = function(source: string, subString: string) {
  let result = source.search(subString);
  return result > -1;
};

console.log(searchStr('abcd', 'a'));
