/*Сделайте функцию, которая отнимает от первого числа второе и делит на 
третье. Числа передаются параметром.*/

let getResult = (number1, number2, number3) => (number1 - number2) / number3;
console.log(getResult(25, 10, 3));


/*Сделайте функцию, которая возвращает куб числа и его квадрат. Число 
передается параметром.*/

let getResult1 = function(number){
    let cubeNumber = number ** 3;
    let squareNumber = number ** 2;
    return `${cubeNumber}, ${squareNumber}`;
}
console.log(getResult1(5));


/*Напишите функции min и max, которые возвращают меньшее и большее из
чисел a и b*/

let min = function(a, b) {
    if (a < b) {
      return a;
    } else {
      return b;
    }
}

let max = function(a, b) {
    return a > b ? a : b;
}

console.log(`Меньшее число: ${min(25, 105)}
Большее число: ${max (25, 105)}`)


/*Напишите две функции: первая ф-ция должна возвращать массив с 
числовыми значениями, диапазон которых должен вводиться пользователем 
с клавиатуры; вторая – выводить полученный массив.*/

const getArray = function() {
    const lengthArrStart = +prompt('Введите начало диапазона');
    const lengthArrEnd = +prompt('Введите конец диапазона');
    const arr = [];
    for(let i = lengthArrStart; i <= lengthArrEnd; i++){
      arr.push(i);
    }
  
    return arr;  
}

const array  =  getArray();
  
const print = function (arrayForPrint) {
    console.log(arrayForPrint)
}
  
print(array)


/*Сделайте функцию isEven() (even - это четный), которая параметром 
принимает целое число и проверяет: четное оно или нет. Если четное - пусть 
функция возвращает true, если нечетное — false.*/

let isEven = function(number){    
    if(number % 1 !== 0) {
        return console.log ('Не целое число')
    }

    if(number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isEven(4));


/*Напишите ф-цию, в которую передается массив с целыми числами. 
Верните новый массив, где останутся лежать только четные из этих чисел. 
Для этого используйте вспомогательную функцию isEven из предыдущей 
задачи*/

let integerArr = function(){
    let arr = [];
    for(;;){
        let number = prompt('введите целое число');
    
        if(number % 1 !== 0) {
            continue;
        } else if(isNaN(number) || number === null || number === ' '){
            break;
        }

        arr.push(+number);
    };

    return arr;  
}

let arr = integerArr();

let newArr = arr.filter(function(item){    
    if (isEven(item) === true) {
        return item;
    }
});

console.log(newArr);


/*Напишите ф-цию, которая рисует равнобедренный треугольник из звездочек:
Кол-во рядов должно вводиться с клавиатуры. Доп., напишите такую же ф-цию, но которая выведет перевернутый треугольник.*/

let isoscelesTriangle = function(){
    const h = +prompt('введите число');
    let space = '';
    let star = '';
    let triangle = '';
    
    for(let i = 1; i <= h; i++){
        for(let j = 1; j <= h - i; j++){
            space += ' ';
        }
    
        for(let k = 1; k <= i*2-1; k++){
            star += '*';
        }

        let triangle = space + star;
        console.log(triangle);
        space = '';
        star = '';
    }

    return triangle;
}

console.log(isoscelesTriangle());


let invertedTriangle = function(){
    const h = +prompt('введите число');
    let space = '';
    let star = '';
    let triangle = '';
    
    for(let i = h; i >= 1; i--){
        for(let j = 1; j <= h - i; j++){
            space += ' ';
        }
    
        for(let k = 1; k <= i*2-1; k++){
            star += '*';
        }

        let triangle = space + star;
        console.log(triangle);
        space = '';
        star = '';
    }

    return triangle;
}

console.log(invertedTriangle());


/*Дано число. Сложите его цифры. Если сумма получилась более 9-ти, 
опять сложите его цифры. И так, пока сумма не станет однозначным числом 
(9 и менее). Исп. Рекурсию.*/

const getSum = function(num){
    const numberArr = Array.from(String(num), Number);
    let sum = 0;
    for(i = 0; i < numberArr.length; i++){
        sum = sum + numberArr[i];
    }

    if(sum > 9){
        return getSum(sum);
    } else {
        return sum;
    }
    
}

console.log(getSum(2534));


/*Напишите ф-цию, которая рисует следующую пирамидку (исп. вложенные 
    циклы):
    1 
    22 
    333 
    4444 
    55555 
    666666 
    7777777 
    88888888
    999999999
    Кол-во рядов должно вводиться параметром. Если пользователь ввел доп. 
    параметр, непредусмотренный ф-цией по умолчанию - один любой символ, 
    кроме пробела, то пирамида должна быть нарисована этим символом, 
    например:*/

    let getTriangle = function(item){
        let nStr = ' ';
        for(let i = 1; i <= item; i++){
            
            for(let j = 1; j <= i; j++){
            nStr = nStr + `${i}`;
            }
            
            console.log(nStr);
            nStr = ' ';
        }
        return (nStr);
    }

    console.log(getTriangle(9));
    /* Не знаю как сделать сдеать со вторым условием задачи*/   

