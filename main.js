const products = [
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
];

products.forEach(function (product) {
  const card = document.createElement("div");
  card.classList.add("item");

  const image = document.createElement("img");
  image.src = product.image;

  const title = document.createElement("h5");
  title.textContent = product.title;

  const price = document.createElement("p");
  price.textContent = product.price;

  document.getElementById("product-list").appendChild(card);
  card.appendChild(image);
  card.appendChild(title);
  card.appendChild(price);
});
