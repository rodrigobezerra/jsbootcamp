// only works if you execute inside the body

function iniciar() {

    var produtos = new Array('pen', 'pencil', 'scisor',
        'eraser', 'notebook', 'book');

        produtos.push('compass', 'paper');

        var msg = "";
        for(let i = 0; i < produtos.length; i++){
            msg += "Product " + (i + 1) + ": " + produtos[i] + "<br>";
        }

        escrever(msg);
}

function escrever(mensagem) {
    var output = document.querySelector("#output");
    output.innerHTML = mensagem;
}