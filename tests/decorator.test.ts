
describe('decorator', () => {
  describe('decorator arguments',function() {
    it('class decorator arg 0 is class', function() {
      function A1(target:any) {
        expect(target).toEqual(C1)
        expect([...arguments]).toEqual([C1])
      }
      @A1
      class C1 {}
    })
    it('class method decorator arg  is  prototype key descrioptor', function() {
      class C1 {
        @M1
        a() {

        }
      }
      function M1(target:any,key:any,desc:any) {
        expect(target).toEqual(C1.prototype)
        expect(key).toEqual('a')
        expect(desc).toEqual(Object.getOwnPropertyDescriptor(C1.prototype,'a'))
      }
    })
    it('class property decorator arg  is prototype key value', function() {
      class C1 {
        @P1 a = 'demo';
      }
      function P1(target:any,key:any) {
        expect(target).toEqual(C1.prototype)
        expect(key).toEqual('a')
      }
    })
  })
  describe('class decorator', function () {
    it('在目标类上扩充属性', function () {
      function testable(target: any) {
        target.testable = true;
      }
      @testable
      class A {

      }
      expect(A).toHaveProperty('testable');

    });
    it('包含参数的装饰器,必须返回装饰器函数', function () {
      function testable(isTest: boolean) {
        return (target: any) => {
          target.testable = isTest
        }
      }
      @testable(false)
      class A {

      }
      expect(A).toHaveProperty('testable');
      expect((A as any).testable).toEqual(false)
    });
  });
  describe('class method decorator', function () {
    // TODO: 为什么此装饰器无效
    it.skip('修改属性描述符', function () {
      function enumerable(value: boolean) {
        return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
          // descriptor.enumerable = value;
        };
      }
      class A {
        public bar: number;
        @enumerable(false)
        public foo() {
          console.log('foo')
        }
        constructor() {
          this.bar = 1;
        }
      }
      let a = new A();
    });
    it('decorator 工厂运行从上到下,装饰器执行从下到上', function () {
      const mockFn = jest.fn();
      const testData = {
        declareOrder: [
          'f(): evaluated',
          'f(): called',
          'g(): evaluated',
          'g(): called'],
        runOrder: [
          'f(): evaluated',
          'g(): evaluated',
          'g(): called',
          'f(): called',
        ]
      }

      function f() {
        mockFn(testData.declareOrder[0])
        return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
          mockFn(testData.declareOrder[1])

        }
      }

      function g() {
        mockFn(testData.declareOrder[2])

        return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
          mockFn(testData.declareOrder[3])

        }
      }

      class C {
        @f()
        @g()
        method() { }
      }
      let runRes = mockFn.mock.calls.map((args) => args[0]);
      expect(runRes).toEqual(testData.runOrder)
    })
  });
  describe('decorator use case', function () {
    it('change method descriptor', function () {
      function readonly(target: any, key: string, descriptor: PropertyDescriptor) {
        descriptor.writable = false;
      }
      class C {
        @readonly
        method() { }
      }
      const t = () => {
        let c = new C();
        c.method = () => {};
      }
      expect(t).toThrow(Error);
      expect(t).toThrowError(/not assign to read only/);
    })
  })
});
