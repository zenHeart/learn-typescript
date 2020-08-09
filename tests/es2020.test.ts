describe('es2020', () => {
  describe.skip('Optional Chaining', () => {
    test('有值则替换为实际值', () => {
      let a = { f: 1 };
      expect(a?.f).toBe(1);
    });
    test('可选链为 null 则返回 undefined', () => {
      let a:any = null;
      expect(a?.f).toBe(undefined);
    });
    test('可选链最后一个值为 null,原样返回', () => {
      let a = { f: null };
      expect(a?.f).toBe(null);
    });
    test('支持数组模式访问', () => {
      let a = [{ f: 1 }];
      expect(a?.[0]?.f).toBe(1);
    });
    test('支持对函数调用检查,当值非空则触发调用', () => {
      let log = (cb?: (str: string) => string): string | undefined => {
        return cb?.(`time: ${new Date()}`);
      };
      let mockCallback = jest.fn(str => str);

      // 传入为空不触发调用
      expect(log()).toBe(undefined);

      // 传入有值触发调用
      expect(log(mockCallback)).toMatch(/time:/);
      expect(mockCallback.mock.calls.length).toBe(1);
    });
  });
  describe('Nullish Coalescing', () => {
    test('为 null 或 undefined 则触发后续执行', () => {
      expect(undefined ?? 1).toBe(1);
      expect(null ?? 1).toBe(1);
    });
    test("为 false,0,NaN,'' 不会触发后续运行,避免了 || 运算符错误", () => {
      expect(false ?? 1).toBe(false);
      expect(0 ?? 1).toBe(0);
      expect('' ?? 1).toBe('');
      expect(NaN ?? 1).toBe(NaN);
    });
    test('为 null 返回 undefined', () => {
      let a = { f: null };
      expect(a?.f).toBe(null);
    });
  });
});
