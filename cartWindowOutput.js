output();

function output() {

    let tbody = document.querySelector('tbody');

    tbody.innerHTML = '';


    let product = JSON.parse(localStorage.getItem("product")),
        price = JSON.parse(localStorage.getItem('price'));

    let Q = product.length;

    for (let i = 0; i < Q; i++) {

        let row = document.createElement('tr');

        let cellproduct = document.createElement('td'),
            cellprice = document.createElement('td');

        let txtproduct = document.createTextNode(product[i]),
            txtprice = document.createTextNode(price[i]);

        cellproduct.appendChild(txtproduct);
        cellprice.appendChild(txtprice);

        row.appendChild(cellproduct);
        row.appendChild(cellprice);

        tbody.appendChild(row);
    };
};



/*
output();

function output() {

    let tbody = document.querySelector('tbody');

    tbody.innerHTML = '';


    let id = JSON.parse(localStorage.getItem("id")),
        title = JSON.parse(localStorage.getItem('title')),
        author = JSON.parse(localStorage.getItem('author'));

    let Q = id.length;

    for (let i = 0; i < Q; i++) {

        let row = document.createElement('tr');

        let cellid = document.createElement('td'),
            celltitle = document.createElement('td'),
            cellauthor = document.createElement('td');

        let txtid = document.createTextNode(id[i]),
            txttitle = document.createTextNode(title[i]),
            txtauthor = document.createTextNode(author[i]);

        cellid.appendChild(txtid);
        celltitle.appendChild(txttitle);
        cellauthor.appendChild(txtauthor);

        row.appendChild(cellid);
        row.appendChild(celltitle);
        row.appendChild(cellauthor);

        tbody.appendChild(row);
    };
};
*/