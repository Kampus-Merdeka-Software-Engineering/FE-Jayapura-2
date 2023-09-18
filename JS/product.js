const products = [
    {
      id: "content1",
      itemSrc: "../Assets/Semua Produk/Batik Puring Shirt 3.jpg",
      name: "Batik Puring Shirt",
      price: "Rp 450.000,00"
    },
    {
      id: "content2",
      itemSrc: "../Assets/Batik Pria/Arjuna Batik Shirt2.jpg",
      name: "Arjuna Batik Shirt",
      price: "Rp 450.000,00"
    },
    {
      id: "content3",
      itemSrc: "../Assets/Batik Pria/Black Shirt with Chestnut Splash 1.jpg",
      name: "Black Shirt with Chestnut Splash",
      price: "Rp 400.000,00"
    },
    {
      id: "content4",
      itemSrc: "../Assets/Batik Pria/Lanange Silver Mist Shirt.jpg",
      name: "Lanange Silver Mist Shirt",
      price: "Rp 250.000,00"
    },
    {
      id: "content5",
      itemSrc: "../Assets/Batik Pria/Lanange Tropical Sunrise Shirt1.jpg",
      name: "Lanange Tropical Sunrise Shirt",
      price: "Rp 450.000,00"
    },
    {
      id: "content6",
      itemSrc: "../Assets/Batik Pria/Mocha Noir Shirt.jpg",
      name: "Mocha Noir Shirt",
      price: "Rp 350.000,00"
    },
    {
      id: "content7",
      itemSrc: "../Assets/Semua Produk/Batik Songket Shirt .jpg",
      name: "Batik Songket Shirt",
      price: "Rp 350.000,00"
    },
    {
      id: "content8",
      itemSrc: "../Assets/Batik Pria/Sunshine Elegnace Batik Shirt 1.jpg",
      name: "Sunshine Elegnace Batik Shirt",
      price: "Rp 250.000,00"
    }
]

document.addEventListener("DOMContentLoaded", ()=>{
  console.log("Load Page")
  let container = document.getElementById("container");
    products.forEach((product, index)=>{
      let div = document.createElement("div");
      div.setAttribute("id", `${product.id}`);
      let img = document.createElement("img");
      img.setAttribute("class", "b");
      img.setAttribute("alt", "");
      img.setAttribute("src", `${product.itemSrc}`);
      div.appendChild(img);
      let imageDesc = document.createElement("div");
      imageDesc.setAttribute("class", "img-desc");
      let gambarLink = document.createElement("a");
      gambarLink.setAttribute("href", `#gambar-${index}`);
      let button = document.createElement("button");
      button.innerHTML = "DESCRIBE";
      gambarLink.appendChild(button);
      imageDesc.appendChild(gambarLink);
      div.appendChild(imageDesc);
      let h3 = document.createElement("h3");
      h3.innerHTML= `${product.name}`;
      let h5 = document.createElement("h5");
      h5.innerHTML= `${product.price}`;
      div.appendChild(h3);
      div.appendChild(h5);
      container.appendChild(div);
      // items.innerHTML+=`<div id=${product.id}>
      // <img class="b" src=${product.itemSrc} alt="">
      // <div class="img-desc">
      //   <a href="#gambar-${index}">
      //     <button>DESCRIBE</button>
      //   </a>
      // </div>
      // <h3>${product.name}</h3>
      // <h5>${product.price}</h5>
      // </div>`
    });

})

