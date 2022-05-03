/*for (let i = 0; i < 7; i++) {
    document.write('<script>let product = []; let price = []; if (localStorage.getItem("product") != null) { product = JSON.parse(localStorage.getItem("product")); price = JSON.parse(localStorage.getItem("price"));};document.getElementById("shop-button-' + i + '").addEventListener("click", send' + i + ');function send' + i + '() {let vproduct = document.getElementById("shop-p0-' + i + '").innerText; let vprice = document.getElementById("shop-p1-' + i + '").innerText; product.push(vproduct); price.push(vprice); localStorage.setItem("product", JSON.stringify(product));localStorage.setItem("price", JSON.stringify(price));};</script>');
};*/

/*let product = [];
let price = [];

if (localStorage.getItem("product") != null) {
    product = JSON.parse(localStorage.getItem("product"));
    price = JSON.parse(localStorage.getItem("price"));
};

document.getElementById("shop-button-0").addEventListener("click", send0);


function send0() {
    let vproduct = document.getElementById("shop-p0-0").innerText;
    let vprice = document.getElementById("shop-p1-0").innerText;

    product.push(vproduct);
    price.push(vprice);

    localStorage.setItem("product", JSON.stringify(product));
    localStorage.setItem("price", JSON.stringify(price));
}; */
let product = [];
let price = [];

if (localStorage.getItem("product") != null) {
    product = JSON.parse(localStorage.getItem("product"));
    price = JSON.parse(localStorage.getItem("price"));
};

document.getElementById("shop-button-0").addEventListener("click", send0);
document.getElementById("shop-button-1").addEventListener("click", send1);
document.getElementById("shop-button-2").addEventListener("click", send2);
document.getElementById("shop-button-3").addEventListener("click", send3);
document.getElementById("shop-button-4").addEventListener("click", send4);
document.getElementById("shop-button-5").addEventListener("click", send5);
document.getElementById("shop-button-6").addEventListener("click", send6);
document.getElementById("shop-button-7").addEventListener("click", send7);




function send0() {
    let vproduct = document.getElementById("shop-p0-0").innerText;
    let vprice = document.getElementById("shop-p1-0").innerText;

    product.push(vproduct);
    price.push(vprice);

    localStorage.setItem("product", JSON.stringify(product));
    localStorage.setItem("price", JSON.stringify(price));
};



function send1() {
    let vproduct = document.getElementById("shop-p0-1").innerText;
    let vprice = document.getElementById("shop-p1-1").innerText;

    product.push(vproduct);
    price.push(vprice);

    localStorage.setItem("product", JSON.stringify(product));
    localStorage.setItem("price", JSON.stringify(price));
};



function send2() {
    let vproduct = document.getElementById("shop-p0-2").innerText;
    let vprice = document.getElementById("shop-p1-2").innerText;

    product.push(vproduct);
    price.push(vprice);

    localStorage.setItem("product", JSON.stringify(product));
    localStorage.setItem("price", JSON.stringify(price));
};



function send3() {
    let vproduct = document.getElementById("shop-p0-3").innerText;
    let vprice = document.getElementById("shop-p1-3").innerText;

    product.push(vproduct);
    price.push(vprice);

    localStorage.setItem("product", JSON.stringify(product));
    localStorage.setItem("price", JSON.stringify(price));
};




function send4() {
    let vproduct = document.getElementById("shop-p0-4").innerText;
    let vprice = document.getElementById("shop-p1-4").innerText;

    product.push(vproduct);
    price.push(vprice);

    localStorage.setItem("product", JSON.stringify(product));
    localStorage.setItem("price", JSON.stringify(price));
};




function send5() {
    let vproduct = document.getElementById("shop-p0-5").innerText;
    let vprice = document.getElementById("shop-p1-5").innerText;

    product.push(vproduct);
    price.push(vprice);

    localStorage.setItem("product", JSON.stringify(product));
    localStorage.setItem("price", JSON.stringify(price));
};




function send6() {
    let vproduct = document.getElementById("shop-p0-6").innerText;
    let vprice = document.getElementById("shop-p1-6").innerText;

    product.push(vproduct);
    price.push(vprice);

    localStorage.setItem("product", JSON.stringify(product));
    localStorage.setItem("price", JSON.stringify(price));
};



function send7() {
    let vproduct = document.getElementById("shop-p0-7").innerText;
    let vprice = document.getElementById("shop-p1-7").innerText;

    product.push(vproduct);
    price.push(vprice);

    localStorage.setItem("product", JSON.stringify(product));
    localStorage.setItem("price", JSON.stringify(price));
};



/*let product = [];
let price = [];

if (localStorage.getItem("product") != null) {
    product = JSON.parse(localStorage.getItem("product"));
    price = JSON.parse(localStorage.getItem("price"));
};

document.getElementById("shop-button-' + i + '").addEventListener("click", send ' + i + ');


function send ' + i + ' () {
    let vproduct = document.getElementById("shop-p0-' + i + '").innerText;
    let vprice = document.getElementById("shop-p1-' + i + '").innerText;

    product.push(vproduct);
    price.push(vprice);

    localStorage.setItem("product", JSON.stringify(product));
    localStorage.setItem("price", JSON.stringify(price));
};*/