const categoryButtons = document.querySelectorAll("[data-category-button]");
categoryButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const buttonClicked = event.target.textContent;
    category = buttonClicked;
    return category;
  });
});

const filterItemsByCategory = (items, category) => {
  const filteredItems = items.filter((item) => item.category === category);
  return filteredItems;
};

const fetchNewProduct1 = async () => {
  const response1 = fetch("https://fakestoreapi.com/products");
  const data1 = (await response1).json();
  return data1;
};

const generateProducts1 = async () => {
  const data1 = await fetchNewProduct1();
  const product1 = data1;
  category = "women's clothing";
  let filteredItems = filterItemsByCategory(product1, category);
  // console.log(filteredItems);
  // currently trying out the filter function here
  filteredItems.forEach(function (product) {
    // product1.forEach(function (product) {
    const card = document.createElement("div");
    card.classList.add("item");

    const image = document.createElement("img");
    image.src = product.image;

    const title = document.createElement("h5");
    title.textContent = product.title;
    title.classList.add("title1");

    const price = document.createElement("p");
    price.textContent = `$ ${product.price}`;

    const addToCartBtn = document.createElement("button");

    addToCartBtn.classList.add("add-cart-button1");
    addToCartBtn.classList.add(`${product.price}`);
    addToCartBtn.textContent = "Add to Cart";

    /*   const addBtn = document.querySelector("add-cart-button");

    addBtn.addEventListener("click", (add) => {
      console.log("Hey");
    }); */

    document.getElementById("product-list").appendChild(card);
    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(price);
    card.appendChild(addToCartBtn);
  });
};

generateProducts1();

//Second Set of Product API

const fetchNewProduct2 = async () => {
  const response2 = fetch("https://dummyjson.com/products");
  const data2 = (await response2).json();
  return data2;
};

const generateProducts2 = async () => {
  const data2 = await fetchNewProduct2();
  const smartphone = data2.filter(
    (product) => product.category === "smartphones"
  );
  const product2 = data2.products;
  product2.forEach(function (product2) {
    const card = document.createElement("div");
    card.classList.add("item");

    const image = document.createElement("img");
    image.src = product2.images[0];

    const title = document.createElement("h5");
    title.textContent = product2.title;

    const price = document.createElement("p");
    price.textContent = `$ ${product2.price}`;

    const addToCartBtn = document.createElement("button");

    addToCartBtn.classList.add("add-cart-button2");
    addToCartBtn.classList.add(`${product2.price}`);
    addToCartBtn.textContent = `Add to Cart`;

    document.getElementById("product-list").appendChild(card);
    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(price);
    card.appendChild(addToCartBtn);
  });
};
generateProducts2();

//Modal
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");
const modal = document.querySelector(".shopping-cart-modal");

openModal.addEventListener("click", (add) => {
  modal.style.display = "flex";
});

closeModal.addEventListener("click", (add) => {
  modal.style.display = "none";
});

//Add to cart

/* function addToCart(event) {
  let button = event.target;
  let shopItem = button.parentElement;
  let title = shopItem.querySelector(".add-cart-button");
  console.log(title);
} */

let button1 = document.getElementsByClassName("add-cart-button1");
let button2 = document.getElementsByClassName("add-cart-button2");

let shopItem = button1.parentElement;
console.log(shopItem);
/* let title = shopItem.getElementsByClassName("title1");
console.log(title); */
