function isUser(value) {
  return value !== null && typeof value === 'object' && typeof value.name === 'string';
}

const raw = JSON.parse('{"name": 42}');
console.log(isUser(raw)); // false
