// var flavor = prompt("Whats's your favorite flavor?");
// alert("My favorite flavor is " + flavor);

var n1 = prompt("Type the first number");
n1 = parseFloat(n1);
while (isNaN(n1)){
    var n1 = prompt("Invalid number! Please, type again the first number");
    n1 = parseFloat(n1);
}
var n2 = prompt("Type the second number");
n2 = parseFloat(n2);
while (isNaN(n2)){
    var n2 = prompt("Invalid number! Please, type again the second number");
    n2 = parseFloat(n2);
}

alert("The sum of the first and the last number is: " + ( n1 + n2)
      + "\nThe subtraction of the first and the last number is: " + ( n1 - n2)
      + "\nThe division of the first and the last number is: " + ( n1 / n2)
      + "\nThe multiplication of the first and the last number is: " + ( n1 * n2)
      + "\nO resto da divisão entre " + n1 + " e " + n2 + " é igual a: " + ( n1 % n2)
      + "\nO número " + n1 + " elevado a " + n2 + " é igual a: " + ( n1 ** n2) );



