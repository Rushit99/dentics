const hamburger = document.querySelector(".hamburger");
const navbtn = document.querySelector(".navbtn");
const body = document.body;

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navbtn.classList.toggle("active");
    body.classList.toggle('disable-scroll');
} );

