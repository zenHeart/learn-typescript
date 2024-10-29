import MixinA from './mixin'
import A from './A'

let a: A = new MixinA({
  d: 1,
  e: 1,
  a: 1,
  b: 1,
  c: 'a',
  extraConfig: {}
});
