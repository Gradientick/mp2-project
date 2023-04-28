/* const products = [
  {
    image: "https://picsum.photos/140",
    title: "Product",
    price: 123,
  },
  {
    image: "https://picsum.photos/140",
    title: "Product",
    price: 123,
  },
  {
    image: "https://picsum.photos/140",
    title: "Product",
    price: 123,
  },
  {
    image: "https://picsum.photos/140",
    title: "Product",
    price: 123,
  },
  {
    image: "https://picsum.photos/140",
    title: "Product",
    price: 123,
  },
  {
    image: "https://picsum.photos/140",
    title: "Product",
    price: 123,
  },
  {
    image: "https://picsum.photos/140",
    title: "Product",
    price: 123,
  },
  {
    image: "https://picsum.photos/140",
    title: "Product",
    price: 123,
  },
  {
    image: "https://picsum.photos/140",
    title: "Product",
    price: 123,
  },
  {
    image: "https://picsum.photos/140",
    title: "Product",
    price: 123,
  },
  {
    image: "https://picsum.photos/140",
    title: "Product",
    price: 123,
  },
  {
    image: "https://picsum.photos/140",
    title: "Product",
    price: 123,
  },
  {
    image: "https://picsum.photos/140",
    title: "Product",
    price: 123,
  },
  {
    image: "https://picsum.photos/140",
    title: "Product",
    price: 123,
  },
  {
    image: "https://picsum.photos/140",
    title: "Product",
    price: 123,
  },
  {
    image: "https://picsum.photos/140",
    title: "Product",
    price: 123,
  },
  {
    image: "https://picsum.photos/140",
    title: "Product",
    price: 123,
  },
  {
    image: "https://picsum.photos/140",
    title: "Product",
    price: 123,
  },
  {
    image: "https://picsum.photos/140",
    title: "Product",
    price: 123,
  },
  {
    image: "https://picsum.photos/140",
    title: "Product",
    price: 123,
  },
]; */

const categoryButtons = document.querySelectorAll("[data-category-button]");
categoryButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const buttonClicked = event.target.textContent;
  });
});

const filterResults = (buttonClicked) => {};

const fetchNewProduct1 = async () => {
  const response1 = fetch("https://fakestoreapi.com/products");
  const data1 = (await response1).json();
  return data1;
};

const generateProducts1 = async () => {
  const data1 = await fetchNewProduct1();
  const product1 = data1;
  product1.forEach(function (product) {
    const card = document.createElement("div");
    card.classList.add("item");

    const image = document.createElement("img");
    image.src = product.image;

    const title = document.createElement("h5");
    title.textContent = product.title;

    const price = document.createElement("p");
    price.textContent = `₱ ${product.price}`;

    const addToCartBtn = document.createElement("button");
    addToCartBtn.classList.add("add-cart-button");
    addToCartBtn.textContent = "Add to Cart";

    document.getElementById("product-list").appendChild(card);
    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(price);
    card.appendChild(addToCartBtn);
  });
};

generateProducts1();
