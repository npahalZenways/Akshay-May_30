// typescript syntax

// data types
var myName : string;
var phone: number;
var isTrue : boolean = false;
// false, undefined, null, 0, '', NaN
var allNames : string[] = [];

allNames.push('abc');

var anyVariable : any = 1234;

anyVariable = 'hello';
anyVariable = 1234;

var anyArray : any[] = ['sdfghj', 7654, true];

// Tuples
var myTuple : [number, string] = [87654, '1234'];

myTuple.push(123, 123);

// enum
enum beverages { milk = 11, tea = 11, coffee };

var index = beverages.milk;
var bevName = beverages[11];

// console.log(index, bevName)

function testFunction(param1: number, param2: boolean) : string{
    return 'hello';
}

testFunction(123, true);

function gen <T> (param : T) : T{
    return param;
}

gen<number>(12345);

gen<string>('hello');