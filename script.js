// =========================
// MOBILE MENU
// =========================

const menuBtn = document.getElementById("menuBtn");

const navLinks = document.getElementById("navLinks");


menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});



// =========================
// CLOSE MENU AFTER CLICK
// =========================

const links = document.querySelectorAll(".nav-links a");


links.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});



// =========================
// CONTACT FORM
// =========================

const contactForm =
    document.getElementById("contactForm");


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value;


    alert(
        "شكراً لك " + name + "، تم إرسال رسالتك بنجاح."
    );


    contactForm.reset();

});



// =========================
// CURRENT YEAR
// =========================

document.getElementById("year").textContent =
    new Date().getFullYear();