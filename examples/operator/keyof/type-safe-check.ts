function getProperty<T, K extends keyof T>(obj: T, key: K) {
   return obj[key]; // Inferred type is T[K]
 }
 
 function setProperty<T, K extends keyof T>(obj: T, key: K, value: T[K]) {
   obj[key] = value;
 }
 
 let x = { foo: 10, bar: "hello!" };
 
 let foo = getProperty(x, "foo"); // number
 let bar = getProperty(x, "bar"); // string
 
 let oops = getProperty(x, "wargarbl"); // Error! "wargarbl" is not "foo" | "bar"
 
 setProperty(x, "foo", "string"); // Error!, string expected number