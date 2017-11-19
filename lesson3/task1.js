// task1

var a = prompt("Enter a value");
if (a==0) {
    console.log('Correct');
}
else {
    console.log('Incorrect');
}

// ?? Проверьте работу скрипта при a, равном 1, 0, -3.

//task2
var a = prompt("Enter a value");
if (a == "test") {
    console.log("Correct");
}
else {
    console.log("Incorrect");
}
// ??'. Проверьте работу скрипта при a, равном 'test', 'тест', 3.

//task3
var test = prompt("Enter a value");
if (test == "true") {
    console.log("Correct");
}
else {
    console.log("Incorrect");
}
// Проверьте работу скрипта при test, равном true, false. Напишите два варианта скрипта - с короткой записью и с длинной.

//or
var test = prompt("Enter a value");
test == "true" ? console.log("Correct") : console.log("Incorrect");

//task4
var a = 2;
var b = 5;
var result = a + b;
if (result > 5) {
    result = 5;
}
else {
    result = result*10
}
console.log(result);
// ?? Проверьте работу скрипта при a и b, равных 2 и 5, 3 и 1.

//task5
var a = 2;
if (a == 0 || a == 2) {
    a = a/10;
}
else {
    a = a + 7;
}
console.log(a);
// ?? Проверьте работу скрипта при a, равном 5, 0, -3, 2.


//task6
var a = 3;
var b = 5;
var result = a + b;
if (a >= 1 && b >= 3) {
    console.log(result);
}
else {
    console.log("Incorrect");
}
// ?? Проверьте работу скрипта при a и b, равном 1 и 3, 0 и 6, 3 и 5.

//task7
var a = 2;
var b = 6;
if ((a > 2 && a < 11) || (b >= 6 && b < 14)) {
    a = a + 2;
}
else {
    a = a + 5;
}
console.log(a);


//task8
var num = +prompt("Enter a season value");
switch (num) {
    case 1:
        result = "winter";
        break;
    case 2:
        result = "spring";
        break;
    case 3:
        result = "summer";
        break;
    case 4:
        result = "autumn";
        break;
    default:
        result = "Incorrect value";
        break;
}
console.log(result);

//task9
var lang = prompt ("Choose the language: en, ru or de");
var arr;
if (lang === "ru"){
    arr = ["Понедельник","Вторник","Среда","Четверг","Пятница","Суббота","Воскресенье"];
    console.log(arr);
}
else if (lang === "en"){
   arr = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    console.log(arr);
}
else if (lang === "de"){
    arr = ["Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Sonnabend","Sonntag"];
    console.log(arr);
}
//or
var lang = prompt ("Choose the language: en, ru or de");
switch (lang) {
    case "ru":
        arr = ["Понедельник","Вторник","Среда","Четверг","Пятница","Суббота","Воскресенье"];
        break;
    case "en":
        arr = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
        break;
    case "de":
        arr = ["Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Sonnabend","Sonntag"];
        break;
    default:
        arr = "Incorrect Value";
        break;
}
console.log(arr);
//or
var lang = prompt ("Choose the language: en, ru or de");
var mass = [
    ["Понедельник","Вторник","Среда","Четверг","Пятница","Суббота","Воскресенье"],
    ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    ["Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Sonnabend","Sonntag"]
];
if (lang ==="ru") {
    arr = mass[0];
    console.log(arr);
}
else if (lang === "en") {
    arr = mass[1];
    console.log(arr);
}
else if (lang ==="de") {
    arr = mass[2];
    console.log(arr);
}
else {
    console.log("Incorrect language");
}








