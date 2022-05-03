let clicks = 0;

if (localStorage.getItem("id") != null) {
    clicks = JSON.parse(localStorage.getItem("id"));
};

document.getElementById("shop-button-0").addEventListener("click", onClick);
document.getElementById("shop-button-1").addEventListener("click", onClick);
document.getElementById("shop-button-2").addEventListener("click", onClick);
document.getElementById("shop-button-3").addEventListener("click", onClick);
document.getElementById("shop-button-4").addEventListener("click", onClick);
document.getElementById("shop-button-5").addEventListener("click", onClick);
document.getElementById("shop-button-6").addEventListener("click", onClick);
document.getElementById("shop-button-7").addEventListener("click", onClick);

function onClick() {
    clicks += 1;
    document.getElementById("shop-count").innerHTML = clicks;
    localStorage.setItem("id", JSON.stringify(clicks));
    location.reload();
};

document.getElementById("shop-count").innerHTML = clicks;


/*
let product2 = JSON.parse(localStorage.getItem("product"));

if (product2 === null) {
    document.write(0);
} else {
    document.write(product2.length);
};*/