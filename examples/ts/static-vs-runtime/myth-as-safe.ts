type Admin = { role: 'admin' };

const guest = { role: 'guest' };
const admin = guest as unknown as Admin;

console.log(admin.role); // guest：as 没有改变运行时
