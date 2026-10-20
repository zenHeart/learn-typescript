type User = { name: string };

function isUser(value: unknown): value is User {
  return typeof value === 'object' && value !== null
    && typeof (value as User).name === 'string';
}

const data: unknown = JSON.parse('{"name":"Ada"}');
if (isUser(data)) console.log(data.name);
