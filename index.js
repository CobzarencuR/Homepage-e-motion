/* First slider & <- -> arrows*/
let slideIndex = 1;

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slider-image");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

/* Burger menu */
document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.querySelector('.burger-menu');
    const nav = document.querySelector('.nav');

    burgerMenu.addEventListener('click', function () {
        nav.classList.toggle('active');
    });
});

/* Dots color for the 5 hover images */
document.addEventListener('DOMContentLoaded', () => {
    let productTypes = document.getElementsByClassName("product-types");
    let dots = document.getElementsByClassName("benefits-dot");

    for (let i = 0; i < productTypes.length; i++) {
        productTypes[i].addEventListener('mouseover', function () {
            for (let j = 0; j < dots.length; j++) {
                dots[j].classList.remove("active");
            }
            dots[i].classList.add("active");
        });

        productTypes[i].addEventListener('mouseout', function () {
            dots[i].classList.remove("active");
        });
    }
});

/* <- -> arrows for the first slider with products */
let slideIndex1 = 0;

function plusSlides1(n) {
    let slides = document.getElementsByClassName("product-slide");
    let totalSlides = slides.length;

    for (let i = 0; i < totalSlides; i++) {
        slides[i].classList.remove("active");
    }

    slideIndex1 = (slideIndex1 + n + totalSlides) % totalSlides;

    slides[slideIndex1].classList.add("active");
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementsByClassName("product-slide")[slideIndex1].classList.add("active");
});

/* <- -> arrows for the second slider with products */
let slideIndex2 = 0;

function plusSlides2(n) {
    let slides = document.getElementsByClassName("product-slide2");
    let totalSlides = slides.length;

    for (let i = 0; i < totalSlides; i++) {
        slides[i].classList.remove("active");
    }

    slideIndex2 = (slideIndex2 + n + totalSlides) % totalSlides;

    slides[slideIndex2].classList.add("active");
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementsByClassName("product-slide2")[slideIndex2].classList.add("active");
});

/* <- -> arrows for the third slider with products */
let slideIndex3 = 0;

function plusSlides3(n) {
    let slides = document.getElementsByClassName("product-slide3");
    let totalSlides = slides.length;

    for (let i = 0; i < totalSlides; i++) {
        slides[i].classList.remove("active");
    }

    slideIndex3 = (slideIndex3 + n + totalSlides) % totalSlides;

    slides[slideIndex3].classList.add("active");
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementsByClassName("product-slide3")[slideIndex3].classList.add("active");
});

/* Dots color for the blog slider */
document.addEventListener('DOMContentLoaded', () => {
    let blogPosts = document.getElementsByClassName("blog-post");
    let dots = document.getElementsByClassName("blog-dot");

    for (let i = 0; i < blogPosts.length; i++) {
        blogPosts[i].addEventListener('mouseover', function () {
            for (let j = 0; j < dots.length; j++) {
                dots[j].classList.remove("active");
            }
            dots[i].classList.add("active");
        });

        blogPosts[i].addEventListener('mouseout', function () {
            dots[i].classList.remove("active");
        });
    }
});

/* Dots color for the first product slider in mobile view */
document.addEventListener('DOMContentLoaded', () => {
    let productSlides = document.getElementsByClassName("product-slide");
    let dots = document.getElementsByClassName("products-dot");

    for (let i = 0; i < productSlides.length; i++) {
        productSlides[i].addEventListener('mouseover', function () {
            for (let j = 0; j < dots.length; j++) {
                dots[j].classList.remove("active");
            }
            dots[i].classList.add("active");
        });

        productSlides[i].addEventListener('mouseout', function () {
            dots[i].classList.remove("active");
        });
    }
});

/* Dots for the medical images */
document.addEventListener('DOMContentLoaded', () => {
    let medicalSlides = document.getElementsByClassName("images-container-phone");
    let dots = document.getElementsByClassName("medical-dot");

    for (let i = 0; i < medicalSlides.length; i++) {
        medicalSlides[i].addEventListener('mouseover', function () {
            for (let j = 0; j < dots.length; j++) {
                dots[j].classList.remove("active");
            }
            dots[i].classList.add("active");
        });

        medicalSlides[i].addEventListener('mouseout', function () {
            dots[i].classList.remove("active");
        });
    }
});

/* Dots for the blog slider in mobile view */
document.addEventListener('DOMContentLoaded', () => {
    let blogPhoneSlides = document.getElementsByClassName("blog-post-phone");
    let dots = document.getElementsByClassName("blog-dot-phone");

    for (let i = 0; i < blogPhoneSlides.length; i++) {
        blogPhoneSlides[i].addEventListener('mouseover', function () {
            for (let j = 0; j < dots.length; j++) {
                dots[j].classList.remove("active");
            }
            dots[i].classList.add("active");
        });

        blogPhoneSlides[i].addEventListener('mouseout', function () {
            dots[i].classList.remove("active");
        });
    }
});