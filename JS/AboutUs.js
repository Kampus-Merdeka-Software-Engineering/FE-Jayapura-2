document.addEventListener("DOMContentLoaded", function () {

    const toggleBtn = document.querySelector('.navbarbutton1')
    const toggleBtnImg = document.querySelector('.navbarbutton1 img')
    const dropDownMenu = document.querySelector('.dropdown-menu')
    const overlay = document.querySelector('.overlay')
    let isOpen = false;

    toggleBtn.addEventListener('click', function () {
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

/*document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#show-login").addEventListener("click", function () {
        document.querySelector(".popup").classList.add("active");
    });
    document.querySelector(".popup .close-btn").addEventListener("click", function () {
        document.querySelector(".popup").classList.remove("active");
    });
});*/