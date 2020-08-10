
describe('decorator', () => {
  describe('decorator running time', function() {
    it('class decorator run context',function() {
      function mockFn(a: any) {
        // @ts-ignore
        expect(this).toBe(undefined)
      }
      @mockFn
      class A {
      }
    })

    it('class run declare on initial',function() {
        const mockFn = jest.fn();
        expect(mockFn.mock.calls.length).toBe(0);
        @mockFn
        class A {

        }
        // 类装饰器在类初始化时执行
        expect(mockFn.mock.calls.length).toBe(1);
        expect(mockFn.mock.calls).toEqual([[A]]);
    })
    it('class method run declare on initial',function() {
        const mockFn = jest.fn();
        expect(mockFn.mock.calls.length).toBe(0);
        
        class A {
          @mockFn
          a() {}
        }
        // 类方法装饰器在类初始化时执行
        expect(mockFn.mock.calls.length).toBe(1);
        expect(mockFn.mock.calls).toEqual([[A.prototype,'a',Object.getOwnPropertyDescriptor(A.prototype,'a')]]);
    })
    it('class property run declare on initial',function() {
        const mockFn = jest.fn();
        expect(mockFn.mock.calls.length).toBe(0);
        
        class A {
          @mockFn
          a:String
          constructor(a: string) {
            this.a  = a;
          }
        }
        // 类装饰器在类初始化时执行
        expect(mockFn.mock.calls.length).toBe(1);
        expect(mockFn.mock.calls).toEqual([[A.prototype,'a',Object.getOwnPropertyDescriptor(A.prototype,'a')]]);
        let a = new A('tom');
        // 实例化不触发装饰器
        expect(mockFn.mock.calls.length).toBe(1);
    })
    it('class accessor property decorator',function() {
      let mockFn = jest.fn();
      expect(mockFn.mock.calls.length).toBe(0)
      class A {
        @mockFn
        get a() {
          return 1
        }
      }
      expect(mockFn.mock.calls.length).toBe(1)
      expect(mockFn.mock.calls).toEqual([[A.prototype,'a',Object.getOwnPropertyDescriptor(A.prototype,'a')]])
    })
    it('class static method run declare on initial',function() {
        const mockFn = jest.fn();
        expect(mockFn.mock.calls.length).toBe(0);
        
        class A {
          @mockFn
          static a() {}
        }
        // 类装饰器在类初始化时执行
        expect(mockFn.mock.calls.length).toBe(1);
        // 静态方法构造器相关属性
        expect(mockFn.mock.calls).toEqual([[A,'a',Object.getOwnPropertyDescriptor(A,'a')]]);
    })
    it('class static method run declare on initial',function() {
        const mockFn = jest.fn();
        expect(mockFn.mock.calls.length).toBe(0);
        
        class A {
          @mockFn
          static a = 'tom'
        }
        // 类装饰器在类初始化时执行
        expect(mockFn.mock.calls.length).toBe(1);
        // 静态方法构造器相关属性
        expect(mockFn.mock.calls).toEqual([[A,'a', undefined ]]);
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
    it('decorator factory', function () {
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
  describe('property decorator',function() {
    it('upper property',function() {
     function UpperCase(target: any, key:any)  {
      let value : string;
      const getter = function() {
        return value;
      };
      const setter = function(newVal: string) {
        value  = newVal.toUpperCase();
      }; 
      Object.defineProperty(target, key, {
        get: getter,
        set: setter
      }); 
     }
     class A {
       @UpperCase
       name:String
      constructor(name: string) {
        this.name = name;
      }
     }
     let a = new A('jack')
     expect(a.name).toEqual('JACK')
    })
  })
  describe('decorator use case', function () {
    it('extend class static method',function () {
      let mockFn  = jest.fn();
      function log(target : any) {
          target.log = mockFn
      }
      @log
      class A1 {};
      //@ts-ignore
      expect(A1.log).toEqual(mockFn)
    })
    it('mark class  method',function () {
      let mockFn  = jest.fn();
      let a:any;
      function Deprecated(target:any,method:any,desp: any) {
        let val = desp.value;
        
        // @ts-ignore
        let newVal = function(...args) {
          // @ts-ignore
          mockFn('deprecated',this)
          console.log('deprecated')
          // @ts-ignore
          val.call(this,...args)
        }
        desp.value= newVal
        Object.defineProperty(target,method,desp)
      }
      class A1 {
        @Deprecated
        a() {
          // @ts-ignore
          expect(this).toEqual(a)
        }
      };
      a = new A1();
      expect(mockFn.mock.calls.length).toBe(0)
      a.a();
      expect(mockFn.mock.calls.length).toBe(1)
      expect(mockFn.mock.calls).toEqual([['deprecated',a]])
    })
    it('change class method readonly', function () {
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
