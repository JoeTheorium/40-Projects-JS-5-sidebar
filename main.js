const bars = document.getElementById("bars");
const close = document.getElementById("close");
const links = document.getElementById("links");

function toggleMenu() {
    bars.classList.toggle("close");
    close.classList.toggle("close");
    links.classList.toggle("show");
}

bars.addEventListener("click", toggleMenu);

close.addEventListener("click", toggleMenu);

/* CÓDIGO ANTIGUO:
const bars = document.getElementById("bars");
const close = document.getElementById("close");
const links = document.getElementById("links");

bars.addEventListener("click", function() {
    bars.classList.toggle("close");
    close.classList.toggle("close");
    links.classList.toggle("show");
})

close.addEventListener("click", function() {
    close.classList.toggle("close");
    bars.classList.toggle("close");
    links.classList.toggle("show");
})
*/