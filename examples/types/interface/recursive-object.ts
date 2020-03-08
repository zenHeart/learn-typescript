// 创建一个包含嵌套属性的对象
interface Property {
  name: string;
  type: string;
  properties?: Property;
}

let prop: Property = {
  name: 'a',
  type: 'a',
  properties: {
    name: 'b',
    type: 'c',
    properties: {
      name: 'b',
      type: 'c'
    }
  }
};
