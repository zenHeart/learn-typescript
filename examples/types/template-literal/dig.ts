type Digit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
// TODO: 模板字面量类型，超出了联合类型 10 万的限制，会报错
type Zip = `${Digit}${Digit}${Digit}${Digit}${Digit}`;
