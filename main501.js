// only works if you execute inside the body

iniciar();

function iniciar() {
    // starting...
    var l = prompt("What's the width of the triangle:");
    l = parseFloat(l);

    var a = prompt("What's the height of the triangle:");
    a = parseFloat(a);
    
    try {
        var msg = calcularArea(l,a);
    } catch (e) {
        msg = e;
    }

    escrever(msg);

}

function escrever(mensagem) {
    var output = document.querySelector("#output");
    output.innerHTML = mensagem;
}

function calcularArea(l,a) {
    
    
    if (l === undefined || a === undefined){
        throw new Error("'calcularArea' needs two numbers to complete the triangle calculus!");
    }

    if (isNaN(l) || isNaN(a)) {
        throw new Error("Only numbers please!");
    }

    var area = l * a;
    var mensagem = "<i> The area of the triangle is: <b>" + l + " * " + a + " = " + area + "</b></i>";
    mensagem += "<br><b>THAT'S ALL FOLKS \\o/<b>";

    return mensagem;
}