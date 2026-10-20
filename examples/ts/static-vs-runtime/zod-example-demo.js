// 运行时校验由 zod 完成；无效输入会抛错
// const User = z.object({ name: z.string() });
// User.parse(JSON.parse('{"name":42}')); // ZodError
console.log('zod 在运行时校验结构');
