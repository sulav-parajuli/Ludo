var count = sessionStorage.getItem('name5');
var a = sessionStorage.getItem('color1');
var b = sessionStorage.getItem('color2');
var c = sessionStorage.getItem('color3');
var d = sessionStorage.getItem('color4');
var x = sessionStorage.getItem('namefirst');
var y = sessionStorage.getItem('namesecond');
var z = sessionStorage.getItem('namethird');
var w = sessionStorage.getItem('namefourth');
var value, brd, bgd, bd = 1,
    bg = 0,
    score, col, pos, pos1, pos2, pos3,
    tempcol, run,
    temp, turn = 1,
    time, active = 0,
    selector, selector1, selector2, selector3,
    touch = 0,
    greatvalue = [0, 0, 0, 0];
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

document.querySelector("#dice1").style.visibility = "hidden";
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


if (count == 2) {
    document.querySelector("#name1").innerHTML = x;
    document.querySelector("#name1").style.color = a;
    document.querySelector("#name2").innerHTML = y;
    document.querySelector("#name2").style.color = b;
    document.querySelector("#name3").style.color = "";
    document.querySelector("#name4").style.color = "";
} else if (count == 3) {
    document.querySelector("#name1").innerHTML = x;
    document.querySelector("#name1").style.color = a;
    document.querySelector("#name2").innerHTML = y;
    document.querySelector("#name2").style.color = b;
    document.querySelector("#name3").innerHTML = z;
    document.querySelector("#name3").style.color = c;
    document.querySelector("#name4").style.color = "";
} else if (count == 4) {
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

function theme() {
    var brd = sessionStorage.getItem('bd');
    var bgd = sessionStorage.getItem('bg');
    if (brd === null && bgd === null) {
        document.querySelector("#main").src = "images/frame" + bd + ".png";
        document.querySelector(".content").style.backgroundImage = "images/background" + bg + ".png";
    } else if (brd === null && bgd !== null) {
        bg = bgd;
        document.querySelector(".content").style.backgroundImage = "images/background" + bgd + ".png";
    } else if (brd !== null && bgd === null) {
        bd = brd;
        document.querySelector("#main").src = "images/frame" + brd + ".png";
    } else {
        bd = brd;
        bg = bgd;
        document.querySelector("#main").src = "images/frame" + brd + ".png";
        document.querySelector(".content").style.backgroundImage = "images/background" + bgd + ".png";
    }
}

function board(bd) {
    sessionStorage.setItem("bd", bd);
    document.querySelector("#main").src = "images/frame" + bd + ".png";
}

function background(bg) {
    sessionStorage.setItem("bg", bg);
    document.querySelector(".content").style.backgroundImage = "images/background" + bg + ".png";
}

function dice(turn) {
    if (turn === 1) {
        document.querySelector(".home").style.backgroundColor = "white";
        document.querySelector(".home").style.opacity = "70%";
        document.querySelector("#dice1").style.visibility = "visible";
        document.querySelector("#dice1").src = "images/dice1.png";
    }
}

function windo(turn) {
    if (window.innerWidth <= 740) {
        document.querySelector(".btn").style.visibility = "hidden";
        if (turn === 1) {
            document.querySelector(".Player1").style.visibility = "visible";
            document.querySelector(".Player1").style.display = "block";
            document.querySelector("#image1").style.visibility = "visible";
            document.querySelector("#image1").style.display = "block";
            document.querySelector(".Player2").style.display = "none";
            document.querySelector(".Player3").style.display = "none";
            document.querySelector(".Player4").style.display = "none";
            document.querySelector("#image2").style.display = "none";
            document.querySelector("#image3").style.display = "none";
            document.querySelector("#image4").style.display = "none";
            document.querySelector(".Player #status2").innerHTML = "";
            document.querySelector(".Player #status3").innerHTML = "";
            document.querySelector(".Player #status4").innerHTML = "";
            document.querySelector(".Player2").style.visibility = "hidden";
            document.querySelector(".Player3").style.visibility = "hidden";
            document.querySelector(".Player4").style.visibility = "hidden";
            document.querySelector("#image2").style.visibility = "hidden";
            document.querySelector("#image3").style.visibility = "hidden";
            document.querySelector("#image4").style.visibility = "hidden";
        } else if (turn === 2) {
            document.querySelector(".Player2").style.visibility = "visible";
            document.querySelector(".Player2").style.display = "block";
            document.querySelector("#image2").style.visibility = "visible";
            document.querySelector("#image2").style.display = "block";
            document.querySelector(".Player1").style.display = "none";
            document.querySelector(".Player3").style.display = "none";
            document.querySelector(".Player4").style.display = "none";
            document.querySelector("#image1").style.display = "none";
            document.querySelector("#image3").style.display = "none";
            document.querySelector("#image4").style.display = "none";
            document.querySelector(".Player #status1").innerHTML = "";
            document.querySelector(".Player #status3").innerHTML = "";
            document.querySelector(".Player #status4").innerHTML = "";
            document.querySelector(".Player1").style.visibility = "hidden";
            document.querySelector(".Player3").style.visibility = "hidden";
            document.querySelector(".Player4").style.visibility = "hidden";
            document.querySelector("#image1").style.visibility = "hidden";
            document.querySelector("#image3").style.visibility = "hidden";
            document.querySelector("#image4").style.visibility = "hidden";
        } else if (turn === 3) {
            document.querySelector(".Player3").style.visibility = "visible";
            document.querySelector(".Player3").style.display = "block";
            document.querySelector("#image3").style.visibility = "visible";
            document.querySelector("#image3").style.display = "block";
            document.querySelector(".Player2").style.display = "none";
            document.querySelector(".Player1").style.display = "none";
            document.querySelector(".Player4").style.display = "none";
            document.querySelector("#image2").style.display = "none";
            document.querySelector("#image1").style.display = "none";
            document.querySelector("#image4").style.display = "none";
            document.querySelector(".Player #status2").innerHTML = "";
            document.querySelector(".Player #status1").innerHTML = "";
            document.querySelector(".Player #status4").innerHTML = "";
            document.querySelector(".Player2").style.visibility = "hidden";
            document.querySelector(".Player1").style.visibility = "hidden";
            document.querySelector(".Player4").style.visibility = "hidden";
            document.querySelector("#image2").style.visibility = "hidden";
            document.querySelector("#image1").style.visibility = "hidden";
            document.querySelector("#image4").style.visibility = "hidden";
        } else if (turn === 4) {
            document.querySelector(".Player4").style.visibility = "visible";
            document.querySelector(".Player4").style.display = "block";
            document.querySelector("#image4").style.visibility = "visible";
            document.querySelector("#image4").style.display = "block";
            document.querySelector(".Player2").style.display = "none";
            document.querySelector(".Player3").style.display = "none";
            document.querySelector(".Player1").style.display = "none";
            document.querySelector("#image2").style.display = "none";
            document.querySelector("#image3").style.display = "none";
            document.querySelector("#image1").style.display = "none";
            document.querySelector(".Player #status2").innerHTML = "";
            document.querySelector(".Player #status3").innerHTML = "";
            document.querySelector(".Player #status1").innerHTML = "";
            document.querySelector(".Player2").style.visibility = "hidden";
            document.querySelector(".Player3").style.visibility = "hidden";
            document.querySelector(".Player1").style.visibility = "hidden";
            document.querySelector("#image2").style.visibility = "hidden";
            document.querySelector("#image3").style.visibility = "hidden";
            document.querySelector("#image1").style.visibility = "hidden";
        }
    }
}

document.querySelector("#dice1").addEventListener("click", function() {
    if (pos !== "none" && pos1 !== "none" && pos2 !== "none" && pos3 !== "none" && value !== 6) { active = 0; }
    if (active === 0) {
        if (count === "2" || count === "3" || count === "4") {
            if (turn === 1 || turn === 2 || turn === 3 || turn === 4) {
                clearTimeout(time);
                disappear(null);
                checker(null);
                dispose_countdown(null);
                document.querySelector(".zoom .first").style.backgroundColor = "";
                document.querySelector(".zoom .Second").style.backgroundColor = "";
                document.querySelector(".zoom .Third").style.backgroundColor = "";
                document.querySelector(".zoom .Fourth").style.backgroundColor = "";
                document.querySelector(".zoom").style.backgroundColor = "";
                //time = setTimeout(function() {}, 3700);
                active = 1;
                windo(turn);
                document.querySelector("#dice1").src = "images/dice1.gif";
                document.querySelector(".Player #image" + turn).src = "images/roll.gif";
                value = Math.ceil(Math.random() * 6);
                setTimeout(function() {
                    if (value === 1) {
                        document.querySelector("#dice1").src = "images/dice1.png";
                    } else if (value === 2) {
                        document.querySelector("#dice1").src = "images/dice2.png";
                    } else if (value === 3) {
                        document.querySelector("#dice1").src = "images/dice3.png";
                    } else if (value === 4) {
                        document.querySelector("#dice1").src = "images/dice4.png";
                    } else if (value === 5) {
                        document.querySelector("#dice1").src = "images/dice5.png";
                    } else if (value === 6) {
                        document.querySelector("#dice1").src = "images/dice6.png";
                    }
                    document.querySelector(".Player #image" + turn).src = "";
                    // document.querySelector("." + col + "a").style.backgroundColor = "";
                    // document.querySelector("#dice1").src = "";
                    // document.querySelector("#dice1").style.visibility = "hidden";
                    // document.querySelector("." + col + "a").style.opacity = "100%";
                    document.querySelector(".Player #status" + turn).innerHTML = value;
                    turn = result(turn, value, count);
                }, 500);
            }
        }
    }
});

function result(turn, value, count) {
    if (turn === 1 || turn === 2 || turn === 3 || turn === 4) {
        col = document.querySelector("#name" + turn).style.color;
        if (col === "green" || col === "yellow" || col === "blue" || col === "red") {
            if (value === 1 || value === 2 || value === 3 || value === 4 || value === 5) {
                time = setTimeout(function() {
                    countdown(null);
                }, 3000);
                window[col + "strike"](value); //calls the function "greenstrike(value)" if color is "green".
                if (turn == count) {
                    return (1);
                } else {
                    return (turn + 1);
                }
            } else if (value === 6) {
                time = setTimeout(function() {
                    countdown(null);
                }, 3000);
                window[col + "strike"](value);
                return (turn);
            }
        }
    }
}

// function step(i, col, temp) {
//     if (document.querySelector(".zoom .first img").src === "" && document.querySelector(".zoom .first").style.backgroundColor === "") {
//         document.querySelector(".zoom .first img").style.visibility = "visible";
//         document.querySelector(".zoom .first img").src = "images/" + col + "-star.gif";
//         document.querySelector(".zoom .first img").addEventListener("click", function() {
//             document.querySelector(".zoom .first img").style.visibility = "hidden";
//             document.querySelector(".zoom .first img").src = "";
//             if (col === "green") {
//                 gs[i] = temp;
//                 disappear(null);
//                 kill(gs[i], "green");
//                 path(gs[i], "green");
//             } else if (col === "yellow") {
//                 ys[i] = temp;
//                 disappear(null);
//                 kill(ys[i], "yellow");
//                 path(ys[i], "yellow");
//             } else if (col === "red") {
//                 rs[i] = temp;
//                 disappear(null);
//                 kill(rs[i], "red");
//                 path(rs[i], "red");
//             } else if (col === "blue") {
//                 bs[i] = temp;
//                 disappear(null);
//                 kill(bs[i], "blue");
//                 path(bs[i], "blue");
//             }
//         });
//     } else if (document.querySelector(".zoom .Second img").src === "" && document.querySelector(".zoom .Second").style.backgroundColor === "") {
//         document.querySelector(".zoom .Second img").style.visibility = "visible";
//         document.querySelector(".zoom .Second img").src = "images/" + col + "-star.gif";
//         document.querySelector(".zoom .Second img").addEventListener("click", function() {
//             document.querySelector(".zoom .Second img").style.visibility = "hidden";
//             document.querySelector(".zoom .Second img").src = "";
//             if (col === "green") {
//                 gs[i] = temp;
//                 disappear(null);
//                 kill(gs[i], "green");
//                 path(gs[i], "green");
//             } else if (col === "yellow") {
//                 ys[i] = temp;
//                 disappear(null);
//                 kill(ys[i], "yellow");
//                 path(ys[i], "yellow");
//             } else if (col === "red") {
//                 rs[i] = temp;
//                 disappear(null);
//                 kill(rs[i], "red");
//                 path(rs[i], "red");
//             } else if (col === "blue") {
//                 bs[i] = temp;
//                 disappear(null);
//                 kill(bs[i], "blue");
//                 path(bs[i], "blue");
//             }
//         });
//     } else if (document.querySelector(".zoom .Third img").src === "" && document.querySelector(".zoom .Third").style.backgroundColor === "") {
//         document.querySelector(".zoom .Third img").style.visibility = "visible";
//         document.querySelector(".zoom .Third img").src = "images/" + col + "-star.gif";
//         document.querySelector(".zoom .Third img").addEventListener("click", function() {
//             document.querySelector(".zoom .Third img").style.visibility = "hidden";
//             document.querySelector(".zoom .Third img").src = "";
//             if (col === "green") {
//                 gs[i] = temp;
//                 disappear(null);
//                 kill(gs[i], "green");
//                 path(gs[i], "green");
//             } else if (col === "yellow") {
//                 ys[i] = temp;
//                 disappear(null);
//                 kill(ys[i], "yellow");
//                 path(ys[i], "yellow");
//             } else if (col === "red") {
//                 rs[i] = temp;
//                 disappear(null);
//                 kill(rs[i], "red");
//                 path(rs[i], "red");
//             } else if (col === "blue") {
//                 bs[i] = temp;
//                 disappear(null);
//                 kill(bs[i], "blue");
//                 path(bs[i], "blue");
//             }
//         });
//     } else if (document.querySelector(".zoom .Fourth img").src === "" && document.querySelector(".zoom .Fourth").style.backgroundColor === "") {
//         document.querySelector(".zoom .Fourth img").style.visibility = "visible";
//         document.querySelector(".zoom .Fourth img").src = "images/" + col + "-star.gif";
//         document.querySelector(".zoom .Fourth img").addEventListener("click", function() {
//             document.querySelector(".zoom .Fourth img").style.visibility = "hidden";
//             document.querySelector(".zoom .Fourth img").src = "";
//             if (col === "green") {
//                 gs[i] = temp;
//                 disappear(null);
//                 kill(gs[i], "green");
//                 path(gs[i], "green");
//             } else if (col === "yellow") {
//                 ys[i] = temp;
//                 disappear(null);
//                 kill(ys[i], "yellow");
//                 path(ys[i], "yellow");
//             } else if (col === "red") {
//                 rs[i] = temp;
//                 disappear(null);
//                 kill(rs[i], "red");
//                 path(rs[i], "red");
//             } else if (col === "blue") {
//                 bs[i] = temp;
//                 disappear(null);
//                 kill(bs[i], "blue");
//                 path(bs[i], "blue");
//             }
//         });
//     }
// }

// function zoomcol(col) {
//     if (document.querySelector(".zoom .first img").src === "" && document.querySelector(".zoom .first").style.backgroundColor === "") {
//         document.querySelector(".zoom .first").style.backgroundColor === col;
//     } else if (document.querySelector(".zoom .Second img").src === "" && document.querySelector(".zoom .Second").style.backgroundColor === "") {
//         document.querySelector(".zoom .Second").style.backgroundColor === col;
//     } else if (document.querySelector(".zoom .Third img").src === "" && document.querySelector(".zoom .Third").style.backgroundColor === "") {
//         document.querySelector(".zoom .Third").style.backgroundColor === col;
//     } else if (document.querySelector(".zoom .Fourth img").src === "" && document.querySelector(".zoom .Fourth").style.backgroundColor === "") {
//         document.querySelector(".zoom .Fourth").style.backgroundColor === col;
//     }
// }

// function crash(index, col, selector, temp) {
//     var i, done = 0;
//     for (i = 0; i < 4; i++) {
//         if (done === 1) {
//             step(index, col, temp);
//         }
//         if (col === "green") {
//             if (gs[i] === gs[index]) {
//                 if (i !== index) {
//                     zoom(gs[index]);
//                     step(i, "green", temp);
//                     done = 1;
//                 }
//             } else if (rs[i] === gs[index]) {
//                 zoom(gs[index]);
//                 zoomcol("red");
//                 done = 1;
//             } else if (bs[i] === gs[index]) {
//                 zoom(gs[index]);
//                 zoomcol("blue");
//                 done = 1;
//             } else if (ys[i] === gs[index]) {
//                 zoom(gs[index]);
//                 zoomcol("yellow");
//                 done = 1;
//             }
//         } else if (col === "red") {
//             if (gs[i] === rs[index]) {
//                 zoom(rs[index]);
//                 zoomcol("green");
//                 done = 1;
//             } else if (rs[i] === rs[index]) {
//                 if (i !== index) {
//                     zoom(rs[index]);
//                     step(i, "red", temp);
//                     done = 1;
//                 }
//             } else if (bs[i] === rs[index]) {
//                 zoom(rs[index]);
//                 zoomcol("blue");
//                 done = 1;
//             } else if (ys[i] === rs[index]) {
//                 zoom(rs[index]);
//                 zoomcol("yellow");
//                 done = 1;
//             }
//         } else if (col === "blue") {
//             if (gs[i] === bs[index]) {
//                 zoom(bs[index]);
//                 zoomcol("green");
//                 done = 1;
//             } else if (rs[i] === bs[index]) {
//                 zoom(bs[index]);
//                 zoomcol("red");
//                 done = 1;
//             } else if (bs[i] === bs[index]) {
//                 if (i !== index) {
//                     zoom(bs[index]);
//                     step(i, "blue", temp);
//                     done = 1;
//                 }
//             } else if (ys[i] === bs[index]) {
//                 zoom(bs[index]);
//                 zoomcol("yellow");
//                 done = 1;
//             }
//         } else if (col === "yellow") {
//             if (gs[i] === ys[index]) {
//                 zoom(ys[index]);
//                 zoomcol("green");
//                 done = 1;
//             } else if (rs[i] === ys[index]) {
//                 zoom(ys[index]);
//                 zoomcol("red");
//                 done = 1;
//             } else if (bs[i] === ys[index]) {
//                 zoom(ys[index]);
//                 zoomcol("blue");
//                 done = 1;
//             } else if (ys[i] === ys[index]) {
//                 if (i !== index) {
//                     zoom(ys[index]);
//                     step(i, "yellow", temp);
//                     done = 1;
//                 }
//             }
//         }
//     }
//     console.log(done);
//     return done;
// }

// function zoom(value) {
//     if (value === 1 || value === 48) {
//         document.querySelector(".zoom").style.backgroundColor = "white";
//     } else if (value === 9 || value === 14) {
//         document.querySelector(".zoom").style.backgroundColor = "white";
//     } else if (value === 22 || value === 27) {
//         document.querySelector(".zoom").style.backgroundColor = "white";
//     } else if (value === 35 || value === 40) {} else {
//         document.querySelector(".zoom").style.backgroundColor = "white";
//     }
// }

function greenstrike(value) {
    pos = document.querySelector(".greena .first").display;
    pos1 = document.querySelector(".greena .Second").display;
    pos2 = document.querySelector(".greena .Third").display;
    pos3 = document.querySelector(".greena .Fourth").display;

    if (pos === "none") {
        document.querySelector(".btn").disabled = "blocked";
        temp = gs[0] + value;
        if (temp > 51) {
            greatvalue[0] = temp - 51;
            temp = 52 + greatvalue[0];
            selector = select(gs[0]);
            //if (crash(0, "green", selector, temp) === 0) {
            selector.style.visibility = "visible";
            selector.src = "images/green-star.gif";
            selector.addEventListener("click", function() {
                // if (touch === 0) {
                //     touch = 1;
                selector.style.visibility = "hidden";
                selector.src = "";
                gs[0] = temp;
                disappear(null);
                kill(gs[0], "green");
                path(gs[0], "green");
                //}
            });
            // }
        } else {
            selector = select(gs[0]);
            //if (crash(0, "green", selector, temp) === 0) {
            selector.style.visibility = "visible";
            selector.src = "images/green-star.gif";
            selector.addEventListener("click", function() {
                // if (touch === 0) {
                //     touch = 1;
                selector.style.visibility = "hidden";
                selector.src = "";
                gs[0] = temp;
                disappear(null);
                kill(gs[0], "green");
                path(gs[0], "green");
                //}
            });
            // }
        }
    } else if (pos !== "none") {
        if (value === 6) {
            document.querySelector(".greena .first").style.backgroundColor = "";
            document.querySelector(".greena .first img").style.visibility = "visible";
            document.querySelector(".greena .first img").src = "images/green-star.gif";
            document.querySelector(".btn").disabled = "blocked";
            document.querySelector(".greena .first img").addEventListener("click", function() {
                // if (touch === 0) {
                //     touch = 1;
                document.querySelector(".greena .first img").src = "";
                document.querySelector(".greena .first img").style.visibility = "hidden";
                gb[0] = 1;
                gs[0] = 1;
                disappear(null);
                kill(gs[0], "green");
                path(gs[0], "green");
                //}
            });
        }
    }
    if (pos1 === "none") {
        document.querySelector(".btn").disabled = "blocked";
        temp = gs[1] + value;
        if (temp > 51) {
            greatvalue[1] = temp - 51;
            temp = 52 + greatvalue[1];
            selector1 = select(gs[1]);
            //if (crash(1, "green", selector1, temp) === 0) {
            selector1.style.visibility = "visible";
            selector1.src = "images/green-star.gif";
            selector1.addEventListener("click", function() {
                // if (touch === 0) {
                //     touch = 1;
                selector1.style.visibility = "hidden";
                selector1.src = "";
                gs[1] = temp;
                disappear(null);
                kill(gs[1], "green");
                path(gs[1], "green");
                //}
            });
            // }
        } else {
            selector1 = select(gs[1]);
            //if (crash(1, "green", selector1, temp) === 0) {
            selector1.style.visibility = "visible";
            selector1.src = "images/green-star.gif";
            selector1.addEventListener("click", function() {
                // if (touch === 0) {
                //     touch = 1;
                selector1.style.visibility = "hidden";
                selector1.src = "";
                gs[1] = temp;
                disappear(null);
                kill(gs[1], "green");
                path(gs[1], "green");
                //}
            });
        }
        // }
    } else if (pos1 !== "none") {
        if (value === 6) {
            document.querySelector(".greena .Second").style.backgroundColor = "";
            document.querySelector(".greena .Second img").style.visibility = "visible";
            document.querySelector(".greena .Second img").src = "images/green-star.gif";
            document.querySelector(".btn").disabled = "blocked";
            document.querySelector(".greena .Second img").addEventListener("click", function() {
                // if (touch === 0) {
                //     touch = 1;
                document.querySelector(".greena .Second img").src = "";
                document.querySelector(".greena .Second img").style.visibility = "hidden";
                gb[1] = 1;
                gs[1] = 1;
                disappear(null);
                kill(gs[1], "green");
                path(gs[1], "green");
                //}
            });
        }
    }
    if (pos2 === "none") {
        document.querySelector(".btn").disabled = "blocked";
        temp = gs[2] + value;
        if (temp > 51) {
            greatvalue[2] = temp - 51;
            temp = 52 + greatvalue[2];
            selector2 = select(gs[2]);
            //if (crash(2, "green", selector2, temp) === 0) {
            selector2.style.visibility = "visible";
            selector2.src = "images/green-star.gif";
            selector2.addEventListener("click", function() {
                // if (touch === 0) {
                //     touch = 1;
                selector2.style.visibility = "hidden";
                selector2.src = "";
                gs[2] = temp;
                disappear(null);
                kill(gs[2], "green");
                path(gs[2], "green");
                //}
            });
            // }
        } else {
            selector2 = select(gs[2]);
            //if (crash(2, "green", selector2, temp) === 0) {
            selector2.style.visibility = "visible";
            selector2.src = "images/green-star.gif";
            selector2.addEventListener("click", function() {
                // if (touch === 0) {
                //     touch = 1;
                selector2.style.visibility = "hidden";
                selector2.src = "";
                gs[2] = temp;
                disappear(null);
                kill(gs[2], "green");
                path(gs[2], "green");
                //}
            });
        }
        // }
    } else if (pos2 !== "none") {
        if (value === 6) {
            document.querySelector(".greena .Third").style.backgroundColor = "";
            document.querySelector(".greena .Third img").style.visibility = "visible";
            document.querySelector(".greena .Third img").src = "images/green-star.gif";
            document.querySelector(".btn").disabled = "blocked";
            document.querySelector(".greena .Third img").addEventListener("click", function() {
                // if (touch === 0) {
                //     touch = 1;
                document.querySelector(".greena .Third img").src = "";
                document.querySelector(".greena .Third img").style.visibility = "hidden";
                gb[2] = 1;
                gs[2] = 1;
                disappear(null);
                kill(gs[2], "green");
                path(gs[2], "green");
                //}}
            });
        }
    }
    if (pos3 === "none") {
        document.querySelector(".btn").disabled = "blocked";
        temp = gs[3] + value;
        if (temp > 51) {
            greatvalue[3] = temp - 51;
            temp = 52 + greatvalue[3];
            selector3 = select(gs[3]);
            //if (crash(3, "green", selector3, temp) === 0) {
            selector3.style.visibility = "visible";
            selector3.src = "images/green-star.gif";
            selector3.addEventListener("click", function() {
                // if (touch === 0) {
                //     touch = 1;
                selector3.style.visibility = "hidden";
                selector3.src = "";
                gs[3] = temp;
                disappear(null);
                kill(gs[3], "green");
                path(gs[3], "green");
                //}
            });
            // }
        } else {
            selector3 = select(gs[3]);
            //if (crash(3, "green", selector3, temp) === 0) {
            selector3.style.visibility = "visible";
            selector3.src = "images/green-star.gif";
            selector3.addEventListener("click", function() {
                // if (touch === 0) {
                //     touch = 1;
                selector3.style.visibility = "hidden";
                selector3.src = "";
                gs[3] = temp;
                disappear(null);
                kill(gs[3], "green");
                path(gs[3], "green");
                //}
            });
            // }
        }
    } else if (pos3 !== "none") {
        if (value === 6) {
            document.querySelector(".greena .Fourth").style.backgroundColor = "";
            document.querySelector(".greena .Fourth img").style.visibility = "visible";
            document.querySelector(".greena .Fourth img").src = "images/green-star.gif";
            document.querySelector(".btn").disabled = "blocked";
            document.querySelector(".greena .Fourth img").addEventListener("click", function() {
                // if (touch === 0) {
                //     touch = 1;
                document.querySelector(".greena .Fourth img").src = "";
                document.querySelector(".greena .Fourth img").style.visibility = "hidden";
                gb[3] = 1;
                gs[3] = 1;
                disappear(null);
                kill(gs[3], "green");
                path(gs[3], "green");
                //}
            });
        }
    }
    //touch = 0;
}

function redstrike(value) {
    pos = document.querySelector(".reda .first").display;
    pos1 = document.querySelector(".reda .Second").display;
    pos2 = document.querySelector(".reda .Third").display;
    pos3 = document.querySelector(".reda .Fourth").display;

    if (pos === "none") {
        document.querySelector(".btn").disabled = "blocked";
        temp = rs[0] + value;
        greatr[0] = greatr[0] + value;
        if (temp > 52) {
            greatvalue[0] = temp - 52;
            greatr[0] = temp;
            temp = greatvalue[0];
            selector = select(rs[0]);
            //if (crash(0, "red", selector, temp) = 0) {
            selector.style.visibility = "visible";
            selector.src = "images/red-star.gif";
            selector.addEventListener("click", function() {
                // if (touch === 0) {
                //     touch = 1;
                selector.style.visibility = "hidden";
                selector.src = "";
                rs[0] = temp;
                disappear(null);
                kill(rs[0], "red");
                path(rs[0], "red");
                //}
            });
            // }
        } else if (greatr[0] > 64) {
            greatvalue[0] = greatr[0] - 64;
            temp = greatvalue[0] + 58;
            selector = select(rs[0]);
            //if (crash(0, "red", selector, temp) = 0) {
            selector.style.visibility = "visible";
            selector.src = "images/red-star.gif";
            selector.addEventListener("click", function() {
                // if (touch === 0) {
                //     touch = 1;
                selector.style.visibility = "hidden";
                selector.src = "";
                rs[0] = temp;
                disappear(null);
                kill(rs[0], "red");
                path(rs[0], "red");
                //}
            });
            // }
        } else {
            selector = select(rs[0]);
            //if (crash(0, "red", selector, temp) = 0) {
            selector.style.visibility = "visible";
            selector.src = "images/red-star.gif";
            selector.addEventListener("click", function() {
                // if (touch === 0) {
                //     touch = 1;
                selector.style.visibility = "hidden";
                selector.src = "";
                rs[0] = temp;
                disappear(null);
                kill(rs[0], "red");
                path(rs[0], "red");
                //}
            });
            // }
        }
    } else if (pos !== "none") {
        if (value === 6) {
            document.querySelector(".reda .first").style.backgroundColor = "";
            document.querySelector(".reda .first img").style.visibility = "visible";
            document.querySelector(".reda .first img").src = "images/red-star.gif";
            document.querySelector(".btn").disabled = "blocked";
            document.querySelector(".reda .first img").addEventListener("click", function() {
                // if (touch === 0) {
                //     touch = 1;
                document.querySelector(".reda .first img").src = "";
                document.querySelector(".reda .first img").style.visibility = "hidden";
                rb[0] = 1;
                rs[0] = 14;
                disappear(null);
                kill(rs[0], "red");
                path(rs[0], "red");
                //}
            });
        }
    }
    if (pos1 === "none") {
        document.querySelector(".btn").disabled = "blocked";
        temp = rs[1] + value;
        greatr[1] = greatr[1] + value;
        if (temp > 52) {
            greatvalue[1] = temp - 52;
            greatr[1] = temp;
            temp = greatvalue[1];
            selector1 = select(rs[1]);
            //if (crash(1, "red", selector1, temp) == 0) {
            selector1.style.visibility = "visible";
            selector1.src = "images/red-star.gif";
            selector1.addEventListener("click", function() {
                // if (touch === 0) {
                //     touch = 1;
                selector1.style.visibility = "hidden";
                selector1.src = "";
                rs[1] = temp;
                disappear(null);
                kill(rs[1], "red");
                path(rs[1], "red");
                //}
            });
            // }
        } else if (greatr[1] > 64) {
            greatvalue[1] = greatr[1] - 64;
            temp = greatvalue[1] + 58;
            selector1 = select(rs[1]);
            //if (crash(1, "red", selector1, temp) == 0) {
            selector1.style.visibility = "visible";
            selector1.src = "images/red-star.gif";
            selector1.addEventListener("click", function() {
                // if (touch === 0) {
                //     touch = 1;
                selector1.style.visibility = "hidden";
                selector1.src = "";
                greatr[1] = 0;
                rs[1] = temp;
                disappear(null);
                kill(rs[1], "red");
                path(rs[1], "red");
                //}
            });
            // }
        } else {
            selector1 = select(rs[1]);
            //if (crash(1, "red", selector1, temp) == 0) {
            selector1.style.visibility = "visible";
            selector1.src = "images/red-star.gif";
            selector1.addEventListener("click", function() {
                // if (touch === 0) {
                //     touch = 1;
                selector1.style.visibility = "hidden";
                selector1.src = "";
                rs[1] = temp;
                disappear(null);
                kill(rs[1], "red");
                path(rs[1], "red");
                //}
            });
            // }
        }
    } else if (pos1 !== "none") {
        if (value === 6) {
            document.querySelector(".reda .Second").style.backgroundColor = "";
            document.querySelector(".reda .Second img").style.visibility = "visible";
            document.querySelector(".reda .Second img").src = "images/red-star.gif";
            document.querySelector(".btn").disabled = "blocked";
            document.querySelector(".reda .Second img").addEventListener("click", function() {
                // if (touch === 0) {
                //     touch = 1;
                document.querySelector(".reda .Second img").src = "";
                document.querySelector(".reda .Second img").style.visibility = "hidden";
                rb[1] = 1;
                rs[1] = 14;
                disappear(null);
                kill(rs[1], "red");
                path(rs[1], "red");
                //}
            });
        }
    }
    if (pos2 === "none") {
        document.querySelector(".btn").disabled = "blocked";
        temp = rs[2] + value;
        greatr[2] = greatr[2] + value;
        if (temp > 52) {
            greatvalue[2] = temp - 52;
            greatr[2] = temp;
            temp = greatvalue[2];
            selector2 = select(rs[2]);
            //if (crash(2, "red", selector2, temp) == 0) {
            selector2.style.visibility = "visible";
            selector2.src = "images/red-star.gif";
            selector2.addEventListener("click", function() {
                // if (touch === 0) {
                //     touch = 1;
                selector2.style.visibility = "hidden";
                selector2.src = "";
                rs[2] = temp;
                disappear(null);
                kill(rs[2], "red");
                path(rs[2], "red");
                //}
            });
            // }
        } else if (greatr[2] > 64) {
            greatvalue[2] = greatr[2] - 64;
            temp = greatvalue[2] + 58;
            selector2 = select(rs[2]);
            //if (crash(2, "red", selector2, temp) == 0) {
            selector2.style.visibility = "visible";
            selector2.src = "images/red-star.gif";
            selector2.addEventListener("click", function() {
                // if (touch === 0) {
                //     touch = 1;
                selector2.style.visibility = "hidden";
                selector2.src = "";
                rs[2] = temp;
                disappear(null);
                kill(rs[2], "red");
                path(rs[2], "red");
                //}
            });
            // }
        } else {
            selector2 = select(rs[2]);
            //if (crash(2, "red", selector2, temp) == 0) {
            selector2.style.visibility = "visible";
            selector2.src = "images/red-star.gif";
            selector2.addEventListener("click", function() {
                // if (touch === 0) {
                //     touch = 1;
                selector2.style.visibility = "hidden";
                selector2.src = "";
                rs[2] = temp;
                disappear(null);
                kill(rs[2], "red");
                path(rs[2], "red");
                //}
            });
            // }
        }
    } else if (pos2 !== "none") {
        if (value === 6) {
            document.querySelector(".reda .Third").style.backgroundColor = "";
            document.querySelector(".reda .Third img").style.visibility = "visible";
            document.querySelector(".reda .Third img").src = "images/red-star.gif";
            document.querySelector(".btn").disabled = "blocked";
            document.querySelector(".reda .Third img").addEventListener("click", function() {
                // if (touch === 0) {
                //     touch = 1;
                document.querySelector(".reda .Third img").src = "";
                document.querySelector(".reda .Third img").style.visibility = "hidden";
                rb[2] = 1;
                rs[2] = 14;
                disappear(null);
                kill(rs[2], "red");
                path(rs[2], "red");
                //}
            });
        }
    }
    if (pos3 === "none") {
        document.querySelector(".btn").disabled = "blocked";
        temp = rs[3] + value;
        greatr[3] = greatr[3] + value;
        if (temp > 52) {
            greatvalue[3] = temp - 52;
            greatr[3] = temp;
            temp = greatvalue[3];
            selector3 = select(rs[3]);
            //if (crash(3, "red", selector3, temp) == 0) {
            selector3.style.visibility = "visible";
            selector3.src = "images/red-star.gif";
            selector3.addEventListener("click", function() {
                // if (touch === 0) {
                //     touch = 1;
                selector3.style.visibility = "hidden";
                selector3.src = "";
                rs[3] = temp;
                disappear(null);
                kill(rs[3], "red");
                path(rs[3], "red");
                //}
            });
            // }
        } else if (greatr[3] > 64) {
            greatvalue[3] = greatr[3] - 64;
            temp = greatvalue[3] + 58;
            selector3 = select(rs[3]);
            //if (crash(3, "red", selector3, temp) == 0) {
            selector3.style.visibility = "visible";
            selector3.src = "images/red-star.gif";
            selector3.addEventListener("click", function() {
                // if (touch === 0) {
                //     touch = 1;
                selector3.style.visibility = "hidden";
                selector3.src = "";
                rs[3] = temp;
                disappear(null);
                kill(rs[3], "red");
                path(rs[3], "red");
                //}
            });
            // }
        } else {
            selector3 = select(rs[3]);
            //if (crash(3, "red", selector3, temp) == 0) {
            selector3.style.visibility = "visible";
            selector3.src = "images/red-star.gif";
            selector3.addEventListener("click", function() {
                // if (touch === 0) {
                //     touch = 1;
                selector3.style.visibility = "hidden";
                selector3.src = "";
                rs[3] = temp;
                disappear(null);
                kill(rs[3], "red");
                path(rs[3], "red");
                //}
            });
            // }
        }
    } else if (pos3 !== "none") {
        if (value === 6) {
            document.querySelector(".reda .Fourth").style.backgroundColor = "";
            document.querySelector(".reda .Fourth img").style.visibility = "visible";
            document.querySelector(".reda .Fourth img").src = "images/red-star.gif";
            document.querySelector(".btn").disabled = "blocked";
            document.querySelector(".reda .Fourth img").addEventListener("click", function() {
                // if (touch === 0) {
                //     touch = 1;
                document.querySelector(".reda .Fourth img").src = "";
                document.querySelector(".reda .Fourth img").style.visibility = "hidden";
                rb[3] = 1;
                rs[3] = 14;
                disappear(null);
                kill(rs[3], "red");
                path(rs[3], "red");
                //}
            });
        }
    }
    //touch = 0;
}

function bluestrike(value) {
    pos = document.querySelector(".bluea .first").display;
    pos1 = document.querySelector(".bluea .Second").display;
    pos2 = document.querySelector(".bluea .Third").display;
    pos3 = document.querySelector(".bluea .Fourth").display;

    if (pos === "none") {
        document.querySelector(".btn").disabled = "blocked";
        temp = bs[0] + value;
        greatb[0] = greatb[0] + value;
        if (temp > 52) {
            greatvalue[0] = temp - 52;
            greatb[0] = temp;
            temp = greatvalue[0];
            selector = select(bs[0]);
            //if (crash(0, "blue", selector, btemp) == 0) {
            selector.style.visibility = "visible";
            selector.src = "images/blue-star.gif";
            selector.addEventListener("click", function() {
                // if (touch === 0) {
                //     touch = 1;
                selector.style.visibility = "hidden";
                selector.src = "";
                bs[0] = temp;
                disappear(null);
                kill(bs[0], "blue");
                path(bs[0], "blue");
                //}
            });
            // }
        } else if (greatb[0] > 77) {
            greatvalue[0] = greatb[0] - 77;
            temp = greatvalue[0] + 64;
            selector = select(bs[0]);
            //if (crash(0, "blue", selector, btemp) == 0) {
            selector.style.visibility = "visible";
            selector.src = "images/blue-star.gif";
            selector.addEventListener("click", function() {
                // if (touch === 0) {
                //     touch = 1;
                selector.style.visibility = "hidden";
                selector.src = "";
                bs[0] = temp;
                disappear(null);
                kill(bs[0], "blue");
                path(bs[0], "blue");
                //}
            });
            // }
        } else {
            selector = select(bs[0]);
            //if (crash(0, "blue", selector, btemp) == 0) {
            selector.style.visibility = "visible";
            selector.src = "images/blue-star.gif";
            selector.addEventListener("click", function() {
                // if (touch === 0) {
                //     touch = 1;
                selector.style.visibility = "hidden";
                selector.src = "";
                bs[0] = temp;
                disappear(null);
                kill(bs[0], "blue");
                path(bs[0], "blue");
                //}
            });
            // }
        }
    } else if (pos !== "none") {
        if (value === 6) {
            document.querySelector(".bluea .first").style.backgroundColor = "";
            document.querySelector(".bluea .first img").style.visibility = "visible";
            document.querySelector(".bluea .first img").src = "images/blue-star.gif";
            document.querySelector(".btn").disabled = "blocked";
            document.querySelector(".bluea .first img").addEventListener("click", function() {
                // if (touch === 0) {
                //     touch = 1;
                document.querySelector(".bluea .first img").src = "";
                document.querySelector(".bluea .first img").style.visibility = "hidden";
                bb[0] = 1;
                bs[0] = 27;
                disappear(null);
                kill(bs[0], "blue");
                path(bs[0], "blue");
                //}
            });
        }
    }
    if (pos1 === "none") {
        document.querySelector(".btn").disabled = "blocked";
        temp = bs[1] + value;
        greatb[1] = greatb[1] + value;
        if (temp > 52) {
            greatvalue[1] = temp - 52;
            greatb[1] = temp;
            temp = greatvalue[1];
            selector1 = select(bs[1]);
            //if (crash(1, "blue", selector1, temp) === 0) {
            selector1.style.visibility = "visible";
            selector1.src = "images/blue-star.gif";
            selector1.addEventListener("click", function() {
                // if (touch === 0) {
                //     touch = 1;
                selector1.style.visibility = "hidden";
                selector1.src = "";
                bs[1] = temp;
                disappear(null);
                kill(bs[1], "blue");
                path(bs[1], "blue");
                //}
            });
            // }
        } else if (greatb[1] > 77) {
            greatvalue[1] = greatb[1] - 77;
            temp = greatvalue[1] + 64;
            selector1 = select(bs[1]);
            //if (crash(1, "blue", selector1, temp) === 0) {
            selector1.style.visibility = "visible";
            selector1.src = "images/blue-star.gif";
            selector1.addEventListener("click", function() {
                // if (touch === 0) {
                //     touch = 1;
                selector1.style.visibility = "hidden";
                selector1.src = "";
                bs[1] = temp;
                disappear(null);
                kill(bs[1], "blue");
                path(bs[1], "blue");
                //}
            });
            // }
        } else {
            selector1 = select(bs[1]);
            //if (crash(1, "blue", selector1, temp) === 0) {
            selector1.style.visibility = "visible";
            selector1.src = "images/blue-star.gif";
            selector1.addEventListener("click", function() {
                // if (touch === 0) {
                //     touch = 1;
                selector1.style.visibility = "hidden";
                selector1.src = "";
                bs[1] = temp;
                disappear(null);
                kill(bs[1], "blue");
                path(bs[1], "blue");
                //}
            });
            // }
        }
    } else if (pos1 !== "none") {
        if (value === 6) {
            document.querySelector(".bluea .Second").style.backgroundColor = "";
            document.querySelector(".bluea .Second img").style.visibility = "visible";
            document.querySelector(".bluea .Second img").src = "images/blue-star.gif";
            document.querySelector(".btn").disabled = "blocked";
            document.querySelector(".bluea .Second img").addEventListener("click", function() {
                // if (touch === 0) {
                //     touch = 1;
                document.querySelector(".bluea .Second img").src = "";
                document.querySelector(".bluea .Second img").style.visibility = "hidden";
                bb[1] = 1;
                bs[1] = 27;
                disappear(null);
                kill(bs[1], "blue");
                path(bs[1], "blue");
                //}
            });
        }
    }
    if (pos2 === "none") {
        document.querySelector(".btn").disabled = "blocked";
        temp = bs[2] + value;
        greatb[2] = greatb[2] + value;
        if (temp > 52) {
            greatvalue[2] = temp - 52;
            greatb[2] = temp;
            temp = greatvalue[2];
            selector2 = select(bs[2]);
            //if (crash(2, "blue", selector2, temp) === 0) {
            selector2.style.visibility = "visible";
            selector2.src = "images/blue-star.gif";
            selector2.addEventListener("click", function() {
                // if (touch === 0) {
                //     touch = 1;
                selector2.style.visibility = "hidden";
                selector2.src = "";
                bs[2] = temp;
                disappear(null);
                kill(bs[2], "blue");
                path(bs[2], "blue");
                //}
            });
            // }
        } else if (greatb[2] > 77) {
            greatvalue[2] = greatb[2] - 77;
            temp = greatvalue[2] + 64;
            selector2 = select(bs[2]);
            //if (crash(2, "blue", selector2, temp) === 0) {
            selector2.style.visibility = "visible";
            selector2.src = "images/blue-star.gif";
            selector2.addEventListener("click", function() {
                // if (touch === 0) {
                //     touch = 1;
                selector2.style.visibility = "hidden";
                selector2.src = "";
                bs[2] = temp;
                disappear(null);
                kill(bs[2], "blue");
                path(bs[2], "blue");
                //}
            });
            // }
        } else {
            selector2 = select(bs[2]);
            //if (crash(2, "blue", selector2, temp) === 0) {
            selector2.style.visibility = "visible";
            selector2.src = "images/blue-star.gif";
            selector2.addEventListener("click", function() {
                // if (touch === 0) {
                //     touch = 1;
                selector2.style.visibility = "hidden";
                selector2.src = "";
                bs[2] = temp;
                disappear(null);
                kill(bs[2], "blue");
                path(bs[2], "blue");
                //}
            });
        }
        // }
    } else if (pos2 !== "none") {
        if (value === 6) {
            document.querySelector(".bluea .Third").style.backgroundColor = "";
            document.querySelector(".bluea .Third img").style.visibility = "visible";
            document.querySelector(".bluea .Third img").src = "images/blue-star.gif";
            document.querySelector(".btn").disabled = "blocked";
            document.querySelector(".bluea .Third img").addEventListener("click", function() {
                // if (touch === 0) {
                //     touch = 1;
                document.querySelector(".bluea .Third img").src = "";
                document.querySelector(".bluea .Third img").style.visibility = "hidden";
                bb[2] = 1;
                bs[2] = 27;
                disappear(null);
                kill(bs[2], "blue");
                path(bs[2], "blue");
                //}
            });
        }
    }
    if (pos3 === "none") {
        document.querySelector(".btn").disabled = "blocked";
        temp = bs[3] + value;
        greatb[3] = greatb[3] + value;
        if (temp > 52) {
            greatvalue[3] = temp - 52;
            greatb[3] = temp;
            temp = greatvalue[3];
            selector3 = select(bs[3]);
            //if (crash(3, "blue", selector3, temp) === 0) {
            selector3.style.visibility = "visible";
            selector3.src = "images/blue-star.gif";
            selector3.addEventListener("click", function() {
                // if (touch === 0) {
                //     touch = 1;
                selector3.style.visibility = "hidden";
                selector3.src = "";
                bs[3] = temp;
                disappear(null);
                kill(bs[3], "blue");
                path(bs[3], "blue");
                //}
            });
            // }
        } else if (greatb[3] > 77) {
            greatvalue[3] = greatb[3] - 77;
            temp = greatvalue[3] + 64;
            selector3 = select(bs[3]);
            //if (crash(3, "blue", selector3, temp) === 0) {
            selector3.style.visibility = "visible";
            selector3.src = "images/blue-star.gif";
            selector3.addEventListener("click", function() {
                // if (touch === 0) {
                //     touch = 1;
                selector3.style.visibility = "hidden";
                selector3.src = "";
                bs[3] = temp;
                disappear(null);
                kill(bs[3], "blue");
                path(bs[3], "blue");
                //}
            });
            // }
        } else {
            selector3 = select(bs[3]);
            //if (crash(3, "blue", selector3, temp) === 0) {
            selector3.style.visibility = "visible";
            selector3.src = "images/blue-star.gif";
            selector3.addEventListener("click", function() {
                // if (touch === 0) {
                //     touch = 1;
                selector3.style.visibility = "hidden";
                selector3.src = "";
                bs[3] = temp;
                disappear(null);
                kill(bs[3], "blue");
                path(bs[3], "blue");
                //}
            });
            // }
        }
    } else if (pos3 !== "none") {
        if (value === 6) {
            document.querySelector(".bluea .Fourth").style.backgroundColor = "";
            document.querySelector(".bluea .Fourth img").style.visibility = "visible";
            document.querySelector(".bluea .Fourth img").src = "images/blue-star.gif";
            document.querySelector(".btn").disabled = "blocked";
            document.querySelector(".bluea .Fourth img").addEventListener("click", function() {
                // if (touch === 0) {
                //     touch = 1;
                document.querySelector(".bluea .Fourth img").src = "";
                document.querySelector(".bluea .Fourth img").style.visibility = "hidden";
                bb[3] = 1;
                bs[3] = 27;
                disappear(null);
                kill(bs[3], "blue");
                path(bs[3], "blue");
                //}
            });
        }
    }
    //touch = 0;
}

function yellowstrike(value) {
    pos = document.querySelector(".yellowa .first").display;
    pos1 = document.querySelector(".yellowa .Second").display;
    pos2 = document.querySelector(".yellowa .Third").display;
    pos3 = document.querySelector(".yellowa .Fourth").display;

    if (pos === "none") {
        document.querySelector(".btn").disabled = "blocked";
        temp = ys[0] + value;
        greaty[0] = greaty[0] + value;
        if (temp > 52) {
            greatvalue[0] = temp - 52;
            greaty[0] = temp;
            temp = greatvalue[0];
            selector = select(ys[0]);
            //if (crash(0, "yellow", selector, temp) === 0) {
            selector.style.visibility = "visible";
            selector.src = "images/" + col + "-star.gif";
            selector.addEventListener("click", function() {
                // if (touch === 0) {
                //     touch = 1;
                selector.style.visibility = "hidden";
                selector.src = "";
                ys[0] = temp;
                disappear(null);
                kill(ys[0], "yellow");
                path(ys[0], "yellow");
                //}
            });
            //}
        } else if (greaty[0] > 90) {
            greatvalue[0] = greaty[0] - 90;
            temp = greatvalue[0] + 70;
            selector = select(ys[0]);
            //if (crash(0, "yellow", selector, temp) === 0) {
            selector.style.visibility = "visible";
            selector.src = "images/" + col + "-star.gif";
            selector.addEventListener("click", function() {
                // if (touch === 0) {
                //     touch = 1;
                selector.style.visibility = "hidden";
                selector.src = "";
                ys[0] = temp;
                disappear(null);
                kill(ys[0], "yellow");
                path(ys[0], "yellow");
                //}
            });
            //}
        } else {
            selector = select(ys[0]);
            //if (crash(0, "yellow", selector, temp) === 0) {
            selector.style.visibility = "visible";
            selector.src = "images/" + col + "-star.gif";
            selector.addEventListener("click", function() {
                // if (touch === 0) {
                //     touch = 1;
                selector.style.visibility = "hidden";
                selector.src = "";
                ys[0] = temp;
                disappear(null);
                kill(ys[0], "yellow");
                path(ys[0], "yellow");
                //}
            });
            // }
        }
    } else if (pos !== "none") {
        if (value === 6) {
            document.querySelector(".yellowa .first").style.backgroundColor = "";
            document.querySelector(".yellowa .first img").style.visibility = "visible";
            document.querySelector(".yellowa .first img").src = "images/yellow-star.gif";
            document.querySelector(".btn").disabled = "blocked";
            document.querySelector(".yellowa .first img").addEventListener("click", function() {
                // if (touch === 0) {
                //     touch = 1;
                document.querySelector(".yellowa .first img").src = "";
                document.querySelector(".yellowa .first img").style.visibility = "hidden";
                yb[0] = 1;
                ys[0] = 40;
                disappear(null);
                kill(ys[0], "yellow");
                path(ys[0], "yellow");
                //}
            });
        }
    }
    if (pos1 === "none") {
        document.querySelector(".btn").disabled = "blocked";
        temp = ys[1] + value;
        greaty[1] = greaty[1] + value;
        if (temp > 52) {
            greatvalue[1] = temp - 52;
            greaty[1] = temp;
            temp = greatvalue[1];
            selector1 = select(ys[1]);
            //if (crash(1, "yellow", selector1, temp) === 0) {
            selector1.style.visibility = "visible";
            selector1.src = "images/" + col + "-star.gif";
            selector1.addEventListener("click", function() {
                // if (touch === 0) {
                //     touch = 1;
                selector1.style.visibility = "hidden";
                selector1.src = "";
                ys[1] = temp;
                disappear(null);
                kill(ys[1], "yellow");
                path(ys[1], "yellow");
                //}
            });
            //}
        } else if (greaty[1] > 90) {
            greatvalue[1] = greaty[1] - 90;
            temp = greatvalue[1] + 70;
            selector1 = select(ys[1]);
            //if (crash(1, "yellow", selector1, temp) === 0) {
            selector1.style.visibility = "visible";
            selector1.src = "images/" + col + "-star.gif";
            selector1.addEventListener("click", function() {
                // if (touch === 0) {
                //     touch = 1;
                selector1.style.visibility = "hidden";
                selector1.src = "";
                ys[1] = temp;
                disappear(null);
                kill(ys[1], "yellow");
                path(ys[1], "yellow");
                //}
            });
            //}
        } else {
            selector1 = select(ys[1]);
            //if (crash(1, "yellow", selector1, temp) === 0) {
            selector1.style.visibility = "visible";
            selector1.src = "images/" + col + "-star.gif";
            selector1.addEventListener("click", function() {
                // if (touch === 0) {
                //     touch = 1;
                selector1.style.visibility = "hidden";
                selector1.src = "";
                ys[1] = temp;
                disappear(null);
                kill(ys[1], "yellow");
                path(ys[1], "yellow");
                //}
            });
            // }
        }
    } else if (pos1 !== "none") {
        if (value === 6) {
            document.querySelector(".yellowa .Second").style.backgroundColor = "";
            document.querySelector(".yellowa .Second img").style.visibility = "visible";
            document.querySelector(".yellowa .Second img").src = "images/yellow-star.gif";
            document.querySelector(".btn").disabled = "blocked";
            document.querySelector(".yellowa .Second img").addEventListener("click", function() {
                // if (touch === 0) {
                //     touch = 1;
                document.querySelector(".yellowa .Second img").src = "";
                document.querySelector(".yellowa .Second img").style.visibility = "hidden";
                yb[1] = 1;
                ys[1] = 40;
                disappear(null);
                kill(ys[1], "yellow");
                path(ys[1], "yellow");
                //}
            });
        }
    }
    if (pos2 === "none") {
        document.querySelector(".btn").disabled = "blocked";
        temp = ys[2] + value;
        greaty[2] = greaty[2] + value;
        if (temp > 52) {
            greatvalue[2] = temp - 52;
            greaty[2] = temp;
            temp = greatvalue[2];
            selector2 = select(ys[2]);
            //if (crash(2, "yellow", selector2, temp) === 0) {
            selector2.style.visibility = "visible";
            selector2.src = "images/" + col + "-star.gif";
            selector2.addEventListener("click", function() {
                // if (touch === 0) {
                //     touch = 1;
                selector2.style.visibility = "hidden";
                selector2.src = "";
                ys[2] = temp;
                disappear(null);
                kill(ys[2], "yellow");
                path(ys[2], "yellow");
                //}
            });
            //}
        } else if (greaty[2] > 90) {
            greatvalue[2] = greaty[2] - 90;
            temp = greatvalue[2] + 70;
            selector2 = select(ys[2]);
            //if (crash(2, "yellow", selector2, temp) === 0) {
            selector2.style.visibility = "visible";
            selector2.src = "images/" + col + "-star.gif";
            selector2.addEventListener("click", function() {
                // if (touch === 0) {
                //     touch = 1;
                selector2.style.visibility = "hidden";
                selector2.src = "";
                ys[2] = temp;
                disappear(null);
                kill(ys[2], "yellow");
                path(ys[2], "yellow");
                //}
            });
            //}
        } else {
            selector2 = select(ys[2]);
            //if (crash(2, "yellow", selector2, temp) === 0) {
            selector2.style.visibility = "visible";
            selector2.src = "images/" + col + "-star.gif";
            selector2.addEventListener("click", function() {
                // if (touch === 0) {
                //     touch = 1;
                selector2.style.visibility = "hidden";
                selector2.src = "";
                ys[2] = temp;
                disappear(null);
                kill(ys[2], "yellow");
                path(ys[2], "yellow");
                //}
            });
            // }
        }
    } else if (pos2 !== "none") {
        if (value === 6) {
            document.querySelector(".yellowa .Third").style.backgroundColor = "";
            document.querySelector(".yellowa .Third img").style.visibility = "visible";
            document.querySelector(".yellowa .Third img").src = "images/yellow-star.gif";
            document.querySelector(".btn").disabled = "blocked";
            document.querySelector(".yellowa .Third img").addEventListener("click", function() {
                // if (touch === 0) {
                //     touch = 1;
                document.querySelector(".yellowa .Third img").src = "";
                document.querySelector(".yellowa .Third img").style.visibility = "hidden";
                yb[2] = 1;
                ys[2] = 40;
                disappear(null);
                kill(ys[2], "yellow");
                path(ys[2], "yellow");
                //}}
            });
        }
    }
    if (pos3 === "none") {
        document.querySelector(".btn").disabled = "blocked";
        temp = ys[3] + value;
        greaty[3] = greaty[3] + value;
        if (temp > 52) {
            greatvalue[3] = temp - 52;
            greaty[3] = temp;
            temp = greatvalue[3];
            selector3 = select(ys[3]);
            //if (crash(3, "yellow", selector3, temp) === 0) {
            selector3.style.visibility = "visible";
            selector3.src = "images/" + col + "-star.gif";
            selector3.addEventListener("click", function() {
                // if (touch === 0) {
                //     touch = 1;
                selector3.style.visibility = "hidden";
                selector3.src = "";
                ys[3] = temp;
                disappear(null);
                kill(ys[3], "yellow");
                path(ys[3], "yellow");
                //}
            });
            //}
        } else if (greaty[3] > 90) {
            greatvalue[3] = greaty[3] - 90;
            temp = greatvalue[3] + 70;
            selector3 = select(ys[3]);
            //if (crash(3, "yellow", selector3, temp) === 0) {
            selector3.style.visibility = "visible";
            selector3.src = "images/" + col + "-star.gif";
            selector3.addEventListener("click", function() {
                // if (touch === 0) {
                //     touch = 1;
                selector3.style.visibility = "hidden";
                selector3.src = "";
                ys[3] = temp;
                disappear(null);
                kill(ys[3], "yellow");
                path(ys[3], "yellow");
                //}
            });
            //}
        } else {
            selector3 = select(ys[3]);
            //if (crash(3, "yellow", selector3, temp) === 0) {
            selector3.style.visibility = "visible";
            selector3.src = "images/" + col + "-star.gif";
            selector3.addEventListener("click", function() {
                // if (touch === 0) {
                //     touch = 1;
                selector3.style.visibility = "hidden";
                selector3.src = "";
                ys[3] = temp;
                disappear(null);
                kill(ys[3], "yellow");
                path(ys[3], "yellow");
                //}
            });
        }
        // }
    } else if (pos3 !== "none") {
        if (value === 6) {
            document.querySelector(".yellowa .Fourth").style.backgroundColor = "";
            document.querySelector(".yellowa .Fourth img").style.visibility = "visible";
            document.querySelector(".yellowa .Fourth img").src = "images/yellow-star.gif";
            document.querySelector(".btn").disabled = "blocked";
            document.querySelector(".yellowa .Fourth img").addEventListener("click", function() {
                // if (touch === 0) {
                //     touch = 1;
                document.querySelector(".yellowa .Fourth img").src = "";
                document.querySelector(".yellowa .Fourth img").style.visibility = "hidden";
                yb[3] = 1;
                ys[3] = 40;
                disappear(null);
                kill(ys[3], "yellow");
                path(ys[3], "yellow");
                //}
            });
        }
    }
    //touch = 0;
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
    if (document.querySelector(".zoom .first img").style.visibility == "visible") {
        document.querySelector(".zoom .first img").style.visibility == "hidden";
        document.querySelector(".zoom .first img").src == "";
    }
    if (document.querySelector(".zoom .Second img").style.visibility == "visible") {
        document.querySelector(".zoom .Second img").style.visibility == "hidden";
        document.querySelector(".zoom .Second img").src == "";
    }
    if (document.querySelector(".zoom .Third img").style.visibility == "visible") {
        document.querySelector(".zoom .Third img").style.visibility == "hidden";
        document.querySelector(".zoom .Third img").src == "";
    }
    if (document.querySelector(".zoom .Fourth img").style.visibility == "visible") {
        document.querySelector(".zoom .Fourth img").style.visibility == "hidden";
        document.querySelector(".zoom .Fourth img").src == "";
    }
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
    if (document.querySelector(".vpath1 .g1 img").style.visibility = "visible") {
        document.querySelector(".vpath1 .g1 img").style.visibility = "hidden";
        document.querySelector(".vpath1 .g1 img").src = "";
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