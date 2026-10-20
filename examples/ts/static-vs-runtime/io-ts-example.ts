import * as t from 'io-ts';

const User = t.type({ name: t.string });
const result = User.decode(JSON.parse('{"name":"Ada"}'));

if (result._tag === 'Right') console.log(result.right.name);
