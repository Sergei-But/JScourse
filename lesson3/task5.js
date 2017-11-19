//task1
 function isEven(start, num, even, odd) {

    for(var i =start; i <=num; i++){
        if(i % 2 === 0){
            console.log(i + even);
        }else {
            console.log(i + odd);
        }
    }
}
isEven(0,15, " is even", " is odd");

//task2
function isEven(start, num, Fizz, Buzz, FizzBuzz) {
// тут вначале можно сохранить значения i % 3 и i % 5 и тогда уже дальше пользоваться переменными

    for(var i =start; i <=num; i++){

        if(i % 3 === 0){
            console.log(Fizz);
        }else if (i % 5 === 0){
            console.log(Buzz);
        } else if (i%3 && i%5){
            console.log(FizzBuzz)
        }
    }
}
isEven(1,100, "Fizz", "Buzz", "FizzBuzz");

//task3
function isEven(start, num) {

        for(var i =start; i >=1; i--){
        if(start%i ===0 && num%i ===0){
            console.log(i);
            break;
        }
    }
}
isEven (100, 25);

//task4
function isEven(start, num) {
var sum = 0;
    for(var i =start; i <num; i++) {

        if (i % 3 === 0 && i % 5 === 0) {
            sum = sum + i;
            console.log(sum);
        }
    }
}
isEven(0,1000);

//task5
function isEven(start, num) {
    for(var i =start; i <=num; i++) {

        if (i % 3 === 0 && i % 5 === 0) {
            console.log(i);
        }
    }
}
isEven(10,90);

//task6
function isEven(start, num) {
    for(var i =start; i >=num; i--) {

        if (i % 2 ===0) {
        } else {
            console.log(i);
        }
    }
}
isEven(70,11);

//task7
function isEven(start, num) {
    for(var i =start; i >=num; i--) {

        if (i % 2 === 0 && i % 3 === 0) {
            console.log(i);
        }
    }
}
isEven(78,13);

// учимся называть фнукции логично - это поможет в будущем и тому кто посмотрит твой код сразу станет понятно зачем написано тут то что написано
