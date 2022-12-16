var x;

document.querySelector(".button-first").addEventListener("click", function() {
    document.querySelector(".button").value = 1;
    x = document.querySelector(".button").value;
    sessionStorage.clear();
    sessionStorage.setItem("val", x);
});
document.querySelector(".button-Second").addEventListener("click", function() {

    document.querySelector(".button").value = 2;
    x = document.querySelector(".button").value;
    sessionStorage.clear();
    sessionStorage.setItem("val", x);
});
document.querySelector(".button-Third").addEventListener("click", function() {

    document.querySelector(".button").value = 3;
    x = document.querySelector(".button").value;
    sessionStorage.clear();
    sessionStorage.setItem("val", x);
});
document.querySelector(".button-Fourth").addEventListener("click", function() {

    document.querySelector(".button").value = 4;
    x = document.querySelector(".button").value;
    sessionStorage.clear();
    sessionStorage.setItem("val", x);
});