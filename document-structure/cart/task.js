const cartProducts = document.querySelector('.cart__products');
const addBtn = document.querySelectorAll(".product__add")
const productCollection = document.querySelectorAll(".product")
const minus = Array.from(document.querySelectorAll(".product__quantity-control_dec"))
const plus = Array.from(document.querySelectorAll(".product__quantity-control_inc"))
const productCount = Array.from(document.querySelectorAll(".product__quantity-value"))

minus.forEach((i, index) => {
    i.addEventListener("click", () => {
        if (productCount[index].textContent != 1) productCount[index].textContent--; 
        else return; 
    })
})
plus.forEach((i, index) => {
    i.addEventListener("click", () => {
        productCount[index].textContent++;
    })
})

    
productCollection.forEach((i, index) => {
    addBtn[index].addEventListener("click", () => {
        let id = i.getAttribute("data-id")
        let img = i.children[1].getAttribute("src")

        const products = [...document.getElementsByClassName('cart__product')];
		const product = products.find(product => product.dataset.id == id);

		if (product) {
			let child = product.children[1];
			child.textContent = +child.textContent + +productCount[index].textContent;
		} else {
			cartProducts.insertAdjacentHTML('afterBegin', `
    <div class="cart__product" data-id="${id}">
      <img class="cart__product-image" src="${img}">
      <div class="cart__product-count">${productCount[index].textContent}</div>
    </div>`);
		}
		productCount[index].textContent = 1;
    })
})
