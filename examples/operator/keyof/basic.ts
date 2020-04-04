interface Thing {
  name: string;
  width: number;
  height: number;
  inStock: boolean;
}

// 遍历对象类型 Thing 返回键名组成的联合类型
type KeyOfThing = keyof Thing;

let keyOfThing: KeyOfThing = 'name';
keyOfThing = 'width';
keyOfThing = 'height';
keyOfThing = 'inStock';

// 报错,值不属于 Thing 的键名
keyOfThing = 'a11';
