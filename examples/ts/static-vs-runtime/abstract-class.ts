abstract class Shape {
  abstract area(): number;

  describe(): string {
    return `面积: ${this.area()}`;
  }
}

class Circle extends Shape {
  constructor(private radius: number) { super(); }
  area(): number { return Math.PI * this.radius ** 2; }
}

console.log(new Circle(2).describe());
