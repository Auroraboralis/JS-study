let 
    money,
    name,
    time,
    price;

function start() {
        money = prompt("Ваш бюджет?");

        while  (isNaN(money) || money == "" || money == null) {
            money = prompt("Ваш бюджет?");
                }
        name = prompt("Название магазина").toUpperCase();
        time = 19;
}
//start();

let mainList = {
    budget: money,
    shop: name,
    shopGoods: [], 
    employers: [],
    open: true,
    disount: true,
    shopItems: [],
    chooseGoods: function chooseGoods() {
        for (let i = 0; i < 5; i++) {

        let a = prompt("Какой тип товаров будем продавать?");
        mainList.shopGoods[i] = a;
        if ((typeof(a)) === 'string' && (typeof(a)) === null && a != '' && a.length < 50 ) {
            console.log ('Всё верно!'); 
            } 
        }
    },
    dayBudget: function dayBudget () {
        //alert("Ежедневный бюджет " + mainList.budget /30);
        let i = mainList.budget / 30;
        price = i;
        console.log("Ежедневный бюджет", i );
    },
    employers: function employers () {
        for (let e = 0; e < 4; e++) {   
            let n = prompt("Имя сотрудника?");
            mainList.employers[e] = n;
            if ((typeof(e)) === 'string' && (typeof(e)) === null && e != '' && e.length <50 ) {
                console.log ('Всё верно!');
                
            }
        }
    },
    makeDiscount: function makeDiscount () {
        //if (mainList.disount == true) {
        //    price = (price/100)*80;
        //}
        if (mainList.disount == true) {
            let i = price / 100 * 80 ;
            console.log("Цена с учётом скидки!", i );
            } else { 
            console.log("Обойдёшься без скидки мудачила!!!");
        }
    },
    workTime: function workTime(time) {
        if (time <0) {
            console.log('Такого времени не может быть');
        }else if(time > 8 && time < 20) {
            console.log('Время работать');
            mainList.open = true;
            }else if(time < 24) {
                console.log('Уже лишком поздно');
                }else {
                    console.log('В сутках только 24 часа!');
                }
    },
    chooseShopItems: function chooseShopItems() {
        let items = prompt ("Перечислите через запятую ваши товары", "");
        mainList.shopItems = items.split(",");
        mainList.shopItems.push(prompt("Подождите, ещё", ""));
        mainList.shopItems.sort();
    }
    
};



console.log(mainList); 


