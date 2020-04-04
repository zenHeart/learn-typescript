namespace Animals {
  export class Zebra {}
}

namespace Animals {
  export interface Legged {
    numberOfLegs: number;
  }
  export class Dog {}
}

/**
 * 等同于
  namespace Animals {
  export interface Legged { numberOfLegs: number; }

  export class Zebra { }
  export class Dog { }
}
 */
