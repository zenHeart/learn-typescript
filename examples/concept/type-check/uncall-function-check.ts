// 检查未调用函数, 示例参考 https://www.typescriptlang.org/docs/handbook/release-notes/overview.html#uncalled-function-checks
class User {
  isAdministrator(): boolean {
    return true;
  }
  notify(): void {}
}

// TODO: 未报错
function doAdminThing(user: User) {
  if (user.isAdministrator) {
    console.log('test');
  } else {
    throw new Error('User is not an admin');
  }
}

doAdminThing(new User());
