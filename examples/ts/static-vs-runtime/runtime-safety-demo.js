function isUser(value) {
  return typeof value === 'object' && value !== null && typeof value.name === 'string';
}

const data = JSON.parse('{"name":"Ada"}');
if (isUser(data)) console.log(data.name);
