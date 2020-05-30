describe('es7', () => {
  describe('exponentiation operator', () => {
    it('** 求幂运算', function () {
      expect(2 ** 3).toBe(8);
    });
    it('**=  求幂运算', function () {
      let a = 10;
      a **= 2;
      expect(a).toBe(100);
    });
  });
});
