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

let getArr = function(){
    let arr = [];
    for(;;){
        let number = prompt('введите число');
    
        if(isNaN(number) || number === null || number === ' '){
            break;
        }

        arr.push(+number);
    };
    return arr;    
}

let outputArr = () => getArr();
console.log(outputArr());


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