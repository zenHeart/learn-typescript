/**
 * 采用 ThisType<T> 提取构造器类型 T 对应的类型
 */

type ObjectDescriptor<D, M> = {
  data?: D;
  methods?: M & ThisType<D & M>;
};
