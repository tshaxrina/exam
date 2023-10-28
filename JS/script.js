// * // ИСХОДНЫЕ ДАННЫЕ НЕ ТРОГАТЬ!*

let discount = prompt('Какая скидка?')

let totalSale = 0

let total = 0

let max = {}

let min = {}

let average = 0

let arr = [

    {

        name: 'Milk',

        price: 3.25

    },

    {

        name: 'Coffee',

        price: 1.5

    },

    {

        name: 'Ice Cream',

        price: 7.85

    },

    {

        name: 'Tomatos',

        price: 4.14

    },

    {

        name: 'Onion',

        price: 2.25

    }

]

let arr_sale = []

// * // 1. Сохранить самый дорогой товар в переменную`max`*

// * // 2. Сохранить самый дешевый товар в переменную`min`*

// * // 3. Сохранить общую цену без скидок в переменную`total`*

// * // 4. Сохранить общую цену со скидкой в переменную`totalSale`*

// * // 5. Сохранить элементы из массива arr с обновленной ценой (цена со скидкой) в переменную `arr_sale`*

// * // 6. Сохранить в переменной`average` среднюю цену всех продуктов без скидок*

// * // * Писать весь код в функции `setup()`*

// * // ТРИ ОЦЕНКИ. ЧИСТОТА КОДА, ЛОГИКА РАБОТЫ, УНИКАЛЬНОСТЬ КОДА*

const setup = () => {
for (let item of arr) {
    total += item.price
    average = total/arr.length

    item.arr_sale = item.price - (discount * item.price / 100)
    arr_sale.push(item)
    totalSale += item.arr_sale

}

max = arr.reduce((a, b) => {
    let price_a = a.price 
    let price_b = b.price

    if (price_a > price_b) {
        return a
    } else {
        return b
    }
})

min = arr.reduce((a, b) => {
    let price_a = a.price 
    let price_b = b.price

    if (price_a < price_b) {
        return a
    } else {
        return b
    }
})

console.log("Цена со скидкой");
console.log(arr_sale);
console.log("total: " + total);
console.log("average: " + average);
console.log("totalSale: " + totalSale);
console.log("самый дорогой товар");
console.log(max);
console.log("самый дешевый товар");
console.log(min);
}

setup()
