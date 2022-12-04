var count = sessionStorage.getItem('val');
var d, y, z, w, a, b, c, e, temp;

if (count == "second") {
    document.querySelector(".button-Third").style.display = "none";
    document.querySelector(".button-Fourth").style.display = "none";
} else if (count == "third") {
    document.querySelector(".button-Fourth").style.display = "none";
} else if (count == "fourth") {}

function colorrf() {
    d = sessionStorage.getItem('name1');
    y = sessionStorage.getItem('name2');
    z = sessionStorage.getItem('name3');
    w = sessionStorage.getItem('name4');

    sessionStorage.setItem("namefirst", d);
    sessionStorage.setItem("namesecond", y);
    sessionStorage.setItem("namethird", z);
    sessionStorage.setItem("namefourth", w);

    if (count == "second") {
        document.querySelector("#name1").innerHTML = d;
        document.querySelector("#name2").innerHTML = y;
    } else if (count == "third") {
        document.querySelector("#name1").innerHTML = d;
        document.querySelector("#name2").innerHTML = y;
        document.querySelector("#name3").innerHTML = z;
    } else if (count == "fourth") {
        document.querySelector("#name1").innerHTML = d;
        document.querySelector("#name2").innerHTML = y;
        document.querySelector("#name3").innerHTML = z;
        document.querySelector("#name4").innerHTML = w;
    }


    document.querySelector(".submitt").addEventListener("click", function() {
        a = document.querySelector(".button-first").value;
        b = document.querySelector(".button-Second").value;
        c = document.querySelector(".button-Third").value;
        e = document.querySelector(".button-Fourth").value;

        if (count == "second") {
            if (a === b) {
                alert("Same Color Selected!");
            } else {
                c,
                e = "";
                sessionStorage.setItem("color1", a);
                sessionStorage.setItem("color2", b);
                sessionStorage.setItem("color3", c);
                sessionStorage.setItem("color4", e);
                location.href = "ludo.html";
            }
        } else if (count == "third") {
            if (a === b || a === c || b === c) {
                alert("Same Color Selected!");
            } else {
                e = "";
                sessionStorage.setItem("color1", a);
                sessionStorage.setItem("color2", b);
                sessionStorage.setItem("color3", c);
                sessionStorage.setItem("color4", e);
                location.href = "ludo.html";
            }
        } else if (count == "fourth") {
            if (a === b || c === e || a === c || a === e || b === c || b === e) {
                alert("Same Color Selected!");
            } else {
                sessionStorage.setItem("color1", a);
                sessionStorage.setItem("color2", b);
                sessionStorage.setItem("color3", c);
                sessionStorage.setItem("color4", e);
                location.href = "ludo.html";
            }
        }
    });
}

private: function playername() {
    d = document.querySelector(".button-first").value;
    y = document.querySelector(".button-Second").value;
    z = document.querySelector(".button-Third").value;
    w = document.querySelector(".button-Fourth").value;
    sessionStorage.setItem("name1", d);
    sessionStorage.setItem("name2", y);
    sessionStorage.setItem("name3", z);
    sessionStorage.setItem("name4", w);
    location.href = "color.html";
}

sessionStorage.setItem("name5", count);