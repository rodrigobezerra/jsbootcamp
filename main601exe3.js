// only works if you execute inside the body

function iniciar() {

    var product1 = new Object();
    product1.name = "Beans";
    product1.price = 1.99;
    product1.quantity = 50;

    var product2 = new Object();
    product2.name = "Rice";
    product2.price = 2.39;
    product2.quantity = 100;

    var product3 = new Object();
    product3.name = "Meat";
    product3.price = 5.49;
    product3.quantity = 200;

    var products = new Array(product1, product2, product3);

    var msg = "Welcome to our grocery store, today we have:";

    msg += listProducts(products);

    escrever(msg);
}


function listProducts(arr){
    
    var msg = "";
    for (let i = 0; i<= arr.length; i++) {
        //if (!isNaN(nums[i]) && nums[i]%2 === 0){
            msg += (i + 1) +".Product: " + arr[i].name + "<br>";
            msg += "<li class='a'>Price: " + arr[i].price + "<li>";
            msg += "<li class='a'>Quantity: " + arr[i].quantity + "<li>";
        //}
    }

    return msg;
}

function escrever(mensagem) {
    var output = document.querySelector("#output");
    output.innerHTML = mensagem;
}