//Shop_________________________________________________//

const bd = [{
        id: 0,
        name: 'Chaleco misiones gris',
        price: 1851,
        imga: '../img/products/1a.jpg',
        imgb: '../img/products/1a.jpg',
        imgc: '../img/products/1a.jpg',
        link: '',
        det: 'Sin stock'
    },
    {
        id: 1,
        name: 'Kimono sastrero beige',
        price: 3160,
        imga: '../img/products/2a.jpeg',
        imgb: '../img/products/2a.jpeg',
        imgc: '../img/products/2a.jpeg',
        link: 'https://mpago.la/2D3ts7s',
        det: 'Talle único'
    },
    {
        id: 2,
        name: 'Maxi sweater griselda gris',
        price: 3160,
        imga: '../img/products/3a.jpeg',
        imgb: '../img/products/3a.jpeg',
        imgc: '../img/products/3a.jpeg',
        link: 'https://mpago.la/33uZjQV',
        det: 'Talle único'
    },
    {
        id: 3,
        name: 'Ruana sabrina rosa',
        price: 3534,
        imga: '../img/products/4a.jpg',
        imgb: '../img/products/4a.jpg',
        imgc: '../img/products/4a.jpg',
        link: 'https://mpago.la/1QMqcb9',
        det: 'Talle único'
    },
    {
        id: 4,
        name: 'Poncho Vera Beige',
        price: 4095,
        imga: '../img/products/5a.jpeg',
        imgb: '../img/products/5a.jpeg',
        imgc: '../img/products/5a.jpeg',
        link: 'https://mpago.la/27PoNf1',
        det: 'Talle único'
    },
    {
        id: 5,
        name: 'Remeron federica blanco',
        price: 2599,
        imga: '../img/products/6a.jpg',
        imgb: '../img/products/6a.jpg',
        imgc: '../img/products/6a.jpg',
        link: 'https://mpago.la/11mKzmg',
        det: 'Talle único'
    },
    {
        id: 6,
        name: 'Remeron lea negro',
        price: 1480,
        imga: '../img/products/7a.jpeg',
        imgb: '../img/products/7a.jpeg',
        imgc: '../img/products/7a.jpeg',
        link: 'https://mpago.la/2RQTJnv',
        det: 'Talle único'
    },
    {
        id: 7,
        name: 'Remeron marriot gris',
        price: 2225,
        imga: '../img/products/8a.jpeg',
        imgb: '../img/products/8a.jpeg',
        imgc: '../img/products/8a.jpeg',
        link: 'https://mpago.la/1yDY9e5',
        det: 'Talle único'
    }, {
        id: 8,
        name: 'Sweater eco negro',
        price: 2786,
        imga: '../img/products/9a.jpeg',
        imgb: '../img/products/9a.jpeg',
        imgc: '../img/products/9a.jpeg',
        link: 'https://mpago.la/1VWaQ7a',
        det: 'Talle único'
    }, {
        id: 9,
        name: 'Sweater rocio rosa',
        price: 2973,
        imga: '../img/products/10a.jpeg',
        imgb: '../img/products/10a.jpeg',
        imgc: '../img/products/10a.jpeg',
        link: '',
        det: 'Sin stock'
    }, {
        id: 10,
        name: 'Sweater santa fe rosa',
        price: 2973,
        imga: '../img/products/11a.jpg',
        imgb: '../img/products/11a.jpg',
        imgc: '../img/products/11a.jpg',
        link: '',
        det: 'Sin stock'
    }, {
        id: 11,
        name: 'Vestido belinda blanco',
        price: 2973,
        imga: '../img/products/12a.jpeg',
        imgb: '../img/products/12a.jpeg',
        imgc: '../img/products/12a.jpeg',
        link: 'https://mpago.la/2t9oHT5',
        det: 'Talle único'
    }, {
        id: 12,
        name: 'Vestido chiara blanco',
        price: 2973,
        imga: '../img/products/13a.jpeg',
        imgb: '../img/products/13a.jpeg',
        imgc: '../img/products/13a.jpeg',
        link: 'https://mpago.la/1oAjPiP',
        det: 'Talle único'
    }, {
        id: 13,
        name: 'Vestido leonor Gris',
        price: 2363,
        imga: '../img/products/14a.jpeg',
        imgb: '../img/products/14a.jpeg',
        imgc: '../img/products/14a.jpeg',
        link: 'https://mpago.la/1mMrmdb',
        det: 'Talle único'
    }, {
        id: 14,
        name: 'Vestido maluco negro',
        price: 2599,
        imga: '../img/products/15a.jpeg',
        imgb: '../img/products/15a.jpeg',
        imgc: '../img/products/15a.jpeg',
        link: 'https://mpago.la/2BP3eyZ',
        det: 'Talle único'
    },
    {
        id: 15,
        name: 'Vestido night rojo',
        price: 2973,
        imga: '../img/products/16a.jpeg',
        imgb: '../img/products/16a.jpeg',
        imgc: '../img/products/16a.jpeg',
        link: 'https://mpago.la/29SibQw',
        det: 'Talle único'
    },
    {
        id: 16,
        name: 'Vestido maluco blanco',
        price: 2973,
        imga: '../img/products/17a.jpeg',
        imgb: '../img/products/17a.jpeg',
        imgc: '../img/products/17a.jpeg',
        link: 'https://mpago.la/2ywoVcB',
        det: 'Talle único'
    },
    {
        id: 17,
        name: 'Maxi sweater reyna camel',
        price: 2599,
        imga: '../img/products/18a.jpeg',
        imgb: '../img/products/18a.jpeg',
        imgc: '../img/products/18a.jpeg',
        link: 'https://mpago.la/2wmtn5T',
        det: 'Talle único'
    },
    {
        id: 18,
        name: 'Sweater oro camel',
        price: 2599,
        imga: '../img/products/19a.jpeg',
        imgb: '../img/products/19a.jpeg',
        imgc: '../img/products/19a.jpeg',
        link: 'https://mpago.la/1QZ9mVK',
        det: 'Talle único'
    },

];

bd.forEach(function(info) {
    document.write('<figure id="shop_section-info-1a"><figcaption itemprop="name" class="shop-p0 sp014px" id="shop-p0-' + info.id + '" value="' + info.name + '" >' + info.name + '</figcaption><div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel"><div class="carousel-inner"><div class="carousel-item active"><img class="d-block-w-10" src=" ' + info.imga + ' " alt="First slide"></div><div class="carousel-item"><img class="d-block-w-10" src=" ' + info.imgb + ' " alt="Second slide"></div><div class="carousel-item"><img class="d-block-w-10" src=" ' + info.imgc + ' " alt="Third slide"></div></div></div>            <div class="shop-p1"><p class="p03052022">$</p><p class="p03052022" id="shop-p1-' + info.id + '" value="' + info.price + '">' + info.price + '</p></div>                  <p class="shop-p1 sp114px">' + info.det + '</p>    <button class="shop-button" id="shop-button-' + info.id + '"><svg xmlns="http://www.w3.org/2000/svg" height="21px" class="bi bi-cart3" viewBox="0 0 16 16"><path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path></svg></button> <button class="shop-button" id="sbfsb' + info.id + '">Comprar</button><script>document.getElementById("sbfsb' + info.id + '").addEventListener("click", fsb); function fsb() {window.location.href = "' + info.link + '";};</script></figure>');
});


//_________________________________________________//