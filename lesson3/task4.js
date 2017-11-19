
//task1
function getName (x, y) {
    // нету смысла тут обозначать x && y как аргументы фукцнии просто обьяви их внутри как локальные переменные через var 
    // все равно ты же когда функцию вызываешь ты же ничего туда не передаешь
x = prompt("Enter your name");
y = "Hello, " + x;
console.log(y);
}
getName();

//task2
function double(x) {
    x*= 2;
    console.log(x);
}
double(6);

//task3
function range(x, y){
    i = 0;
    // что в первом что во втором if делается тоже самое почему бы не проверить вначалае что больше x или y а потом уже 
    // просто один раз сделать цикл
    if(x < y){
        for (x; x<=y; x++){
            i = i + x;
        }
        return i;
    } else if (x > y){
        for (x; x>=y; x++){
            i = i + y;
        }
        return i;
    }
}
range (1, 3);

//task4

function getPrimesSumBelow(num) {
    var sum = 0;
    for (var i = num; i > 1; i--) {
        if (isPrime(i)) {
            sum += i;
        }
    }
    return sum;
}

getPrimesSumBelow(10);

function isPrime (x) {
    if ( x !== 1 && x <= 3) {
        // почему тут возврат 1 а не x, в случае если 2 передаем ты возвращаешь 1 это не логично
        return 1;
    } else {
        for (var i = 2; i < x; i++) {
            if (x % i === 0) {
                return 0;
            }
        }
        return 1;
    }
}

//task5
// тут все ок но только название не совсем понятно что эта функция вообще делает 
// или если уже брать по названиюто делает она не совсем то что по названию написано(
function typeOfNum(n) {
    if (n % 2 !== 0) {
        return true;
    } else {
        return false;
    }
}
typeOfNum(+prompt("Enter a number please"));

//task6

function allOddNums(start, end) {
    var arr =[];
    for (start; start <= end; start++) {
        if (typeOfNum(start)) {
            arr.push(start);
        }
    }
    return arr;
}
allOddNums(1, 11);

//task7

function ask(n) {
    if (n !== 9) {
        return ask(+prompt("Try again"))
    } else {
        alert("Good job!")
    }
}
ask(+prompt("Enter 9 please"));
