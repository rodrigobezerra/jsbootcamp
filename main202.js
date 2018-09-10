var n1 = prompt("Player #1, type your lucky number:");
n1 = parseInt(n1);
while (isNaN(n1)) {
    var n1 = prompt("Invalid number! Please, type again your lucky number:");
    n1 = parseInt(n1);
}
var n2 = prompt("Now Player #2, type your lucky number:");
n2 = parseInt(n2);
while (isNaN(n2)) {
    var n2 = prompt("Invalid number! Please, type again your lucky number:");
    n2 = parseInt(n2);
}

/* Gerando um número aleatório entre dois valores */
function getRandomArbitrary(min, max) {
    return parseInt(Math.random() * (max - min) + min);
}


if (n1 == n2) {
    alert("We are the champions, my friends...");
} else {
    var nRandom = getRandomArbitrary(0, 1.99);

    if ( (nRandom == 0 && n1 < n2) || (nRandom == 1 && n1 > n2)) {
        alert("Result: " + nRandom + "\nPlayer #1 wins by entering the smallest number!");
    } else {    
        alert("Result: " + nRandom + "\nPlayer #2 wins by entering the greatest number!");
    }
}


