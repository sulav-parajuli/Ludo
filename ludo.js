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

document.querySelect(".greena .first").style.backgroundColor = "green";
document.querySelect(".greena .Second").style.backgroundColor = "green";
document.querySelect(".greena .Third").style.backgroundColor = "green";
document.querySelect(".greena .Fourth").style.backgroundColor = "green";

document.querySelect(".reda .first").style.backgroundColor = "red";
document.querySelect(".reda .Second").style.backgroundColor = "red";
document.querySelect(".reda .Third").style.backgroundColor = "red";
document.querySelect(".reda .Fourth").style.backgroundColor = "red";

document.querySelect(".yellowa .first").style.backgroundColor = "yellow";
document.querySelect(".yellowa .Second").style.backgroundColor = "yellow";
document.querySelect(".yellowa .Third").style.backgroundColor = "yellow";
document.querySelect(".yellowa .Fourth").style.backgroundColor = "yellow";

document.querySelect(".bluea .first").style.backgroundColor = "blue";
document.querySelect(".bluea .Second").style.backgroundColor = "blue";
document.querySelect(".bluea .Third").style.backgroundColor = "blue";
document.querySelect(".bluea .Fourth").style.backgroundColor = "blue";


// if (count == "first") {
//     document.querySelect("#name1").innerHTML = x;
//     document.querySelect("#name1").style.color = a;
//     document.querySelect("#name2").style.color = "";
//     document.querySelect("#name3").style.color = "";
//     document.querySelect("#name4").style.color = "";
// } else
if (count == "second") {
    document.querySelect("#name1").innerHTML = x;
    document.querySelect("#name1").style.color = a;
    document.querySelect("#name2").innerHTML = y;
    document.querySelect("#name2").style.color = b;
    document.querySelect("#name3").style.color = "";
    document.querySelect("#name4").style.color = "";
} else if (count == "third") {
    document.querySelect("#name1").innerHTML = x;
    document.querySelect("#name1").style.color = a;
    document.querySelect("#name2").innerHTML = y;
    document.querySelect("#name2").style.color = b;
    document.querySelect("#name3").innerHTML = z;
    document.querySelect("#name3").style.color = c;
    document.querySelect("#name4").style.color = "";
} else if (count == "fourth") {
    document.querySelect("#name1").innerHTML = x;
    document.querySelect("#name1").style.color = a;
    document.querySelect("#name2").innerHTML = y;
    document.querySelect("#name2").style.color = b;
    document.querySelect("#name3").innerHTML = z;
    document.querySelect("#name3").style.color = c;
    document.querySelect("#name4").innerHTML = w;
    document.querySelect("#name4").style.color = d;
}


//color arrangement and names.
while (document.querySelect("#name1").style.color != "green" || document.querySelect("#name2").style.color != "red" || document.querySelect("#name3").style.color != "blue" || document.querySelect("#name4").style.color != "yellow") {
    if (document.querySelect("#name1").style.color === "green") {
        //it's ok,first player chooses green.
    } else if (document.querySelect("#name1").style.color === "red") {
        temp = document.querySelect("#name2").innerHTML;
        document.querySelect("#name2").innerHTML = document.querySelect("#name1").innerHTML;
        document.querySelect("#name1").innerHTML = temp;

        temp = document.querySelect("#name2").style.color;
        document.querySelect("#name2").style.color = document.querySelect("#name1").style.color;
        document.querySelect("#name1").style.color = temp;
    } else if (document.querySelect("#name1").style.color === "blue") {
        temp = document.querySelect("#name3").innerHTML;
        document.querySelect("#name3").innerHTML = document.querySelect("#name1").innerHTML;
        document.querySelect("#name1").innerHTML = temp;

        temp = document.querySelect("#name3").style.color;
        document.querySelect("#name3").style.color = document.querySelect("#name1").style.color;
        document.querySelect("#name1").style.color = temp;
    } else if (document.querySelect("#name1").style.color === "yellow") {
        temp = document.querySelect("#name4").innerHTML;
        document.querySelect("#name4").innerHTML = document.querySelect("#name1").innerHTML;
        document.querySelect("#name1").innerHTML = temp;

        temp = document.querySelect("#name4").style.color;
        document.querySelect("#name4").style.color = document.querySelect("#name1").style.color;
        document.querySelect("#name1").style.color = temp;
    } else {
        if (document.querySelect("#name2").style.color === "green") {
            temp = document.querySelect("#name1").innerHTML;
            document.querySelect("#name1").innerHTML = document.querySelect("#name2").innerHTML;
            document.querySelect("#name2").innerHTML = temp;

            temp = document.querySelect("#name1").style.color;
            document.querySelect("#name1").style.color = document.querySelect("#name2").style.color;
            document.querySelect("#name2").style.color = temp;
        } else if (document.querySelect("#name3").style.color === "green") {
            temp = document.querySelect("#name1").innerHTML;
            document.querySelect("#name1").innerHTML = document.querySelect("#name3").innerHTML;
            document.querySelect("#name3").innerHTML = temp;

            temp = document.querySelect("#name1").style.color;
            document.querySelect("#name1").style.color = document.querySelect("#name3").style.color;
            document.querySelect("#name3").style.color = temp;
        } else if (document.querySelect("#name4").style.color === "green") {
            temp = document.querySelect("#name1").innerHTML;
            document.querySelect("#name1").innerHTML = document.querySelect("#name4").innerHTML;
            document.querySelect("#name4").innerHTML = temp;

            temp = document.querySelect("#name1").style.color;
            document.querySelect("#name1").style.color = document.querySelect("#name4").style.color;
            document.querySelect("#name4").style.color = temp;
        } else {
            document.querySelect("#name1").style.color = "green";
        }
    }

    if (document.querySelect("#name2").style.color === "green") {
        temp = document.querySelect("#name1").innerHTML;
        document.querySelect("#name1").innerHTML = document.querySelect("#name2").innerHTML;
        document.querySelect("#name2").innerHTML = temp;

        temp = document.querySelect("#name1").style.color;
        document.querySelect("#name1").style.color = document.querySelect("#name2").style.color;
        document.querySelect("#name2").style.color = temp;
    } else if (document.querySelect("#name2").style.color === "red") {
        //it's ok,second player chooses red.
    } else if (document.querySelect("#name2").style.color === "blue") {
        temp = document.querySelect("#name3").innerHTML;
        document.querySelect("#name3").innerHTML = document.querySelect("#name2").innerHTML;
        document.querySelect("#name2").innerHTML = temp;

        temp = document.querySelect("#name3").style.color;
        document.querySelect("#name3").style.color = document.querySelect("#name2").style.color;
        document.querySelect("#name2").style.color = temp;
    } else if (document.querySelect("#name2").style.color === "yellow") {
        temp = document.querySelect("#name4").innerHTML;
        document.querySelect("#name4").innerHTML = document.querySelect("#name2").innerHTML;
        document.querySelect("#name2").innerHTML = temp;

        temp = document.querySelect("#name4").style.color;
        document.querySelect("#name4").style.color = document.querySelect("#name2").style.color;
        document.querySelect("#name2").style.color = temp;
    } else {
        if (document.querySelect("#name1").style.color === "red") {
            temp = document.querySelect("#name2").innerHTML;
            document.querySelect("#name2").innerHTML = document.querySelect("#name1").innerHTML;
            document.querySelect("#name1").innerHTML = temp;

            temp = document.querySelect("#name2").style.color;
            document.querySelect("#name2").style.color = document.querySelect("#name1").style.color;
            document.querySelect("#name1").style.color = temp;
        } else if (document.querySelect("#name3").style.color === "red") {
            temp = document.querySelect("#name2").innerHTML;
            document.querySelect("#name2").innerHTML = document.querySelect("#name3").innerHTML;
            document.querySelect("#name3").innerHTML = temp;

            temp = document.querySelect("#name2").style.color;
            document.querySelect("#name2").style.color = document.querySelect("#name3").style.color;
            document.querySelect("#name3").style.color = temp;
        } else if (document.querySelect("#name4").style.color === "red") {
            temp = document.querySelect("#name2").innerHTML;
            document.querySelect("#name2").innerHTML = document.querySelect("#name4").innerHTML;
            document.querySelect("#name4").innerHTML = temp;

            temp = document.querySelect("#name2").style.color;
            document.querySelect("#name2").style.color = document.querySelect("#name4").style.color;
            document.querySelect("#name4").style.color = temp;
        } else {
            document.querySelect("#name2").style.color = "red";
        }
    }

    if (document.querySelect("#name3").style.color === "green") {
        temp = document.querySelect("#name1").innerHTML;
        document.querySelect("#name1").innerHTML = document.querySelect("#name3").innerHTML;
        document.querySelect("#name3").innerHTML = temp;

        temp = document.querySelect("#name1").style.color;
        document.querySelect("#name1").style.color = document.querySelect("#name3").style.color;
        document.querySelect("#name3").style.color = temp;
    } else if (document.querySelect("#name3").style.color === "red") {
        temp = document.querySelect("#name2").innerHTML;
        document.querySelect("#name2").innerHTML = document.querySelect("#name3").innerHTML;
        document.querySelect("#name3").innerHTML = temp;

        temp = document.querySelect("#name2").style.color;
        document.querySelect("#name2").style.color = document.querySelect("#name3").style.color;
        document.querySelect("#name3").style.color = temp;
    } else if (document.querySelect("#name3").style.color === "blue") {
        //it's ok,third player chooses blue.
    } else if (document.querySelect("#name3").style.color === "yellow") {
        temp = document.querySelect("#name4").innerHTML;
        document.querySelect("#name4").innerHTML = document.querySelect("#name3").innerHTML;
        document.querySelect("#name3").innerHTML = temp;

        temp = document.querySelect("#name4").style.color;
        document.querySelect("#name4").style.color = document.querySelect("#name3").style.color;
        document.querySelect("#name3").style.color = temp;
    } else {
        if (document.querySelect("#name1").style.color === "blue") {
            temp = document.querySelect("#name3").innerHTML;
            document.querySelect("#name3").innerHTML = document.querySelect("#name1").innerHTML;
            document.querySelect("#name1").innerHTML = temp;

            temp = document.querySelect("#name3").style.color;
            document.querySelect("#name3").style.color = document.querySelect("#name1").style.color;
            document.querySelect("#name1").style.color = temp;
        } else if (document.querySelect("#name2").style.color === "blue") {
            temp = document.querySelect("#name3").innerHTML;
            document.querySelect("#name3").innerHTML = document.querySelect("#name2").innerHTML;
            document.querySelect("#name2").innerHTML = temp;

            temp = document.querySelect("#name3").style.color;
            document.querySelect("#name3").style.color = document.querySelect("#name2").style.color;
            document.querySelect("#name2").style.color = temp;
        } else if (document.querySelect("#name4").style.color === "blue") {
            temp = document.querySelect("#name3").innerHTML;
            document.querySelect("#name3").innerHTML = document.querySelect("#name4").innerHTML;
            document.querySelect("#name4").innerHTML = temp;

            temp = document.querySelect("#name3").style.color;
            document.querySelect("#name3").style.color = document.querySelect("#name4").style.color;
            document.querySelect("#name4").style.color = temp;
        } else {
            document.querySelect("#name3").style.color = "blue";
        }
    }

    if (document.querySelect("#name4").style.color === "green") {
        temp = document.querySelect("#name1").innerHTML;
        document.querySelect("#name1").innerHTML = document.querySelect("#name4").innerHTML;
        document.querySelect("#name4").innerHTML = temp;

        temp = document.querySelect("#name1").style.color;
        document.querySelect("#name1").style.color = document.querySelect("#name4").style.color;
        document.querySelect("#name4").style.color = temp;
    } else if (document.querySelect("#name4").style.color === "red") {
        temp = document.querySelect("#name2").innerHTML;
        document.querySelect("#name2").innerHTML = document.querySelect("#name4").innerHTML;
        document.querySelect("#name4").innerHTML = temp;

        temp = document.querySelect("#name2").style.color;
        document.querySelect("#name2").style.color = document.querySelect("#name4").style.color;
        document.querySelect("#name4").style.color = temp;
    } else if (document.querySelect("#name4").style.color === "blue") {
        temp = document.querySelect("#name3").innerHTML;
        document.querySelect("#name3").innerHTML = document.querySelect("#name4").innerHTML;
        document.querySelect("#name4").innerHTML = temp;

        temp = document.querySelect("#name3").style.color;
        document.querySelect("#name3").style.color = document.querySelect("#name4").style.color;
        document.querySelect("#name4").style.color = temp;
    } else if (document.querySelect("#name4").style.color === "yellow") {
        //it's ok, fourth player chooses yellow.
    } else {
        if (document.querySelect("#name1").style.color === "yellow") {
            temp = document.querySelect("#name4").innerHTML;
            document.querySelect("#name4").innerHTML = document.querySelect("#name1").innerHTML;
            document.querySelect("#name1").innerHTML = temp;

            temp = document.querySelect("#name4").style.color;
            document.querySelect("#name4").style.color = document.querySelect("#name1").style.color;
            document.querySelect("#name1").style.color = temp;
        } else if (document.querySelect("#name2").style.color === "yellow") {
            temp = document.querySelect("#name4").innerHTML;
            document.querySelect("#name4").innerHTML = document.querySelect("#name2").innerHTML;
            document.querySelect("#name2").innerHTML = temp;

            temp = document.querySelect("#name4").style.color;
            document.querySelect("#name4").style.color = document.querySelect("#name2").style.color;
            document.querySelect("#name2").style.color = temp;
        } else if (document.querySelect("#name3").style.color === "yellow") {
            temp = document.querySelect("#name4").innerHTML;
            document.querySelect("#name4").innerHTML = document.querySelect("#name3").innerHTML;
            document.querySelect("#name3").innerHTML = temp;

            temp = document.querySelect("#name4").style.color;
            document.querySelect("#name4").style.color = document.querySelect("#name3").style.color;
            document.querySelect("#name3").style.color = temp;
        } else {
            document.querySelect("#name4").style.color = "yellow";
        }
    }
}


//remove unnecessary players.
if (document.querySelect("#name1").innerHTML === "") {
    if (document.querySelect("#name2").innerHTML === "") {
        if (document.querySelect("#name3").innerHTML === "") {
            document.querySelect("#name1").innerHTML = document.querySelect("#name4").innerHTML;
            document.querySelect("#name1").style.color = document.querySelect("#name4").style.color;
            document.querySelect(".Player2").style.display = "none";
            document.querySelect(".Player3").style.display = "none";
            document.querySelect(".Player4").style.display = "none";
        } else {
            document.querySelect("#name1").innerHTML = document.querySelect("#name3").innerHTML;
            document.querySelect("#name1").style.color = document.querySelect("#name3").style.color;
            if (document.querySelect("#name4").innerHTML === "") {
                document.querySelect(".Player2").style.display = "none";
                document.querySelect(".Player3").style.display = "none";
                document.querySelect(".Player4").style.display = "none";
            } else {
                document.querySelect("#name2").innerHTML = document.querySelect("#name4").innerHTML;
                document.querySelect("#name2").style.color = document.querySelect("#name4").style.color;
                document.querySelect(".Player3").style.display = "none";
                document.querySelect(".Player4").style.display = "none";
            }
        }
    } else {
        document.querySelect("#name1").innerHTML = document.querySelect("#name2").innerHTML;
        document.querySelect("#name1").style.color = document.querySelect("#name2").style.color;
        if (document.querySelect("#name3").innerHTML === "") {
            if (document.querySelect("#name4").innerHTML === "") {
                document.querySelect(".Player2").style.display = "none";
                document.querySelect(".Player3").style.display = "none";
                document.querySelect(".Player4").style.display = "none";
            } else {
                document.querySelect("#name2").innerHTML = document.querySelect("#name4").innerHTML;
                document.querySelect("#name2").style.color = document.querySelect("#name4").style.color;
                document.querySelect(".Player3").style.display = "none";
                document.querySelect(".Player4").style.display = "none";
            }
        } else {
            document.querySelect("#name2").innerHTML = document.querySelect("#name3").innerHTML;
            document.querySelect("#name2").style.color = document.querySelect("#name3").style.color;
            if (document.querySelect("#name4").innerHTML === "") {
                document.querySelect(".Player3").style.display = "none";
                document.querySelect(".Player4").style.display = "none";
            } else {
                document.querySelect("#name3").innerHTML = document.querySelect("#name4").innerHTML;
                document.querySelect("#name3").style.color = document.querySelect("#name4").style.color;
                document.querySelect(".Player4").style.display = "none";
            }
        }
    }
} else {
    if (document.querySelect("#name2").innerHTML === "") {
        if (document.querySelect("#name3").innerHTML === "") {
            if (document.querySelect("#name4").innerHTML === "") {
                document.querySelect(".Player2").style.display = "none";
                document.querySelect(".Player3").style.display = "none";
                document.querySelect(".Player4").style.display = "none";
            } else {
                document.querySelect("#name2").innerHTML = document.querySelect("#name4").innerHTML;
                document.querySelect("#name2").style.color = document.querySelect("#name4").style.color;
                document.querySelect(".Player3").style.display = "none";
                document.querySelect(".Player4").style.display = "none";
            }
        } else {
            document.querySelect("#name2").innerHTML = document.querySelect("#name3").innerHTML;
            document.querySelect("#name2").style.color = document.querySelect("#name3").style.color;
            if (document.querySelect("#name4").innerHTML === "") {
                document.querySelect(".Player3").style.display = "none";
                document.querySelect(".Player4").style.display = "none";
            } else {
                document.querySelect("#name3").innerHTML = document.querySelect("#name4").innerHTML;
                document.querySelect("#name3").style.color = document.querySelect("#name4").style.color;
                document.querySelect(".Player4").style.display = "none";
            }
        }
    } else {
        if (document.querySelect("#name3").innerHTML === "") {
            if (document.querySelect("#name4").innerHTML === "") {
                document.querySelect(".Player3").style.display = "none";
                document.querySelect(".Player4").style.display = "none";
            } else {
                document.querySelect("#name3").innerHTML = document.querySelect("#name4").innerHTML;
                document.querySelect("#name3").style.color = document.querySelect("#name4").style.color;
                document.querySelect(".Player4").style.display = "none";
            }
        } else {
            if (document.querySelect("#name4").innerHTML === "") {
                document.querySelect(".Player4").style.display = "none";
            }
        }
    }
}


document.querySelect(".btn").addEventListener("click", function() {
    // if (count === "first") {
    //     // turn++;
    //     if (turn === 1) {
    //         document.querySelect(".Player1 #image").firstElementChild.src = "images/roll.gif";
    //         value = Math.ceil(Math.random() * 6);
    //         time = setTimeout(function() {
    //             document.querySelect(".Player1 #image").firstElementChild.src = "";
    //         }, 500);
    //         document.querySelect(".Player1 #status").innerHTML = value;
    // turn = result(turn, value, count);
    //         // turn = 0;
    //     }
    // } else
    if (count === "second" || count === "third" || count === "fourth") {
        if (turn === 1) {
            document.querySelect(".Player1 #image").firstElementChild.src = "images/roll.gif";
            value = Math.ceil(Math.random() * 6);
            time = setTimeout(function() {
                document.querySelect(".Player1 #image").firstElementChild.src = "";
            }, 500);
            document.querySelect(".Player1 #status").innerHTML = value;
            turn = result(turn, value, count);
        } else if (turn === 2) {
            document.querySelect(".Player2 #image").firstElementChild.src = "images/roll.gif";
            value = Math.ceil(Math.random() * 6);
            time = setTimeout(function() {
                document.querySelect(".Player2 #image").firstElementChild.src = "";
            }, 500);
            document.querySelect(".Player2 #status").innerHTML = value;
            turn = result(turn, value, count);
        } else if (turn === 3) {
            document.querySelect(".Player3 #image").firstElementChild.src = "images/roll.gif";
            value = Math.ceil(Math.random() * 6);
            time = setTimeout(function() {
                document.querySelect(".Player3 #image").firstElementChild.src = "";
            }, 500);
            document.querySelect(".Player3 #status").innerHTML = value;
            turn = result(turn, value, count);
        } else if (turn === 4) {
            document.querySelect(".Player4 #image").firstElementChild.src = "images/roll.gif";
            value = Math.ceil(Math.random() * 6);
            time = setTimeout(function() {
                document.querySelect(".Player4 #image").firstElementChild.src = "";
            }, 500);
            document.querySelect(".Player4 #status").innerHTML = value;
            turn = result(turn, value, count);
        }
    }
});

function result(turn, value, count) {
    if (turn === 1) {
        col = document.querySelect("#name1").style.color;
        if (col === "green" || col === "yellow" || col === "blue" || col === "red") {
            if (value === 1 || value === 2 || value === 3 || value === 4 || value === 5) {
                window[col + "strike"](value); //calls the function "greenstrike(value)" if color is "green".
                return (2);
            }
            if (value === 6) {
                window[col + "strike"](value);
                return (1);
            }
        }
    } else if (turn === 2) {
        col = document.querySelect("#name2").style.color;
        if (col === "green" || col === "yellow" || col === "blue" || col === "red") {
            if (value === 1 || value === 2 || value === 3 || value === 4 || value === 5) {
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
        col = document.querySelect("#name3").style.color;
        if (col === "green" || col === "yellow" || col === "blue" || col === "red") {
            if (value === 1 || value === 2 || value === 3 || value === 4 || value === 5) {
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
        col = document.querySelect("#name4").style.color;
        if (col === "green" || col === "yellow" || col === "blue" || col === "red") {
            if (value === 1 || value === 2 || value === 3 || value === 4 || value === 5) {
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
    pos = document.querySelect(".greena .first").display;
    pos1 = document.querySelect(".greena .Second").display;
    pos2 = document.querySelect(".greena .Third").display;
    pos3 = document.querySelect(".greena .Fourth").display;

    if (value === 1 || value === 2 || value === 3 || value === 4 || value === 5 || value === 6) {
        if (pos === "none") {
            document.querySelect(".btn").disabled = "blocked";
            temp = gs[0] + value;
            if (temp > 51) {
                greatvalue = temp - 51;
                temp = 52 + greatvalue;
                selector = select(gs[0]);
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
                        checker(null);
                    }
                });
            } else {
                selector = select(gs[0]);
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
                        checker(null);
                    }
                });
            }
        }
        if (pos1 === "none") {
            document.querySelect(".btn").disabled = "blocked";
            temp = gs[1] + value;
            if (temp > 51) {
                greatvalue = temp - 51;
                temp = 52 + greatvalue;
                selector1 = select(gs[1]);
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
                        checker(null);
                    }
                });
            } else {
                selector1 = select(gs[1]);
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
                        checker(null);
                    }
                });
            }
        }
        if (pos2 === "none") {
            document.querySelect(".btn").disabled = "blocked";
            temp = gs[2] + value;
            if (temp > 51) {
                greatvalue = temp - 51;
                temp = 52 + greatvalue;
                selector2 = select(gs[2]);
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
                        checker(null);
                    }
                });
            } else {
                selector2 = select(gs[2]);
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
                        checker(null);
                    }
                });
            }
        }
        if (pos3 === "none") {
            document.querySelect(".btn").disabled = "blocked";
            temp = gs[3] + value;
            if (temp > 51) {
                greatvalue = temp - 51;
                temp = 52 + greatvalue;
                selector3 = select(gs[3]);
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
                        checker(null);
                    }
                });
            } else {
                selector3 = select(gs[3]);
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
                        checker(null);
                    }
                });
            }
        }
    }
    if (value === 6) {
        if (pos !== "none") {
            document.querySelect(".greena .first").style.backgroundColor = "";
            document.querySelect(".greena .first img").style.visibility = "visible";
            document.querySelect(".greena .first img").src = "images/green-star.gif";
            document.querySelect(".btn").disabled = "blocked";
            time = setTimeout(function() {
                countdown(null);
            }, 3000);
            document.querySelect(".greena .first img").addEventListener("click", function() {
                if (touch === 0) {
                    touch = 1;
                    document.querySelect(".greena .first img").src = "";
                    document.querySelect(".greena .first img").style.visibility = "hidden";
                    gb[0] = 1;
                    gs[0] = 1;
                    path(gs[0], col);
                }
            });
        }
        if (pos1 !== "none") {
            document.querySelect(".greena .Second").style.backgroundColor = "";
            document.querySelect(".greena .Second img").style.visibility = "visible";
            document.querySelect(".greena .Second img").src = "images/green-star.gif";
            document.querySelect(".btn").disabled = "blocked";
            time = setTimeout(function() {
                countdown(null);
            }, 3000);
            document.querySelect(".greena .Second img").addEventListener("click", function() {
                if (touch === 0) {
                    touch = 1;
                    document.querySelect(".greena .Second img").src = "";
                    document.querySelect(".greena .Second img").style.visibility = "hidden";
                    gb[1] = 1;
                    gs[1] = 1;
                    path(gs[1], col);
                }
            });
        }
        if (pos2 !== "none") {
            document.querySelect(".greena .Third").style.backgroundColor = "";
            document.querySelect(".greena .Third img").style.visibility = "visible";
            document.querySelect(".greena .Third img").src = "images/green-star.gif";
            document.querySelect(".btn").disabled = "blocked";
            time = setTimeout(function() {
                countdown(null);
            }, 3000);
            document.querySelect(".greena .Third img").addEventListener("click", function() {
                if (touch === 0) {
                    touch = 1;
                    document.querySelect(".greena .Third img").src = "";
                    document.querySelect(".greena .Third img").style.visibility = "hidden";
                    gb[2] = 1;
                    gs[2] = 1;
                    path(gs[2], col);
                }
            });
        }
        if (pos3 !== "none") {
            document.querySelect(".greena .Fourth").style.backgroundColor = "";
            document.querySelect(".greena .Fourth img").style.visibility = "visible";
            document.querySelect(".greena .Fourth img").src = "images/green-star.gif";
            document.querySelect(".btn").disabled = "blocked";
            time = setTimeout(function() {
                countdown(null);
            }, 3000);
            document.querySelect(".greena .Fourth img").addEventListener("click", function() {
                if (touch === 0) {
                    touch = 1;
                    document.querySelect(".greena .Fourth img").src = "";
                    document.querySelect(".greena .Fourth img").style.visibility = "hidden";
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
    pos = document.querySelect(".reda .first").display;
    pos1 = document.querySelect(".reda .Second").display;
    pos2 = document.querySelect(".reda .Third").display;
    pos3 = document.querySelect(".reda .Fourth").display;

    if (value === 1 || value === 2 || value === 3 || value === 4 || value === 5 || value === 6) {
        if (pos === "none") {
            document.querySelect(".btn").disabled = "blocked";
            temp = rs[0] + value;
            greatr[0] = greatr[0] + value;
            if (temp > 52) {
                greatvalue = temp - 52;
                greatr[0] = temp;
                temp = greatvalue;
                selector = select(rs[0]);
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
                        checker(null);
                    }
                });
            } else if (greatr[0] > 64) {
                greatvalue = greatr[0] - 64;
                temp = greatvalue + 58;
                selector = select(rs[0]);
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
                        checker(null);
                    }
                });
            } else {
                selector = select(rs[0]);
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
                        checker(null);
                    }
                });
            }
        }
        if (pos1 === "none") {
            document.querySelect(".btn").disabled = "blocked";
            temp = rs[1] + value;
            greatr[1] = greatr[1] + value;
            if (temp > 52) {
                greatvalue = temp - 52;
                greatr[1] = temp;
                temp = greatvalue;
                selector1 = select(rs[1]);
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
                        checker(null);
                    }
                });
            } else if (greatr[1] > 64) {
                greatvalue = greatr[1] - 64;
                temp = greatvalue + 58;
                selector1 = select(rs[1]);
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
                        checker(null);
                    }
                });
            } else {
                selector1 = select(rs[1]);
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
                        checker(null);
                    }
                });
            }
        }
        if (pos2 === "none") {
            document.querySelect(".btn").disabled = "blocked";
            temp = rs[2] + value;
            greatr[2] = greatr[2] + value;
            if (temp > 52) {
                greatvalue = temp - 52;
                greatr[2] = temp;
                temp = greatvalue;
                selector2 = select(rs[2]);
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
                        checker(null);
                    }
                });
            } else if (greatr[2] > 64) {
                greatvalue = greatr[2] - 64;
                temp = greatvalue + 58;
                selector2 = select(rs[2]);
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
                        checker(null);
                    }
                });
            } else {
                selector2 = select(rs[2]);
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
                        checker(null);
                    }
                });
            }
        }
        if (pos3 === "none") {
            document.querySelect(".btn").disabled = "blocked";
            temp = rs[3] + value;
            greatr[3] = greatr[3] + value;
            if (temp > 52) {
                greatvalue = temp - 52;
                greatr[3] = temp;
                temp = greatvalue;
                selector3 = select(rs[3]);
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
                        checker(null);
                    }
                });
            } else if (greatr[3] > 64) {
                greatvalue = greatr[3] - 64;
                temp = greatvalue + 58;
                selector3 = select(rs[3]);
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
                        checker(null);
                    }
                });
            } else {
                selector3 = select(rs[3]);
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
                        checker(null);
                    }
                });
            }
        }
    }
    if (value === 6) {
        if (pos !== "none") {
            document.querySelect(".reda .first").style.backgroundColor = "";
            document.querySelect(".reda .first img").style.visibility = "visible";
            document.querySelect(".reda .first img").src = "images/red-star.gif";
            document.querySelect(".btn").disabled = "blocked";
            time = setTimeout(function() {
                countdown(null);
            }, 3000);
            document.querySelect(".reda .first img").addEventListener("click", function() {
                if (touch === 0) {
                    touch = 1;
                    document.querySelect(".reda .first img").src = "";
                    document.querySelect(".reda .first img").style.visibility = "hidden";
                    rb[0] = 1;
                    rs[0] = 14;
                    path(rs[0], col);
                }
            });
        }
        if (pos1 !== "none") {
            document.querySelect(".reda .Second").style.backgroundColor = "";
            document.querySelect(".reda .Second img").style.visibility = "visible";
            document.querySelect(".reda .Second img").src = "images/red-star.gif";
            document.querySelect(".btn").disabled = "blocked";
            time = setTimeout(function() {
                countdown(null);
            }, 3000);
            document.querySelect(".reda .Second img").addEventListener("click", function() {
                if (touch === 0) {
                    touch = 1;
                    document.querySelect(".reda .Second img").src = "";
                    document.querySelect(".reda .Second img").style.visibility = "hidden";
                    rb[1] = 1;
                    rs[1] = 14;
                    path(rs[1], col);
                }
            });
        }
        if (pos2 !== "none") {
            document.querySelect(".reda .Third").style.backgroundColor = "";
            document.querySelect(".reda .Third img").style.visibility = "visible";
            document.querySelect(".reda .Third img").src = "images/red-star.gif";
            document.querySelect(".btn").disabled = "blocked";
            time = setTimeout(function() {
                countdown(null);
            }, 3000);
            document.querySelect(".reda .Third img").addEventListener("click", function() {
                if (touch === 0) {
                    touch = 1;
                    document.querySelect(".reda .Third img").src = "";
                    document.querySelect(".reda .Third img").style.visibility = "hidden";
                    rb[2] = 1;
                    rs[2] = 14;
                    path(rs[2], col);
                }
            });
        }
        if (pos3 !== "none") {
            document.querySelect(".reda .Fourth").style.backgroundColor = "";
            document.querySelect(".reda .Fourth img").style.visibility = "visible";
            document.querySelect(".reda .Fourth img").src = "images/red-star.gif";
            document.querySelect(".btn").disabled = "blocked";
            time = setTimeout(function() {
                countdown(null);
            }, 3000);
            document.querySelect(".reda .Fourth img").addEventListener("click", function() {
                if (touch === 0) {
                    touch = 1;
                    document.querySelect(".reda .Fourth img").src = "";
                    document.querySelect(".reda .Fourth img").style.visibility = "hidden";
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
    pos = document.querySelect(".bluea .first").display;
    pos1 = document.querySelect(".bluea .Second").display;
    pos2 = document.querySelect(".bluea .Third").display;
    pos3 = document.querySelect(".bluea .Fourth").display;

    if (value === 1 || value === 2 || value === 3 || value === 4 || value === 5 || value === 6) {
        if (pos === "none") {
            document.querySelect(".btn").disabled = "blocked";
            temp = bs[0] + value;
            greatb[0] = greatb[0] + value;
            if (temp > 52) {
                greatvalue = temp - 52;
                greatb[0] = temp;
                temp = greatvalue;
                selector = select(bs[0]);
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
                        checker(null);
                    }
                });
            } else if (greatb[0] > 77) {
                greatvalue = greatb[0] - 77;
                temp = greatvalue + 64;
                selector = select(bs[0]);
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
                        checker(null);
                    }
                });
            } else {
                selector = select(bs[0]);
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
                        checker(null);
                    }
                });
            }
        }
        if (pos1 === "none") {
            document.querySelect(".btn").disabled = "blocked";
            temp = bs[1] + value;
            greatb[1] = greatb[1] + value;
            if (temp > 52) {
                greatvalue = temp - 52;
                greatb[1] = temp;
                temp = greatvalue;
                selector1 = select(bs[1]);
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
                        checker(null);
                    }
                });
            } else if (greatb[1] > 77) {
                greatvalue = greatb[1] - 77;
                temp = greatvalue + 64;
                selector1 = select(bs[1]);
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
                        checker(null);
                    }
                });
            } else {
                selector1 = select(bs[1]);
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
                        checker(null);
                    }
                });
            }
        }
        if (pos2 === "none") {
            document.querySelect(".btn").disabled = "blocked";
            temp = bs[2] + value;
            greatb[2] = greatb[2] + value;
            if (temp > 52) {
                greatvalue = temp - 52;
                greatb[2] = temp;
                temp = greatvalue;
                selector2 = select(bs[2]);
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
                        checker(null);
                    }
                });
            } else if (greatb[2] > 77) {
                greatvalue = greatb[2] - 77;
                temp = greatvalue + 64;
                selector2 = select(bs[2]);
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
                        checker(null);
                    }
                });
            } else {
                selector2 = select(bs[2]);
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
                        checker(null);
                    }
                });
            }
        }
        if (pos3 === "none") {
            document.querySelect(".btn").disabled = "blocked";
            temp = bs[3] + value;
            greatb[3] = greatb[3] + value;
            if (temp > 52) {
                greatvalue = temp - 52;
                greatb[3] = temp;
                temp = greatvalue;
                selector3 = select(bs[3]);
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
                        checker(null);
                    }
                });
            } else if (greatb[3] > 77) {
                greatvalue = greatb[3] - 77;
                temp = greatvalue + 64;
                selector3 = select(bs[3]);
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
                        checker(null);
                    }
                });
            } else {
                selector3 = select(bs[3]);
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
                        checker(null);
                    }
                });
            }
        }
    }
    if (value === 6) {
        if (pos !== "none") {
            document.querySelect(".bluea .first").style.backgroundColor = "";
            document.querySelect(".bluea .first img").style.visibility = "visible";
            document.querySelect(".bluea .first img").src = "images/blue-star.gif";
            document.querySelect(".btn").disabled = "blocked";
            time = setTimeout(function() {
                countdown(null);
            }, 3000);
            document.querySelect(".bluea .first img").addEventListener("click", function() {
                if (touch === 0) {
                    touch = 1;
                    document.querySelect(".bluea .first img").src = "";
                    document.querySelect(".bluea .first img").style.visibility = "hidden";
                    bb[0] = 1;
                    bs[0] = 27;
                    path(bs[0], col);
                }
            });
        }
        if (pos1 !== "none") {
            document.querySelect(".bluea .Second").style.backgroundColor = "";
            document.querySelect(".bluea .Second img").style.visibility = "visible";
            document.querySelect(".bluea .Second img").src = "images/blue-star.gif";
            document.querySelect(".btn").disabled = "blocked";
            time = setTimeout(function() {
                countdown(null);
            }, 3000);
            document.querySelect(".bluea .Second img").addEventListener("click", function() {
                if (touch === 0) {
                    touch = 1;
                    document.querySelect(".bluea .Second img").src = "";
                    document.querySelect(".bluea .Second img").style.visibility = "hidden";
                    bb[1] = 1;
                    bs[1] = 27;
                    path(bs[1], col);
                }
            });
        }
        if (pos2 !== "none") {
            document.querySelect(".bluea .Third").style.backgroundColor = "";
            document.querySelect(".bluea .Third img").style.visibility = "visible";
            document.querySelect(".bluea .Third img").src = "images/blue-star.gif";
            document.querySelect(".btn").disabled = "blocked";
            time = setTimeout(function() {
                countdown(null);
            }, 3000);
            document.querySelect(".bluea .Third img").addEventListener("click", function() {
                if (touch === 0) {
                    touch = 1;
                    document.querySelect(".bluea .Third img").src = "";
                    document.querySelect(".bluea .Third img").style.visibility = "hidden";
                    bb[2] = 1;
                    bs[2] = 27;
                    path(bs[2], col);
                }
            });
        }
        if (pos3 !== "none") {
            document.querySelect(".bluea .Fourth").style.backgroundColor = "";
            document.querySelect(".bluea .Fourth img").style.visibility = "visible";
            document.querySelect(".bluea .Fourth img").src = "images/blue-star.gif";
            document.querySelect(".btn").disabled = "blocked";
            time = setTimeout(function() {
                countdown(null);
            }, 3000);
            document.querySelect(".bluea .Fourth img").addEventListener("click", function() {
                if (touch === 0) {
                    touch = 1;
                    document.querySelect(".bluea .Fourth img").src = "";
                    document.querySelect(".bluea .Fourth img").style.visibility = "hidden";
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
    pos = document.querySelect(".yellowa .first").display;
    pos1 = document.querySelect(".yellowa .Second").display;
    pos2 = document.querySelect(".yellowa .Third").display;
    pos3 = document.querySelect(".yellowa .Fourth").display;

    if (value === 1 || value === 2 || value === 3 || value === 4 || value === 5 || value === 6) {
        if (pos === "none") {
            document.querySelect(".btn").disabled = "blocked";
            temp = ys[0] + value;
            greaty[0] = greaty[0] + value;
            if (temp > 52) {
                greatvalue = temp - 52;
                greaty[0] = temp;
                temp = greatvalue;
                selector = select(ys[0]);
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
                        checker(null);
                    }
                });
            } else if (greaty[0] > 90) {
                greatvalue = greaty[0] - 90;
                temp = greatvalue + 70;
                selector = select(ys[0]);
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
                        checker(null);
                    }
                });
            } else {
                selector = select(ys[0]);
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
                        checker(null);
                    }
                });
            }
        }
        if (pos1 === "none") {
            document.querySelect(".btn").disabled = "blocked";
            temp = ys[1] + value;
            greaty[1] = greaty[1] + value;
            if (temp > 52) {
                greatvalue = temp - 52;
                greaty[1] = temp;
                temp = greatvalue;
                selector1 = select(ys[1]);
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
                        checker(null);
                    }
                });
            } else if (greaty[1] > 90) {
                greatvalue = greaty[1] - 90;
                temp = greatvalue + 70;
                selector1 = select(ys[1]);
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
                        checker(null);
                    }
                });
            } else {
                selector1 = select(ys[1]);
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
                        checker(null);
                    }
                });
            }
        }
        if (pos2 === "none") {
            document.querySelect(".btn").disabled = "blocked";
            temp = ys[2] + value;
            greaty[2] = greaty[2] + value;
            if (temp > 52) {
                greatvalue = temp - 52;
                greaty[2] = temp;
                temp = greatvalue;
                selector2 = select(ys[2]);
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
                        checker(null);
                    }
                });
            } else if (greaty[2] > 90) {
                greatvalue = greaty[2] - 90;
                temp = greatvalue + 70;
                selector2 = select(ys[2]);
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
                        checker(null);
                    }
                });
            } else {
                selector2 = select(ys[2]);
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
                        checker(null);
                    }
                });
            }
        }
        if (pos3 === "none") {
            document.querySelect(".btn").disabled = "blocked";
            temp = ys[3] + value;
            greaty[3] = greaty[3] + value;
            if (temp > 52) {
                greatvalue = temp - 52;
                greaty[3] = temp;
                temp = greatvalue;
                selector3 = select(ys[3]);
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
                        checker(null);
                    }
                });
            } else if (greaty[3] > 90) {
                greatvalue = greaty[3] - 90;
                temp = greatvalue + 70;
                selector3 = select(ys[3]);
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
                        checker(null);
                    }
                });
            } else {
                selector3 = select(ys[3]);
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
                        checker(null);
                    }
                });
            }
        }
    }
    if (value === 6) {
        if (pos !== "none") {
            document.querySelect(".yellowa .first").style.backgroundColor = "";
            document.querySelect(".yellowa .first img").style.visibility = "visible";
            document.querySelect(".yellowa .first img").src = "images/yellow-star.gif";
            document.querySelect(".btn").disabled = "blocked";
            time = setTimeout(function() {
                countdown(null);
            }, 3000);
            document.querySelect(".yellowa .first img").addEventListener("click", function() {
                if (touch === 0) {
                    touch = 1;
                    document.querySelect(".yellowa .first img").src = "";
                    document.querySelect(".yellowa .first img").style.visibility = "hidden";
                    yb[0] = 1;
                    ys[0] = 40;
                    path(ys[0], col);
                }
            });
        }
        if (pos1 !== "none") {
            document.querySelect(".yellowa .Second").style.backgroundColor = "";
            document.querySelect(".yellowa .Second img").style.visibility = "visible";
            document.querySelect(".yellowa .Second img").src = "images/yellow-star.gif";
            document.querySelect(".btn").disabled = "blocked";
            time = setTimeout(function() {
                countdown(null);
            }, 3000);
            document.querySelect(".yellowa .Second img").addEventListener("click", function() {
                if (touch === 0) {
                    touch = 1;
                    document.querySelect(".yellowa .Second img").src = "";
                    document.querySelect(".yellowa .Second img").style.visibility = "hidden";
                    yb[1] = 1;
                    ys[1] = 40;
                    path(ys[1], col);
                }
            });
        }
        if (pos2 !== "none") {
            document.querySelect(".yellowa .Third").style.backgroundColor = "";
            document.querySelect(".yellowa .Third img").style.visibility = "visible";
            document.querySelect(".yellowa .Third img").src = "images/yellow-star.gif";
            document.querySelect(".btn").disabled = "blocked";
            time = setTimeout(function() {
                countdown(null);
            }, 3000);
            document.querySelect(".yellowa .Third img").addEventListener("click", function() {
                if (touch === 0) {
                    touch = 1;
                    document.querySelect(".yellowa .Third img").src = "";
                    document.querySelect(".yellowa .Third img").style.visibility = "hidden";
                    yb[2] = 1;
                    ys[2] = 40;
                    path(ys[2], col);
                }
            });
        }
        if (pos3 !== "none") {
            document.querySelect(".yellowa .Fourth").style.backgroundColor = "";
            document.querySelect(".yellowa .Fourth img").style.visibility = "visible";
            document.querySelect(".yellowa .Fourth img").src = "images/yellow-star.gif";
            document.querySelect(".btn").disabled = "blocked";
            time = setTimeout(function() {
                countdown(null);
            }, 3000);
            document.querySelect(".yellowa .Fourth img").addEventListener("click", function() {
                if (touch === 0) {
                    touch = 1;
                    document.querySelect(".yellowa .Fourth img").src = "";
                    document.querySelect(".yellowa .Fourth img").style.visibility = "hidden";
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
    if (document.querySelect(".greena .first img").style.visibility = "visible") {
        document.querySelect(".greena .first img").src = "";
        document.querySelect(".greena .first img").style.visibility = "hidden";
        document.querySelect(".greena .first").display = "relative";
        document.querySelect(".greena .first").style.backgroundColor = "green";
    }
    if (document.querySelect(".greena .Second img").style.visibility = "visible") {
        document.querySelect(".greena .Second img").src = "";
        document.querySelect(".greena .Second img").style.visibility = "hidden";
        document.querySelect(".greena .Second").display = "relative";
        document.querySelect(".greena .Second").style.backgroundColor = "green";
    }
    if (document.querySelect(".greena .Third img").style.visibility = "visible") {
        document.querySelect(".greena .Third img").src = "";
        document.querySelect(".greena .Third img").style.visibility = "hidden";
        document.querySelect(".greena .Third").display = "relative";
        document.querySelect(".greena .Third").style.backgroundColor = "green";
    }
    if (document.querySelect(".greena .Fourth img").style.visibility = "visible") {
        document.querySelect(".greena .Fourth img").src = "";
        document.querySelect(".greena .Fourth img").style.visibility = "hidden";
        document.querySelect(".greena .Fourth").display = "relative";
        document.querySelect(".greena .Fourth").style.backgroundColor = "green";
    }

    //red animation end.
    if (document.querySelect(".reda .first img").style.visibility = "visible") {
        document.querySelect(".reda .first img").src = "";
        document.querySelect(".reda .first img").style.visibility = "hidden";
        document.querySelect(".reda .first").display = "relative";
        document.querySelect(".reda .first").style.backgroundColor = "red";
    }
    if (document.querySelect(".reda .Second img").style.visibility = "visible") {
        document.querySelect(".reda .Second img").src = "";
        document.querySelect(".reda .Second img").style.visibility = "hidden";
        document.querySelect(".reda .Second").display = "relative";
        document.querySelect(".reda .Second").style.backgroundColor = "red";
    }
    if (document.querySelect(".reda .Third img").style.visibility = "visible") {
        document.querySelect(".reda .Third img").src = "";
        document.querySelect(".reda .Third img").style.visibility = "hidden";
        document.querySelect(".reda .Third").display = "relative";
        document.querySelect(".reda .Third").style.backgroundColor = "red";
    }
    if (document.querySelect(".reda .Fourth img").style.visibility = "visible") {
        document.querySelect(".reda .Fourth img").src = "";
        document.querySelect(".reda .Fourth img").style.visibility = "hidden";
        document.querySelect(".reda .Fourth").display = "relative";
        document.querySelect(".reda .Fourth").style.backgroundColor = "red";
    }

    //yellow animation end.
    if (document.querySelect(".yellowa .first img").style.visibility = "visible") {
        document.querySelect(".yellowa .first img").src = "";
        document.querySelect(".yellowa .first img").style.visibility = "hidden";
        document.querySelect(".yellowa .first").display = "relative";
        document.querySelect(".yellowa .first").style.backgroundColor = "yellow";
    }
    if (document.querySelect(".yellowa .Second img").style.visibility = "visible") {
        document.querySelect(".yellowa .Second img").src = "";
        document.querySelect(".yellowa .Second img").style.visibility = "hidden";
        document.querySelect(".yellowa .Second").display = "relative";
        document.querySelect(".yellowa .Second").style.backgroundColor = "yellow";
    }
    if (document.querySelect(".yellowa .Third img").style.visibility = "visible") {
        document.querySelect(".yellowa .Third img").src = "";
        document.querySelect(".yellowa .Third img").style.visibility = "hidden";
        document.querySelect(".yellowa .Third").display = "relative";
        document.querySelect(".yellowa .Third").style.backgroundColor = "yellow";
    }
    if (document.querySelect(".yellowa .Fourth img").style.visibility = "visible") {
        document.querySelect(".yellowa .Fourth img").src = "";
        document.querySelect(".yellowa .Fourth img").style.visibility = "hidden";
        document.querySelect(".yellowa .Fourth").display = "relative";
        document.querySelect(".yellowa .Fourth").style.backgroundColor = "yellow";
    }

    //blue animation end.
    if (document.querySelect(".bluea .first img").style.visibility = "visible") {
        document.querySelect(".bluea .first img").src = "";
        document.querySelect(".bluea .first img").style.visibility = "hidden";
        document.querySelect(".bluea .first").display = "relative";
        document.querySelect(".bluea .first").style.backgroundColor = "blue";
    }
    if (document.querySelect(".bluea .Second img").style.visibility = "visible") {
        document.querySelect(".bluea .Second img").src = "";
        document.querySelect(".bluea .Second img").style.visibility = "hidden";
        document.querySelect(".bluea .Second").display = "relative";
        document.querySelect(".bluea .Second").style.backgroundColor = "blue";
    }
    if (document.querySelect(".bluea .Third img").style.visibility = "visible") {
        document.querySelect(".bluea .Third img").src = "";
        document.querySelect(".bluea .Third img").style.visibility = "hidden";
        document.querySelect(".bluea .Third").display = "relative";
        document.querySelect(".bluea .Third").style.backgroundColor = "blue";
    }
    if (document.querySelect(".bluea .Fourth img").style.visibility = "visible") {
        document.querySelect(".bluea .Fourth img").src = "";
        document.querySelect(".bluea .Fourth img").style.visibility = "hidden";
        document.querySelect(".bluea .Fourth").display = "relative";
        document.querySelect(".bluea .Fourth").style.backgroundColor = "blue";
    }

    //others animation end.
    //green starts from here.
    if (document.querySelect(".path1 .g1 img").style.visibility = "visible") {
        document.querySelect(".path1 .g1 img").style.visibility = "hidden";
        document.querySelect(".path1 .g1 img").src = "";
    }
    if (document.querySelect(".path2 .g1 img").style.visibility = "visible") {
        document.querySelect(".path2 .g1 img").style.visibility = "hidden";
        document.querySelect(".path2 .g1 img").src = "";
    }
    if (document.querySelect(".path3 .g1 img").style.visibility = "visible") {
        document.querySelect(".path3 .g1 img").style.visibility = "hidden";
        document.querySelect(".path3 .g1 img").src = "";
    }
    if (document.querySelect(".path4 .g1 img").style.visibility = "visible") {
        document.querySelect(".path4 .g1 img").style.visibility = "hidden";
        document.querySelect(".path4 .g1 img").src = "";
    }
    if (document.querySelect(".path5 .g1 img").style.visibility = "visible") {
        document.querySelect(".path5 .g1 img").style.visibility = "hidden";
        document.querySelect(".path5 .g1 img").src = "";
    }
    if (document.querySelect(".vpath .g6 img").style.visibility = "visible") {
        document.querySelect(".vpath .g6 img").style.visibility = "hidden";
        document.querySelect(".vpath .g6 img").src = "";
    }
    if (document.querySelect(".vpath .g5 img").style.visibility = "visible") {
        document.querySelect(".vpath .g5 img").style.visibility = "hidden";
        document.querySelect(".vpath .g5 img").src = "";
    }
    if (document.querySelect(".vpath .g4 img").style.visibility = "visible") {
        document.querySelect(".vpath .g4 img").style.visibility = "hidden";
        document.querySelect(".vpath .g4 img").src = "";
    }
    if (document.querySelect(".vpath .g3 img").style.visibility = "visible") {
        document.querySelect(".vpath .g3 img").style.visibility = "hidden";
        document.querySelect(".vpath .g3 img").src = "";
    }
    if (document.querySelect(".vpath .g2 img").style.visibility = "visible") {
        document.querySelect(".vpath .g2 img").style.visibility = "hidden";
        document.querySelect(".vpath .g2 img").src = "";
    }
    if (document.querySelect(".vpath .g1 img").style.visibility = "visible") {
        document.querySelect(".vpath .g1 img").style.visibility = "hidden";
        document.querySelect(".vpath .g1 img").src = "";
    }
    if (document.querySelect(".vpath .g1 img").style.visibility = "visible") {
        document.querySelect(".vpath .g1 img").style.visibility = "hidden";
        document.querySelect(".vpath .g1 img").src = "";
    }
    if (document.querySelect(".vpath2 .g1 img").style.visibility = "visible") {
        document.querySelect(".vpath2 .g1 img").style.visibility = "hidden";
        document.querySelect(".vpath2 .g1 img").src = "";
    } //red starts from here.
    if (document.querySelect(".vpath2 .g2 img").style.visibility = "visible") {
        document.querySelect(".vpath2 .g2 img").style.visibility = "hidden";
        document.querySelect(".vpath2 .g2 img").src = "";
    }
    if (document.querySelect(".vpath2 .g3 img").style.visibility = "visible") {
        document.querySelect(".vpath2 .g3 img").style.visibility = "hidden";
        document.querySelect(".vpath2 .g3 img").src = "";
    }
    if (document.querySelect(".vpath2 .g4 img").style.visibility = "visible") {
        document.querySelect(".vpath2 .g4 img").style.visibility = "hidden";
        document.querySelect(".vpath2 .g4 img").src = "";
    }
    if (document.querySelect(".vpath2 .g5 img").style.visibility = "visible") {
        document.querySelect(".vpath2 .g5 img").style.visibility = "hidden";
        document.querySelect(".vpath2 .g5 img").src = "";
    }
    if (document.querySelect(".vpath2 .g6 img").style.visibility = "visible") {
        document.querySelect(".vpath2 .g6 img").style.visibility = "hidden";
        document.querySelect(".vpath2 .g6 img").src = "";
    }
    if (document.querySelect(".path6 .g1 img").style.visibility = "visible") {
        document.querySelect(".path6 .g1 img").style.visibility = "hidden";
        document.querySelect(".path6 .g1 img").src = "";
    }
    if (document.querySelect(".path7 .g1 img").style.visibility = "visible") {
        document.querySelect(".path7 .g1 img").style.visibility = "hidden";
        document.querySelect(".path7 .g1 img").src = "";
    }
    if (document.querySelect(".path8 .g1 img").style.visibility = "visible") {
        document.querySelect(".path8 .g1 img").style.visibility = "hidden";
        document.querySelect(".path8 .g1 img").src = "";
    }
    if (document.querySelect(".path9 .g1 img").style.visibility = "visible") {
        document.querySelect(".path9 .g1 img").style.visibility = "hidden";
        document.querySelect(".path9 .g1 img").src = "";
    }
    if (document.querySelect(".path10 .g1 img").style.visibility = "visible") {
        document.querySelect(".path10 .g1 img").style.visibility = "hidden";
        document.querySelect(".path10 .g1 img").src = "";
    }
    if (document.querySelect(".path11 .g1 img").style.visibility = "visible") {
        document.querySelect(".path11 .g1 img").style.visibility = "hidden";
        document.querySelect(".path11 .g1 img").src = "";
    }
    if (document.querySelect(".path11 .g2 img").style.visibility = "visible") {
        document.querySelect(".path11 .g2 img").style.visibility = "hidden";
        document.querySelect(".path11 .g2 img").src = "";
    }
    if (document.querySelect(".path11 .g3 img").style.visibility = "visible") {
        document.querySelect(".path11 .g3 img").style.visibility = "hidden";
        document.querySelect(".path11 .g3 img").src = "";
    } //Blue starts from here.
    if (document.querySelect(".path10 .g3 img").style.visibility = "visible") {
        document.querySelect(".path10 .g3 img").style.visibility = "hidden";
        document.querySelect(".path10 .g3 img").src = "";
    }
    if (document.querySelect(".path9 .g3 img").style.visibility = "visible") {
        document.querySelect(".path9 .g3 img").style.visibility = "hidden";
        document.querySelect(".path9 .g3 img").src = "";
    }
    if (document.querySelect(".path8 .g3 img").style.visibility = "visible") {
        document.querySelect(".path8 .g3 img").style.visibility = "hidden";
        document.querySelect(".path8 .g3 img").src = "";
    }
    if (document.querySelect(".path7 .g3 img").style.visibility = "visible") {
        document.querySelect(".path7 .g3 img").style.visibility = "hidden";
        document.querySelect(".path7 .g3 img").src = "";
    }
    if (document.querySelect(".path6 .g3 img").style.visibility = "visible") {
        document.querySelect(".path6 .g3 img").style.visibility = "hidden";
        document.querySelect(".path6 .g3 img").src = "";
    }
    if (document.querySelect(".vpath5 .g1 img").style.visibility = "visible") {
        document.querySelect(".vpath5 .g1 img").style.visibility = "hidden";
        document.querySelect(".vpath5 .g1 img").src = "";
    }
    if (document.querySelect(".vpath5 .g2 img").style.visibility = "visible") {
        document.querySelect(".vpath5 .g2 img").style.visibility = "hidden";
        document.querySelect(".vpath5 .g2 img").src = "";
    }
    if (document.querySelect(".vpath5 .g3 img").style.visibility = "visible") {
        document.querySelect(".vpath5 .g3 img").style.visibility = "hidden";
        document.querySelect(".vpath5 .g3 img").src = "";
    }
    if (document.querySelect(".vpath5 .g4 img").style.visibility = "visible") {
        document.querySelect(".vpath5 .g4 img").style.visibility = "hidden";
        document.querySelect(".vpath5 .g4 img").src = "";
    }
    if (document.querySelect(".vpath5 .g5 img").style.visibility = "visible") {
        document.querySelect(".vpath5 .g5 img").style.visibility = "hidden";
        document.querySelect(".vpath5 .g5 img").src = "";
    }
    if (document.querySelect(".vpath5 .g6 img").style.visibility = "visible") {
        document.querySelect(".vpath5 .g6 img").style.visibility = "hidden";
        document.querySelect(".vpath5 .g6 img").src = "";
    }
    if (document.querySelect(".vpath4 .g6 img").style.visibility = "visible") {
        document.querySelect(".vpath4 .g6 img").style.visibility = "hidden";
        document.querySelect(".vpath4 .g6 img").src = "";
    }
    if (document.querySelect(".vpath3 .g6 img").style.visibility = "visible") {
        document.querySelect(".vpath3 .g6 img").style.visibility = "hidden";
        document.querySelect(".vpath3 .g6 img").src = "";
    } //yellow starts from here.
    if (document.querySelect(".vpath3 .g5 img").style.visibility = "visible") {
        document.querySelect(".vpath3 .g5 img").style.visibility = "hidden";
        document.querySelect(".vpath3 .g5 img").src = "";
    }
    if (document.querySelect(".vpath3 .g4 img").style.visibility = "visible") {
        document.querySelect(".vpath3 .g4 img").style.visibility = "hidden";
        document.querySelect(".vpath3 .g4 img").src = "";
    }
    if (document.querySelect(".vpath3 .g3 img").style.visibility = "visible") {
        document.querySelect(".vpath3 .g3 img").style.visibility = "hidden";
        document.querySelect(".vpath3 .g3 img").src = "";
    }
    if (document.querySelect(".vpath3 .g2 img").style.visibility = "visible") {
        document.querySelect(".vpath3 .g2 img").style.visibility = "hidden";
        document.querySelect(".vpath3 .g2 img").src = "";
    }
    if (document.querySelect(".vpath3 .g1 img").style.visibility = "visible") {
        document.querySelect(".vpath3 .g1 img").style.visibility = "hidden";
        document.querySelect(".vpath3 .g1 img").src = "";
    }
    if (document.querySelect(".path5 .g3 img").style.visibility = "visible") {
        document.querySelect(".path5 .g3 img").style.visibility = "hidden";
        document.querySelect(".path5 .g3 img").src = "";
    }
    if (document.querySelect(".path4 .g3 img").style.visibility = "visible") {
        document.querySelect(".path4 .g3 img").style.visibility = "hidden";
        document.querySelect(".path4 .g3 img").src = "";
    }
    if (document.querySelect(".path3 .g3 img").style.visibility = "visible") {
        document.querySelect(".path3 .g3 img").style.visibility = "hidden";
        document.querySelect(".path3 .g3 img").src = "";
    }
    if (document.querySelect(".path2 .g3 img").style.visibility = "visible") {
        document.querySelect(".path2 .g3 img").style.visibility = "hidden";
        document.querySelect(".path2 .g3 img").src = "";
    }
    if (document.querySelect(".path1 .g3 img").style.visibility = "visible") {
        document.querySelect(".path1 .g3 img").style.visibility = "hidden";
        document.querySelect(".path1 .g3 img").src = "";
    }
    if (document.querySelect(".path .g3 img").style.visibility = "visible") {
        document.querySelect(".path .g3 img").style.visibility = "hidden";
        document.querySelect(".path .g3 img").src = "";
    }
    if (document.querySelect(".path .g2 img").style.visibility = "visible") {
        document.querySelect(".path .g2 img").style.visibility = "hidden";
        document.querySelect(".path .g2 img").src = "";
    }
    if (document.querySelect(".path .g1 img").style.visibility = "visible") {
        document.querySelect(".path .g1 img").style.visibility = "hidden";
        document.querySelect(".path .g1 img").src = "";
    }
    //For Home.
    if (document.querySelect(".path1 .g2 img").style.visibility = "visible") {
        document.querySelect(".path1 .g2 img").style.visibility = "hidden";
        document.querySelect(".path1 .g2 img").src = "";
    }
    if (document.querySelect(".path2 .g2 img").style.visibility = "visible") {
        document.querySelect(".path2 .g2 img").style.visibility = "hidden";
        document.querySelect(".path2 .g2 img").src = "";
    }
    if (document.querySelect(".path3 .g2 img").style.visibility = "visible") {
        document.querySelect(".path3 .g2 img").style.visibility = "hidden";
        document.querySelect(".path3 .g2 img").src = "";
    }
    if (document.querySelect(".path4 .g2 img").style.visibility = "visible") {
        document.querySelect(".path4 .g2 img").style.visibility = "hidden";
        document.querySelect(".path4 .g2 img").src = "";
    }
    if (document.querySelect(".path5 .g2 img").style.visibility = "visible") {
        document.querySelect(".path5 .g2 img").style.visibility = "hidden";
        document.querySelect(".path5 .g2 img").src = "";
    }
    if (document.querySelect(".vpath1 .g2 img").style.visibility = "visible") {
        document.querySelect(".vpath1 .g2 img").style.visibility = "hidden";
        document.querySelect(".vpath1 .g2 img").src = "";
    }
    if (document.querySelect(".vpath1 .g3 img").style.visibility = "visible") {
        document.querySelect(".vpath1 .g3 img").style.visibility = "hidden";
        document.querySelect(".vpath1 .g3 img").src = "";
    }
    if (document.querySelect(".vpath1 .g4 img").style.visibility = "visible") {
        document.querySelect(".vpath1 .g4 img").style.visibility = "hidden";
        document.querySelect(".vpath1 .g4 img").src = "";
    }
    if (document.querySelect(".vpath1 .g5 img").style.visibility = "visible") {
        document.querySelect(".vpath1 .g5 img").style.visibility = "hidden";
        document.querySelect(".vpath1 .g5 img").src = "";
    }
    if (document.querySelect(".vpath1 .g6 img").style.visibility = "visible") {
        document.querySelect(".vpath1 .g6 img").style.visibility = "hidden";
        document.querySelect(".vpath1 .g6 img").src = "";
    }
    if (document.querySelect(".path10 .g2 img").style.visibility = "visible") {
        document.querySelect(".path10 .g2 img").style.visibility = "hidden";
        document.querySelect(".path10 .g2 img").src = "";
    }
    if (document.querySelect(".path9 .g2 img").style.visibility = "visible") {
        document.querySelect(".path9 .g2 img").style.visibility = "hidden";
        document.querySelect(".path9 .g2 img").src = "";
    }
    if (document.querySelect(".path8 .g2 img").style.visibility = "visible") {
        document.querySelect(".path8 .g2 img").style.visibility = "hidden";
        document.querySelect(".path8 .g2 img").src = "";
    }
    if (document.querySelect(".path7 .g2 img").style.visibility = "visible") {
        document.querySelect(".path7 .g2 img").style.visibility = "hidden";
        document.querySelect(".path7 .g2 img").src = "";
    }
    if (document.querySelect(".path6 .g2 img").style.visibility = "visible") {
        document.querySelect(".path6 .g2 img").style.visibility = "hidden";
        document.querySelect(".path6 .g2 img").src = "";
    }
    if (document.querySelect(".vpath4 .g5 img").style.visibility = "visible") {
        document.querySelect(".vpath4 .g5 img").style.visibility = "hidden";
        document.querySelect(".vpath4 .g5 img").src = "";
    }
    if (document.querySelect(".vpath4 .g4 img").style.visibility = "visible") {
        document.querySelect(".vpath4 .g4 img").style.visibility = "hidden";
        document.querySelect(".vpath4 .g4 img").src = "";
    }
    if (document.querySelect(".vpath4 .g3 img").style.visibility = "visible") {
        document.querySelect(".vpath4 .g3 img").style.visibility = "hidden";
        document.querySelect(".vpath4 .g3 img").src = "";
    }
    if (document.querySelect(".vpath4 .g2 img").style.visibility = "visible") {
        document.querySelect(".vpath4 .g2 img").style.visibility = "hidden";
        document.querySelect(".vpath4 .g2 img").src = "";
    }
    if (document.querySelect(".vpath4 .g1 img").style.visibility = "visible") {
        document.querySelect(".vpath4 .g1 img").style.visibility = "hidden";
        document.querySelect(".vpath4 .g1 img").src = "";
    }
}