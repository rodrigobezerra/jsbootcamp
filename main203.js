var n1 = prompt("Type a number:");
n1 = parseInt(n1);

while (isNaN(n1)) {
    var n1 = prompt("Invalid number! Please, type again your number:");
    n1 = parseInt(n1);
}

switch(n1){
    case 1:
        alert("One");
        break;
    case 2:
        alert("Two");
        break;
    case 3:
        alert("Three");
        break;
    case 4:
        alert("Four");
        break;
    case 5:
        alert("Five");
        break;
    case 6:
        alert("Six");
        break;
    default:
        alert("Digite de 1 a 6");
}

