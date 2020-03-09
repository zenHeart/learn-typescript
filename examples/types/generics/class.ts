class Box<T> {
  kind!: 'box';
  value: T[];
  constructor(value: T[]) {
    this.value = value;
  }
}

let b1 = new Box([1, 2]);
let b2 = new Box(['foo', 'bar']);
let b3 = new Box([{ a: 1 }, { b: 1 }]);

// 非法
let b4 = new Box([1, 'foo']);
