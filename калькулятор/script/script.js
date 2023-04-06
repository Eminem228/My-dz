//var message = "Hello, Galaxy";
//alert(message);

//message = "hello, World!";
//alert(message);

//var name = prompt("Input your name");
//var age = prompt("Input your age");
//var hobby = prompt("Input your hobby");
//alert("My name is: " + name);

function btn_click() {
    let num1 = Number(document.getElementById("n1").value);
    let num2 = Number(document.getElementById("n2").value);
    let result = num1 + num2;
    document.getElementById("answer").innerHTML = result;

    let text = ""

    if (result == 11) {
        text = "Варованый баряшек"
    } else if (result == 22) {
        text = "Отвечаю брат"
    } else if (num1 == 0 || num2 == 0){
        text = "Покупай"
    } else if (num1%2 == 0 && num2%2 == 0){
        text = "Оба числа чётные"
    }  else if (num1%2 != 0 && num2%2 != 0){
        text = "Оба числа не чётные"
    } else {
        text="Не учтённая ситуация"
    } 

    document.getElementById("output").innerHTML = text;

}


// Циклы
//Цикл с предусловием
let i = 0;
while (i<3) {
    console.log(i);
    i++;//i = i + 1

}

//Цикл с постусловием
i = 10;
do {
    console.log(i);
    i--;
} while (i>3)

//Цикл со счётчиком
for(let i = 0; i<20; i++) {
    console.log(i);
}

//Бесконечные циклы
// while (true){
//   code
// }

// do {

// }while (true)

// for (;;) {

// }

//Прерывание цикла
for (let i = 0;;i++) {
    if (i>10) break;
    if (3%2 == 1) continue;
    console.log(i);
}

// Массивы

let arrOld = new Array(10); //Устаревший способ создания массива
//10 пустых элемента
let arrItem = new Array(10, 20, 30, 40);
// заполненный массив

let arr = [1, 3, 5, 7];
console.log(arr);
console.log(arr.length);

//обнуление массива
arr = [];
arr.length = 0;

//двумерный массивы
let arrArr = [
    [1, 5, 'hi', false],
    [55, true, 1, 100],
    [true, 'string', NaN, 32]
]

console.log(arrArr);


//Перебор массива
arr =  [true, 'string', NaN, 32]

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

