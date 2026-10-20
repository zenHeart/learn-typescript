import { z } from 'zod';

const User = z.object({ name: z.string() });
const parsed = User.parse(JSON.parse('{"name":"Ada"}'));

console.log(parsed.name); // Ada
