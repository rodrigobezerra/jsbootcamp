var n1 = prompt("Type a number:");
n1 = parseInt(n1);

while (isNaN(n1)) {
    var n1 = prompt("Invalid number! Please, type again your number:");
    n1 = parseInt(n1);
}


// Iteration using WHILE 
// var indice = 1;
// while(indice <= 1000){
//     document.write(n1 + " x " + indice + " = " + (n1 * indice) + "<br>" );
//     if (indice % 10 == 0)
//         document.write("<hr>");
//     indice++;
// }
// document.write("<b>THAT'S ALL FOLKS \\o/<b>");

// Iteration using DO WHILE
// var indice = 999;
// do{
//     document.write(n1 + " x " + indice + " = " + (n1 * indice) + "<br>" );
//     indice++;
// }while(indice <= 1000)
// document.write("<b>THAT'S ALL FOLKS \\o/<b>");

// Iteration using FOR
var table = "";
for (i=1; i < 1000; i++){
        table = table + i + " x " + n1 + " = " + (n1 * i) + "\n";
        if (i % 10 == 0)
        table = table + "------------------------------------\n";
}
table = table + i + " x " + n1 + " = " + (n1 * i) + "\nTHAT'S ALL FOLKS \\o/" ;

console.log(table);

