// Задача 1 //

const extractNumbers = (str) => {
    const matches = str.match(/\d/g)
    return matches ? matches.map(Number) : []
}
console.log(extractNumbers("a1fg5hj6"))

// Задача 2 //

function fibonacci (a = 0, b = 1) {
    if (a > 144) return
    console.log(a)

    setTimeout(() => {
        fibonacci(b, a+b)
    }, 1000)
}
fibonacci()

// Задача 3 //

async function getProduct() {
    try {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        data.forEach(product => {
            console.log(product.title)
        })
    } catch (e) {
        console.log(e)
    }
}
getProduct()

// Задача 4 //

const container = document.querySelector('div');

container.addEventListener('click', function(event) {
    const button = event.target.closest('button')

    if (button) {
        const color = button.textContent
        document.body.style.backgroundColor = color
    }
});

// Задача 5 //

const button = document.querySelector('#btn')
const box = document.querySelector('.box')

button.addEventListener('click', () => {
    if (box.style.display === 'none') {
        box.style.display = 'block'
    } else {
        box.style.display = 'none'
    }
});

// Задача 6 //

const counterElement = document.querySelector('#counter')
let count = 0;

const interval = setInterval(() => {
    count ++
    counterElement.textContent = count

    if (count >= 100) {
        clearInterval(interval)
    }
}, 1)

// Задача 7 //

const btn = document.querySelector('#button');
btn.addEventListener('click', loadData);

async function loadData() {
    try {
        const response = await fetch('../data/name.json')
        const data = await response.json()

        console.log(data)

    } catch (e) {
        console.log('Ошибка:', e)
    }
}
