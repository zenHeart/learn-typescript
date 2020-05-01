var Validation;
(function (Validation) {
    var lettersRegexp = /^[A-Za-z]+$/;
    var LettersOnlyValidator1 = /** @class */ (function () {
        function LettersOnlyValidator1() {
        }
        LettersOnlyValidator1.prototype.isAcceptable = function (s) {
            return lettersRegexp.test(s);
        };
        return LettersOnlyValidator1;
    }());
    Validation.LettersOnlyValidator1 = LettersOnlyValidator1;
})(Validation || (Validation = {}));
var Validation;
(function (Validation) {
    var numberRegexp = /^[0-9]+$/;
    var ZipCodeValidator1 = /** @class */ (function () {
        function ZipCodeValidator1() {
        }
        ZipCodeValidator1.prototype.isAcceptable = function (s) {
            return s.length === 5 && numberRegexp.test(s);
        };
        return ZipCodeValidator1;
    }());
    Validation.ZipCodeValidator1 = ZipCodeValidator1;
})(Validation || (Validation = {}));
/// <reference path="Validation.ts" />
/// <reference path="LettersOnlyValidator.ts" />
/// <reference path="ZipCodeValidator.ts" />
var strings1 = ['Hello', '98052', '101'];
var validators1 = {};
validators1['ZIP code'] = new Validation.ZipCodeValidator1();
validators1['Letters only'] = new Validation.LettersOnlyValidator1();
for (var _i = 0, strings1_1 = strings1; _i < strings1_1.length; _i++) {
    var s = strings1_1[_i];
    for (var name_1 in validators1) {
        console.log("\"" + s + "\" - " + (validators1[name_1].isAcceptable(s) ? 'matches' : 'does not match') + " " + name_1);
    }
}
