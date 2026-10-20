class Shape {
  describe() { return `面积: ${this.area()}`; }
}

class Circle extends Shape {
  constructor(radius) { super(); this.radius = radius; }
  area() { return Math.PI * this.radius ** 2; }
}

console.log(new Circle(2).describe());
console.log(new Shape().describe()); // TypeError
