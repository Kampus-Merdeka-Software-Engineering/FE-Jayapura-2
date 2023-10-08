document.addEventListener("DOMContentLoaded", function() {

  const toggleBtn = document.querySelector('.navbarbutton1')
  const toggleBtnImg = document.querySelector('.navbarbutton1 img')
  const dropDownMenu =document.querySelector('.dropdown-menu')
  const overlay =document.querySelector('.overlay')
  let isOpen =false;
  
  toggleBtn.addEventListener('click', function() {
      isOpen = !isOpen;
      dropDownMenu.classList.toggle('open', isOpen);
      toggleBtnImg.src = isOpen ? '../Assets/x-solid.svg' : '../Assets/bars-solid.svg';
      if (isOpen) {
          toggleBtnImg.style.width = '25px'; // Ganti dengan ukuran yang Anda inginkan
          toggleBtnImg.style.height = '25px'; // Ganti dengan ukuran yang Anda inginkan
          overlay.style.filter = 'blur(10px)';
          
      } else {
          toggleBtnImg.style.width = '30px'; // Ganti dengan ukuran asli
          toggleBtnImg.style.height = '30px'; // Ganti dengan ukuran asli
          overlay.style.filter = 'blur(0px)';
      }
  });
  });

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#show-login").addEventListener("click", function () {
        document.querySelector(".popup").classList.add("active");
    });
    document.querySelector(".popup .close-btn").addEventListener("click", function () {
        document.querySelector(".popup").classList.remove("active");
    });
    // document.querySelector("#showOverlay").addEventListener("click", function () {
    //     document.querySelector(".overlay").classList.add("active");
    // });
    document.querySelector(".overlay .closeOverlay").addEventListener("click", function () {
        document.querySelector(".overlay").classList.remove("active");
    });
});

document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector(".overlay .closeOverlay")
    .addEventListener("click", function () {
      document.querySelector(".overlay").classList.remove("active");
    });
});

function popup(product) {
  document.querySelector(".overlay").classList.add("active");
  const productJSON = JSON.parse(product);
  console.log(productJSON)
  
  document.querySelector("#gambar-produk1").src = productJSON.listImage[0];
  document.querySelector("#gambar-produk2").src = productJSON.listImage[1];
  document.querySelector("#gambar-produk3").src = productJSON.listImage[2];

  document.querySelector("#nama-produk").innerHTML = productJSON.name;
  document.querySelector("#harga-produk").innerHTML = productJSON.price;
}

function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Shorthand for $( document ).ready()
$(function () {
  console.log("ready!");

  var urlParams = new URLSearchParams(window.location.search);
  const getCategory = urlParams.get("category")
    ? urlParams.get("category")
    : "man";

  // if (urlParams.get('category')) {
  //    getCategory = urlParams.get('category')
  //  }else {
  //    getCategory = 'man'
  //  }

  let listContainer = document.querySelector(".container2");
  let list = document.querySelector(".list");
  let listCard = document.querySelector(".listCard");
  let body = document.querySelector("body");

  let listCards = [];
  function initApp(products) {
    console.log("products", products);
    products.forEach((value, key) => {
      console.log("value")
      console.log(value);
      let newDiv = document.createElement("div");
      newDiv.classList.add("item");
      newDiv.innerHTML = `
            <img id="klik" src="../Assets/${
              value.image
            }" onclick="popup('${escapeHtml(JSON.stringify(value))}')">
            <div class="title">${value.nama}</div>
            <div class="price">${value.harga.toLocaleString()}</div>`;
      list.appendChild(newDiv);
    });
  }

  // ga digunakan kalau sudah pakai api
  //const products = getCategory === 'man' ? productsMan : productsWoman

  function getProducts() { 
    fetch("http://localhost:3333/products")
          .then(res => res.json())     
          .then(function(data){
            console.log(data);
            console.log("======")
            initApp(data);
          });

  }

  getProducts(productsMan);
  // initApp(productsMan);
  // ga digunakan kalau sudah pakai api

  // $.get(`https://merdeka.free.beeceptor.com/products?category=${getCategory}`, function(response){
  // $.get(`/api/products?category=${getCategory}`, function(response){
  //       initApp(response);
  // });
});
