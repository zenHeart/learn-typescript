interface A {
  foo: string;
}
interface B {
  x: string;
  y: string;
}

let a11: A & B = {
  foo: 'demo',
  x: 'd',
  y: 's'
};
console.log(a11);

type wa = 'a';
type wb = 'b';
type wc = wa & wb;
