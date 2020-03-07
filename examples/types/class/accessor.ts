const fullNameMaxLength = 10;

class Employee {
  /**
   * 注意这里 ! 由于在严格模式, TypeScript 会要求所有属性必须初始化,若没有则会报错。
   * 采用 ! 告知 TypeScript , _fullName 属性一定会有值避免检查报错
   *
   * */
  private _fullName!: string;

  get fullName(): string {
    return this._fullName;
  }

  // 利用 setter 输入值长度进行检查
  set fullName(newName: string) {
    if (newName && newName.length > fullNameMaxLength) {
      throw new Error(`fullname has a max length of ${fullNameMaxLength}`);
    }
    this._fullName = newName;
  }
}

let employee = new Employee();
// 合法
employee.fullName = 'Tom';
console.log(employee.fullName);

// 运行时报错, 长度超过限制
employee.fullName = 'foo bar foo bar ';
