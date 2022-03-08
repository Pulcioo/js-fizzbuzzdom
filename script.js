
//variabili
const divisibleBy3 = 'Fizz'

const divisibleBy5 = 'Buzz'


// stampare in console numeri da 1 a 100
// multipli di 3 chiamarli Fizz
// multipli di 5 chiamarli Buzz

let n;

for (let n = 1; n <= 100; n++) {

    if ((n % 3 == 0) && (n % 5 == 0)) {
        console.log(divisibleBy3 + divisibleBy5)
    } else if (n % 3 == 0) {
        console.log(divisibleBy3)
    } else if (n % 5 == 0) {
        console.log(divisibleBy5)
    } else {
        console.log(n)
    }

}

// selezionare l'elemento del documento nel quale si vuole andare ad inserire numeri da 1 a 100
const containerSquares = document.querySelector("#container");
for (n = 1; n <= 100; n++) {
    let element;
    if ((n % 3 == 0) && (n % 5 == 0)) {
        // aggiungo elemento in DOM con rispettive classi
        element = `<div class="square fizz-buzz">${divisibleBy3}
        ${divisibleBy5}</div>`;
    } else if (n % 3 == 0) {
        element = `<div class="square fizz">${divisibleBy3}</div>`;
    } else if (n % 5 == 0) {
        element = `<div class="square buzz">${divisibleBy5}</div>`
    } else {
        element = `<div class="square">${n}</div>`
    }
    containerSquares.innerHTML += element;
}
