
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