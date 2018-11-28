// only works if you execute inside the body

function iniciar() {

    var nums = new Array(25, 30, 45, 28, 0, 12, 78, 64);

    var msg = "Numbers: {" + nums + "}";

    var sum = 0;
    for (let i = 0; i<= nums.length; i++) {
        if (nums[i]%2 == 0){
            sum += nums[i];
        }
    }

    msg += "<br>The Sum of all evens is: " + sum.toString();

    escrever(msg);
}

function escrever(mensagem) {
    var output = document.querySelector("#output");
    output.innerHTML = mensagem;
}