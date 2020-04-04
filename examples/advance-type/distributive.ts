type TypeName<T> = T extends string
  ? 'string'
  : T extends number
  ? 'number'
  : T extends boolean
  ? 'boolean'
  : T extends undefined
  ? 'undefined'
  : T extends Function
  ? 'function'
  : 'object';

// "string" | "function"
type T10 = TypeName<string | (() => void)>;
// "string" | "object" | "undefined"
type T12 = TypeName<string | string[] | undefined>;
// "object"
type T11 = TypeName<string[] | number[]>;
