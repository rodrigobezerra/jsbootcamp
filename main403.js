

function escrever(msg){
    var output = document.querySelector("#output");
    output.innerHTML = msg;
}

function start(operator){
    // only works if you execute inside the body

    // starting...
    var n1 = parseFloat(prompt("Type the first number:"));
    while (isNaN(n1)) {
        var n1 = prompt("Invalid number! Please, type again your number:");
        n1 = parseFloat(n1);
    }

    var n2 = parseFloat(prompt("Type the second number:"));
    while (isNaN(n2)) {
        var n2 = prompt("Invalid number! Please, type again your number:");
        n2 = parseFloat(n2);
    }

    var msg = calcular(operator, n1, n2);

    escrever(msg);
}


/*
 *
 */
function calcular(operator, n1, n2) {

    // The eval function takes a string and then returns the value 
    // of that string considered as a math operation.
    mensagem = "<i>" + n1 + " " + operator + " " + n2 + " = " + eval(n1 + operator + n2) + "</i>"; 
      
    mensagem += "<br><b>THAT'S ALL FOLKS \\o/<b>";

    return mensagem;
}

