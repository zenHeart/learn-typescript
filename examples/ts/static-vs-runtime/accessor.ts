class User {
  private _name = '';

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value.trim();
  }
}

const user = new User();
user.name = '  Ada  ';
console.log(user.name); // Ada
