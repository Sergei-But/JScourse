//1
var r = '9' + 0; // "90" string

var r = 9 + '0'; // "90" string

var r = 4 + 9; // 13 number

var r = null + 7; // 7 number

var r = '6' + null; // "6null" string

var r = '6' + []; // "6" string
var r = '6' + undefined; // undefined

//2
2/3 + 1 + 1/3 == 2 //false так как при сравнении результат не равняется 2.

//3
var r;
var t = ++2;
var u = 1++;
var w = 2--;

r = 6 && 0 && 7; //0

r = -9 && -8; // -8

r = 6 && 0 && 7; // 0

r = "string" && 0; // 0

r = [] && {} && 7; // 7

r = [] || 7; // []

r = {} || 0; // {}

r = false || true; // true

r = "2" > "3"; // false

r = "ab" <= "fg"; // true

r = "2k" <= "8l";//true

r = "2" != 2; // false

r = "2" !== 2; // true

r = t + 2; // 5

r = t + 2--; // 5

r = u - w; // 0