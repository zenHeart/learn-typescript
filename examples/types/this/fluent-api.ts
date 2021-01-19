class BasicCalculator {
   public constructor(protected value: number = 0) {}
   public currentValue(): number {
     return this.value;
   }
   
   // 注意这里申明返回值为 this 而非 BasicCalculator， 这样可以使返回对象兼容子类的扩展提示
   public add(operand: number): this {
     this.value += operand;
     return this;
   }
   public multiply(operand: number): this {
     this.value *= operand;
     return this;
   }
 }
 
 let v1 = new BasicCalculator(2).multiply(5).add(1).currentValue();

 class ScientificCalculator extends BasicCalculator {
   public constructor(value = 0) {
     super(value);
   }
   public sin() {
     this.value = Math.sin(this.value);
     return this;
   }
 }
 

v1 = new ScientificCalculator(2).multiply(5).sin().add(1).currentValue();