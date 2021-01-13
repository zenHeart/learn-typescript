/// <reference path="StringValidator.ts" />
/// <reference path="LettersOnlyValidator.ts" />
/// <reference path="ZipCodeValidator.ts" />

let strings1 = ['Hello', '98052', '101'];

let validators1: { [s: string]: Validation.StringValidator } = {};
validators1['ZIP code'] = new Validation.ZipCodeValidator1();
validators1['Letters only'] = new Validation.LettersOnlyValidator1();

for (let s of strings1) {
  for (let name in validators1) {
    console.log(
      `"${s}" - ${
        validators1[name].isAcceptable(s) ? 'matches' : 'does not match'
      } ${name}`
    );
  }
}
