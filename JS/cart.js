document.addEventListener("DOMContentLoaded", function () {
  // Temukan elemen dengan kelas "quantity"
  const quantityElement = document.querySelector(".quantity");

  // Temukan tombol "Add to Cart" dengan kelas "checkout"
  const checkoutButton = document.querySelector(".checkout");

  // Inisialisasi variabel untuk menyimpan jumlah
  let quantity = 0;

  // Tambahkan event listener untuk mengubah teks saat tombol diklik
  checkoutButton.addEventListener("click", function () {
    // Tambahkan 1 ke variabel jumlah
    quantity++;

    // Ubah teks elemen dengan kelas "quantity" menjadi jumlah yang baru
    quantityElement.textContent = quantity.toString();
  });
});
