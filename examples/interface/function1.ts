interface Greetable {
  greet(message: string): void;
}

function helloEnglish(g: Greetable) {
  g.greet('Hello there!'); // OK
  g.greet(42); // Not OK -- 42 is not a string
  g.greep('Hi'); // Not OK -- 'greep' is not a member of 'Greetable'
}
