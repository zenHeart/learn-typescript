  // string[] -> string
  // Class1[] => Class1
type Flatten<T> = T extends any[] ? T[number] : T;

type Str = Flatten<string[]>;
//   ^ = type Str = string


interface Class1 {
  a: string
}
// Leaves the type alone.
type BasicClass = Flatten<Class1[]>;