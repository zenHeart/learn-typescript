describe('es6', () => {
  describe('generators', () => {
    test('yield', () => {
      function* f() {
        yield 1;
      }
      expect(f().next()).toEqual({ done: false, value: 1 });
    });
  });
  //   TODO: 异步迭代器语法
  describe.skip('Async Generators', () => {
    test('yield', () => {
      async function* f() {
        yield 1;
        yield await Promise.resolve(2);
      }
      let g = f();
      expect(g.next()).toEqual({ done: false, value: 1 });
      return g.next().then(val => {
        expect(val).toEqual({ done: false, value: 2 });
      });
    });
  });
  describe('new.target', function () {
    it('验证 new.target', function () {
      function f(this: any) {
        if (new.target) {
          this.a = 1;
        } else {
          return 2;
        }
      }
      expect(new (f as any)()).toEqual({ a: 1 });
      expect(f()).toEqual(2);
    });
  });
});
