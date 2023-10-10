document.addEventListener("DOMContentLoaded", function () {
    // Kode JavaScript Anda di sini

    console.log('Script is running....');
    // Check if the user is logged in (you can use your own logic to determine this)
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    // Get the cart button element
    const cartLink = document.getElementById('cart-link');
    const productLink = document.getElementById('product-link');
    const aboutUsLink = document.getElementById('about-us-link');
    const contactLink = document.getElementById('contact-link');
    const privacyPolicyLink = document.getElementById('privacy-policy-link');
    const termsOfServiceLink = document.getElementById('terms-of-service-link');
    const dropdownCart = document.getElementById('dropdown-cart');
    const dropdownCartHome = document.getElementById('dropdown-cart-home');
    const carouselCart = document.getElementById('carousel-cart');
    const dropdownCarouselCart = document.getElementById('dropdown-carousel-cart');

    // Add a click event listener for cartLink
    if (cartLink) {
        cartLink.addEventListener('click', function () {
            if (isLoggedIn) {
                console.log('Redirecting to cart.html');
                window.location.href = './HTML/cart.html'; // Redirect to cart.html if logged in
            } else {
                console.log('Redirecting to Login2.html');
                window.location.href = './HTML/Login2.html'; // Redirect to Login2.html if not logged in
            }
        });
    }

    // Add a click event listener for productLink
    if (productLink) {
        productLink.addEventListener('click', function () {
            if (isLoggedIn) {
                console.log('Redirecting to cart.html');
                window.location.href = 'cart.html'; // Redirect to cart.html if logged in
            } else {
                console.log('Redirecting to Login2.html');
                window.location.href = 'Login2.html'; // Redirect to Login2.html if not logged in
            }
        });
    }


    if (aboutUsLink) {
        aboutUsLink.addEventListener('click', function () {
            if (isLoggedIn) {
                console.log('Redirecting to cart.html');
                window.location.href = 'cart.html'; // Redirect to cart.html if logged in
            } else {
                console.log('Redirecting to Login2.html');
                window.location.href = 'Login2.html'; // Redirect to Login2.html if not logged in
            }
        });
    }

    if (contactLink) {
        contactLink.addEventListener('click', function () {
            if (isLoggedIn) {
                console.log('Redirecting to cart.html');
                window.location.href = 'cart.html'; // Redirect to cart.html if logged in
            } else {
                console.log('Redirecting to Login2.html');
                window.location.href = 'Login2.html'; // Redirect to Login2.html if not logged in
            }
        });
    }

    if (privacyPolicyLink) {
        privacyPolicyLink.addEventListener('click', function () {
            if (isLoggedIn) {
                console.log('Redirecting to cart.html');
                window.location.href = 'cart.html'; // Redirect to cart.html if logged in
            } else {
                console.log('Redirecting to Login2.html');
                window.location.href = 'Login2.html'; // Redirect to Login2.html if not logged in
            }
        });
    }

    if (termsOfServiceLink) {
        termsOfServiceLink.addEventListener('click', function () {
            if (isLoggedIn) {
                console.log('Redirecting to cart.html');
                window.location.href = 'cart.html'; // Redirect to cart.html if logged in
            } else {
                console.log('Redirecting to Login2.html');
                window.location.href = 'Login2.html'; // Redirect to Login2.html if not logged in
            }
        });
    }

    if (dropdownCart) {
        dropdownCart.addEventListener('click', function () {
            if (isLoggedIn) {
                console.log('Redirecting to cart.html');
                window.location.href = 'cart.html'; // Redirect to cart.html if logged in
            } else {
                console.log('Redirecting to Login2.html');
                window.location.href = 'Login2.html'; // Redirect to Login2.html if not logged in
            }
        });
    }

    if (dropdownCartHome) {
        dropdownCartHome.addEventListener('click', function () {
            if (isLoggedIn) {
                console.log('Redirecting to cart.html');
                window.location.href = './HTML/cart.html'; // Redirect to cart.html if logged in
            } else {
                console.log('Redirecting to Login2.html');
                window.location.href = '/HTML/Login2.html'; // Redirect to Login2.html if not logged in
            }
        });
    }

    if (carouselCart) {
        carouselCart.addEventListener('click', function () {
            if (isLoggedIn) {
                console.log('Redirecting to cart.html');
                window.location.href = 'cart.html'; // Redirect to cart.html if logged in
            } else {
                console.log('Redirecting to Login2.html');
                window.location.href = 'Login2.html'; // Redirect to Login2.html if not logged in
            }
        });
    }


    if (dropdownCarouselCart) {
        dropdownCarouselCart.addEventListener('click', function () {
            if (isLoggedIn) {
                console.log('Redirecting to cart.html');
                window.location.href = 'cart.html'; // Redirect to cart.html if logged in
            } else {
                console.log('Redirecting to Login2.html');
                window.location.href = 'Login2.html'; // Redirect to Login2.html if not logged in
            }
        });
    }

});
