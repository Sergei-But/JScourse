
//task1
function getName (x, y) {
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