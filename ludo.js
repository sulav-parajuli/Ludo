var count = sessionStorage.getItem('name5');
var a = sessionStorage.getItem('color1');
var b = sessionStorage.getItem('color2');
var c = sessionStorage.getItem('color3');
var d = sessionStorage.getItem('color4');
var x = sessionStorage.getItem('namefirst');
var y = sessionStorage.getItem('namesecond');
var z = sessionStorage.getItem('namethird');
var w = sessionStorage.getItem('namefourth');
var value, score, col, greatvalue, pos, pos1, pos2, pos3,
    tempcol, done = 0,
    temp, turn = 1,
    time,
    selector, selector1, selector2, selector3;
touch = 0,
    gs = [0, 0, 0, 0],
    rs = [0, 0, 0, 0],
    ys = [0, 0, 0, 0],
    bs = [0, 0, 0, 0],
    gb = [0, 0, 0, 0],
    rb = [0, 0, 0, 0],
    yb = [0, 0, 0, 0],
    bb = [0, 0, 0, 0], //score of each player and their pieces.
    greatr = [0, 0, 0, 0],
    greaty = [0, 0, 0, 0],
    greatb = [0, 0, 0, 0]; //score for storing the greatest value.

document.querySelector(".greena .first").style.backgroundColor = "green";
document.querySelector(".greena .Second").style.backgroundColor = "green";
document.querySelector(".greena .Third").style.backgroundColor = "green";
document.querySelector(".greena .Fourth").style.backgroundColor = "green";

document.querySelector(".reda .first").style.backgroundColor = "red";
document.querySelector(".reda .Second").style.backgroundColor = "red";
document.querySelector(".reda .Third").style.backgroundColor = "red";
document.querySelector(".reda .Fourth").style.backgroundColor = "red";

document.querySelector(".yellowa .first").style.backgroundColor = "yellow";
document.querySelector(".yellowa .Second").style.backgroundColor = "yellow";
document.querySelector(".yellowa .Third").style.backgroundColor = "yellow";
document.querySelector(".yellowa .Fourth").style.backgroundColor = "yellow";

document.querySelector(".bluea .first").style.backgroundColor = "blue";
document.querySelector(".bluea .Second").style.backgroundColor = "blue";
document.querySelector(".bluea .Third").style.backgroundColor = "blue";
document.querySelector(".bluea .Fourth").style.backgroundColor = "blue";


// if (count == "first") {
//     document.querySelector("#name1").innerHTML = x;
//     document.querySelector("#name1").style.color = a;
//     document.querySelector("#name2").style.color = "";
//     document.querySelector("#name3").style.color = "";
//     document.querySelector("#name4").style.color = "";
// } else
if (count == "second") {
    document.querySelector("#name1").innerHTML = x;
    document.querySelector("#name1").style.color = a;
    document.querySelector("#name2").innerHTML = y;
    document.querySelector("#name2").style.color = b;
    document.querySelector("#name3").style.color = "";
    document.querySelector("#name4").style.color = "";
} else if (count == "third") {
    document.querySelector("#name1").innerHTML = x;
    document.querySelector("#name1").style.color = a;
    document.querySelector("#name2").innerHTML = y;
    document.querySelector("#name2").style.color = b;
    document.querySelector("#name3").innerHTML = z;
    document.querySelector("#name3").style.color = c;
    document.querySelector("#name4").style.color = "";
} else if (count == "fourth") {
    document.querySelector("#name1").innerHTML = x;
    document.querySelector("#name1").style.color = a;
    document.querySelector("#name2").innerHTML = y;
    document.querySelector("#name2").style.color = b;
    document.querySelector("#name3").innerHTML = z;
    document.querySelector("#name3").style.color = c;
    document.querySelector("#name4").innerHTML = w;
    document.querySelector("#name4").style.color = d;
}


//color arrangement and names.
while (document.querySelector("#name1").style.color != "green" || document.querySelector("#name2").style.color != "red" || document.querySelector("#name3").style.color != "blue" || document.querySelector("#name4").style.color != "yellow") {
    if (document.querySelector("#name1").style.color === "green") {
        //it's ok,first player chooses green.
    } else if (document.querySelector("#name1").style.color === "red") {
        temp = document.querySelector("#name2").innerHTML;
        document.querySelector("#name2").innerHTML = document.querySelector("#name1").innerHTML;
        document.querySelector("#name1").innerHTML = temp;

        temp = document.querySelector("#name2").style.color;
        document.querySelector("#name2").style.color = document.querySelector("#name1").style.color;
        document.querySelector("#name1").style.color = temp;
    } else if (document.querySelector("#name1").style.color === "blue") {
        temp = document.querySelector("#name3").innerHTML;
        document.querySelector("#name3").innerHTML = document.querySelector("#name1").innerHTML;
        document.querySelector("#name1").innerHTML = temp;

        temp = document.querySelector("#name3").style.color;
        document.querySelector("#name3").style.color = document.querySelector("#name1").style.color;
        document.querySelector("#name1").style.color = temp;
    } else if (document.querySelector("#name1").style.color === "yellow") {
        temp = document.querySelector("#name4").innerHTML;
        document.querySelector("#name4").innerHTML = document.querySelector("#name1").innerHTML;
        document.querySelector("#name1").innerHTML = temp;

        temp = document.querySelector("#name4").style.color;
        document.querySelector("#name4").style.color = document.querySelector("#name1").style.color;
        document.querySelector("#name1").style.color = temp;
    } else {
        if (document.querySelector("#name2").style.color === "green") {
            temp = document.querySelector("#name1").innerHTML;
            document.querySelector("#name1").innerHTML = document.querySelector("#name2").innerHTML;
            document.querySelector("#name2").innerHTML = temp;

            temp = document.querySelector("#name1").style.color;
            document.querySelector("#name1").style.color = document.querySelector("#name2").style.color;
            document.querySelector("#name2").style.color = temp;
        } else if (document.querySelector("#name3").style.color === "green") {
            temp = document.querySelector("#name1").innerHTML;
            document.querySelector("#name1").innerHTML = document.querySelector("#name3").innerHTML;
            document.querySelector("#name3").innerHTML = temp;

            temp = document.querySelector("#name1").style.color;
            document.querySelector("#name1").style.color = document.querySelector("#name3").style.color;
            document.querySelector("#name3").style.color = temp;
        } else if (document.querySelector("#name4").style.color === "green") {
            temp = document.querySelector("#name1").innerHTML;
            document.querySelector("#name1").innerHTML = document.querySelector("#name4").innerHTML;
            document.querySelector("#name4").innerHTML = temp;

            temp = document.querySelector("#name1").style.color;
            document.querySelector("#name1").style.color = document.querySelector("#name4").style.color;
            document.querySelector("#name4").style.color = temp;
        } else {
            document.querySelector("#name1").style.color = "green";
        }
    }

    if (document.querySelector("#name2").style.color === "green") {
        temp = document.querySelector("#name1").innerHTML;
        document.querySelector("#name1").innerHTML = document.querySelector("#name2").innerHTML;
        document.querySelector("#name2").innerHTML = temp;

        temp = document.querySelector("#name1").style.color;
        document.querySelector("#name1").style.color = document.querySelector("#name2").style.color;
        document.querySelector("#name2").style.color = temp;
    } else if (document.querySelector("#name2").style.color === "red") {
        //it's ok,second player chooses red.
    } else if (document.querySelector("#name2").style.color === "blue") {
        temp = document.querySelector("#name3").innerHTML;
        document.querySelector("#name3").innerHTML = document.querySelector("#name2").innerHTML;
        document.querySelector("#name2").innerHTML = temp;

        temp = document.querySelector("#name3").style.color;
        document.querySelector("#name3").style.color = document.querySelector("#name2").style.color;
        document.querySelector("#name2").style.color = temp;
    } else if (document.querySelector("#name2").style.color === "yellow") {
        temp = document.querySelector("#name4").innerHTML;
        document.querySelector("#name4").innerHTML = document.querySelector("#name2").innerHTML;
        document.querySelector("#name2").innerHTML = temp;

        temp = document.querySelector("#name4").style.color;
        document.querySelector("#name4").style.color = document.querySelector("#name2").style.color;
        document.querySelector("#name2").style.color = temp;
    } else {
        if (document.querySelector("#name1").style.color === "red") {
            temp = document.querySelector("#name2").innerHTML;
            document.querySelector("#name2").innerHTML = document.querySelector("#name1").innerHTML;
            document.querySelector("#name1").innerHTML = temp;

            temp = document.querySelector("#name2").style.color;
            document.querySelector("#name2").style.color = document.querySelector("#name1").style.color;
            document.querySelector("#name1").style.color = temp;
        } else if (document.querySelector("#name3").style.color === "red") {
            temp = document.querySelector("#name2").innerHTML;
            document.querySelector("#name2").innerHTML = document.querySelector("#name3").innerHTML;
            document.querySelector("#name3").innerHTML = temp;

            temp = document.querySelector("#name2").style.color;
            document.querySelector("#name2").style.color = document.querySelector("#name3").style.color;
            document.querySelector("#name3").style.color = temp;
        } else if (document.querySelector("#name4").style.color === "red") {
            temp = document.querySelector("#name2").innerHTML;
            document.querySelector("#name2").innerHTML = document.querySelector("#name4").innerHTML;
            document.querySelector("#name4").innerHTML = temp;

            temp = document.querySelector("#name2").style.color;
            document.querySelector("#name2").style.color = document.querySelector("#name4").style.color;
            document.querySelector("#name4").style.color = temp;
        } else {
            document.querySelector("#name2").style.color = "red";
        }
    }

    if (document.querySelector("#name3").style.color === "green") {
        temp = document.querySelector("#name1").innerHTML;
        document.querySelector("#name1").innerHTML = document.querySelector("#name3").innerHTML;
        document.querySelector("#name3").innerHTML = temp;

        temp = document.querySelector("#name1").style.color;
        document.querySelector("#name1").style.color = document.querySelector("#name3").style.color;
        document.querySelector("#name3").style.color = temp;
    } else if (document.querySelector("#name3").style.color === "red") {
        temp = document.querySelector("#name2").innerHTML;
        document.querySelector("#name2").innerHTML = document.querySelector("#name3").innerHTML;
        document.querySelector("#name3").innerHTML = temp;

        temp = document.querySelector("#name2").style.color;
        document.querySelector("#name2").style.color = document.querySelector("#name3").style.color;
        document.querySelector("#name3").style.color = temp;
    } else if (document.querySelector("#name3").style.color === "blue") {
        //it's ok,third player chooses blue.
    } else if (document.querySelector("#name3").style.color === "yellow") {
        temp = document.querySelector("#name4").innerHTML;
        document.querySelector("#name4").innerHTML = document.querySelector("#name3").innerHTML;
        document.querySelector("#name3").innerHTML = temp;

        temp = document.querySelector("#name4").style.color;
        document.querySelector("#name4").style.color = document.querySelector("#name3").style.color;
        document.querySelector("#name3").style.color = temp;
    } else {
        if (document.querySelector("#name1").style.color === "blue") {
            temp = document.querySelector("#name3").innerHTML;
            document.querySelector("#name3").innerHTML = document.querySelector("#name1").innerHTML;
            document.querySelector("#name1").innerHTML = temp;

            temp = document.querySelector("#name3").style.color;
            document.querySelector("#name3").style.color = document.querySelector("#name1").style.color;
            document.querySelector("#name1").style.color = temp;
        } else if (document.querySelector("#name2").style.color === "blue") {
            temp = document.querySelector("#name3").innerHTML;
            document.querySelector("#name3").innerHTML = document.querySelector("#name2").innerHTML;
            document.querySelector("#name2").innerHTML = temp;

            temp = document.querySelector("#name3").style.color;
            document.querySelector("#name3").style.color = document.querySelector("#name2").style.color;
            document.querySelector("#name2").style.color = temp;
        } else if (document.querySelector("#name4").style.color === "blue") {
            temp = document.querySelector("#name3").innerHTML;
            document.querySelector("#name3").innerHTML = document.querySelector("#name4").innerHTML;
            document.querySelector("#name4").innerHTML = temp;

            temp = document.querySelector("#name3").style.color;
            document.querySelector("#name3").style.color = document.querySelector("#name4").style.color;
            document.querySelector("#name4").style.color = temp;
        } else {
            document.querySelector("#name3").style.color = "blue";
        }
    }

    if (document.querySelector("#name4").style.color === "green") {
        temp = document.querySelector("#name1").innerHTML;
        document.querySelector("#name1").innerHTML = document.querySelector("#name4").innerHTML;
        document.querySelector("#name4").innerHTML = temp;

        temp = document.querySelector("#name1").style.color;
        document.querySelector("#name1").style.color = document.querySelector("#name4").style.color;
        document.querySelector("#name4").style.color = temp;
    } else if (document.querySelector("#name4").style.color === "red") {
        temp = document.querySelector("#name2").innerHTML;
        document.querySelector("#name2").innerHTML = document.querySelector("#name4").innerHTML;
        document.querySelector("#name4").innerHTML = temp;

        temp = document.querySelector("#name2").style.color;
        document.querySelector("#name2").style.color = document.querySelector("#name4").style.color;
        document.querySelector("#name4").style.color = temp;
    } else if (document.querySelector("#name4").style.color === "blue") {
        temp = document.querySelector("#name3").innerHTML;
        document.querySelector("#name3").innerHTML = document.querySelector("#name4").innerHTML;
        document.querySelector("#name4").innerHTML = temp;

        temp = document.querySelector("#name3").style.color;
        document.querySelector("#name3").style.color = document.querySelector("#name4").style.color;
        document.querySelector("#name4").style.color = temp;
    } else if (document.querySelector("#name4").style.color === "yellow") {
        //it's ok, fourth player chooses yellow.
    } else {
        if (document.querySelector("#name1").style.color === "yellow") {
            temp = document.querySelector("#name4").innerHTML;
            document.querySelector("#name4").innerHTML = document.querySelector("#name1").innerHTML;
            document.querySelector("#name1").innerHTML = temp;

            temp = document.querySelector("#name4").style.color;
            document.querySelector("#name4").style.color = document.querySelector("#name1").style.color;
            document.querySelector("#name1").style.color = temp;
        } else if (document.querySelector("#name2").style.color === "yellow") {
            temp = document.querySelector("#name4").innerHTML;
            document.querySelector("#name4").innerHTML = document.querySelector("#name2").innerHTML;
            document.querySelector("#name2").innerHTML = temp;

            temp = document.querySelector("#name4").style.color;
            document.querySelector("#name4").style.color = document.querySelector("#name2").style.color;
            document.querySelector("#name2").style.color = temp;
        } else if (document.querySelector("#name3").style.color === "yellow") {
            temp = document.querySelector("#name4").innerHTML;
            document.querySelector("#name4").innerHTML = document.querySelector("#name3").innerHTML;
            document.querySelector("#name3").innerHTML = temp;

            temp = document.querySelector("#name4").style.color;
            document.querySelector("#name4").style.color = document.querySelector("#name3").style.color;
            document.querySelector("#name3").style.color = temp;
        } else {
            document.querySelector("#name4").style.color = "yellow";
        }
    }
}


//remove unnecessary players.
if (document.querySelector("#name1").innerHTML === "") {
    if (document.querySelector("#name2").innerHTML === "") {
        if (document.querySelector("#name3").innerHTML === "") {
            document.querySelector("#name1").innerHTML = document.querySelector("#name4").innerHTML;
            document.querySelector("#name1").style.color = document.querySelector("#name4").style.color;
            document.querySelector(".Player2").style.display = "none";
            document.querySelector(".Player3").style.display = "none";
            document.querySelector(".Player4").style.display = "none";
        } else {
            document.querySelector("#name1").innerHTML = document.querySelector("#name3").innerHTML;
            document.querySelector("#name1").style.color = document.querySelector("#name3").style.color;
            if (document.querySelector("#name4").innerHTML === "") {
                document.querySelector(".Player2").style.display = "none";
                document.querySelector(".Player3").style.display = "none";
                document.querySelector(".Player4").style.display = "none";
            } else {
                document.querySelector("#name2").innerHTML = document.querySelector("#name4").innerHTML;
                document.querySelector("#name2").style.color = document.querySelector("#name4").style.color;
                document.querySelector(".Player3").style.display = "none";
                document.querySelector(".Player4").style.display = "none";
            }
        }
    } else {
        document.querySelector("#name1").innerHTML = document.querySelector("#name2").innerHTML;
        document.querySelector("#name1").style.color = document.querySelector("#name2").style.color;
        if (document.querySelector("#name3").innerHTML === "") {
            if (document.querySelector("#name4").innerHTML === "") {
                document.querySelector(".Player2").style.display = "none";
                document.querySelector(".Player3").style.display = "none";
                document.querySelector(".Player4").style.display = "none";
            } else {
                document.querySelector("#name2").innerHTML = document.querySelector("#name4").innerHTML;
                document.querySelector("#name2").style.color = document.querySelector("#name4").style.color;
                document.querySelector(".Player3").style.display = "none";
                document.querySelector(".Player4").style.display = "none";
            }
        } else {
            document.querySelector("#name2").innerHTML = document.querySelector("#name3").innerHTML;
            document.querySelector("#name2").style.color = document.querySelector("#name3").style.color;
            if (document.querySelector("#name4").innerHTML === "") {
                document.querySelector(".Player3").style.display = "none";
                document.querySelector(".Player4").style.display = "none";
            } else {
                document.querySelector("#name3").innerHTML = document.querySelector("#name4").innerHTML;
                document.querySelector("#name3").style.color = document.querySelector("#name4").style.color;
                document.querySelector(".Player4").style.display = "none";
            }
        }
    }
} else {
    if (document.querySelector("#name2").innerHTML === "") {
        if (document.querySelector("#name3").innerHTML === "") {
            if (document.querySelector("#name4").innerHTML === "") {
                document.querySelector(".Player2").style.display = "none";
                document.querySelector(".Player3").style.display = "none";
                document.querySelector(".Player4").style.display = "none";
            } else {
                document.querySelector("#name2").innerHTML = document.querySelector("#name4").innerHTML;
                document.querySelector("#name2").style.color = document.querySelector("#name4").style.color;
                document.querySelector(".Player3").style.display = "none";
                document.querySelector(".Player4").style.display = "none";
            }
        } else {
            document.querySelector("#name2").innerHTML = document.querySelector("#name3").innerHTML;
            document.querySelector("#name2").style.color = document.querySelector("#name3").style.color;
            if (document.querySelector("#name4").innerHTML === "") {
                document.querySelector(".Player3").style.display = "none";
                document.querySelector(".Player4").style.display = "none";
            } else {
                document.querySelector("#name3").innerHTML = document.querySelector("#name4").innerHTML;
                document.querySelector("#name3").style.color = document.querySelector("#name4").style.color;
                document.querySelector(".Player4").style.display = "none";
            }
        }
    } else {
        if (document.querySelector("#name3").innerHTML === "") {
            if (document.querySelector("#name4").innerHTML === "") {
                document.querySelector(".Player3").style.display = "none";
                document.querySelector(".Player4").style.display = "none";
            } else {
                document.querySelector("#name3").innerHTML = document.querySelector("#name4").innerHTML;
                document.querySelector("#name3").style.color = document.querySelector("#name4").style.color;
                document.querySelector(".Player4").style.display = "none";
            }
        } else {
            if (document.querySelector("#name4").innerHTML === "") {
                document.querySelector(".Player4").style.display = "none";
            }
        }
    }
}


document.querySelector(".btn").addEventListener("click", function() {
    // if (count === "first") {
    //     // turn++;
    //     if (turn === 1) {
    //         document.querySelector(".Player1 #image").firstElementChild.src = "images/roll.gif";
    //         value = Math.ceil(Math.random() * 6);
    //         time = setTimeout(function() {
    //             document.querySelector(".Player1 #image").firstElementChild.src = "";
    //         }, 500);
    //         document.querySelector(".Player1 #status").innerHTML = value;
    // turn = result(turn, value, count);
    //         // turn = 0;
    //     }
    // } else
    if (count === "second" || count === "third" || count === "fourth") {
        if (turn === 1) {
            document.querySelector(".Player1 #image").firstElementChild.src = "images/roll.gif";
            value = Math.ceil(Math.random() * 6);
            time = setTimeout(function() {
                document.querySelector(".Player1 #image").firstElementChild.src = "";
            }, 500);
            document.querySelector(".Player1 #status").innerHTML = value;
            turn = result(turn, value, count);
        } else if (turn === 2) {
            document.querySelector(".Player2 #image").firstElementChild.src = "images/roll.gif";
            value = Math.ceil(Math.random() * 6);
            time = setTimeout(function() {
                document.querySelector(".Player2 #image").firstElementChild.src = "";
            }, 500);
            document.querySelector(".Player2 #status").innerHTML = value;
            turn = result(turn, value, count);
        } else if (turn === 3) {
            document.querySelector(".Player3 #image").firstElementChild.src = "images/roll.gif";
            value = Math.ceil(Math.random() * 6);
            time = setTimeout(function() {
                document.querySelector(".Player3 #image").firstElementChild.src = "";
            }, 500);
            document.querySelector(".Player3 #status").innerHTML = value;
            turn = result(turn, value, count);
        } else if (turn === 4) {
            document.querySelector(".Player4 #image").firstElementChild.src = "images/roll.gif";
            value = Math.ceil(Math.random() * 6);
            time = setTimeout(function() {
                document.querySelector(".Player4 #image").firstElementChild.src = "";
            }, 500);
            document.querySelector(".Player4 #status").innerHTML = value;
            turn = result(turn, value, count);
        }
    }
});

function result(turn, value, count) {
    if (turn === 1) {
        col = document.querySelector("#name1").style.color;
        if (col === "green" || col === "yellow" || col === "blue" || col === "red") {
            if (value === 1 || value === 2 || value === 3 || value === 4 || value === 5 || value === 6) {
                window[col + "strike"](value); //calls the function "greenstrike(value)" if color is "green".
                return (2);
            }
            if (value === 6) {
                window[col + "strike"](value);
                return (1);
            }
        }
    } else if (turn === 2) {
        col = document.querySelector("#name2").style.color;
        if (col === "green" || col === "yellow" || col === "blue" || col === "red") {
            if (value === 1 || value === 2 || value === 3 || value === 4 || value === 5 || value === 6) {
                window[col + "strike"](value);
                if (count === "second") {
                    return (1);
                } else {
                    return (3);
                }
            }
            if (value === 6) {
                window[col + "strike"](value);
                return (2);
            }
        }
    } else if (turn === 3) {
        col = document.querySelector("#name3").style.color;
        if (col === "green" || col === "yellow" || col === "blue" || col === "red") {
            if (value === 1 || value === 2 || value === 3 || value === 4 || value === 5 || value === 6) {
                window[col + "strike"](value);
                if (count === "third") {
                    return (1);
                } else {
                    return (4);
                }
            }
            if (value === 6) {
                window[col + "strike"](value);
                return (3);
            }
        }
    } else if (turn === 4) {
        col = document.querySelector("#name4").style.color;
        if (col === "green" || col === "yellow" || col === "blue" || col === "red") {
            if (value === 1 || value === 2 || value === 3 || value === 4 || value === 5 || value === 6) {
                window[col + "strike"](value);
                return (1);
            }
            if (value === 6) {
                window[col + "strike"](value);
                return (4);
            }
        }
    }
}

function greenstrike(value) {
    pos = document.querySelector(".greena .first").display;
    pos1 = document.querySelector(".greena .Second").display;
    pos2 = document.querySelector(".greena .Third").display;
    pos3 = document.querySelector(".greena .Fourth").display;

    if (value === 1 || value === 2 || value === 3 || value === 4 || value === 5 || value === 6) {
        if (pos === "none") {
            document.querySelector(".btn").disabled = "blocked";
            temp = gs[0] + value;
            if (temp > 51) {
                greatvalue = temp - 51;
                temp = 52 + greatvalue;
                selector = selector(gs[0]);
                selector.style.visibility = "visible";
                selector.src = "images/" + col + "-star.gif";
                time = setTimeout(function() {
                    countdown(null);
                }, 3000);
                selector.addEventListener("click", function() {
                    if (touch === 0) {
                        touch = 1;
                        selector.style.visibility = "hidden";
                        selector.src = "";
                        path(temp, col);
                        gs[0] = temp;
                        //done = checker(gs[0], col, temp);
                    }
                });
            } else {
                selector = selector(gs[0]);
                selector.style.visibility = "visible";
                selector.src = "images/" + col + "-star.gif";
                time = setTimeout(function() {
                    countdown(null);
                }, 3000);
                selector.addEventListener("click", function() {
                    if (touch === 0) {
                        touch = 1;
                        selector.style.visibility = "hidden";
                        selector.src = "";
                        path(temp, col);
                        gs[0] = temp;
                        //done = checker(gs[0], col, temp);
                    }
                });
            }
        }
        if (pos1 === "none") {
            document.querySelector(".btn").disabled = "blocked";
            temp = gs[1] + value;
            if (temp > 51) {
                greatvalue = temp - 51;
                temp = 52 + greatvalue;
                selector1 = selector(gs[1]);
                selector1.style.visibility = "visible";
                selector1.src = "images/" + col + "-star.gif";
                time = setTimeout(function() {
                    countdown(null);
                }, 3000);
                selector1.addEventListener("click", function() {
                    if (touch === 0) {
                        touch = 1;
                        selector1.style.visibility = "hidden";
                        selector1.src = "";
                        path(temp, col);
                        gs[1] = temp;
                        //done = checker(gs[1], col, temp);
                    }
                });
            } else {
                selector1 = selector(gs[1]);
                selector1.style.visibility = "visible";
                selector1.src = "images/" + col + "-star.gif";
                time = setTimeout(function() {
                    countdown(null);
                }, 3000);
                selector1.addEventListener("click", function() {
                    if (touch === 0) {
                        touch = 1;
                        selector1.style.visibility = "hidden";
                        selector1.src = "";
                        path(temp, col);
                        gs[1] = temp;
                        //done = checker(gs[1], col, temp);
                    }
                });
            }
        }
        if (pos2 === "none") {
            document.querySelector(".btn").disabled = "blocked";
            temp = gs[2] + value;
            if (temp > 51) {
                greatvalue = temp - 51;
                temp = 52 + greatvalue;
                selector2 = selector(gs[2]);
                selector2.style.visibility = "visible";
                selector2.src = "images/" + col + "-star.gif";
                time = setTimeout(function() {
                    countdown(null);
                }, 3000);
                selector2.addEventListener("click", function() {
                    if (touch === 0) {
                        touch = 1;
                        selector2.style.visibility = "hidden";
                        selector2.src = "";
                        path(temp, col);
                        gs[2] = temp;
                        //done = checker(gs[2], col, temp);
                    }
                });
            } else {
                selector2 = selector(gs[2]);
                selector2.style.visibility = "visible";
                selector2.src = "images/" + col + "-star.gif";
                time = setTimeout(function() {
                    countdown(null);
                }, 3000);
                selector2.addEventListener("click", function() {
                    if (touch === 0) {
                        touch = 1;
                        selector2.style.visibility = "hidden";
                        selector2.src = "";
                        path(temp, col);
                        gs[2] = temp;
                        //done = checker(gs[2], col, temp);
                    }
                });
            }
        }
        if (pos3 === "none") {
            document.querySelector(".btn").disabled = "blocked";
            temp = gs[3] + value;
            if (temp > 51) {
                greatvalue = temp - 51;
                temp = 52 + greatvalue;
                selector3 = selector(gs[3]);
                selector3.style.visibility = "visible";
                selector3.src = "images/" + col + "-star.gif";
                time = setTimeout(function() {
                    countdown(null);
                }, 3000);
                selector3.addEventListener("click", function() {
                    if (touch === 0) {
                        touch = 1;
                        selector3.style.visibility = "hidden";
                        selector3.src = "";
                        path(temp, col);
                        gs[3] = temp;
                        //done = checker(gs[3], col, temp);
                    }
                });
            } else {
                selector3 = selector(gs[3]);
                selector3.style.visibility = "visible";
                selector3.src = "images/" + col + "-star.gif";
                time = setTimeout(function() {
                    countdown(null);
                }, 3000);
                selector3.addEventListener("click", function() {
                    if (touch === 0) {
                        touch = 1;
                        selector3.style.visibility = "hidden";
                        selector3.src = "";
                        path(temp, col);
                        gs[3] = temp;
                        //done = checker(gs[3], col, temp);
                    }
                });
            }
        }
        // updater(gs[0]);
        // updater(gs[1]);
        // updater(gs[2]);
        // updater(gs[3]);
    }
    if (value === 6) {
        if (pos !== "none") {
            document.querySelector(".greena .first").style.backgroundColor = "";
            document.querySelector(".greena .first img").style.visibility = "visible";
            document.querySelector(".greena .first img").src = "images/green-star.gif";
            document.querySelector(".btn").disabled = "blocked";
            time = setTimeout(function() {
                countdown(null);
            }, 3000);
            document.querySelector(".greena .first img").addEventListener("click", function() {
                if (touch === 0) {
                    touch = 1;
                    document.querySelector(".greena .first img").src = "";
                    document.querySelector(".greena .first img").style.visibility = "hidden";
                    gb[0] = 1;
                    gs[0] = 1;
                    path(gs[0], col);
                }
            });
        }
        if (pos1 !== "none") {
            document.querySelector(".greena .Second").style.backgroundColor = "";
            document.querySelector(".greena .Second img").style.visibility = "visible";
            document.querySelector(".greena .Second img").src = "images/green-star.gif";
            document.querySelector(".btn").disabled = "blocked";
            time = setTimeout(function() {
                countdown(null);
            }, 3000);
            document.querySelector(".greena .Second img").addEventListener("click", function() {
                if (touch === 0) {
                    touch = 1;
                    document.querySelector(".greena .Second img").src = "";
                    document.querySelector(".greena .Second img").style.visibility = "hidden";
                    gb[1] = 1;
                    gs[1] = 1;
                    path(gs[1], col);
                }
            });
        }
        if (pos2 !== "none") {
            document.querySelector(".greena .Third").style.backgroundColor = "";
            document.querySelector(".greena .Third img").style.visibility = "visible";
            document.querySelector(".greena .Third img").src = "images/green-star.gif";
            document.querySelector(".btn").disabled = "blocked";
            time = setTimeout(function() {
                countdown(null);
            }, 3000);
            document.querySelector(".greena .Third img").addEventListener("click", function() {
                if (touch === 0) {
                    touch = 1;
                    document.querySelector(".greena .Third img").src = "";
                    document.querySelector(".greena .Third img").style.visibility = "hidden";
                    gb[2] = 1;
                    gs[2] = 1;
                    path(gs[2], col);
                }
            });
        }
        if (pos3 !== "none") {
            document.querySelector(".greena .Fourth").style.backgroundColor = "";
            document.querySelector(".greena .Fourth img").style.visibility = "visible";
            document.querySelector(".greena .Fourth img").src = "images/green-star.gif";
            document.querySelector(".btn").disabled = "blocked";
            time = setTimeout(function() {
                countdown(null);
            }, 3000);
            document.querySelector(".greena .Fourth img").addEventListener("click", function() {
                if (touch === 0) {
                    touch = 1;
                    document.querySelector(".greena .Fourth img").src = "";
                    document.querySelector(".greena .Fourth img").style.visibility = "hidden";
                    gb[3] = 1;
                    gs[3] = 1;
                    path(gs[3], col);
                }
            });
        }
    }
    touch = 0;
}

function redstrike(value) {
    pos = document.querySelector(".reda .first").display;
    pos1 = document.querySelector(".reda .Second").display;
    pos2 = document.querySelector(".reda .Third").display;
    pos3 = document.querySelector(".reda .Fourth").display;

    if (value === 1 || value === 2 || value === 3 || value === 4 || value === 5 || value === 6) {
        if (pos === "none") {
            document.querySelector(".btn").disabled = "blocked";
            temp = rs[0] + value;
            greatr[0] = greatr[0] + value;
            if (temp > 52) {
                greatvalue = temp - 52;
                greatr[0] = temp;
                temp = greatvalue;
                selector = selector(rs[0]);
                selector.style.visibility = "visible";
                selector.src = "images/" + col + "-star.gif";
                time = setTimeout(function() {
                    countdown(null);
                }, 3000);
                selector.addEventListener("click", function() {
                    if (touch === 0) {
                        touch = 1;
                        selector.style.visibility = "hidden";
                        selector.src = "";
                        path(temp, col);
                        rs[0] = temp;
                        //done = checker(rs[0], col, temp);
                    }
                });
            } else if (greatr[0] > 64) {
                greatvalue = greatr[0] - 64;
                temp = greatvalue + 58;
                selector = selector(rs[0]);
                selector.style.visibility = "visible";
                selector.src = "images/" + col + "-star.gif";
                time = setTimeout(function() {
                    countdown(null);
                }, 3000);
                selector.addEventListener("click", function() {
                    if (touch === 0) {
                        touch = 1;
                        selector.style.visibility = "hidden";
                        selector.src = "";
                        path(temp, col);
                        rs[0] = temp;
                        //done = checker(rs[0], col, temp);
                    }
                });
            } else {
                selector = selector(rs[0]);
                selector.style.visibility = "visible";
                selector.src = "images/" + col + "-star.gif";
                time = setTimeout(function() {
                    countdown(null);
                }, 3000);
                selector.addEventListener("click", function() {
                    if (touch === 0) {
                        touch = 1;
                        selector.style.visibility = "hidden";
                        selector.src = "";
                        path(temp, col);
                        rs[0] = temp;
                        //done = checker(rs[0], col, temp);
                    }
                });
            }
        }
        if (pos1 === "none") {
            document.querySelector(".btn").disabled = "blocked";
            temp = rs[1] + value;
            greatr[1] = greatr[1] + value;
            if (temp > 52) {
                greatvalue = temp - 52;
                greatr[1] = temp;
                temp = greatvalue;
                selector1 = selector(rs[1]);
                selector1.style.visibility = "visible";
                selector1.src = "images/" + col + "-star.gif";
                time = setTimeout(function() {
                    countdown(null);
                }, 3000);
                selector1.addEventListener("click", function() {
                    if (touch === 0) {
                        touch = 1;
                        selector1.style.visibility = "hidden";
                        selector1.src = "";
                        path(temp, col);
                        rs[1] = temp;
                        //done = checker(rs[1], col, temp);
                    }
                });
            } else if (greatr[1] > 64) {
                greatvalue = greatr[1] - 64;
                temp = greatvalue + 58;
                selector1 = selector(rs[1]);
                selector1.style.visibility = "visible";
                selector1.src = "images/" + col + "-star.gif";
                time = setTimeout(function() {
                    countdown(null);
                }, 3000);
                selector1.addEventListener("click", function() {
                    if (touch === 0) {
                        touch = 1;
                        selector1.style.visibility = "hidden";
                        selector1.src = "";
                        path(temp, col);
                        rs[1] = temp;
                        //done = checker(rs[1], col, temp);
                    }
                });
            } else {
                selector1 = selector(rs[1]);
                selector1.style.visibility = "visible";
                selector1.src = "images/" + col + "-star.gif";
                time = setTimeout(function() {
                    countdown(null);
                }, 3000);
                selector1.addEventListener("click", function() {
                    if (touch === 0) {
                        touch = 1;
                        selector1.style.visibility = "hidden";
                        selector1.src = "";
                        path(temp, col);
                        rs[1] = temp;
                        //done = checker(rs[1], col, temp);
                    }
                });
            }
        }
        if (pos2 === "none") {
            document.querySelector(".btn").disabled = "blocked";
            temp = rs[2] + value;
            greatr[2] = greatr[2] + value;
            if (temp > 52) {
                greatvalue = temp - 52;
                greatr[2] = temp;
                temp = greatvalue;
                selector2 = selector(rs[2]);
                selector2.style.visibility = "visible";
                selector2.src = "images/" + col + "-star.gif";
                time = setTimeout(function() {
                    countdown(null);
                }, 3000);
                selector2.addEventListener("click", function() {
                    if (touch === 0) {
                        touch = 1;
                        selector2.style.visibility = "hidden";
                        selector2.src = "";
                        path(temp, col);
                        rs[2] = temp;
                        //done = checker(rs[2], col, temp);
                    }
                });
            } else if (greatr[2] > 64) {
                greatvalue = greatr[2] - 64;
                temp = greatvalue + 58;
                selector2 = selector(rs[2]);
                selector2.style.visibility = "visible";
                selector2.src = "images/" + col + "-star.gif";
                time = setTimeout(function() {
                    countdown(null);
                }, 3000);
                selector2.addEventListener("click", function() {
                    if (touch === 0) {
                        touch = 1;
                        selector2.style.visibility = "hidden";
                        selector2.src = "";
                        path(temp, col);
                        rs[2] = temp;
                        //done = checker(rs[2], col, temp);
                    }
                });
            } else {
                selector2 = selector(rs[2]);
                selector2.style.visibility = "visible";
                selector2.src = "images/" + col + "-star.gif";
                time = setTimeout(function() {
                    countdown(null);
                }, 3000);
                selector2.addEventListener("click", function() {
                    if (touch === 0) {
                        touch = 1;
                        selector2.style.visibility = "hidden";
                        selector2.src = "";
                        path(temp, col);
                        rs[2] = temp;
                        //done = checker(rs[2], col, temp);
                    }
                });
            }
        }
        if (pos3 === "none") {
            document.querySelector(".btn").disabled = "blocked";
            temp = rs[3] + value;
            greatr[3] = greatr[3] + value;
            if (temp > 52) {
                greatvalue = temp - 52;
                greatr[3] = temp;
                temp = greatvalue;
                selector3 = selector(rs[3]);
                selector3.style.visibility = "visible";
                selector3.src = "images/" + col + "-star.gif";
                time = setTimeout(function() {
                    countdown(null);
                }, 3000);
                selector3.addEventListener("click", function() {
                    if (touch === 0) {
                        touch = 1;
                        selector3.style.visibility = "hidden";
                        selector3.src = "";
                        path(temp, col);
                        rs[3] = temp;
                        //done = checker(rs[3], col, temp);
                    }
                });
            } else if (greatr[3] > 64) {
                greatvalue = greatr[3] - 64;
                temp = greatvalue + 58;
                selector3 = selector(rs[3]);
                selector3.style.visibility = "visible";
                selector3.src = "images/" + col + "-star.gif";
                time = setTimeout(function() {
                    countdown(null);
                }, 3000);
                selector3.addEventListener("click", function() {
                    if (touch === 0) {
                        touch = 1;
                        selector3.style.visibility = "hidden";
                        selector3.src = "";
                        path(temp, col);
                        rs[3] = temp;
                        //done = checker(rs[3], col, temp);
                    }
                });
            } else {
                selector3 = selector(rs[3]);
                selector3.style.visibility = "visible";
                selector3.src = "images/" + col + "-star.gif";
                time = setTimeout(function() {
                    countdown(null);
                }, 3000);
                selector3.addEventListener("click", function() {
                    if (touch === 0) {
                        touch = 1;
                        selector3.style.visibility = "hidden";
                        selector3.src = "";
                        path(temp, col);
                        rs[3] = temp;
                        //done = checker(rs[3], col, temp);
                    }
                });
            }
        }
        // updater(rs[0]);
        // updater(rs[1]);
        // updater(rs[2]);
        // updater(rs[3]);
    }
    if (value === 6) {
        if (pos !== "none") {
            document.querySelector(".reda .first").style.backgroundColor = "";
            document.querySelector(".reda .first img").style.visibility = "visible";
            document.querySelector(".reda .first img").src = "images/red-star.gif";
            document.querySelector(".btn").disabled = "blocked";
            time = setTimeout(function() {
                countdown(null);
            }, 3000);
            document.querySelector(".reda .first img").addEventListener("click", function() {
                if (touch === 0) {
                    touch = 1;
                    document.querySelector(".reda .first img").src = "";
                    document.querySelector(".reda .first img").style.visibility = "hidden";
                    rb[0] = 1;
                    rs[0] = 14;
                    path(rs[0], col);
                }
            });
        }
        if (pos1 !== "none") {
            document.querySelector(".reda .Second").style.backgroundColor = "";
            document.querySelector(".reda .Second img").style.visibility = "visible";
            document.querySelector(".reda .Second img").src = "images/red-star.gif";
            document.querySelector(".btn").disabled = "blocked";
            time = setTimeout(function() {
                countdown(null);
            }, 3000);
            document.querySelector(".reda .Second img").addEventListener("click", function() {
                if (touch === 0) {
                    touch = 1;
                    document.querySelector(".reda .Second img").src = "";
                    document.querySelector(".reda .Second img").style.visibility = "hidden";
                    rb[1] = 1;
                    rs[1] = 14;
                    path(rs[1], col);
                }
            });
        }
        if (pos2 !== "none") {
            document.querySelector(".reda .Third").style.backgroundColor = "";
            document.querySelector(".reda .Third img").style.visibility = "visible";
            document.querySelector(".reda .Third img").src = "images/red-star.gif";
            document.querySelector(".btn").disabled = "blocked";
            time = setTimeout(function() {
                countdown(null);
            }, 3000);
            document.querySelector(".reda .Third img").addEventListener("click", function() {
                if (touch === 0) {
                    touch = 1;
                    document.querySelector(".reda .Third img").src = "";
                    document.querySelector(".reda .Third img").style.visibility = "hidden";
                    rb[2] = 1;
                    rs[2] = 14;
                    path(rs[2], col);
                }
            });
        }
        if (pos3 !== "none") {
            document.querySelector(".reda .Fourth").style.backgroundColor = "";
            document.querySelector(".reda .Fourth img").style.visibility = "visible";
            document.querySelector(".reda .Fourth img").src = "images/red-star.gif";
            document.querySelector(".btn").disabled = "blocked";
            time = setTimeout(function() {
                countdown(null);
            }, 3000);
            document.querySelector(".reda .Fourth img").addEventListener("click", function() {
                if (touch === 0) {
                    touch = 1;
                    document.querySelector(".reda .Fourth img").src = "";
                    document.querySelector(".reda .Fourth img").style.visibility = "hidden";
                    rb[3] = 1;
                    rs[3] = 14;
                    path(rs[3], col);
                }
            });
        }
    }
    touch = 0;
}

function bluestrike(value) {
    pos = document.querySelector(".bluea .first").display;
    pos1 = document.querySelector(".bluea .Second").display;
    pos2 = document.querySelector(".bluea .Third").display;
    pos3 = document.querySelector(".bluea .Fourth").display;

    if (value === 1 || value === 2 || value === 3 || value === 4 || value === 5 || value === 6) {
        if (pos === "none") {
            document.querySelector(".btn").disabled = "blocked";
            temp = bs[0] + value;
            greatb[0] = greatb[0] + value;
            if (temp > 52) {
                greatvalue = temp - 52;
                greatb[0] = temp;
                temp = greatvalue;
                selector = selector(bs[0]);
                selector.style.visibility = "visible";
                selector.src = "images/" + col + "-star.gif";
                time = setTimeout(function() {
                    countdown(null);
                }, 3000);
                selector.addEventListener("click", function() {
                    if (touch === 0) {
                        touch = 1;
                        selector.style.visibility = "hidden";
                        selector.src = "";
                        path(temp, col);
                        bs[0] = temp;
                        //done = checker(bs[0], col, temp);
                    }
                });
            } else if (greatb[0] > 77) {
                greatvalue = greatb[0] - 77;
                temp = greatvalue + 64;
                selector = selector(bs[0]);
                selector.style.visibility = "visible";
                selector.src = "images/" + col + "-star.gif";
                time = setTimeout(function() {
                    countdown(null);
                }, 3000);
                selector.addEventListener("click", function() {
                    if (touch === 0) {
                        touch = 1;
                        selector.style.visibility = "hidden";
                        selector.src = "";
                        path(temp, col);
                        bs[0] = temp;
                        //done = checker(bs[0], col, temp);
                    }
                });
            } else {
                selector = selector(bs[0]);
                selector.style.visibility = "visible";
                selector.src = "images/" + col + "-star.gif";
                time = setTimeout(function() {
                    countdown(null);
                }, 3000);
                selector.addEventListener("click", function() {
                    if (touch === 0) {
                        touch = 1;
                        selector.style.visibility = "hidden";
                        selector.src = "";
                        path(temp, col);
                        bs[0] = temp;
                        //done = checker(bs[0], col, temp);
                    }
                });
            }
        }
        if (pos1 === "none") {
            document.querySelector(".btn").disabled = "blocked";
            temp = bs[1] + value;
            greatb[1] = greatb[1] + value;
            if (temp > 52) {
                greatvalue = temp - 52;
                greatb[1] = temp;
                temp = greatvalue;
                selector1 = selector(bs[1]);
                selector1.style.visibility = "visible";
                selector1.src = "images/" + col + "-star.gif";
                time = setTimeout(function() {
                    countdown(null);
                }, 3000);
                selector1.addEventListener("click", function() {
                    if (touch === 0) {
                        touch = 1;
                        selector1.style.visibility = "hidden";
                        selector1.src = "";
                        path(temp, col);
                        bs[1] = temp;
                        //done = checker(bs[1], col, temp);
                    }
                });
            } else if (greatb[1] > 77) {
                greatvalue = greatb[1] - 77;
                temp = greatvalue + 64;
                selector1 = selector(bs[1]);
                selector1.style.visibility = "visible";
                selector1.src = "images/" + col + "-star.gif";
                time = setTimeout(function() {
                    countdown(null);
                }, 3000);
                selector1.addEventListener("click", function() {
                    if (touch === 0) {
                        touch = 1;
                        selector1.style.visibility = "hidden";
                        selector1.src = "";
                        path(temp, col);
                        bs[1] = temp;
                        //done = checker(bs[1], col, temp);
                    }
                });
            } else {
                selector1 = selector(bs[1]);
                selector1.style.visibility = "visible";
                selector1.src = "images/" + col + "-star.gif";
                time = setTimeout(function() {
                    countdown(null);
                }, 3000);
                selector1.addEventListener("click", function() {
                    if (touch === 0) {
                        touch = 1;
                        selector1.style.visibility = "hidden";
                        selector1.src = "";
                        path(temp, col);
                        bs[1] = temp;
                        //done = checker(bs[1], col, temp);
                    }
                });
            }
        }
        if (pos2 === "none") {
            document.querySelector(".btn").disabled = "blocked";
            temp = bs[2] + value;
            greatb[2] = greatb[2] + value;
            if (temp > 52) {
                greatvalue = temp - 52;
                greatb[2] = temp;
                temp = greatvalue;
                selector2 = selector(bs[2]);
                selector2.style.visibility = "visible";
                selector2.src = "images/" + col + "-star.gif";
                time = setTimeout(function() {
                    countdown(null);
                }, 3000);
                selector2.addEventListener("click", function() {
                    if (touch === 0) {
                        touch = 1;
                        selector2.style.visibility = "hidden";
                        selector2.src = "";
                        path(temp, col);
                        bs[2] = temp;
                        //done = checker(bs[2], col, temp);
                    }
                });
            } else if (greatb[2] > 77) {
                greatvalue = greatb[2] - 77;
                temp = greatvalue + 64;
                selector2 = selector(bs[2]);
                selector2.style.visibility = "visible";
                selector2.src = "images/" + col + "-star.gif";
                time = setTimeout(function() {
                    countdown(null);
                }, 3000);
                selector2.addEventListener("click", function() {
                    if (touch === 0) {
                        touch = 1;
                        selector2.style.visibility = "hidden";
                        selector2.src = "";
                        path(temp, col);
                        bs[2] = temp;
                        //done = checker(bs[2], col, temp);
                    }
                });
            } else {
                selector2 = selector(bs[2]);
                selector2.style.visibility = "visible";
                selector2.src = "images/" + col + "-star.gif";
                time = setTimeout(function() {
                    countdown(null);
                }, 3000);
                selector2.addEventListener("click", function() {
                    if (touch === 0) {
                        touch = 1;
                        selector2.style.visibility = "hidden";
                        selector2.src = "";
                        path(temp, col);
                        bs[2] = temp;
                        //done = checker(bs[2], col, temp);
                    }
                });
            }
        }
        if (pos3 === "none") {
            document.querySelector(".btn").disabled = "blocked";
            temp = bs[3] + value;
            greatb[3] = greatb[3] + value;
            if (temp > 52) {
                greatvalue = temp - 52;
                greatb[3] = temp;
                temp = greatvalue;
                selector3 = selector(bs[3]);
                selector3.style.visibility = "visible";
                selector3.src = "images/" + col + "-star.gif";
                time = setTimeout(function() {
                    countdown(null);
                }, 3000);
                selector3.addEventListener("click", function() {
                    if (touch === 0) {
                        touch = 1;
                        selector3.style.visibility = "hidden";
                        selector3.src = "";
                        path(temp, col);
                        bs[3] = temp;
                        //done = checker(bs[3], col, temp);
                    }
                });
            } else if (greatb[3] > 77) {
                greatvalue = greatb[3] - 77;
                temp = greatvalue + 64;
                selector3 = selector(bs[3]);
                selector3.style.visibility = "visible";
                selector3.src = "images/" + col + "-star.gif";
                time = setTimeout(function() {
                    countdown(null);
                }, 3000);
                selector3.addEventListener("click", function() {
                    if (touch === 0) {
                        touch = 1;
                        selector3.style.visibility = "hidden";
                        selector3.src = "";
                        path(temp, col);
                        bs[3] = temp;
                        //done = checker(bs[3], col, temp);
                    }
                });
            } else {
                selector3 = selector(bs[3]);
                selector3.style.visibility = "visible";
                selector3.src = "images/" + col + "-star.gif";
                time = setTimeout(function() {
                    countdown(null);
                }, 3000);
                selector3.addEventListener("click", function() {
                    if (touch === 0) {
                        touch = 1;
                        selector3.style.visibility = "hidden";
                        selector3.src = "";
                        path(temp, col);
                        bs[3] = temp;
                        //done = checker(bs[3], col, temp);
                    }
                });
            }
        }
        // updater(bs[0]);
        // updater(bs[1]);
        // updater(bs[2]);
        // updater(bs[3]);
    }
    if (value === 6) {
        if (pos !== "none") {
            document.querySelector(".bluea .first").style.backgroundColor = "";
            document.querySelector(".bluea .first img").style.visibility = "visible";
            document.querySelector(".bluea .first img").src = "images/blue-star.gif";
            document.querySelector(".btn").disabled = "blocked";
            time = setTimeout(function() {
                countdown(null);
            }, 3000);
            document.querySelector(".bluea .first img").addEventListener("click", function() {
                if (touch === 0) {
                    touch = 1;
                    document.querySelector(".bluea .first img").src = "";
                    document.querySelector(".bluea .first img").style.visibility = "hidden";
                    bb[0] = 1;
                    bs[0] = 27;
                    path(bs[0], col);
                }
            });
        }
        if (pos1 !== "none") {
            document.querySelector(".bluea .Second").style.backgroundColor = "";
            document.querySelector(".bluea .Second img").style.visibility = "visible";
            document.querySelector(".bluea .Second img").src = "images/blue-star.gif";
            document.querySelector(".btn").disabled = "blocked";
            time = setTimeout(function() {
                countdown(null);
            }, 3000);
            document.querySelector(".bluea .Second img").addEventListener("click", function() {
                if (touch === 0) {
                    touch = 1;
                    document.querySelector(".bluea .Second img").src = "";
                    document.querySelector(".bluea .Second img").style.visibility = "hidden";
                    bb[1] = 1;
                    bs[1] = 27;
                    path(bs[1], col);
                }
            });
        }
        if (pos2 !== "none") {
            document.querySelector(".bluea .Third").style.backgroundColor = "";
            document.querySelector(".bluea .Third img").style.visibility = "visible";
            document.querySelector(".bluea .Third img").src = "images/blue-star.gif";
            document.querySelector(".btn").disabled = "blocked";
            time = setTimeout(function() {
                countdown(null);
            }, 3000);
            document.querySelector(".bluea .Third img").addEventListener("click", function() {
                if (touch === 0) {
                    touch = 1;
                    document.querySelector(".bluea .Third img").src = "";
                    document.querySelector(".bluea .Third img").style.visibility = "hidden";
                    bb[2] = 1;
                    bs[2] = 27;
                    path(bs[2], col);
                }
            });
        }
        if (pos3 !== "none") {
            document.querySelector(".bluea .Fourth").style.backgroundColor = "";
            document.querySelector(".bluea .Fourth img").style.visibility = "visible";
            document.querySelector(".bluea .Fourth img").src = "images/blue-star.gif";
            document.querySelector(".btn").disabled = "blocked";
            time = setTimeout(function() {
                countdown(null);
            }, 3000);
            document.querySelector(".bluea .Fourth img").addEventListener("click", function() {
                if (touch === 0) {
                    touch = 1;
                    document.querySelector(".bluea .Fourth img").src = "";
                    document.querySelector(".bluea .Fourth img").style.visibility = "hidden";
                    bb[3] = 1;
                    bs[3] = 27;
                    path(bs[3], col);
                }
            });
        }
    }
    touch = 0;
}

function yellowstrike(value) {
    pos = document.querySelector(".yellowa .first").display;
    pos1 = document.querySelector(".yellowa .Second").display;
    pos2 = document.querySelector(".yellowa .Third").display;
    pos3 = document.querySelector(".yellowa .Fourth").display;

    if (value === 1 || value === 2 || value === 3 || value === 4 || value === 5 || value === 6) {
        if (pos === "none") {
            document.querySelector(".btn").disabled = "blocked";
            temp = ys[0] + value;
            greaty[0] = greaty[0] + value;
            if (temp > 52) {
                greatvalue = temp - 52;
                greaty[0] = temp;
                temp = greatvalue;
                selector = selector(ys[0]);
                selector.style.visibility = "visible";
                selector.src = "images/" + col + "-star.gif";
                time = setTimeout(function() {
                    countdown(null);
                }, 3000);
                selector.addEventListener("click", function() {
                    if (touch === 0) {
                        touch = 1;
                        selector.style.visibility = "hidden";
                        selector.src = "";
                        path(temp, col);
                        ys[0] = temp;
                        //done = checker(ys[0], col, temp);
                    }
                });
            } else if (greaty[0] > 90) {
                greatvalue = greaty[0] - 90;
                temp = greatvalue + 70;
                selector = selector(ys[0]);
                selector.style.visibility = "visible";
                selector.src = "images/" + col + "-star.gif";
                time = setTimeout(function() {
                    countdown(null);
                }, 3000);
                selector.addEventListener("click", function() {
                    if (touch === 0) {
                        touch = 1;
                        selector.style.visibility = "hidden";
                        selector.src = "";
                        path(temp, col);
                        ys[0] = temp;
                        //done = checker(ys[0], col, temp);
                    }
                });
            } else {
                selector = selector(ys[0]);
                selector.style.visibility = "visible";
                selector.src = "images/" + col + "-star.gif";
                time = setTimeout(function() {
                    countdown(null);
                }, 3000);
                selector.addEventListener("click", function() {
                    if (touch === 0) {
                        touch = 1;
                        selector.style.visibility = "hidden";
                        selector.src = "";
                        path(temp, col);
                        ys[0] = temp;
                        //done = checker(ys[0], col, temp);
                    }
                });
            }
        }
        if (pos1 === "none") {
            document.querySelector(".btn").disabled = "blocked";
            temp = ys[1] + value;
            greaty[1] = greaty[1] + value;
            if (temp > 52) {
                greatvalue = temp - 52;
                greaty[1] = temp;
                temp = greatvalue;
                selector1 = selector(ys[1]);
                selector1.style.visibility = "visible";
                selector1.src = "images/" + col + "-star.gif";
                time = setTimeout(function() {
                    countdown(null);
                }, 3000);
                selector1.addEventListener("click", function() {
                    if (touch === 0) {
                        touch = 1;
                        selector1.style.visibility = "hidden";
                        selector1.src = "";
                        path(temp, col);
                        ys[1] = temp;
                        //done = checker(ys[1], col, temp);
                    }
                });
            } else if (greaty[1] > 90) {
                greatvalue = greaty[1] - 90;
                temp = greatvalue + 70;
                selector1 = selector(ys[1]);
                selector1.style.visibility = "visible";
                selector1.src = "images/" + col + "-star.gif";
                time = setTimeout(function() {
                    countdown(null);
                }, 3000);
                selector1.addEventListener("click", function() {
                    if (touch === 0) {
                        touch = 1;
                        selector1.style.visibility = "hidden";
                        selector1.src = "";
                        path(temp, col);
                        ys[1] = temp;
                        //done = checker(ys[1], col, temp);
                    }
                });
            } else {
                selector1 = selector(ys[1]);
                selector1.style.visibility = "visible";
                selector1.src = "images/" + col + "-star.gif";
                time = setTimeout(function() {
                    countdown(null);
                }, 3000);
                selector1.addEventListener("click", function() {
                    if (touch === 0) {
                        touch = 1;
                        selector1.style.visibility = "hidden";
                        selector1.src = "";
                        path(temp, col);
                        ys[1] = temp;
                        //done = checker(ys[1], col, temp);
                    }
                });
            }
        }
        if (pos2 === "none") {
            document.querySelector(".btn").disabled = "blocked";
            temp = ys[2] + value;
            greaty[2] = greaty[2] + value;
            if (temp > 52) {
                greatvalue = temp - 52;
                greaty[2] = temp;
                temp = greatvalue;
                selector2 = selector(ys[2]);
                selector2.style.visibility = "visible";
                selector2.src = "images/" + col + "-star.gif";
                time = setTimeout(function() {
                    countdown(null);
                }, 3000);
                selector2.addEventListener("click", function() {
                    if (touch === 0) {
                        touch = 1;
                        selector2.style.visibility = "hidden";
                        selector2.src = "";
                        path(temp, col);
                        ys[2] = temp;
                        //done = checker(ys[2], col, temp);
                    }
                });
            } else if (greaty[2] > 90) {
                greatvalue = greaty[2] - 90;
                temp = greatvalue + 70;
                selector2 = selector(ys[2]);
                selector2.style.visibility = "visible";
                selector2.src = "images/" + col + "-star.gif";
                time = setTimeout(function() {
                    countdown(null);
                }, 3000);
                selector2.addEventListener("click", function() {
                    if (touch === 0) {
                        touch = 1;
                        selector2.style.visibility = "hidden";
                        selector2.src = "";
                        path(temp, col);
                        ys[2] = temp;
                        //done = checker(ys[2], col, temp);
                    }
                });
            } else {
                selector2 = selector(ys[2]);
                selector2.style.visibility = "visible";
                selector2.src = "images/" + col + "-star.gif";
                time = setTimeout(function() {
                    countdown(null);
                }, 3000);
                selector2.addEventListener("click", function() {
                    if (touch === 0) {
                        touch = 1;
                        selector2.style.visibility = "hidden";
                        selector2.src = "";
                        path(temp, col);
                        ys[2] = temp;
                        //done = checker(ys[2], col, temp);
                    }
                });
            }
        }
        if (pos3 === "none") {
            document.querySelector(".btn").disabled = "blocked";
            temp = ys[3] + value;
            greaty[3] = greaty[3] + value;
            if (temp > 52) {
                greatvalue = temp - 52;
                greaty[3] = temp;
                temp = greatvalue;
                selector3 = selector(ys[3]);
                selector3.style.visibility = "visible";
                selector3.src = "images/" + col + "-star.gif";
                time = setTimeout(function() {
                    countdown(null);
                }, 3000);
                selector3.addEventListener("click", function() {
                    if (touch === 0) {
                        touch = 1;
                        selector3.style.visibility = "hidden";
                        selector3.src = "";
                        path(temp, col);
                        ys[3] = temp;
                        //done = checker(ys[3], col, temp);
                    }
                });
            } else if (greaty[3] > 90) {
                greatvalue = greaty[3] - 90;
                temp = greatvalue + 70;
                selector3 = selector(ys[3]);
                selector3.style.visibility = "visible";
                selector3.src = "images/" + col + "-star.gif";
                time = setTimeout(function() {
                    countdown(null);
                }, 3000);
                selector3.addEventListener("click", function() {
                    if (touch === 0) {
                        touch = 1;
                        selector3.style.visibility = "hidden";
                        selector3.src = "";
                        path(temp, col);
                        ys[3] = temp;
                        //done = checker(ys[3], col, temp);
                    }
                });
            } else {
                selector3 = selector(ys[3]);
                selector3.style.visibility = "visible";
                selector3.src = "images/" + col + "-star.gif";
                time = setTimeout(function() {
                    countdown(null);
                }, 3000);
                selector3.addEventListener("click", function() {
                    if (touch === 0) {
                        touch = 1;
                        selector3.style.visibility = "hidden";
                        selector3.src = "";
                        path(temp, col);
                        ys[3] = temp;
                        //done = checker(ys[3], col, temp);
                    }
                });
            }
        }
        // updater(ys[0]);
        // updater(ys[1]);
        // updater(ys[2]);
        // updater(ys[3]);
    }
    if (value === 6) {
        if (pos !== "none") {
            document.querySelector(".yellowa .first").style.backgroundColor = "";
            document.querySelector(".yellowa .first img").style.visibility = "visible";
            document.querySelector(".yellowa .first img").src = "images/yellow-star.gif";
            document.querySelector(".btn").disabled = "blocked";
            time = setTimeout(function() {
                countdown(null);
            }, 3000);
            document.querySelector(".yellowa .first img").addEventListener("click", function() {
                if (touch === 0) {
                    touch = 1;
                    document.querySelector(".yellowa .first img").src = "";
                    document.querySelector(".yellowa .first img").style.visibility = "hidden";
                    yb[0] = 1;
                    ys[0] = 40;
                    path(ys[0], col);
                }
            });
        }
        if (pos1 !== "none") {
            document.querySelector(".yellowa .Second").style.backgroundColor = "";
            document.querySelector(".yellowa .Second img").style.visibility = "visible";
            document.querySelector(".yellowa .Second img").src = "images/yellow-star.gif";
            document.querySelector(".btn").disabled = "blocked";
            time = setTimeout(function() {
                countdown(null);
            }, 3000);
            document.querySelector(".yellowa .Second img").addEventListener("click", function() {
                if (touch === 0) {
                    touch = 1;
                    document.querySelector(".yellowa .Second img").src = "";
                    document.querySelector(".yellowa .Second img").style.visibility = "hidden";
                    yb[1] = 1;
                    ys[1] = 40;
                    path(ys[1], col);
                }
            });
        }
        if (pos2 !== "none") {
            document.querySelector(".yellowa .Third").style.backgroundColor = "";
            document.querySelector(".yellowa .Third img").style.visibility = "visible";
            document.querySelector(".yellowa .Third img").src = "images/yellow-star.gif";
            document.querySelector(".btn").disabled = "blocked";
            time = setTimeout(function() {
                countdown(null);
            }, 3000);
            document.querySelector(".yellowa .Third img").addEventListener("click", function() {
                if (touch === 0) {
                    touch = 1;
                    document.querySelector(".yellowa .Third img").src = "";
                    document.querySelector(".yellowa .Third img").style.visibility = "hidden";
                    yb[2] = 1;
                    ys[2] = 40;
                    path(ys[2], col);
                }
            });
        }
        if (pos3 !== "none") {
            document.querySelector(".yellowa .Fourth").style.backgroundColor = "";
            document.querySelector(".yellowa .Fourth img").style.visibility = "visible";
            document.querySelector(".yellowa .Fourth img").src = "images/yellow-star.gif";
            document.querySelector(".btn").disabled = "blocked";
            time = setTimeout(function() {
                countdown(null);
            }, 3000);
            document.querySelector(".yellowa .Fourth img").addEventListener("click", function() {
                if (touch === 0) {
                    touch = 1;
                    document.querySelector(".yellowa .Fourth img").src = "";
                    document.querySelector(".yellowa .Fourth img").style.visibility = "hidden";
                    yb[3] = 1;
                    ys[3] = 40;
                    path(ys[3], col);
                }
            });
        }
    }
    touch = 0;
}

//For ending animation.
function animationend() {
    //green animation end.
    if (document.querySelector(".greena .first img").style.visibility = "visible") {
        document.querySelector(".greena .first img").src = "";
        document.querySelector(".greena .first img").style.visibility = "hidden";
        document.querySelector(".greena .first").display = "relative";
        document.querySelector(".greena .first").style.backgroundColor = "green";
    }
    if (document.querySelector(".greena .Second img").style.visibility = "visible") {
        document.querySelector(".greena .Second img").src = "";
        document.querySelector(".greena .Second img").style.visibility = "hidden";
        document.querySelector(".greena .Second").display = "relative";
        document.querySelector(".greena .Second").style.backgroundColor = "green";
    }
    if (document.querySelector(".greena .Third img").style.visibility = "visible") {
        document.querySelector(".greena .Third img").src = "";
        document.querySelector(".greena .Third img").style.visibility = "hidden";
        document.querySelector(".greena .Third").display = "relative";
        document.querySelector(".greena .Third").style.backgroundColor = "green";
    }
    if (document.querySelector(".greena .Fourth img").style.visibility = "visible") {
        document.querySelector(".greena .Fourth img").src = "";
        document.querySelector(".greena .Fourth img").style.visibility = "hidden";
        document.querySelector(".greena .Fourth").display = "relative";
        document.querySelector(".greena .Fourth").style.backgroundColor = "green";
    }

    //red animation end.
    if (document.querySelector(".reda .first img").style.visibility = "visible") {
        document.querySelector(".reda .first img").src = "";
        document.querySelector(".reda .first img").style.visibility = "hidden";
        document.querySelector(".reda .first").display = "relative";
        document.querySelector(".reda .first").style.backgroundColor = "red";
    }
    if (document.querySelector(".reda .Second img").style.visibility = "visible") {
        document.querySelector(".reda .Second img").src = "";
        document.querySelector(".reda .Second img").style.visibility = "hidden";
        document.querySelector(".reda .Second").display = "relative";
        document.querySelector(".reda .Second").style.backgroundColor = "red";
    }
    if (document.querySelector(".reda .Third img").style.visibility = "visible") {
        document.querySelector(".reda .Third img").src = "";
        document.querySelector(".reda .Third img").style.visibility = "hidden";
        document.querySelector(".reda .Third").display = "relative";
        document.querySelector(".reda .Third").style.backgroundColor = "red";
    }
    if (document.querySelector(".reda .Fourth img").style.visibility = "visible") {
        document.querySelector(".reda .Fourth img").src = "";
        document.querySelector(".reda .Fourth img").style.visibility = "hidden";
        document.querySelector(".reda .Fourth").display = "relative";
        document.querySelector(".reda .Fourth").style.backgroundColor = "red";
    }

    //yellow animation end.
    if (document.querySelector(".yellowa .first img").style.visibility = "visible") {
        document.querySelector(".yellowa .first img").src = "";
        document.querySelector(".yellowa .first img").style.visibility = "hidden";
        document.querySelector(".yellowa .first").display = "relative";
        document.querySelector(".yellowa .first").style.backgroundColor = "yellow";
    }
    if (document.querySelector(".yellowa .Second img").style.visibility = "visible") {
        document.querySelector(".yellowa .Second img").src = "";
        document.querySelector(".yellowa .Second img").style.visibility = "hidden";
        document.querySelector(".yellowa .Second").display = "relative";
        document.querySelector(".yellowa .Second").style.backgroundColor = "yellow";
    }
    if (document.querySelector(".yellowa .Third img").style.visibility = "visible") {
        document.querySelector(".yellowa .Third img").src = "";
        document.querySelector(".yellowa .Third img").style.visibility = "hidden";
        document.querySelector(".yellowa .Third").display = "relative";
        document.querySelector(".yellowa .Third").style.backgroundColor = "yellow";
    }
    if (document.querySelector(".yellowa .Fourth img").style.visibility = "visible") {
        document.querySelector(".yellowa .Fourth img").src = "";
        document.querySelector(".yellowa .Fourth img").style.visibility = "hidden";
        document.querySelector(".yellowa .Fourth").display = "relative";
        document.querySelector(".yellowa .Fourth").style.backgroundColor = "yellow";
    }

    //blue animation end.
    if (document.querySelector(".bluea .first img").style.visibility = "visible") {
        document.querySelector(".bluea .first img").src = "";
        document.querySelector(".bluea .first img").style.visibility = "hidden";
        document.querySelector(".bluea .first").display = "relative";
        document.querySelector(".bluea .first").style.backgroundColor = "blue";
    }
    if (document.querySelector(".bluea .Second img").style.visibility = "visible") {
        document.querySelector(".bluea .Second img").src = "";
        document.querySelector(".bluea .Second img").style.visibility = "hidden";
        document.querySelector(".bluea .Second").display = "relative";
        document.querySelector(".bluea .Second").style.backgroundColor = "blue";
    }
    if (document.querySelector(".bluea .Third img").style.visibility = "visible") {
        document.querySelector(".bluea .Third img").src = "";
        document.querySelector(".bluea .Third img").style.visibility = "hidden";
        document.querySelector(".bluea .Third").display = "relative";
        document.querySelector(".bluea .Third").style.backgroundColor = "blue";
    }
    if (document.querySelector(".bluea .Fourth img").style.visibility = "visible") {
        document.querySelector(".bluea .Fourth img").src = "";
        document.querySelector(".bluea .Fourth img").style.visibility = "hidden";
        document.querySelector(".bluea .Fourth").display = "relative";
        document.querySelector(".bluea .Fourth").style.backgroundColor = "blue";
    }

    //others animation end.
    //green starts from here.
    if (document.querySelector(".path1 .g1 img").style.visibility = "visible") {
        document.querySelector(".path1 .g1 img").style.visibility = "hidden";
        document.querySelector(".path1 .g1 img").src = "";
    }
    if (document.querySelector(".path2 .g1 img").style.visibility = "visible") {
        document.querySelector(".path2 .g1 img").style.visibility = "hidden";
        document.querySelector(".path2 .g1 img").src = "";
    }
    if (document.querySelector(".path3 .g1 img").style.visibility = "visible") {
        document.querySelector(".path3 .g1 img").style.visibility = "hidden";
        document.querySelector(".path3 .g1 img").src = "";
    }
    if (document.querySelector(".path4 .g1 img").style.visibility = "visible") {
        document.querySelector(".path4 .g1 img").style.visibility = "hidden";
        document.querySelector(".path4 .g1 img").src = "";
    }
    if (document.querySelector(".path5 .g1 img").style.visibility = "visible") {
        document.querySelector(".path5 .g1 img").style.visibility = "hidden";
        document.querySelector(".path5 .g1 img").src = "";
    }
    if (document.querySelector(".vpath .g6 img").style.visibility = "visible") {
        document.querySelector(".vpath .g6 img").style.visibility = "hidden";
        document.querySelector(".vpath .g6 img").src = "";
    }
    if (document.querySelector(".vpath .g5 img").style.visibility = "visible") {
        document.querySelector(".vpath .g5 img").style.visibility = "hidden";
        document.querySelector(".vpath .g5 img").src = "";
    }
    if (document.querySelector(".vpath .g4 img").style.visibility = "visible") {
        document.querySelector(".vpath .g4 img").style.visibility = "hidden";
        document.querySelector(".vpath .g4 img").src = "";
    }
    if (document.querySelector(".vpath .g3 img").style.visibility = "visible") {
        document.querySelector(".vpath .g3 img").style.visibility = "hidden";
        document.querySelector(".vpath .g3 img").src = "";
    }
    if (document.querySelector(".vpath .g2 img").style.visibility = "visible") {
        document.querySelector(".vpath .g2 img").style.visibility = "hidden";
        document.querySelector(".vpath .g2 img").src = "";
    }
    if (document.querySelector(".vpath .g1 img").style.visibility = "visible") {
        document.querySelector(".vpath .g1 img").style.visibility = "hidden";
        document.querySelector(".vpath .g1 img").src = "";
    }
    if (document.querySelector(".vpath .g1 img").style.visibility = "visible") {
        document.querySelector(".vpath .g1 img").style.visibility = "hidden";
        document.querySelector(".vpath .g1 img").src = "";
    }
    if (document.querySelector(".vpath2 .g1 img").style.visibility = "visible") {
        document.querySelector(".vpath2 .g1 img").style.visibility = "hidden";
        document.querySelector(".vpath2 .g1 img").src = "";
    } //red starts from here.
    if (document.querySelector(".vpath2 .g2 img").style.visibility = "visible") {
        document.querySelector(".vpath2 .g2 img").style.visibility = "hidden";
        document.querySelector(".vpath2 .g2 img").src = "";
    }
    if (document.querySelector(".vpath2 .g3 img").style.visibility = "visible") {
        document.querySelector(".vpath2 .g3 img").style.visibility = "hidden";
        document.querySelector(".vpath2 .g3 img").src = "";
    }
    if (document.querySelector(".vpath2 .g4 img").style.visibility = "visible") {
        document.querySelector(".vpath2 .g4 img").style.visibility = "hidden";
        document.querySelector(".vpath2 .g4 img").src = "";
    }
    if (document.querySelector(".vpath2 .g5 img").style.visibility = "visible") {
        document.querySelector(".vpath2 .g5 img").style.visibility = "hidden";
        document.querySelector(".vpath2 .g5 img").src = "";
    }
    if (document.querySelector(".vpath2 .g6 img").style.visibility = "visible") {
        document.querySelector(".vpath2 .g6 img").style.visibility = "hidden";
        document.querySelector(".vpath2 .g6 img").src = "";
    }
    if (document.querySelector(".path6 .g1 img").style.visibility = "visible") {
        document.querySelector(".path6 .g1 img").style.visibility = "hidden";
        document.querySelector(".path6 .g1 img").src = "";
    }
    if (document.querySelector(".path7 .g1 img").style.visibility = "visible") {
        document.querySelector(".path7 .g1 img").style.visibility = "hidden";
        document.querySelector(".path7 .g1 img").src = "";
    }
    if (document.querySelector(".path8 .g1 img").style.visibility = "visible") {
        document.querySelector(".path8 .g1 img").style.visibility = "hidden";
        document.querySelector(".path8 .g1 img").src = "";
    }
    if (document.querySelector(".path9 .g1 img").style.visibility = "visible") {
        document.querySelector(".path9 .g1 img").style.visibility = "hidden";
        document.querySelector(".path9 .g1 img").src = "";
    }
    if (document.querySelector(".path10 .g1 img").style.visibility = "visible") {
        document.querySelector(".path10 .g1 img").style.visibility = "hidden";
        document.querySelector(".path10 .g1 img").src = "";
    }
    if (document.querySelector(".path11 .g1 img").style.visibility = "visible") {
        document.querySelector(".path11 .g1 img").style.visibility = "hidden";
        document.querySelector(".path11 .g1 img").src = "";
    }
    if (document.querySelector(".path11 .g2 img").style.visibility = "visible") {
        document.querySelector(".path11 .g2 img").style.visibility = "hidden";
        document.querySelector(".path11 .g2 img").src = "";
    }
    if (document.querySelector(".path11 .g3 img").style.visibility = "visible") {
        document.querySelector(".path11 .g3 img").style.visibility = "hidden";
        document.querySelector(".path11 .g3 img").src = "";
    } //Blue starts from here.
    if (document.querySelector(".path10 .g3 img").style.visibility = "visible") {
        document.querySelector(".path10 .g3 img").style.visibility = "hidden";
        document.querySelector(".path10 .g3 img").src = "";
    }
    if (document.querySelector(".path9 .g3 img").style.visibility = "visible") {
        document.querySelector(".path9 .g3 img").style.visibility = "hidden";
        document.querySelector(".path9 .g3 img").src = "";
    }
    if (document.querySelector(".path8 .g3 img").style.visibility = "visible") {
        document.querySelector(".path8 .g3 img").style.visibility = "hidden";
        document.querySelector(".path8 .g3 img").src = "";
    }
    if (document.querySelector(".path7 .g3 img").style.visibility = "visible") {
        document.querySelector(".path7 .g3 img").style.visibility = "hidden";
        document.querySelector(".path7 .g3 img").src = "";
    }
    if (document.querySelector(".path6 .g3 img").style.visibility = "visible") {
        document.querySelector(".path6 .g3 img").style.visibility = "hidden";
        document.querySelector(".path6 .g3 img").src = "";
    }
    if (document.querySelector(".vpath5 .g1 img").style.visibility = "visible") {
        document.querySelector(".vpath5 .g1 img").style.visibility = "hidden";
        document.querySelector(".vpath5 .g1 img").src = "";
    }
    if (document.querySelector(".vpath5 .g2 img").style.visibility = "visible") {
        document.querySelector(".vpath5 .g2 img").style.visibility = "hidden";
        document.querySelector(".vpath5 .g2 img").src = "";
    }
    if (document.querySelector(".vpath5 .g3 img").style.visibility = "visible") {
        document.querySelector(".vpath5 .g3 img").style.visibility = "hidden";
        document.querySelector(".vpath5 .g3 img").src = "";
    }
    if (document.querySelector(".vpath5 .g4 img").style.visibility = "visible") {
        document.querySelector(".vpath5 .g4 img").style.visibility = "hidden";
        document.querySelector(".vpath5 .g4 img").src = "";
    }
    if (document.querySelector(".vpath5 .g5 img").style.visibility = "visible") {
        document.querySelector(".vpath5 .g5 img").style.visibility = "hidden";
        document.querySelector(".vpath5 .g5 img").src = "";
    }
    if (document.querySelector(".vpath5 .g6 img").style.visibility = "visible") {
        document.querySelector(".vpath5 .g6 img").style.visibility = "hidden";
        document.querySelector(".vpath5 .g6 img").src = "";
    }
    if (document.querySelector(".vpath4 .g6 img").style.visibility = "visible") {
        document.querySelector(".vpath4 .g6 img").style.visibility = "hidden";
        document.querySelector(".vpath4 .g6 img").src = "";
    }
    if (document.querySelector(".vpath3 .g6 img").style.visibility = "visible") {
        document.querySelector(".vpath3 .g6 img").style.visibility = "hidden";
        document.querySelector(".vpath3 .g6 img").src = "";
    } //yellow starts from here.
    if (document.querySelector(".vpath3 .g5 img").style.visibility = "visible") {
        document.querySelector(".vpath3 .g5 img").style.visibility = "hidden";
        document.querySelector(".vpath3 .g5 img").src = "";
    }
    if (document.querySelector(".vpath3 .g4 img").style.visibility = "visible") {
        document.querySelector(".vpath3 .g4 img").style.visibility = "hidden";
        document.querySelector(".vpath3 .g4 img").src = "";
    }
    if (document.querySelector(".vpath3 .g3 img").style.visibility = "visible") {
        document.querySelector(".vpath3 .g3 img").style.visibility = "hidden";
        document.querySelector(".vpath3 .g3 img").src = "";
    }
    if (document.querySelector(".vpath3 .g2 img").style.visibility = "visible") {
        document.querySelector(".vpath3 .g2 img").style.visibility = "hidden";
        document.querySelector(".vpath3 .g2 img").src = "";
    }
    if (document.querySelector(".vpath3 .g1 img").style.visibility = "visible") {
        document.querySelector(".vpath3 .g1 img").style.visibility = "hidden";
        document.querySelector(".vpath3 .g1 img").src = "";
    }
    if (document.querySelector(".path5 .g3 img").style.visibility = "visible") {
        document.querySelector(".path5 .g3 img").style.visibility = "hidden";
        document.querySelector(".path5 .g3 img").src = "";
    }
    if (document.querySelector(".path4 .g3 img").style.visibility = "visible") {
        document.querySelector(".path4 .g3 img").style.visibility = "hidden";
        document.querySelector(".path4 .g3 img").src = "";
    }
    if (document.querySelector(".path3 .g3 img").style.visibility = "visible") {
        document.querySelector(".path3 .g3 img").style.visibility = "hidden";
        document.querySelector(".path3 .g3 img").src = "";
    }
    if (document.querySelector(".path2 .g3 img").style.visibility = "visible") {
        document.querySelector(".path2 .g3 img").style.visibility = "hidden";
        document.querySelector(".path2 .g3 img").src = "";
    }
    if (document.querySelector(".path1 .g3 img").style.visibility = "visible") {
        document.querySelector(".path1 .g3 img").style.visibility = "hidden";
        document.querySelector(".path1 .g3 img").src = "";
    }
    if (document.querySelector(".path .g3 img").style.visibility = "visible") {
        document.querySelector(".path .g3 img").style.visibility = "hidden";
        document.querySelector(".path .g3 img").src = "";
    }
    if (document.querySelector(".path .g2 img").style.visibility = "visible") {
        document.querySelector(".path .g2 img").style.visibility = "hidden";
        document.querySelector(".path .g2 img").src = "";
    }
    if (document.querySelector(".path .g1 img").style.visibility = "visible") {
        document.querySelector(".path .g1 img").style.visibility = "hidden";
        document.querySelector(".path .g1 img").src = "";
    }
    //For Home.
    if (document.querySelector(".path1 .g2 img").style.visibility = "visible") {
        document.querySelector(".path1 .g2 img").style.visibility = "hidden";
        document.querySelector(".path1 .g2 img").src = "";
    }
    if (document.querySelector(".path2 .g2 img").style.visibility = "visible") {
        document.querySelector(".path2 .g2 img").style.visibility = "hidden";
        document.querySelector(".path2 .g2 img").src = "";
    }
    if (document.querySelector(".path3 .g2 img").style.visibility = "visible") {
        document.querySelector(".path3 .g2 img").style.visibility = "hidden";
        document.querySelector(".path3 .g2 img").src = "";
    }
    if (document.querySelector(".path4 .g2 img").style.visibility = "visible") {
        document.querySelector(".path4 .g2 img").style.visibility = "hidden";
        document.querySelector(".path4 .g2 img").src = "";
    }
    if (document.querySelector(".path5 .g2 img").style.visibility = "visible") {
        document.querySelector(".path5 .g2 img").style.visibility = "hidden";
        document.querySelector(".path5 .g2 img").src = "";
    }
    if (document.querySelector(".vpath1 .g2 img").style.visibility = "visible") {
        document.querySelector(".vpath1 .g2 img").style.visibility = "hidden";
        document.querySelector(".vpath1 .g2 img").src = "";
    }
    if (document.querySelector(".vpath1 .g3 img").style.visibility = "visible") {
        document.querySelector(".vpath1 .g3 img").style.visibility = "hidden";
        document.querySelector(".vpath1 .g3 img").src = "";
    }
    if (document.querySelector(".vpath1 .g4 img").style.visibility = "visible") {
        document.querySelector(".vpath1 .g4 img").style.visibility = "hidden";
        document.querySelector(".vpath1 .g4 img").src = "";
    }
    if (document.querySelector(".vpath1 .g5 img").style.visibility = "visible") {
        document.querySelector(".vpath1 .g5 img").style.visibility = "hidden";
        document.querySelector(".vpath1 .g5 img").src = "";
    }
    if (document.querySelector(".vpath1 .g6 img").style.visibility = "visible") {
        document.querySelector(".vpath1 .g6 img").style.visibility = "hidden";
        document.querySelector(".vpath1 .g6 img").src = "";
    }
    if (document.querySelector(".path10 .g2 img").style.visibility = "visible") {
        document.querySelector(".path10 .g2 img").style.visibility = "hidden";
        document.querySelector(".path10 .g2 img").src = "";
    }
    if (document.querySelector(".path9 .g2 img").style.visibility = "visible") {
        document.querySelector(".path9 .g2 img").style.visibility = "hidden";
        document.querySelector(".path9 .g2 img").src = "";
    }
    if (document.querySelector(".path8 .g2 img").style.visibility = "visible") {
        document.querySelector(".path8 .g2 img").style.visibility = "hidden";
        document.querySelector(".path8 .g2 img").src = "";
    }
    if (document.querySelector(".path7 .g2 img").style.visibility = "visible") {
        document.querySelector(".path7 .g2 img").style.visibility = "hidden";
        document.querySelector(".path7 .g2 img").src = "";
    }
    if (document.querySelector(".path6 .g2 img").style.visibility = "visible") {
        document.querySelector(".path6 .g2 img").style.visibility = "hidden";
        document.querySelector(".path6 .g2 img").src = "";
    }
    if (document.querySelector(".vpath4 .g5 img").style.visibility = "visible") {
        document.querySelector(".vpath4 .g5 img").style.visibility = "hidden";
        document.querySelector(".vpath4 .g5 img").src = "";
    }
    if (document.querySelector(".vpath4 .g4 img").style.visibility = "visible") {
        document.querySelector(".vpath4 .g4 img").style.visibility = "hidden";
        document.querySelector(".vpath4 .g4 img").src = "";
    }
    if (document.querySelector(".vpath4 .g3 img").style.visibility = "visible") {
        document.querySelector(".vpath4 .g3 img").style.visibility = "hidden";
        document.querySelector(".vpath4 .g3 img").src = "";
    }
    if (document.querySelector(".vpath4 .g2 img").style.visibility = "visible") {
        document.querySelector(".vpath4 .g2 img").style.visibility = "hidden";
        document.querySelector(".vpath4 .g2 img").src = "";
    }
    if (document.querySelector(".vpath4 .g1 img").style.visibility = "visible") {
        document.querySelector(".vpath4 .g1 img").style.visibility = "hidden";
        document.querySelector(".vpath4 .g1 img").src = "";
    }
}