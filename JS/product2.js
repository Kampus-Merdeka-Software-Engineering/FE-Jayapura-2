document.addEventListener("DOMContentLoaded", function () {
  let listContainer = document.querySelector(".container2");
  let list = document.querySelector(".list");
  let listCard = document.querySelector(".listCard");
  let body = document.querySelector("body");

  let products = [
    {
      id: 1,
      name: "Arjuna Batik Shirt",
      image: "Batik Pria/Arjuna Batik Shirt.jpg",
      price: 120000,
    },
    {
      id: 2,
      name: "Black Shirt with Chestnut Splash",
      image: "Batik Pria/Black Shirt with Chestnut Splash.jpg",
      price: 145000,
    },
    {
      id: 3,
      name: "Sunshine Elegnace Batik Shirt",
      image: "Batik Pria/Sunshine Elegnace Batik Shirt.jpg",
      price: 195000,
    },
    {
      id: 4,
      name: "Lanange Silver Mist Shirt",
      image: "Batik Pria/Lanange Silver Mist Shirt 1.jpg",
      price: 180000,
    },
    {
      id: 5,
      name: "Lanange Tropical Sunrise Shirt",
      image: "Batik Pria/Lanange Tropical Sunrise Shirt3.jpg",
      price: 185000,
    },
    {
      id: 6,
      name: "Mocha Noir Shirt",
      image: "Batik Pria/Mocha Noir Shirt.jpg",
      price: 185000,
    },
  ];
  let listCards = [];
  function initApp() {
    products.forEach((value, key) => {
      let newDiv = document.createElement("div");
      newDiv.classList.add("item");
      newDiv.innerHTML = `
            <img src="../Assets/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>`;
      list.appendChild(newDiv);
    });
  }
  initApp();
});
