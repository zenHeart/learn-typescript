enum READONLY_ENUM {
  A = 'a',
  B = 'b'
}

class C1_USE_ENUM {
  static get READONLY_ENUM() {
    return  READONLY_ENUM
  }
}

var types = C1_USE_ENUM.READONLY_ENUM;

// ts throw error can't change enum value
types.A = 'g';
