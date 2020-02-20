function greeter(person: string) {
  return 'Hello,' + person;
}

let user = 'tom';

document.body.textContent = greeter(user);
