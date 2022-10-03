// Open menu
document.getElementById("menu-open").onclick = function () {
    document.getElementById("navbarItems").classList.add("overlay-open");
};
// Close menu
document.getElementById("menu-close").onclick = function () {
    document.getElementById("navbarItems").classList.remove("overlay-open");
};
//Dark mode toggler
document.getElementById("darkModeToggler").onclick = function () {
    document.getElementById("myHTML").classList.toggle("dark");
};