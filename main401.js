var output = document.querySelector("#output");
// only works if you execute inside the body

function mostrarTabuada() {
    var numero = parseInt(prompt("Type a number:"));

    while (isNaN(numero)) {
        var numero = prompt("Invalid number! Please, type again your number:");
        numero = parseInt(numero);
    }

    limparTabuada();

    // Iteration using WHILE 
    var indice = 1;
    var mensagem = "<hr>";
    while(indice <= 1000){
        mensagem += numero + " x " + indice + " = " + (numero * indice) + "<br>";
        if (indice % 10 == 0)
            mensagem += "<hr>";
        indice++;
    }
    mensagem += "<b>THAT'S ALL FOLKS \\o/<b>";

    this.output.innerHTML = mensagem;
}

function limparTabuada(){
    mensagem = "";
    this.output.innerHTML = "";
}
