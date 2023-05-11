let category = "";
let switchValue = false;
const categoryButtons = document.querySelectorAll("[data-category-button]");
const darkModeDarkerElements = document.querySelectorAll("[darker]");
const darkModeToggle = document.getElementById("toggleSwitch");
const toDarkElements = document.querySelectorAll("[dark-mode]");
const darkModeHighlights = document.querySelectorAll("[highlight]");
const toYellow = document.querySelectorAll("[to-yellow]");
const item = document.getElementsByClassName("item");
const list = document.getElementsByClassName("navbuttons-container");
const bagIcon = document.getElementsByClassName("fa-bag-shopping");
const modalSection = document.getElementsByClassName("shopping-cart-modal");
/* 
console.log(item); */

darkModeToggle.addEventListener("click", () => {
  toDarkElements.forEach((element) => {
    element.classList.toggle("dark-mode");
  });

  darkModeDarkerElements.forEach((element) => {
    element.classList.toggle("darker");
  });

  darkModeHighlights.forEach((element) => {
    element.classList.toggle("highlight");
  });

  toYellow.forEach((element) => {
    element.classList.toggle("to-yellow");
  });

  categoryButtons.forEach((element) => {
    element.classList.toggle("highlight");
  });

  item.forEach((element) => {
    element.classList.toggle("grey-background");
  });

  bagIcon.forEach((element) => {
    element.classList.toggle("highlight");
  });

  item.forEach((element) => {
    element.classList.add("grey-background");
  });

  modalSection.classList.toggle("dark-mode");
});
// const categoryButtons = document.querySelectorAll("[data-category-button]");
// categoryButtons.forEach((button) => {
//   button.addEventListener("click", (event) => {
//     const buttonClicked = event.target.textContent;
//     category = "";
//     category += buttonClicked;
//     switch (category) {
//       case "women's clothing":
//         console.log(category);
//         break;
//       case "men's clothing":
//         console.log(category);
//         break;
//       case "jewelery":
//         console.log(category);
//         break;
//       case "electronics":
//         console.log(category);
//         break;
//     }
//   });
// });
const filterAndUpdateItems = () => {
  filterItemsByCategory(product1, category);
  updateItemsList(filteredItems);
};
const filterItemsByCategory = (items, category) => {
  const filteredItems = items.filter((item) => item.category === category);
  return filteredItems;
};

const fetchNewProduct1 = async () => {
  const response1 = fetch("https://fakestoreapi.com/products");
  const data1 = (await response1).json();
  return data1;
};

const updateItemsList = async (product) => {
  product.forEach(function (product) {
    const card = document.createElement("div");
    card.classList.add(`item`);
    card.id = `card-container`;

    const image = document.createElement("img");
    image.src = product.image;
    image.classList.add("image-added");

    const title = document.createElement("h5");
    title.textContent = product.title;
    title.classList.add("title1");

    /* const unit = document.createElement("span");
    unit.textContent = "$"; */

    const price = document.createElement("p");
    price.textContent = `$ ${product.price}`;
    price.classList.add("price");

    const addToCartBtn = document.createElement("button");

    addToCartBtn.classList.add("add-cart-button1");
    addToCartBtn.classList.add(`${product.price}`);
    addToCartBtn.textContent = "Add to Cart";

    document.getElementById("product-list").appendChild(card);
    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(price);
    card.appendChild(addToCartBtn);
  });
  selectItems();
};
const updateItemsList2 = (product) => {
  product.forEach(function (product2) {
    const card = document.createElement("div");
    card.classList.add("item");
    card.id = `card-container`;

    const image = document.createElement("img");
    image.src = product2.images[0];

    const title = document.createElement("h5");
    title.id = "title-id";
    title.textContent = product2.title;

    const price = document.createElement("p");
    price.textContent = `$ ${product2.price}`;

    const addToCartBtn = document.createElement("button");
    addToCartBtn.id = "button-id";

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
const generateProducts1 = async () => {
  const data1 = await fetchNewProduct1();
  const product1 = data1;
  updateItemsList(product1);
  categoryButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const buttonClicked = event.target.textContent;
      category = "";
      category += buttonClicked;
      switch (category) {
        case "women's clothing":
          let itemCards = document.querySelectorAll("item");
          console.log(itemCards);
          ``;
          var filteredItems = filterItemsByCategory(product1, category);
          updateItemsList(filteredItems);
          break;
        case "men's clothing":
          var filteredItems = filterItemsByCategory(product1, category);
          updateItemsList(filteredItems);
          break;
        case "jewelery":
          var filteredItems = filterItemsByCategory(product1, category);
          updateItemsList(filteredItems);
          break;
        case "electronics":
          var filteredItems = filterItemsByCategory(product1, category);
          updateItemsList(filteredItems);
          break;
        default:
          return;
      }
    });
  });

  // let filteredItems = filterItemsByCategory(product1, category);
  // updateItemsList(filteredItems);
  // category = "women's clothing"
  // let filteredItems = filterItemsByCategory(product1, category);
  // product1.forEach(function (product) {
  // product1.forEach(function (product) {
  // const card = document.createElement("div");
  // card.classList.add("item");

  // const image = document.createElement("img");
  // image.src = product.image;

  // const title = document.createElement("h5");
  // title.textContent = product.title;
  // title.classList.add("title1");

  // const price = document.createElement("p");
  // price.textContent = `$ ${product.price}`;

  // const addToCartBtn = document.createElement("button");

  // addToCartBtn.classList.add("add-cart-button1");
  // addToCartBtn.classList.add(`${product.price}`);
  // addToCartBtn.textContent = "Add to Cart";

  /*   const addBtn = document.querySelector("add-cart-button");

    addBtn.addEventListener("click", (add) => {
      console.log("Hey");
    }); */

  // document.getElementById("product-list").appendChild(card);
  // card.appendChild(image);
  // card.appendChild(title);
  // card.appendChild(price);
  // card.appendChild(addToCartBtn);
  //   });
  // };
};

generateProducts1();

//Second Set of Product API

// const fetchNewProduct2 = async () => {
//   const response2 = fetch("https://dummyjson.com/products");
//   const data2 = (await response2).json();
//   return data2;
// };

// const generateProducts2 = async () => {
//   const data2 = await fetchNewProduct2();
//   const product2 = data2.products;
//   updateItemsList2(product2);
// };
// generateProducts2();

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

const selectItems2 = () => {
  let button = document.getElementsByClassName("add-cart-button2");

  Object.keys(button).forEach((key) => {
    let accessedButtons = button[key];
    accessedButtons.addEventListener("click", () => {
      let item = accessedButtons.parentElement.innerText;
      console.log(item);
    });
  });
};

const selectItems = () => {
  let button = document.getElementsByClassName("add-cart-button1");

  Object.keys(button).forEach((key) => {
    let accessedButtons = button[key];
    accessedButtons.addEventListener("click", () => {
      let item = accessedButtons.parentElement;
      let title = item.getElementsByClassName("title1")[0].innerText;
      let price = item.getElementsByClassName("price")[0].innerText;
      let imageSource = item.getElementsByClassName("image-added")[0].src;
      /* console.log(imageSource); */
      const uL = document.getElementsByClassName("cart-items-list")[0];
      const createdLi = document.createElement("li");
      createdLi.classList.add(`cart-item`);
      uL.appendChild(createdLi);
      const image = document.createElement("img");
      image.src = item.getElementsByClassName("image-added")[0].src;
      createdLi.appendChild(image);
      /*     console.log(uL); */
      const h3 = document.createElement("h3");
      h3.textContent = title;
      createdLi.appendChild(h3);
      const p = document.createElement("p");
      p.classList.add(`item-price`);
      p.textContent = price;
      createdLi.appendChild(p);
      let removeBtn = document.createElement("button");
      removeBtn.textContent = "Remove";
      removeBtn.classList.add(`remove-button1`);
      createdLi.appendChild(removeBtn);
      remove(removeBtn, accessedButtons);
      /* let remove = document.getElementsByClassName(`remove-button1`);
      removeItem(remove, accessedButtons); */
      /*   const unorderedList = document.getElementsByClassName("cart-items-list");
      const list = document.createElement("li");
      list.classList.add = "cart-item";
      const image = document.createElement("img");
      image.src = item.getElementsByClassName("image-added").src;
      unorderedList.append(list);
      list.append(image); */

      accessedButtons.style.backgroundColor = "#74d762";
      accessedButtons.innerText = "Added to Cart";
      accessedButtons.disabled = true;
      //
    });
  });
};

//REMOVE BUTTON AND CHECKOUT INFORMATION (NUMBER OF ITEMS AND TOTAL PRICE)
const remove = (removeBtn, accessedButtons) => {
  let totalItems = document.getElementById("numberOfItemsContent");
  let liListLength = document.getElementsByClassName("cart-item").length;
  totalItems.innerText = `${liListLength}`;
  //TOTAL PRICE
  let allContainer = document.querySelectorAll(".item-price");
  let arrrayItems = [0];
  Object.keys(allContainer, arrrayItems).forEach((key) => {
    let accessedButton = allContainer[key];
    let itemPrice = parseFloat(
      accessedButton.innerText.replace(/[^\w .]/g, "")
    );

    arrrayItems.push(itemPrice);
  });
  let sumOfPrices = arrrayItems.reduce((x, y) => x + y).toPrecision(5);
  console.log(sumOfPrices);

  let displayTotal = document.getElementById("totalContent");
  displayTotal.textContent = `$ ${sumOfPrices}`;

  /*  let targetPrice = targetLi.getElementsByClassName("item-price")[0];
  console.log(targetPrice); */
  /*  console.log(targetLi); */

  /*   allItemlist.forEach(() => {
    let singleItemPrice = document.getElementsByClassName("item-price")[0];
    console.log(singleItemPrice);
  }); */

  /*  let singleItem = parseFloat(
    Object.values(singleItemPrice)[0].innerText.replace(/[^\w .]/g, "")
  );

  console.log(singleItem); */

  /*   toObject.map((key) => {
    let itemPrice = parseFloat(
      singleItemPrice[key].innerText.replace(/[^\w .]/g, "")
    );
    console.log(itemPrice);
  }); */
  ///////////
  /*   Object.keys(singleItemPrice).forEach((key) => {
    let itemPrice = parseFloat(
      singleItemPrice[key].innerText.replace(/[^\w .]/g, "")
    );
    console.log(itemPrice);
  }); */

  //TOTAL

  //REMOVE BUTTON IS CLICKED
  removeBtn.addEventListener("click", () => {
    removeBtn.parentElement.remove();
    accessedButtons.style.backgroundColor = "#fb765b";
    accessedButtons.innerText = "Add to Cart";
    accessedButtons.disabled = false;
    const totalItems = document.getElementById("numberOfItemsContent");
    const liList = document.getElementsByClassName("cart-item").length;
    totalItems.innerText = `${liList}`;

    //UPDATE TOTAL
    let allContainer = document.querySelectorAll(".item-price");
    let arrrayItems = [0];

    Object.keys(allContainer, arrrayItems).forEach((key) => {
      let accessedButton = allContainer[key];
      let itemPrice = parseFloat(
        accessedButton.innerText.replace(/[^\w .]/g, "")
      );

      arrrayItems.push(itemPrice);
    });
    let sumOfPrices = arrrayItems.reduce((x, y) => x + y).toPrecision(5);

    console.log(sumOfPrices);
    console.log(arrrayItems.length);
    let displayTotal = document.getElementById("totalContent");
    if (arrrayItems.length === 0) {
      displayTotal.textContent = `0`;
    } else {
      displayTotal.textContent = `$ ${sumOfPrices}`;
    }
  });
};
