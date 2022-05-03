document.write('<div id="cartWindow" class="shop-cart-background-off"><div class="shop-cart-window"><div class="shop-cart-window-a"><button type="button" class="close" aria-label="Close" id="close"><span aria-hidden="true" class="close-b">&times;</span></button></div><div class="shop-cart-window-b-container"><div class="shop-cart-window-b"><iframe src="2_shop-cart-window-iframe.html" class="shop-cart-window-iframe"></iframe></div><div class="pay"><div class="flex"><button id="button" onclick="deleteItems()" >Vaciar</button><script>function deleteItems() {localStorage.clear(); location.reload();}</script><a id="button" href="https://moon47store.com/pendingpayment">Pagar</a></div></div></div></div></div>');
document.getElementById("close").addEventListener("click",
    function close() {
        let cw = document.getElementById("cartWindow");
        cw.setAttribute("class", "shop-cart-background-off")
    });

/*function cartWindow() {
    let cwc = document.getElementById("cartWindowContainer");
    let dwElement = document.createElement("div");
    let dwContent = document.createTextNode("hola");
    let dw = dwElement.appendChild(dwContent);
    cwc.appendChild(dwElement);
};*/

/*function cartWindow() {
    function product() {
        const bd = [{
            name: 'Puma RS-Z',
            price: '$15.799',
            imga: '../img/products/1c.jpg',
            imgb: '../img/products/1b.jpg',
            imgc: '../img/products/1a.jpg'
        }, {
            name: 'Puma Mirage',
            price: '$17.299',
            imga: '../img/products/2c.jpg',
            imgb: '../img/products/2b.jpg',
            imgc: '../img/products/2a.jpg'
        }, {
            name: 'Nike AM-270',
            price: '$33.999',
            imga: '../img/products/3c.jpg',
            imgb: '../img/products/3b.jpg',
            imgc: '../img/products/3a.jpg'
        }, {
            name: 'Adidas Ozweego',
            price: '$21.999',
            imga: '../img/products/4c.jpg',
            imgb: '../img/products/4b.jpg',
            imgc: '../img/products/4a.jpg'
        }, {
            name: 'Adidas Tourino',
            price: '$14.999',
            imga: '../img/products/5c.jpg',
            imgb: '../img/products/5b.jpg',
            imgc: '../img/products/5a.jpg'
        }, {
            name: 'Adidas USA-84',
            price: '$11.499',
            imga: '../img/products/6c.jpg',
            imgb: '../img/products/6b.jpg',
            imgc: '../img/products/6a.jpg'
        }, {
            name: 'Adidas MULTIX',
            price: '$13.999',
            imga: '../img/products/7c.jpg',
            imgb: '../img/products/7b.jpg',
            imgc: '../img/products/7a.jpg'
        }, {
            name: 'Adidas Flux',
            price: '$13.869',
            imga: '../img/products/8c.jpg',
            imgb: '../img/products/8b.jpg',
            imgc: '../img/products/8a.jpg'
        }, ];

        bd.forEach(function(info) {
            document.write('<figure id="shop_section-info-1a"><figcaption itemprop="name" id="shop-p0">' + info.name + '</figcaption><div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel"><div class="carousel-inner"><div class="carousel-item active"><img class="d-block-w-10" src=" ' + info.imga + ' " alt="First slide"></div><div class="carousel-item"><img class="d-block-w-10" src=" ' + info.imgb + ' " alt="Second slide"></div><div class="carousel-item"><img class="d-block-w-10" src=" ' + info.imgc + ' " alt="Third slide"></div></div></div><p id="shop-p1">' + info.price + '</p><button id="shop-button">Detalle</button><button id="shop-button">Comprar</button></figure>');
        });
    };
    document.write('<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="stylesheet" href="../style.css"><link rel="shortcut icon" href="./img/logo5-01.jpg"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"><script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script><script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script><script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script><script src="../main.js"></script></head><body class="shop-body"><div id="shop-section-info-1"><div id="shop"><script>' + '<script>' + product() + '<script/>' +
        '</script></div><div id="cartWindow" class="shop-cart-background"><div class="shop-cart-window"><div class="shop-cart-window-a"><button type="button" class="close" aria-label="Close" id="close"><span aria-hidden="true" class="close-b">&times;</span></button></div><div class="shop-cart-window-b-container"><div class="shop-cart-window-b"><iframe src="2_shop-cart-window-iframe.html" class="shop-cart-window-iframe"></iframe></div><div class="pay"><button id="button">Pagar</button></div></div></div></div><script>document.getElementById("close").addEventListener("click", function close() {document.getElementById("cartWindow").remove();});</script><div id="sortNSearchMother"><div id="sortNSearch"><div id="search"><input type="text" id="myInput" onkeyup="myFunction1()" placeholder="Busca diseños por nombre..." title="Type in a name"></div><div id="sort"><div for="orderBy" class="orderBy1">Ordenar por:</div><select name="orderBy" id="orderBy" class="orderBy2"><option value="sort">menor precio</option> <option value="reverse">mayor precio</option></select></div><div class="container-count-2"><button id="shop-cart-button"> <svg xmlns="http://www.w3.org/2000/svg" height="5vh " fill="white" class="bi bi-cart3" viewBox="0 0 16 16">' +
        '<path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/></svg></button><div class="container-count"><p class="shop-count">0</p></div></div></div></div><script src="cartWindow.js"></script><script src="shop.js"></script></div><div class="containerLoading" id="containerLoading"><div id="loader-dummy"><svg class="loader" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.8 5.3"><g class="loading-bullets"><circle class="loading-circle-1" cx="3.3" cy="2.7" r="1"/><circle class="loading-circle-2" cx="9.8" cy="2.7" r="1"/><circle class="loading-circle-3" cx="16.5" cy="2.7" r="1"/></g></svg></div><div id="retry-dummy"><svg class="retry" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.3 10.4"><path d="M10 5.8c-.2 0-.4.1-.4.3-.2.7-.5 1.3-.9 1.9-1.5 1.9-4.3 2.2-6.2.7C1.6 8 1 6.9.9 5.7c-.2-1.2.1-2.4.8-3.3C3.3.5 6.1.2 8 1.7c.4.3.7.6.9 1H7.6c-.2 0-.4.2-.4.4s.2.4.4.4h2.1l.1-.1v-.1-.1-.1V.8c0-.2-.2-.4-.4-.4S9 .6 9 .8v.9c-.1-.1-.3-.3-.5-.6-2.3-1.8-5.6-1.4-7.4.8C.3 3-.1 4.4 0 5.8c.1 1.4.8 2.6 1.9 3.5 1 .8 2.1 1.1 3.3 1.1 1.5 0 3-.7 4.1-1.9.5-.6.9-1.4 1-2.2 0-.3-.1-.5-.3-.5z"/></svg></div></div></body></html>');
};*/