/*var leftBorderWeidth = 1;

const pi = 3.14;
{
    let scond = 2;
}
var number = 5;
var string = "Hello!"
var sym = Symbol();
var boolen = true;

obj = {
    name: "John",
    age: 25,
    isMaried: false
}

console.log(obj["name"]);

//alert("Hello!");
//confirm("Are you here?");
var answer = prompt("Вам есть 18 лет?", "20");
console.log(typeof(answer)); */
//var arr = ['plum', 'orange', 'apple'];
//console.log(arr[0]);


let 
    money,
    name,
    time,
    price
function start() {
        money = prompt("Ваш бюджет?");

        while  (isNaN(money) || money == "" || money == null) {
            money = prompt("Ваш бюджет?");
}
        name = prompt("Название магазина").toUpperCase();
        time = 19;
}
start();

let mainList = {
    budget: money,
    shop: name,
    shopGoods: [], 
    employers: [],
    open: true,
    disount: false
}
function chooseGoods() {
    for (let i = 0; i < 2; i++) {

        let a = prompt("Какой тип товаров будем продавать?");

        if ((typeof(a)) === 'string' && (typeof(a)) === null && a != '' && a.length < 50 ) {
            console.log('Всё верно!');
            mainList.shopGoods[i] = a;
        }else{
            i = i - 1;
         }
    }
}
chooseGoods ();

    if (time <0) {
        console.log('Такого времени не может быть');
    }else if(time > 8 && time < 20) {
        console.log('Время работать');
        }else if(time < 24) {
            console.log('Уже лишком поздно');
            }else {
                console.log('В сутках только 24 часа!');
            };

console.log("Ежидневный бюджет", mainList.budget / 30);
console.log(mainList); 



 //let num = 50;
 /* 
 if( num < 49){
     console.log('Нверно')
 } else if (num > 100){
     console.log('Неверо')
    } else {console.log('Верно!')
}
(num == 50)? console.log('Верно!') : console.log('Неверно');
*/
/* 
switch (num) {
    case 49:
        console.log('Мало');
        break;
    case 100:
        console.log('Много');
        break;
    case 80:
        console.log('Всё ещё много!');
        break;
    case 50:
        console.log('В точку!');
        break;
    default:
        console.log('Не в этот раз');
        break;
}
 */
// while (num < 55) {
//     console.log(num);
//     num++;
// }
// do {
//     console.log(num);
//     num++;
// }
// while (num <55);
// for (let i =0; i < 9; i++){
//     console.log (i);
// }