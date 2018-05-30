// typescript syntax
// data types
var myName;
var phone;
var isTrue = false;
// false, undefined, null, 0, '', NaN
var allNames = [];
allNames.push('abc');
var anyVariable = 1234;
anyVariable = 'hello';
anyVariable = 1234;
var anyArray = ['sdfghj', 7654, true];
// Tuples
var myTuple = [87654, '1234'];
myTuple.push(123, 123);
// enum
var beverages;
(function (beverages) {
    beverages[beverages["milk"] = 11] = "milk";
    beverages[beverages["tea"] = 11] = "tea";
    beverages[beverages["coffee"] = 12] = "coffee";
})(beverages || (beverages = {}));
;
var index = beverages.milk;
var bevName = beverages[11];
// console.log(index, bevName)
function testFunction(param1, param2) {
    return 'hello';
}
testFunction(123, true);
function gen(param) {
    return param;
}
gen(12345);
gen('hello');
//# sourceMappingURL=data_types.js.map