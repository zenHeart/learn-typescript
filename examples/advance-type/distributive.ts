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
type TD0 = TypeName<string | (() => void)>;
// "string" | "object" | "undefined"
type TD1 = TypeName<string | string[] | undefined>;
// "object"
type TD2 = TypeName<string[] | number[]>;
