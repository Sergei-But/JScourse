
//lesson1

//task1
var str = "Have a good day!";
console.log(str);

//task2
var age = 25;
console.log(age);
age = undefined;
console.log(age);

//task3
var info = {};
info.name = "Sergei";
info.age = 29;
console.log(info.name);
console.log(info.age);
var name = info.name;
console.log(name);
delete info.name;
console.log(name);

//task4
var customArray = [5,10,15];
console.log(customArray);
customArray = 0;
console.log(customArray);

//task5
var student = "Sergei";
console.log(student);
student = "Sergei But";
console.log(student);

//task6
var complex = [];
complex[0] = "My name is Sergei";
complex[1] = 7;
complex[2] = null;
complex[3] = {info};
console.log(complex[2]);

//task7
var complexObj = {};
complexObj.name = "Sergei";
complexObj.age = 29;
complexObj.friends = ["Yaroslav", " Ivan", " Alex"];
complexObj.soc_links = {facebook:"https://www.facebook.com/but.serge", googlePlus:"https://plus.google.com/u/0/"};
console.log(complexObj);
var template = `My name is ${complexObj.name}, I am ${complexObj.age}, I have a lot of friends, but the best one is: ${complexObj.friends}.` +
     ` You can find me on facebook: ${complexObj.soc_links.facebook} or on google groups: ${complexObj.soc_links.googlePlus}.`;
console.log(template);






