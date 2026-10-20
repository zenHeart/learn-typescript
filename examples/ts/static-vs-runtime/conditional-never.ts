type FilterString<T> = T extends string ? T : never;

type Result = FilterString<string | number | boolean>;
// string
