describe('stage3', () => {
  describe('Numeric separators', () => {
    test('采用 _ 分隔数字使更语义化', () => {
      let a = 1_000_000;
      expect(a).toBe(1e6);
    });
  });
});
