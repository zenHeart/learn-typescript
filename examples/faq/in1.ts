type ExtendObj<T, Q> = {
  [key in keyof T]: T[key];
  [key1 in keyof Q]: Q[key1];
};

let foo = {
  foo:1
}
let bar = {
  bar:1
}

let foobar:ExtendObj<typeof foo,typeof bar> = {
  foo:1,
  bar:1
}