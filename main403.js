// only works if you execute inside the body

// starting...
var n1 = parseFloat(prompt("Type a number:"));
while (isNaN(n1)) {
    var n1 = prompt("Invalid number! Please, type again your number:");
    n1 = parseFloat(n1);
}

function escrever(){
    var output = document.querySelector("#output");
    output.innerHTML = n1;
}


/*
 *
 */
function calcular(op) {
    var mensagem = "";
    var n2 = parseFloat(prompt("Type a number:"));
    while (isNaN(n2)) {
        var n2 = prompt("Invalid number! Please, type again your number:");
        n2 = parseFloat(n2);
    }

    // The eval function takes a string and then returns the value 
    // of that string considered as a math operation.
    mensagem = "<i>" + n1 + " " + op + " " + n2 + " = " + eval(n1 + op + n2) + "</i>"; 
           
    mensagem += "<br><b>THAT'S ALL FOLKS \\o/<b>";

    this.output.innerHTML = mensagem;
}

