//task1
var i = 1;
while (i <= 50){
    console.log(i);
    i++;
}

//task2
var arr = [1,2,3,4,5];
for (i = 0; i <= 4; i++) {
    console.log(arr[i]);
}

//task3
var arr = [2,3,4,5];
var result = 2;
for (i=0; i<=3; i++){
    arr[i] = result*arr[i];
    console.log(arr[i]);
}
// не то что то сдесь сделано нужно найти произведение всех элементов массива а не каждый эелемент массива умножать на 2

//task4
var obj = {
    "Minsk" : "Belarus",
    "Moscow" : "Russia",
    "Kiev" : "Ukraine"
};
for (var key in obj){
    console.log(key + " - it's " + obj[key]);
}

//task5
var n = 1000;
var num = 0;
do {
    n = n/2;
    num++;
}
while (n>50);
    console.log(n);
    console.log(num);

//task6
var arr = [2,5,9,15,0,4];
for (i = 0; i < 6; i++) {
    if (arr[i] > 3 && arr[i] < 10)
        console.log(arr[i]);
}


//task7
var month = "November";
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
for (i = 0; i<months.length; i++){
    if(months[i] == month){
        console.log("<b>тут выделено " + months[i]+ " жирным</b>");
    } else {
        console.log(months[i]);
    }
}
