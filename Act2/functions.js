"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.introduction = exports.printFormat = exports.uniontype = exports.addString = void 0;
var addNumbers = function (a, b) {
    return a + b;
};
console.log(addNumbers(67, 10));
//add default value
var addString = function (str1, str2) {
    if (str2 === void 0) { str2 = 'Dele'; }
    return "".concat(str1, " ").concat(str2);
};
exports.addString = addString;
console.log((0, exports.addString)('Afolabi', 'Sodiq'));
console.log((0, exports.addString)('Afolabi'));
//union type
var uniontype = function (title, param) {
    return "".concat(title, " ").concat(param);
};
exports.uniontype = uniontype;
console.log((0, exports.uniontype)('hello', 56));
console.log((0, exports.uniontype)('hello', 'world'));
// void function
var printFormat = function (title, param) {
    console.log((0, exports.uniontype)(title, param));
};
exports.printFormat = printFormat;
console.log((0, exports.printFormat)('56', 90));
//promise function
var fetcData = function (url) { return Promise.resolve("Data is ".concat(url)); };
//defining multiple argument
var introduction = function (salutation) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    return "".concat(salutation, " ").concat(names.join(', '));
};
exports.introduction = introduction;
console.log((0, exports.introduction)('hello', 'Ade', 'Sope', 'idowu'));
console.log((0, exports.introduction)('I love', 'Music', 'Art', 'Movie'));
exports.default = addNumbers;
