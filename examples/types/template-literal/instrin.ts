type Greeting = "Hello, world"

// Uppercase 将 Greeting 的字面量全部大写, ShoutyGreeting = "HELLO, WORLD"
type ShoutyGreeting = Uppercase<Greeting>

// Lowercase 将 Greeting 的字面量全部小写, ShoutyGreeting = "hello, world"
type ShoutyGreeting = Lowercase<Greeting>

// Capitalize 将 Greeting 的字面量首字母大写, ShoutyGreeting = "Hello, world"
type ShoutyGreeting = Capitalize<Greeting>

// Uncapitalize 将 Greeting 的字面量首字母小写, ShoutyGreeting = "hello, world"
type ShoutyGreeting = Uncapitalize<Greeting>