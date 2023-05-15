let category = "";
let switchValue = false;
const categoryButtons = document.querySelectorAll("[data-category-button]");
const darkModeDarkerElements = document.querySelectorAll("[darker]");
const darkModeToggle = document.getElementById("toggleSwitch");
const toDarkElements = document.querySelectorAll("[dark-mode]");
const toGrey = document.querySelectorAll("[to-grey]");
const darkModeHighlights = document.querySelectorAll("[highlight]");
const toYellow = document.querySelectorAll("[to-yellow]");
const item = document.querySelectorAll(".item");
const list = document.getElementsByClassName("navbuttons-container");
const bagIcon = document.getElementsByClassName("fa-bag-shopping");
const modalSection = document.getElementsByClassName("shopping-cart-modal");
const HeaderTitle = document.getElementById("header-text");
const purchaseButton = document.getElementById("purchase-button");
const cartPrice = document.getElementById("totalContent");
const closePopupButton = document.getElementById("close-popup-button");
const popupModal = document.getElementById("purchase-popup-modal");
const closePopup = document.querySelectorAll("#close-popup-button");
let popupAmount = document.getElementById("amount-to-pay");
HeaderTitle.addEventListener("click", () => window.scrollTo(0, 0));

// Dark Mode Feature
darkModeToggle.addEventListener("click", () => {
  toDarkElements.forEach((element) => {
    element.classList.toggle("dark-mode");
  });

  toGrey.forEach((element) => {
    element.classList.toggle("orange-background");
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
    element.classList.toggle("grey-background");
  });
});

// Filter List Feature
const filterAndUpdateItems = () => {
  filterItemsByCategory(product1, category);
  updateItemsList(filteredItems);
};
const filterItemsByCategory = (items, category) => {
  const filteredItems = items.filter((item) => item.category === category);
  return filteredItems;
};

// API Calling
const fetchNewProduct1 = async () => {
  const response1 = fetch("https://fakestoreapi.com/products");
  const data1 = (await response1).json();
  return data1;
};
const updateItemsList = async (product) => {
  product.forEach(function (product) {
    const card = document.createElement("div");
    card.classList.add(`item`);
    card.classList.add(`${product.category.replace(/[^A-Z0-9]+/gi, "_")}`);
    card.id = `card-container`;
    const image = document.createElement("img");
    image.src = product.image;
    image.classList.add("image-added");
    const title = document.createElement("h5");
    title.textContent = product.title;
    title.classList.add("title1");
    const price = document.createElement("p");
    price.textContent = `$${product.price}`;
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
const generateProducts1 = async () => {
  const data1 = await fetchNewProduct1();
  const product1 = data1;
  updateItemsList(product1);
  categoryButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const buttonClicked = event.target.textContent;
      //Men Clothes
      const menClothes = document.getElementsByClassName("men_s_clothing");
      const arrayMenClothes = Array.from(menClothes);
      //Jewelry
      const jewelry = document.getElementsByClassName("jewelery");
      const arrayJewelry = Array.from(jewelry);
      //Electronics
      const electronics = document.getElementsByClassName("electronics");
      const arrayElectronics = Array.from(electronics);
      //Women Clothes
      const womenClothes = document.getElementsByClassName("women_s_clothing");
      const arrayWomenClothes = Array.from(womenClothes);
      category = "";
      category += buttonClicked;
      switch (category) {
        case "women's clothing":
          var filteredItems = filterItemsByCategory(product1, category);
          //Men Clothes
          arrayMenClothes.forEach((arrayMenClothes) => {
            const menClass = arrayMenClothes;
            menClass.style.display = "none";
            /* console.log(menClass); */
          });
          //Women Clothes
          arrayWomenClothes.forEach((arrayWomenClothes) => {
            const womenClothesClass = arrayWomenClothes;
            womenClothesClass.style.display = "flex";
          });
          //Electronics
          arrayElectronics.forEach((arrayElectronics) => {
            const electronicsClass = arrayElectronics;
            electronicsClass.style.display = "none";
          });
          //Jewelry
          arrayJewelry.forEach((arrayJewelry) => {
            const jewelryClass = arrayJewelry;
            jewelryClass.style.display = "none";
          });
          button.disabled = true;
          break;
        case "men's clothing":
          var filteredItems = filterItemsByCategory(product1, category);
          //Men Clothes
          arrayMenClothes.forEach((arrayMenClothes) => {
            const menClass = arrayMenClothes;
            menClass.style.display = "flex";
            /* console.log(menClass); */
          });
          //Women Clothes
          arrayWomenClothes.forEach((arrayWomenClothes) => {
            const womenClothesClass = arrayWomenClothes;
            womenClothesClass.style.display = "none";
          });
          //Electronics
          arrayElectronics.forEach((arrayElectronics) => {
            const electronicsClass = arrayElectronics;
            electronicsClass.style.display = "none";
          });
          //Jewelry
          arrayJewelry.forEach((arrayJewelry) => {
            const jewelryClass = arrayJewelry;
            jewelryClass.style.display = "none";
          });
          button.disabled = true;
          break;
        case "jewelery":
          var filteredItems = filterItemsByCategory(product1, category);

          //Men Clothes
          arrayMenClothes.forEach((arrayMenClothes) => {
            const menClass = arrayMenClothes;
            menClass.style.display = "none";
            /* console.log(menClass); */
          });
          //Women Clothes
          arrayWomenClothes.forEach((arrayWomenClothes) => {
            const womenClothesClass = arrayWomenClothes;
            womenClothesClass.style.display = "none";
          });
          //Electronics
          arrayElectronics.forEach((arrayElectronics) => {
            const electronicsClass = arrayElectronics;
            electronicsClass.style.display = "none";
          });
          //Jewelry
          arrayJewelry.forEach((arrayJewelry) => {
            const jewelryClass = arrayJewelry;
            jewelryClass.style.display = "flex";
          });
          button.disabled = true;
          break;
        case "electronics":
          var filteredItems = filterItemsByCategory(product1, category);
          //Men Clothes
          arrayMenClothes.forEach((arrayMenClothes) => {
            const menClass = arrayMenClothes;
            menClass.style.display = "none";
            /* console.log(menClass); */
          });
          //Women Clothes
          arrayWomenClothes.forEach((arrayWomenClothes) => {
            const womenClothesClass = arrayWomenClothes;
            womenClothesClass.style.display = "none";
          });
          //Electronics
          arrayElectronics.forEach((arrayElectronics) => {
            const electronicsClass = arrayElectronics;
            electronicsClass.style.display = "flex";
          });
          //Jewelry
          arrayJewelry.forEach((arrayJewelry) => {
            const jewelryClass = arrayJewelry;
            jewelryClass.style.display = "none";
          });
          button.disabled = true;
          break;
        ///
        case "All PRODUCTS":
          var filteredItems = filterItemsByCategory(product1, category);
          //Men Clothes
          arrayMenClothes.forEach((arrayMenClothes) => {
            const menClass = arrayMenClothes;
            menClass.style.display = "flex";
            /* console.log(menClass); */
          });
          //Women Clothes
          arrayWomenClothes.forEach((arrayWomenClothes) => {
            const womenClothesClass = arrayWomenClothes;
            womenClothesClass.style.display = "flex";
          });
          //Electronics
          arrayElectronics.forEach((arrayElectronics) => {
            const electronicsClass = arrayElectronics;
            electronicsClass.style.display = "flex";
          });
          //Jewelry
          arrayJewelry.forEach((arrayJewelry) => {
            const jewelryClass = arrayJewelry;
            jewelryClass.style.display = "flex";
          });
          button.disabled = true;
          break;
        default:
          return;
      }
    });
  });
};
generateProducts1();

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

const selectItems = () => {
  let button = document.getElementsByClassName("add-cart-button1");

  Object.keys(button).forEach((key) => {
    let accessedButtons = button[key];
    accessedButtons.addEventListener("click", () => {
      let item = accessedButtons.parentElement;
      let title = item.getElementsByClassName("title1")[0].innerText;
      let price = item.getElementsByClassName("price")[0].innerText;
      const uL = document.getElementsByClassName("cart-items-list")[0];
      const createdLi = document.createElement("li");
      createdLi.classList.add(`cart-item`);
      uL.appendChild(createdLi);
      const image = document.createElement("img");
      image.classList.add("modal-image");
      image.src = item.getElementsByClassName("image-added")[0].src;
      createdLi.appendChild(image);
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

      accessedButtons.style.backgroundColor = "#74d762";
      accessedButtons.innerText = "Added to Cart";
      accessedButtons.disabled = true;
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

  //REMOVE ALL
  const removeAll = document.querySelector(".remove-all");
  removeAll.addEventListener("click", () => {
    let toBeRemoved = document.querySelectorAll(".remove-button1");
    Object.keys(toBeRemoved).forEach((key) => {
      let singleRemove = toBeRemoved[key];
      singleRemove.parentElement.remove();
      /*  accessedButtons.style.backgroundColor = "#fb765b";
      accessedButtons.innerText = "Add to Cart";
      accessedButtons.disabled = false; */
    });

    let addButtonAfterRemoveAll =
      document.querySelectorAll(".add-cart-button1");
    Object.keys(addButtonAfterRemoveAll).forEach((key) => {
      let changeAllAddButtons = addButtonAfterRemoveAll[key];
      changeAllAddButtons.style.backgroundColor = "#fb765b";
      changeAllAddButtons.innerText = "Add to Cart";
      changeAllAddButtons.disabled = false;
    });

    /* removeBtn.parentElement.remove(); */

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
    // console.log(sumOfPrices);
    // console.log(arrrayItems.length);
    let displayTotal = document.getElementById("totalContent");
    if (arrrayItems.length === 0) {
      displayTotal.textContent = `0`;
    } else {
      displayTotal.textContent = `$ ${sumOfPrices}`;
    }
  });
};

// Update thank you page
purchaseButton.addEventListener("click", () => {
  // console.log(cartPrice.innerText);
  let orderPrice = "";

  if (cartPrice.textContent === "") return;
  else orderPrice = cartPrice.textContent;
  modal.style.display = "none";
  popupModal.style.display = "flex";
  popupAmount.textContent = orderPrice;
});

closePopup.forEach((button) => {
  button.addEventListener("click", () => {
    popupModal.style.display = "none";
    window.location.reload();
  });
});
