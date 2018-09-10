var output = document.querySelector("#output");
// only works if you execute inside the body

// starting...
var numero = parseInt(prompt("Type a number:"));
while (isNaN(numero)) {
    var numero = prompt("Invalid number! Please, type again your number:");
    numero = parseInt(numero);
}



/*
 *
 */
function calcularTabuadaSoma() {

    limparTudo();

    // Iteration using WHILE 
    var indice = 1;
    var mensagem = "<hr>";
    while(indice <= 1000){
        mensagem += numero + " + " + indice + " = " + (numero + indice) + "<br>";
        if (indice % 10 == 0)
            mensagem += "<hr>";
        indice++;
    }
    mensagem += "<b>THAT'S ALL FOLKS \\o/<b>";

    this.output.innerHTML = mensagem;
}

/*
 *
 */
function calcularTabuadaSubtracao() {

    limparTudo();

    // Iteration using WHILE 
    var indice = 1;
    var mensagem = "<hr>";
    while(indice <= 1000){
        mensagem += numero + " - " + indice + " = " + (numero - indice) + "<br>";
        if (indice % 10 == 0)
            mensagem += "<hr>";
        indice++;
    }
    mensagem += "<b>THAT'S ALL FOLKS \\o/<b>";

    this.output.innerHTML = mensagem;
}

/*
 *
 */
function calcularTabuadaMultiplicacao() {

    limparTudo();

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


/*
 *
 */
function calcularTabuadaDivisao() {

    limparTudo();

    // Iteration using WHILE 
    var indice = 1;
    var mensagem = "<hr>";
    while(indice <= 1000){
        mensagem += numero + " ÷ " + indice + " = " + (numero / indice) + "<br>";
        if (indice % 10 == 0)
            mensagem += "<hr>";
        indice++;
    }
    mensagem += "<b>THAT'S ALL FOLKS \\o/<b>";

    this.output.innerHTML = mensagem;
}


/*
 *
 */
function limparTudo(){
    mensagem = "";
    this.output.innerHTML = "";
}
