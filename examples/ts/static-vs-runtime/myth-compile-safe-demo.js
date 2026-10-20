function printName(user) {
  console.log(user.name);
}

printName(JSON.parse('{"name": null}')); // null
