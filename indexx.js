var x;

document.querySelector(".button-first").addEventListener("click", function() {
    document.querySelector(".button").value = "first";
    x = document.querySelector(".button").value;
    sessionStorage.clear();
    sessionStorage.setItem("val", x);
});
document.querySelector(".button-Second").addEventListener("click", function() {

    document.querySelector(".button").value = "second";
    x = document.querySelector(".button").value;
    sessionStorage.clear();
    sessionStorage.setItem("val", x);
});
document.querySelector(".button-Third").addEventListener("click", function() {

    document.querySelector(".button").value = "third";
    x = document.querySelector(".button").value;
    sessionStorage.clear();
    sessionStorage.setItem("val", x);
});
document.querySelector(".button-Fourth").addEventListener("click", function() {

    document.querySelector(".button").value = "fourth";
    x = document.querySelector(".button").value;
    sessionStorage.clear();
    sessionStorage.setItem("val", x);
});