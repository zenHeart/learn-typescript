require('./global');

class Greet {
  constructor(greeting) {
    this.greeting = greeting;
  }
  greet() {
    console.log(this.greeting);
  }
}
module.exports = Greet;
