// only works if you execute inside the body

// starting...
var n1 = parseFloat(prompt("What's the width of the triangle:"));
while (isNaN(n1)) {
    var n1 = prompt("Invalid number! Please, type again your number:");
    n1 = parseFloat(n1);
}

var n1 = parseFloat(prompt("What's the height of the triangle:"));
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
function mostrarArea(l) {
    alert(l);
    mensagem += "<br><b>THAT'S ALL FOLKS \\o/<b>";

    this.output.innerHTML = mensagem;
}