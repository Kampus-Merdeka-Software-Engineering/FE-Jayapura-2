document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#show-login").addEventListener("click", function () {
        document.querySelector(".popup").classList.add("active");
    });
    document.querySelector(".popup .close-btn").addEventListener("click", function () {
        document.querySelector(".popup").classList.remove("active");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".img-slide");
    const navButtons = document.querySelectorAll(".nav-btn");
    const contents = document.querySelectorAll(".content");
    let currentSlide = 0;

    // Fungsi untuk menampilkan slide tertentu
    function showSlide(slideIndex) {
        slides.forEach((slide, index) => {
            if (index === slideIndex) {
                slide.classList.add("active");
                navButtons[index].classList.add("active");
                contents[index].style.display = "block"; // Tampilkan teks pada slide yang aktif
            } else {
                slide.classList.remove("active");
                navButtons[index].classList.remove("active");
                contents[index].style.display = "none"; // Sembunyikan teks pada slide lain
            }
        });

        // Menampilkan elemen .content yang sesuai dengan slide yang sedang aktif
        contents.forEach((content, index) => {
            if (index === slideIndex) {
                content.style.display = "block";
            } else {
                content.style.display = "none";
            }
        });
    }

    // Fungsi untuk pindah ke slide berikutnya
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Fungsi untuk memulai otomatisasi
    function startAutoSlide() {
        setInterval(nextSlide, 8000); // Ganti slide setiap 8 detik
    }

    // Event listener untuk tombol navigasi
    navButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            showSlide(index);
            currentSlide = index;
        });
    });

    // Memulai otomatisasi slide
    startAutoSlide();
    // Tampilkan teks pada slide pertama saat halaman dimuat
    showSlide(currentSlide);
});
