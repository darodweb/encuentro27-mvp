const loadItems = () => {
    const mainSection = document.getElementById('main-section');

    for (let i = 0; i < products.length; i++) {
        const div = document.createElement('div');
        div.className = "product";

        const img = document.createElement('img');
        img.src = products[i].img;

        div.appendChild(img);

        const button = document.createElement('button');
        button.className = "add";
        button.textContent = "Agregar al carrito";
        button.id = products[i].id;

        const p = document.createElement('p');
        p.textContent = "$ " + products[i].precio;

        mainSection.appendChild(div);
        mainSection.appendChild(p);
        mainSection.appendChild(button);
    }
}

loadItems();