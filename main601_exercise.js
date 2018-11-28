// only works if you execute inside the body

function iniciar() {

    var days = new Array('Sunday', 'Monday', 'Tuesday',
        'Wednesday', 'Thursday', 'Friday', 'Saturday');

    var today = new Date();
    var dayofWeek = today.getDay();
    /*
    0 - Sunday
    1 - Monday
    ...
    6 - Saturday 
    */

    var msg = "Welcome, today is " + days[dayofWeek] + "!";
        

    escrever(msg);
}

function escrever(mensagem) {
    var output = document.querySelector("#output");
    output.innerHTML = mensagem;
}