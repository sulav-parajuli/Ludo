var selector, timer, a;

function path(score, col) {
    if (score !== 0) {
        animationend(null);
        updater(null);
        // setTimeout(function() { checker(null); }, 500);
        clearTimeout(time);
        touch = 0;
        active = 0;
    }
    if (score === 1) { //green starts from here.
        document.querySelector(".path1 .g1").style.backgroundColor = col;
        dispose_countdown(null);
    }
    if (score === 2) {
        document.querySelector(".path2 .g1").style.backgroundColor = col;
        dispose_countdown(null);
    }
    if (score === 3) {
        document.querySelector(".path3 .g1").style.backgroundColor = col;
        dispose_countdown(null);
    }
    if (score === 4) {
        document.querySelector(".path4 .g1").style.backgroundColor = col;
        dispose_countdown(null);
    }
    if (score === 5) {
        document.querySelector(".path5 .g1").style.backgroundColor = col;
        dispose_countdown(null);
    }
    if (score === 6) {
        document.querySelector(".vpath .g6").style.backgroundColor = col;
        dispose_countdown(null);
    }
    if (score === 7) {
        document.querySelector(".vpath .g5").style.backgroundColor = col;
        dispose_countdown(null);
    }
    if (score === 8) {
        document.querySelector(".vpath .g4").style.backgroundColor = col;
        dispose_countdown(null);
    }
    if (score === 9) {
        document.querySelector(".vpath .g3").style.backgroundColor = col;
        dispose_countdown(null);
    }
    if (score === 10) {
        document.querySelector(".vpath .g2").style.backgroundColor = col;
        dispose_countdown(null);
    }
    if (score === 11) {
        document.querySelector(".vpath .g1").style.backgroundColor = col;
        dispose_countdown(null);
    }
    if (score === 12) {
        document.querySelector(".vpath1 .g1").style.backgroundColor = col;
        dispose_countdown(null);
    }
    if (score === 13) {
        document.querySelector(".vpath2 .g1").style.backgroundColor = col;
        dispose_countdown(null);
    }
    if (score === 14) { //red starts from here.
        document.querySelector(".vpath2 .g2").style.backgroundColor = col;
        dispose_countdown(null);
    }
    if (score === 15) {
        document.querySelector(".vpath2 .g3").style.backgroundColor = col;
        dispose_countdown(null);
    }
    if (score === 16) {
        document.querySelector(".vpath2 .g4").style.backgroundColor = col;
        dispose_countdown(null);
    }
    if (score === 17) {
        document.querySelector(".vpath2 .g5").style.backgroundColor = col;
        dispose_countdown(null);
    }
    if (score === 18) {
        document.querySelector(".vpath2 .g6").style.backgroundColor = col;
        dispose_countdown(null);
    }
    if (score === 19) {
        document.querySelector(".path6 .g1").style.backgroundColor = col;
        dispose_countdown(null);
    }
    if (score === 20) {
        document.querySelector(".path7 .g1").style.backgroundColor = col;
        dispose_countdown(null);
    }
    if (score === 21) {
        document.querySelector(".path8 .g1").style.backgroundColor = col;
        dispose_countdown(null);
    }
    if (score === 22) {
        document.querySelector(".path9 .g1").style.backgroundColor = col;
        dispose_countdown(null);
    }
    if (score === 23) {
        document.querySelector(".path10 .g1").style.backgroundColor = col;
        dispose_countdown(null);
    }
    if (score === 24) {
        document.querySelector(".path11 .g1").style.backgroundColor = col;
        dispose_countdown(null);
    }
    if (score === 25) {
        document.querySelector(".path11 .g2").style.backgroundColor = col;
        dispose_countdown(null);
    }
    if (score === 26) {
        document.querySelector(".path11 .g3").style.backgroundColor = col;
        dispose_countdown(null);
    }
    if (score === 27) { //Blue starts from here.
        document.querySelector(".path10 .g3").style.backgroundColor = col;
        dispose_countdown(null);
    }
    if (score === 28) {
        document.querySelector(".path9 .g3").style.backgroundColor = col;
        dispose_countdown(null);
    }
    if (score === 29) {
        document.querySelector(".path8 .g3").style.backgroundColor = col;
        dispose_countdown(null);
    }
    if (score === 30) {
        document.querySelector(".path7 .g3").style.backgroundColor = col;
        dispose_countdown(null);
    }
    if (score === 31) {
        document.querySelector(".path6 .g3").style.backgroundColor = col;
        dispose_countdown(null);
    }
    if (score === 32) {
        document.querySelector(".vpath5 .g1").style.backgroundColor = col;
        dispose_countdown(null);
    }
    if (score === 33) {
        document.querySelector(".vpath5 .g2").style.backgroundColor = col;
        dispose_countdown(null);
    }
    if (score === 34) {
        document.querySelector(".vpath5 .g3").style.backgroundColor = col;
        dispose_countdown(null);
    }
    if (score === 35) {
        document.querySelector(".vpath5 .g4").style.backgroundColor = col;
        dispose_countdown(null);
    }
    if (score === 36) {
        document.querySelector(".vpath5 .g5").style.backgroundColor = col;
        dispose_countdown(null);
    }
    if (score === 37) {
        document.querySelector(".vpath5 .g6").style.backgroundColor = col;
        dispose_countdown(null);
    }
    if (score === 38) {
        document.querySelector(".vpath4 .g6").style.backgroundColor = col;
        dispose_countdown(null);
    }
    if (score === 39) {
        document.querySelector(".vpath3 .g6").style.backgroundColor = col;
        dispose_countdown(null);
    }
    if (score === 40) { //yellow starts from here.
        document.querySelector(".vpath3 .g5").style.backgroundColor = col;
        dispose_countdown(null);
    }
    if (score === 41) {
        document.querySelector(".vpath3 .g4").style.backgroundColor = col;
        dispose_countdown(null);
    }
    if (score === 42) {
        document.querySelector(".vpath3 .g3").style.backgroundColor = col;
        dispose_countdown(null);
    }
    if (score === 43) {
        document.querySelector(".vpath3 .g2").style.backgroundColor = col;
        dispose_countdown(null);
    }
    if (score === 44) {
        document.querySelector(".vpath3 .g1").style.backgroundColor = col;
        dispose_countdown(null);
    }
    if (score === 45) {
        document.querySelector(".path5 .g3").style.backgroundColor = col;
        dispose_countdown(null);
    }
    if (score === 46) {
        document.querySelector(".path4 .g3").style.backgroundColor = col;
        dispose_countdown(null);
    }
    if (score === 47) {
        document.querySelector(".path3 .g3").style.backgroundColor = col;
        dispose_countdown(null);
    }
    if (score === 48) {
        document.querySelector(".path2 .g3").style.backgroundColor = col;
        dispose_countdown(null);
    }
    if (score === 49) {
        document.querySelector(".path1 .g3").style.backgroundColor = col;
        dispose_countdown(null);
    }
    if (score === 50) {
        document.querySelector(".path .g3").style.backgroundColor = col;
        dispose_countdown(null);
    }
    if (score === 51) {
        document.querySelector(".path .g2").style.backgroundColor = col;
        dispose_countdown(null);
    }
    if (score === 52) {
        document.querySelector(".path .g1").style.backgroundColor = col;
        dispose_countdown(null);
    }
    //For Home.
    if (score === 53) { //green home.
        document.querySelector(".path1 .g2").style.backgroundColor = "green";
        dispose_countdown(null);
    }
    if (score === 54) {
        document.querySelector(".path2 .g2").style.backgroundColor = "green";
        dispose_countdown(null);
    }
    if (score === 55) {
        document.querySelector(".path3 .g2").style.backgroundColor = "green";
        dispose_countdown(null);
    }
    if (score === 56) {
        document.querySelector(".path4 .g2").style.backgroundColor = "green";
        dispose_countdown(null);
    }
    if (score === 57) {
        document.querySelector(".path5 .g2").style.backgroundColor = "green";
        dispose_countdown(null);
    }
    if (score === 58) {
        document.querySelector(".home .hg").style.backgroundColor = "green";
        dispose_countdown(null);
    }
    if (score === 59) { //red home.
        document.querySelector(".vpath1 .g2").style.backgroundColor = "red";
        dispose_countdown(null);
    }
    if (score === 60) {
        document.querySelector(".vpath1 .g3").style.backgroundColor = "red";
        dispose_countdown(null);
    }
    if (score === 61) {
        document.querySelector(".vpath1 .g4").style.backgroundColor = "red";
        dispose_countdown(null);
    }
    if (score === 62) {
        document.querySelector(".vpath1 .g5").style.backgroundColor = "red";
        dispose_countdown(null);
    }
    if (score === 63) {
        document.querySelector(".vpath1 .g6").style.backgroundColor = "red";
        dispose_countdown(null);
    }
    if (score === 64) {
        document.querySelector(".home .hr").style.backgroundColor = "red";
        dispose_countdown(null);
    }
    if (score === 65) { //blue home.
        document.querySelector(".path10 .g2").style.backgroundColor = "blue";
        dispose_countdown(null);
    }
    if (score === 66) {
        document.querySelector(".path9 .g2").style.backgroundColor = "blue";
        dispose_countdown(null);
    }
    if (score === 67) {
        document.querySelector(".path8 .g2").style.backgroundColor = "blue";
        dispose_countdown(null);
    }
    if (score === 68) {
        document.querySelector(".path7 .g2").style.backgroundColor = "blue";
        dispose_countdown(null);
    }
    if (score === 69) {
        document.querySelector(".path6 .g2").style.backgroundColor = "blue";
        dispose_countdown(null);
    }
    if (score === 70) {
        document.querySelector(".home .hb").style.backgroundColor = "blue";
        dispose_countdown(null);
    }
    if (score === 71) { //yellow home.
        document.querySelector(".vpath4 .g5").style.backgroundColor = "yellow";
        dispose_countdown(null);
    }
    if (score === 72) {
        document.querySelector(".vpath4 .g4").style.backgroundColor = "yellow";
        dispose_countdown(null);
    }
    if (score === 73) {
        document.querySelector(".vpath4 .g3").style.backgroundColor = "yellow";
        dispose_countdown(null);
    }
    if (score === 74) {
        document.querySelector(".vpath4 .g2").style.backgroundColor = "yellow";
        dispose_countdown(null);
    }
    if (score === 75) {
        document.querySelector(".vpath4 .g1").style.backgroundColor = "yellow";
        dispose_countdown(null);
    }
    if (score === 76) {
        document.querySelector(".home .hy").style.backgroundColor = "yellow";
        dispose_countdown(null);
    }
}

function disappear() {
    document.querySelector(".path1 .g1").style.backgroundColor = "";
    document.querySelector(".path2 .g1").style.backgroundColor = "";
    document.querySelector(".path3 .g1").style.backgroundColor = "";
    document.querySelector(".path4 .g1").style.backgroundColor = "";
    document.querySelector(".path5 .g1").style.backgroundColor = "";
    document.querySelector(".vpath .g6").style.backgroundColor = "";
    document.querySelector(".vpath .g5").style.backgroundColor = "";
    document.querySelector(".vpath .g4").style.backgroundColor = "";
    document.querySelector(".vpath .g3").style.backgroundColor = "";
    document.querySelector(".vpath .g2").style.backgroundColor = "";
    document.querySelector(".vpath .g1").style.backgroundColor = "";
    document.querySelector(".vpath1 .g1").style.backgroundColor = "";
    document.querySelector(".vpath2 .g1").style.backgroundColor = "";
    document.querySelector(".vpath2 .g2").style.backgroundColor = "";
    document.querySelector(".vpath2 .g3").style.backgroundColor = "";
    document.querySelector(".vpath2 .g4").style.backgroundColor = "";
    document.querySelector(".vpath2 .g5").style.backgroundColor = "";
    document.querySelector(".vpath2 .g6").style.backgroundColor = "";
    document.querySelector(".path6 .g1").style.backgroundColor = "";
    document.querySelector(".path7 .g1").style.backgroundColor = "";
    document.querySelector(".path8 .g1").style.backgroundColor = "";
    document.querySelector(".path9 .g1").style.backgroundColor = "";
    document.querySelector(".path10 .g1").style.backgroundColor = "";
    document.querySelector(".path11 .g1").style.backgroundColor = "";
    document.querySelector(".path11 .g2").style.backgroundColor = "";
    document.querySelector(".path11 .g3").style.backgroundColor = "";
    document.querySelector(".path10 .g3").style.backgroundColor = "";
    document.querySelector(".path9 .g3").style.backgroundColor = "";
    document.querySelector(".path8 .g3").style.backgroundColor = "";
    document.querySelector(".path7 .g3").style.backgroundColor = "";
    document.querySelector(".path6 .g3").style.backgroundColor = "";
    document.querySelector(".vpath5 .g1").style.backgroundColor = "";
    document.querySelector(".vpath5 .g2").style.backgroundColor = "";
    document.querySelector(".vpath5 .g3").style.backgroundColor = "";
    document.querySelector(".vpath5 .g4").style.backgroundColor = "";
    document.querySelector(".vpath5 .g5").style.backgroundColor = "";
    document.querySelector(".vpath5 .g6").style.backgroundColor = "";
    document.querySelector(".vpath4 .g6").style.backgroundColor = "";
    document.querySelector(".vpath3 .g6").style.backgroundColor = "";
    document.querySelector(".vpath3 .g5").style.backgroundColor = "";
    document.querySelector(".vpath3 .g4").style.backgroundColor = "";
    document.querySelector(".vpath3 .g3").style.backgroundColor = "";
    document.querySelector(".vpath3 .g2").style.backgroundColor = "";
    document.querySelector(".vpath3 .g1").style.backgroundColor = "";
    document.querySelector(".path5 .g3").style.backgroundColor = "";
    document.querySelector(".path4 .g3").style.backgroundColor = "";
    document.querySelector(".path3 .g3").style.backgroundColor = "";
    document.querySelector(".path2 .g3").style.backgroundColor = "";
    document.querySelector(".path1 .g3").style.backgroundColor = "";
    document.querySelector(".path .g3").style.backgroundColor = "";
    document.querySelector(".path .g2").style.backgroundColor = "";
    document.querySelector(".path .g1").style.backgroundColor = "";
    document.querySelector(".path1 .g2").style.backgroundColor = "";
    document.querySelector(".path2 .g2").style.backgroundColor = "";
    document.querySelector(".path3 .g2").style.backgroundColor = "";
    document.querySelector(".path4 .g2").style.backgroundColor = "";
    document.querySelector(".path5 .g2").style.backgroundColor = "";
    document.querySelector(".home .hg").style.backgroundColor = "";
    document.querySelector(".vpath1 .g2").style.backgroundColor = "";
    document.querySelector(".vpath1 .g3").style.backgroundColor = "";
    document.querySelector(".vpath1 .g4").style.backgroundColor = "";
    document.querySelector(".vpath1 .g5").style.backgroundColor = "";
    document.querySelector(".vpath1 .g6").style.backgroundColor = "";
    document.querySelector(".home .hr").style.backgroundColor = "";
    document.querySelector(".path10 .g2").style.backgroundColor = "";
    document.querySelector(".path9 .g2").style.backgroundColor = "";
    document.querySelector(".path8 .g2").style.backgroundColor = "";
    document.querySelector(".path7 .g2").style.backgroundColor = "";
    document.querySelector(".path6 .g2").style.backgroundColor = "";
    document.querySelector(".home .hb").style.backgroundColor = "";
    document.querySelector(".vpath4 .g5").style.backgroundColor = "";
    document.querySelector(".vpath4 .g4").style.backgroundColor = "";
    document.querySelector(".vpath4 .g3").style.backgroundColor = "";
    document.querySelector(".vpath4 .g2").style.backgroundColor = "";
    document.querySelector(".vpath4 .g1").style.backgroundColor = "";
    document.querySelector(".home .hy").style.backgroundColor = "";
    checker(null);
}

function select(score) {
    if (score === 1) {
        document.querySelector(".path1 .g1").style.backgroundColor = ""; //green starts from here.
        return (document.querySelector(".path1 .g1 img"));
    }
    if (score === 2) {
        document.querySelector(".path2 .g1").style.backgroundColor = "";
        return (document.querySelector(".path2 .g1 img"));
    }
    if (score === 3) {
        document.querySelector(".path3 .g1").style.backgroundColor = "";
        return (document.querySelector(".path3 .g1 img"));
    }
    if (score === 4) {
        document.querySelector(".path4 .g1").style.backgroundColor = "";
        return (document.querySelector(".path4 .g1 img"));
    }
    if (score === 5) {
        document.querySelector(".path5 .g1").style.backgroundColor = "";
        return (document.querySelector(".path5 .g1 img"));
    }
    if (score === 6) {
        document.querySelector(".vpath .g6").style.backgroundColor = "";
        return (document.querySelector(".vpath .g6 img"));
    }
    if (score === 7) {
        document.querySelector(".vpath .g5").style.backgroundColor = "";
        return (document.querySelector(".vpath .g5 img"));
    }
    if (score === 8) {
        document.querySelector(".vpath .g4").style.backgroundColor = "";
        return (document.querySelector(".vpath .g4 img"));
    }
    if (score === 9) {
        document.querySelector(".vpath .g3").style.backgroundColor = "";
        return (document.querySelector(".vpath .g3 img"));
    }
    if (score === 10) {
        document.querySelector(".vpath .g2").style.backgroundColor = "";
        return (document.querySelector(".vpath .g2 img"));
    }
    if (score === 11) {
        document.querySelector(".vpath .g1").style.backgroundColor = "";
        return (document.querySelector(".vpath .g1 img"));
    }
    if (score === 12) {
        document.querySelector(".vpath1 .g1").style.backgroundColor = "";
        return (document.querySelector(".vpath1 .g1 img"));
    }
    if (score === 13) {
        document.querySelector(".vpath2 .g1").style.backgroundColor = "";
        return (document.querySelector(".vpath2 .g1 img"));
    }
    if (score === 14) {
        document.querySelector(".vpath2 .g2").style.backgroundColor = "";
        return (document.querySelector(".vpath2 .g2 img")); //red starts from here.
    }
    if (score === 15) {
        document.querySelector(".vpath2 .g3").style.backgroundColor = "";
        return (document.querySelector(".vpath2 .g3 img"));
    }
    if (score === 16) {
        document.querySelector(".vpath2 .g4").style.backgroundColor = "";
        return (document.querySelector(".vpath2 .g4 img"));
    }
    if (score === 17) {
        document.querySelector(".vpath2 .g5").style.backgroundColor = "";
        return (document.querySelector(".vpath2 .g5 img"));
    }
    if (score === 18) {
        document.querySelector(".vpath2 .g6").style.backgroundColor = "";
        return (document.querySelector(".vpath2 .g6 img"));
    }
    if (score === 19) {
        document.querySelector(".path6 .g1").style.backgroundColor = "";
        return (document.querySelector(".path6 .g1 img"));
    }
    if (score === 20) {
        document.querySelector(".path7 .g1").style.backgroundColor = "";
        return (document.querySelector(".path7 .g1 img"));
    }
    if (score === 21) {
        document.querySelector(".path8 .g1").style.backgroundColor = "";
        return (document.querySelector(".path8 .g1 img"));
    }
    if (score === 22) {
        document.querySelector(".path9 .g1").style.backgroundColor = "";
        return (document.querySelector(".path9 .g1 img"));
    }
    if (score === 23) {
        document.querySelector(".path10 .g1").style.backgroundColor = "";
        return (document.querySelector(".path10 .g1 img"));
    }
    if (score === 24) {
        document.querySelector(".path11 .g1").style.backgroundColor = "";
        return (document.querySelector(".path11 .g1 img"));
    }
    if (score === 25) {
        document.querySelector(".path11 .g2").style.backgroundColor = "";
        return (document.querySelector(".path11 .g2 img"));
    }
    if (score === 26) {
        document.querySelector(".path11 .g3").style.backgroundColor = "";
        return (document.querySelector(".path11 .g3 img"));
    }
    if (score === 27) {
        document.querySelector(".path10 .g3").style.backgroundColor = "";
        return (document.querySelector(".path10 .g3 img")); //Blue starts from here.
    }
    if (score === 28) {
        document.querySelector(".path9 .g3").style.backgroundColor = "";
        return (document.querySelector(".path9 .g3 img"));
    }
    if (score === 29) {
        document.querySelector(".path8 .g3").style.backgroundColor = "";
        return (document.querySelector(".path8 .g3 img"));
    }
    if (score === 30) {
        document.querySelector(".path7 .g3").style.backgroundColor = "";
        return (document.querySelector(".path7 .g3 img"));
    }
    if (score === 31) {
        document.querySelector(".path6 .g3").style.backgroundColor = "";
        return (document.querySelector(".path6 .g3 img"));
    }
    if (score === 32) {
        document.querySelector(".vpath5 .g1").style.backgroundColor = "";
        return (document.querySelector(".vpath5 .g1 img"));
    }
    if (score === 33) {
        document.querySelector(".vpath5 .g2").style.backgroundColor = "";
        return (document.querySelector(".vpath5 .g2 img"));
    }
    if (score === 34) {
        document.querySelector(".vpath5 .g3").style.backgroundColor = "";
        return (document.querySelector(".vpath5 .g3 img"));
    }
    if (score === 35) {
        document.querySelector(".vpath5 .g4").style.backgroundColor = "";
        return (document.querySelector(".vpath5 .g4 img"));
    }
    if (score === 36) {
        document.querySelector(".vpath5 .g5").style.backgroundColor = "";
        return (document.querySelector(".vpath5 .g5 img"));
    }
    if (score === 37) {
        document.querySelector(".vpath5 .g6").style.backgroundColor = "";
        return (document.querySelector(".vpath5 .g6 img"));
    }
    if (score === 38) {
        document.querySelector(".vpath4 .g6").style.backgroundColor = "";
        return (document.querySelector(".vpath4 .g6 img"));
    }
    if (score === 39) {
        document.querySelector(".vpath3 .g6").style.backgroundColor = "";
        return (document.querySelector(".vpath3 .g6 img"));
    }
    if (score === 40) {
        document.querySelector(".vpath3 .g5").style.backgroundColor = "";
        return (document.querySelector(".vpath3 .g5 img")); //yellow starts from here.
    }
    if (score === 41) {
        document.querySelector(".vpath3 .g4").style.backgroundColor = "";
        return (document.querySelector(".vpath3 .g4 img"));
    }
    if (score === 42) {
        document.querySelector(".vpath3 .g3").style.backgroundColor = "";
        return (document.querySelector(".vpath3 .g3 img"));
    }
    if (score === 43) {
        document.querySelector(".vpath3 .g2").style.backgroundColor = "";
        return (document.querySelector(".vpath3 .g2 img"));
    }
    if (score === 44) {
        document.querySelector(".vpath3 .g1").style.backgroundColor = "";
        return (document.querySelector(".vpath3 .g1 img"));
    }
    if (score === 45) {
        document.querySelector(".path5 .g3").style.backgroundColor = "";
        return (document.querySelector(".path5 .g3 img"));
    }
    if (score === 46) {
        document.querySelector(".path4 .g3").style.backgroundColor = "";
        return (document.querySelector(".path4 .g3 img"));
    }
    if (score === 47) {
        document.querySelector(".path3 .g3").style.backgroundColor = "";
        return (document.querySelector(".path3 .g3 img"));
    }
    if (score === 48) {
        document.querySelector(".path2 .g3").style.backgroundColor = "";
        return (document.querySelector(".path2 .g3 img"));
    }
    if (score === 49) {
        document.querySelector(".path1 .g3").style.backgroundColor = "";
        return (document.querySelector(".path1 .g3 img"));
    }
    if (score === 50) {
        document.querySelector(".path .g3").style.backgroundColor = "";
        return (document.querySelector(".path .g3 img"));
    }
    if (score === 51) {
        document.querySelector(".path .g2").style.backgroundColor = "";
        return (document.querySelector(".path .g2 img"));
    }
    if (score === 52) {
        document.querySelector(".path .g1").style.backgroundColor = "";
        return (document.querySelector(".path .g1 img"));
    }
    //For Home.
    if (score === 53) {
        document.querySelector(".path1 .g2").style.backgroundColor = "";
        return (document.querySelector(".path1 .g2 img")); //green home.
    }
    if (score === 54) {
        document.querySelector(".path2 .g2").style.backgroundColor = "";
        return (document.querySelector(".path2 .g2 img"));
    }
    if (score === 55) {
        document.querySelector(".path3 .g2").style.backgroundColor = "";
        return (document.querySelector(".path3 .g2 img"));
    }
    if (score === 56) {
        document.querySelector(".path4 .g2").style.backgroundColor = "";
        return (document.querySelector(".path4 .g2 img"));
    }
    if (score === 57) {
        document.querySelector(".path5 .g2").style.backgroundColor = "";
        return (document.querySelector(".path5 .g2 img"));
    }
    if (score === 58) {
        document.querySelector(".home .hg").style.backgroundColor = "";
        return (document.querySelector(".home .hg"));
    }
    if (score === 59) {
        document.querySelector(".vpath1 .g2").style.backgroundColor = ""; //red home.
        return (document.querySelector(".vpath1 .g2 img"));
    }
    if (score === 60) {
        document.querySelector(".vpath1 .g3").style.backgroundColor = "";
        return (document.querySelector(".vpath1 .g3 img"));
    }
    if (score === 61) {
        document.querySelector(".vpath1 .g4").style.backgroundColor = "";
        return (document.querySelector(".vpath1 .g4 img"));
    }
    if (score === 62) {
        document.querySelector(".vpath1 .g5").style.backgroundColor = "";
        return (document.querySelector(".vpath1 .g5 img"));
    }
    if (score === 63) {
        document.querySelector(".vpath1 .g6").style.backgroundColor = "";
        return (document.querySelector(".vpath1 .g6 img"));
    }
    if (score === 64) {
        document.querySelector(".home .hr").style.backgroundColor = "";
        return (document.querySelector(".home .hr"));
    }
    if (score === 65) {
        document.querySelector(".path10 .g2").style.backgroundColor = ""; //blue home.
        return (document.querySelector(".path10 .g2 img"));
    }
    if (score === 66) {
        document.querySelector(".path9 .g2").style.backgroundColor = "";
        return (document.querySelector(".path9 .g2 img"));
    }
    if (score === 67) {
        document.querySelector(".path8 .g2").style.backgroundColor = "";
        return (document.querySelector(".path8 .g2 img"));
    }
    if (score === 68) {
        document.querySelector(".path7 .g2").style.backgroundColor = "";
        return (document.querySelector(".path7 .g2 img"));
    }
    if (score === 69) {
        document.querySelector(".path6 .g2").style.backgroundColor = "";
        return (document.querySelector(".path6 .g2 img"));
    }
    if (score === 70) {
        document.querySelector(".home .hb").style.backgroundColor = "";
        return (document.querySelector(".home .hb"));
    }
    if (score === 71) {
        document.querySelector(".vpath4 .g5").style.backgroundColor = ""; //yellow home.
        return (document.querySelector(".vpath4 .g5 img"));
    }
    if (score === 72) {
        document.querySelector(".vpath4 .g4").style.backgroundColor = "";
        return (document.querySelector(".vpath4 .g4 img"));
    }
    if (score === 73) {
        document.querySelector(".vpath4 .g3").style.backgroundColor = "";
        return (document.querySelector(".vpath4 .g3 img"));
    }
    if (score === 74) {
        document.querySelector(".vpath4 .g2").style.backgroundColor = "";
        return (document.querySelector(".vpath4 .g2 img"));
    }
    if (score === 75) {
        document.querySelector(".vpath4 .g1").style.backgroundColor = "";
        return (document.querySelector(".vpath4 .g1 img"));
    }
    if (score === 76) {
        document.querySelector(".home .hy").style.backgroundColor = "";
        return (document.querySelector(".home .hy"));
    }
}

function updater() {
    //updates main circular board.
    if (gb[0] === 1) {
        document.querySelector(".greena .first").display = "none";
        document.querySelector(".greena .first").style.backgroundColor = "";
    } else if (gb[0] === 0) {
        gs[0] = 0;
        document.querySelector(".greena .first").display = "relative";
        document.querySelector(".greena .first").style.backgroundColor = "green";
        document.querySelector(".greena .first img").style.visibility = "hidden";
        document.querySelector(".greena .first img").src = "";
        dispose_countdown(null);
    }
    if (gb[1] === 1) {
        document.querySelector(".greena .Second").display = "none";
        document.querySelector(".greena .Second").style.backgroundColor = "";
    } else if (gb[1] === 0) {
        gs[1] = 0;
        document.querySelector(".greena .Second").display = "relative";
        document.querySelector(".greena .Second").style.backgroundColor = "green";
        document.querySelector(".greena .Second img").style.visibility = "hidden";
        document.querySelector(".greena .Second img").src = "";
        dispose_countdown(null);
    }
    if (gb[2] === 1) {
        document.querySelector(".greena .Third").display = "none";
        document.querySelector(".greena .Third").style.backgroundColor = "";
    } else if (gb[2] === 0) {
        gs[2] = 0;
        document.querySelector(".greena .Third").display = "relative";
        document.querySelector(".greena .Third").style.backgroundColor = "green";
        document.querySelector(".greena .Third img").style.visibility = "hidden";
        document.querySelector(".greena .Third img").src = "";
        dispose_countdown(null);
    }
    if (gb[3] === 1) {
        document.querySelector(".greena .Fourth").display = "none";
        document.querySelector(".greena .Fourth").style.backgroundColor = "";
    } else if (gb[3] === 0) {
        gs[3] = 0;
        document.querySelector(".greena .Fourth").display = "relative";
        document.querySelector(".greena .Fourth").style.backgroundColor = "green";
        document.querySelector(".greena .Fourth img").style.visibility = "hidden";
        document.querySelector(".greena .Fourth img").src = "";
        dispose_countdown(null);
    }

    if (rb[0] === 1) {
        document.querySelector(".reda .first").display = "none";
        document.querySelector(".reda .first").style.backgroundColor = "";
    } else if (rb[0] === 0) {
        rs[0] = 0;
        document.querySelector(".reda .first").display = "relative";
        document.querySelector(".reda .first").style.backgroundColor = "red";
        document.querySelector(".reda .first img").style.visibility = "hidden";
        document.querySelector(".reda .first img").src = "";
        dispose_countdown(null);
    }
    if (rb[1] === 1) {
        document.querySelector(".reda .Second").display = "none";
        document.querySelector(".reda .Second").style.backgroundColor = "";
    } else if (rb[1] === 0) {
        rs[1] = 0;
        document.querySelector(".reda .Second").display = "relative";
        document.querySelector(".reda .Second").style.backgroundColor = "red";
        document.querySelector(".reda .Second img").style.visibility = "hidden";
        document.querySelector(".reda .Second img").src = "";
        dispose_countdown(null);
    }
    if (rb[2] === 1) {
        document.querySelector(".reda .Third").display = "none";
        document.querySelector(".reda .Third").style.backgroundColor = "";
    } else if (rb[2] === 0) {
        rs[2] = 0;
        document.querySelector(".reda .Third").display = "relative";
        document.querySelector(".reda .Third").style.backgroundColor = "red";
        document.querySelector(".reda .Third img").style.visibility = "hidden";
        document.querySelector(".reda .Third img").src = "";
        dispose_countdown(null);
    }
    if (rb[3] === 1) {
        document.querySelector(".reda .Fourth").display = "none";
        document.querySelector(".reda .Fourth").style.backgroundColor = "";
    } else if (rb[3] === 0) {
        rs[3] = 0;
        document.querySelector(".reda .Fourth").display = "relative";
        document.querySelector(".reda .Fourth").style.backgroundColor = "red";
        document.querySelector(".reda .Fourth img").style.visibility = "hidden";
        document.querySelector(".reda .Fourth img").src = "";
        dispose_countdown(null);
    }

    if (yb[0] === 1) {
        document.querySelector(".yellowa .first").display = "none";
        document.querySelector(".yellowa .first").style.backgroundColor = "";
    } else if (yb[0] === 0) {
        ys[0] = 0;
        document.querySelector(".yellowa .first").display = "relative";
        document.querySelector(".yellowa .first").style.backgroundColor = "yellow";
        document.querySelector(".yellowa .first img").style.visibility = "hidden";
        document.querySelector(".yellowa .first img").src = "";
        dispose_countdown(null);
    }
    if (yb[1] === 1) {
        document.querySelector(".yellowa .Second").display = "none";
        document.querySelector(".yellowa .Second").style.backgroundColor = "";
    } else if (yb[1] === 0) {
        ys[1] = 0;
        document.querySelector(".yellowa .Second").display = "relative";
        document.querySelector(".yellowa .Second").style.backgroundColor = "yellow";
        document.querySelector(".yellowa .Second img").style.visibility = "hidden";
        document.querySelector(".yellowa .Second img").src = "";
        dispose_countdown(null);
    }
    if (yb[2] === 1) {
        document.querySelector(".yellowa .Third").display = "none";
        document.querySelector(".yellowa .Third").style.backgroundColor = "";
    } else if (yb[2] === 0) {
        ys[2] = 0;
        document.querySelector(".yellowa .Third").display = "relative";
        document.querySelector(".yellowa .Third").style.backgroundColor = "yellow";
        document.querySelector(".yellowa .Third img").style.visibility = "hidden";
        document.querySelector(".yellowa .Third img").src = "";
        dispose_countdown(null);
    }
    if (yb[3] === 1) {
        document.querySelector(".yellowa .Fourth").display = "none";
        document.querySelector(".yellowa .Fourth").style.backgroundColor = "";
    } else if (yb[3] === 0) {
        ys[3] = 0;
        document.querySelector(".yellowa .Fourth").display = "relative";
        document.querySelector(".yellowa .Fourth").style.backgroundColor = "yellow";
        document.querySelector(".yellowa .Fourth img").style.visibility = "hidden";
        document.querySelector(".yellowa .Fourth img").src = "";
        dispose_countdown(null);
    }

    if (bb[0] === 1) {
        document.querySelector(".bluea .first").display = "none";
        document.querySelector(".bluea .first").style.backgroundColor = "";
    } else if (bb[0] === 0) {
        bs[0] = 0;
        document.querySelector(".bluea .first").display = "relative";
        document.querySelector(".bluea .first").style.backgroundColor = "blue";
        document.querySelector(".bluea .first img").style.visibility = "hidden";
        document.querySelector(".bluea .first img").src = "";
        dispose_countdown(null);
    }
    if (bb[1] === 1) {
        document.querySelector(".bluea .Second").display = "none";
        document.querySelector(".bluea .Second").style.backgroundColor = "";
    } else if (bb[1] === 0) {
        bs[1] = 0;
        document.querySelector(".bluea .Second").display = "relative";
        document.querySelector(".bluea .Second").style.backgroundColor = "blue";
        document.querySelector(".bluea .Second img").style.visibility = "hidden";
        document.querySelector(".bluea .Second img").src = "";
        dispose_countdown(null);
    }
    if (bb[2] === 1) {
        document.querySelector(".bluea .Third").display = "none";
        document.querySelector(".bluea .Third").style.backgroundColor = "";
    } else if (bb[2] === 0) {
        bs[2] = 0;
        document.querySelector(".bluea .Third").display = "relative";
        document.querySelector(".bluea .Third").style.backgroundColor = "blue";
        document.querySelector(".bluea .Third img").style.visibility = "hidden";
        document.querySelector(".bluea .Third img").src = "";
        dispose_countdown(null);
    }
    if (bb[3] === 1) {
        document.querySelector(".bluea .Fourth").display = "none";
        document.querySelector(".bluea .Fourth").style.backgroundColor = "";
    } else if (bb[3] === 0) {
        bs[3] = 0;
        document.querySelector(".bluea .Fourth").display = "relative";
        document.querySelector(".bluea .Fourth").style.backgroundColor = "blue";
        document.querySelector(".bluea .Fourth img").style.visibility = "hidden";
        document.querySelector(".bluea .Fourth img").src = "";
        dispose_countdown(null);
    }
}

function kill(value, col) {
    if (value !== 1 || value !== 9 || value !== 14 || value !== 22 || value !== 27 || value !== 35 || value !== 40 || value !== 48) {
        for (a = 0; a < 4; a++) {
            if (col === "green") {
                if (rs[a] === value) {
                    rs[a] = 0;
                    rb[a] = 0;
                    updater(null);
                } else if (bs[a] === value) {
                    bs[a] = 0;
                    bb[a] = 0;
                    updater(null);
                } else if (ys[a] === value) {
                    ys[a] = 0;
                    yb[a] = 0;
                    updater(null);
                }
            } else if (col === "red") {
                if (gs[a] === value) {
                    gs[a] = 0;
                    gb[a] = 0;
                    updater(null);
                } else if (bs[a] === value) {
                    bs[a] = 0;
                    bb[a] = 0;
                    updater(null);
                } else if (ys[a] === value) {
                    ys[a] = 0;
                    yb[a] = 0;
                    updater(null);
                }
            } else if (col === "blue") {
                if (rs[a] === value) {
                    rs[a] = 0;
                    rb[a] = 0;
                    updater(null);
                } else if (gs[a] === value) {
                    gs[a] = 0;
                    gb[a] = 0;
                    updater(null);
                } else if (ys[a] === value) {
                    ys[a] = 0;
                    yb[a] = 0;
                    updater(null);
                }
            } else if (col === "yellow") {
                if (rs[a] === value) {
                    rs[a] = 0;
                    rb[a] = 0;
                    updater(null);
                } else if (bs[a] === value) {
                    bs[a] = 0;
                    bb[a] = 0;
                    updater(null);
                } else if (gs[a] === value) {
                    gs[a] = 0;
                    gb[a] = 0;
                    updater(null);
                }
            }
        }
    }
}

function checker() {
    //checks and updates the path.
    var i;
    for (i = 0; i < 4; i++) {
        //if value is 1. 
        if (gs[i] === 1) {
            path(gs[i], "green");
        }
        if (rs[i] === 1) {
            path(rs[i], "red");
        }
        if (ys[i] === 1) {
            path(ys[i], "yellow");
        }
        if (bs[i] === 1) {
            path(bs[i], "blue");
        }

        //if value is 2. 
        if (gs[i] === 2) {
            path(gs[i], "green");
        }
        if (rs[i] === 2) {
            path(rs[i], "red");
        }
        if (ys[i] === 2) {
            path(ys[i], "yellow");
        }
        if (bs[i] === 2) {
            path(bs[i], "blue");
        }

        //if value is 3. 
        if (gs[i] === 3) {
            path(gs[i], "green");
        }
        if (rs[i] === 3) {
            path(rs[i], "red");
        }
        if (ys[i] === 3) {
            path(ys[i], "yellow");
        }
        if (bs[i] === 3) {
            path(bs[i], "blue");
        }

        //if value is 4. 
        if (gs[i] === 4) {
            path(gs[i], "green");
        }
        if (rs[i] === 4) {
            path(rs[i], "red");
        }
        if (ys[i] === 4) {
            path(ys[i], "yellow");
        }
        if (bs[i] === 4) {
            path(bs[i], "blue");
        }

        //if value is 5. 
        if (gs[i] === 5) {
            path(gs[i], "green");
        }
        if (rs[i] === 5) {
            path(rs[i], "red");
        }
        if (ys[i] === 5) {
            path(ys[i], "yellow");
        }
        if (bs[i] === 5) {
            path(bs[i], "blue");
        }

        //if value is 6. 
        if (gs[i] === 6) {
            path(gs[i], "green");
        }
        if (rs[i] === 6) {
            path(rs[i], "red");
        }
        if (ys[i] === 6) {
            path(ys[i], "yellow");
        }
        if (bs[i] === 6) {
            path(bs[i], "blue");
        }

        //if value is 7. 
        if (gs[i] === 7) {
            path(gs[i], "green");
        }
        if (rs[i] === 7) {
            path(rs[i], "red");
        }
        if (ys[i] === 7) {
            path(ys[i], "yellow");
        }
        if (bs[i] === 7) {
            path(bs[i], "blue");
        }

        //if value is 8. 
        if (gs[i] === 8) {
            path(gs[i], "green");
        }
        if (rs[i] === 8) {
            path(rs[i], "red");
        }
        if (ys[i] === 8) {
            path(ys[i], "yellow");
        }
        if (bs[i] === 8) {
            path(bs[i], "blue");
        }

        //if value is 9. 
        if (gs[i] === 9) {
            path(gs[i], "green");
        }
        if (rs[i] === 9) {
            path(rs[i], "red");
        }
        if (ys[i] === 9) {
            path(ys[i], "yellow");
        }
        if (bs[i] === 9) {
            path(bs[i], "blue");
        }

        //if value is 10. 
        if (gs[i] === 10) {
            path(gs[i], "green");
        }
        if (rs[i] === 10) {
            path(rs[i], "red");
        }
        if (ys[i] === 10) {
            path(ys[i], "yellow");
        }
        if (bs[i] === 10) {
            path(bs[i], "blue");
        }

        //if value is 11. 
        if (gs[i] === 11) {
            path(gs[i], "green");
        }
        if (rs[i] === 11) {
            path(rs[i], "red");
        }
        if (ys[i] === 11) {
            path(ys[i], "yellow");
        }
        if (bs[i] === 11) {
            path(bs[i], "blue");
        }

        //if value is 12. 
        if (gs[i] === 12) {
            path(gs[i], "green");
        }
        if (rs[i] === 12) {
            path(rs[i], "red");
        }
        if (ys[i] === 12) {
            i
            path(ys[i], "yellow");
        }
        if (bs[i] === 12) {
            path(bs[i], "blue");
        }

        //if value is 13. 
        if (gs[i] === 13) {
            path(gs[i], "green");
        }
        if (rs[i] === 13) {
            path(rs[i], "red");
        }
        if (ys[i] === 13) {
            i
            path(ys[i], "yellow");
        }
        if (bs[i] === 13) {
            path(bs[i], "blue");
        }

        //if value is 14. 
        if (gs[i] === 14) {
            path(gs[i], "green");
        }
        if (rs[i] === 14) {
            path(rs[i], "red");
        }
        if (ys[i] === 14) {
            path(ys[i], "yellow");
        }
        if (bs[i] === 14) {
            path(bs[i], "blue");
        }

        //if value is 15. 
        if (gs[i] === 15) {
            path(gs[i], "green");
        }
        if (rs[i] === 15) {
            path(rs[i], "red");
        }
        if (ys[i] === 15) {
            i
            path(ys[i], "yellow");
        }
        if (bs[i] === 15) {
            path(bs[i], "blue");
        }

        //if value is 16. 
        if (gs[i] === 16) {
            path(gs[i], "green");
        }
        if (rs[i] === 16) {
            path(rs[i], "red");
        }
        if (ys[i] === 16) {
            i
            path(ys[i], "yellow");
        }
        if (bs[i] === 16) {
            path(bs[i], "blue");
        }

        //if value is 17. 
        if (gs[i] === 17) {
            path(gs[i], "green");
        }
        if (rs[i] === 17) {
            path(rs[i], "red");
        }
        if (ys[i] === 17) {
            i
            path(ys[i], "yellow");
        }
        if (bs[i] === 17) {
            path(bs[i], "blue");
        }

        //if value is 18. 
        if (gs[i] === 18) {
            path(gs[i], "green");
        }
        if (rs[i] === 18) {
            path(rs[i], "red");
        }
        if (ys[i] === 18) {
            i
            path(ys[i], "yellow");
        }
        if (bs[i] === 18) {
            path(bs[i], "blue");
        }

        //if value is 19. 
        if (gs[i] === 19) {
            path(gs[i], "green");
        }
        if (rs[i] === 19) {
            path(rs[i], "red");
        }
        if (ys[i] === 19) {
            path(ys[i], "yellow");
        }
        if (bs[i] === 19) {
            path(bs[i], "blue");
        }

        //if value is 20. 
        if (gs[i] === 20) {
            path(gs[i], "green");
        }
        if (rs[i] === 20) {
            path(rs[i], "red");
        }
        if (ys[i] === 20) {
            path(ys[i], "yellow");
        }
        if (bs[i] === 20) {
            path(bs[i], "blue");
        }

        //if value is 21. 
        if (gs[i] === 21) {
            path(gs[i], "green");
        }
        if (rs[i] === 21) {
            path(rs[i], "red");
        }
        if (ys[i] === 21) {
            path(ys[i], "yellow");
        }
        if (bs[i] === 21) {
            path(bs[i], "blue");
        }

        //if value is 22. 
        if (gs[i] === 22) {
            path(gs[i], "green");
        }
        if (rs[i] === 22) {
            path(rs[i], "red");
        }
        if (ys[i] === 22) {
            path(ys[i], "yellow");
        }
        if (bs[i] === 22) {
            path(bs[i], "blue");
        }

        //if value is 23. 
        if (gs[i] === 23) {
            path(gs[i], "green");
        }
        if (rs[i] === 23) {
            path(rs[i], "red");
        }
        if (ys[i] === 23) {
            path(ys[i], "yellow");
        }
        if (bs[i] === 23) {
            path(bs[i], "blue");
        }

        //if value is 24. 
        if (gs[i] === 24) {
            path(gs[i], "green");
        }
        if (rs[i] === 24) {
            path(rs[i], "red");
        }
        if (ys[i] === 24) {
            i
            path(ys[i], "yellow");
        }
        if (bs[i] === 24) {
            path(bs[i], "blue");
        }

        //if value is 25. 
        if (gs[i] === 25) {
            path(gs[i], "green");
        }
        if (rs[i] === 25) {
            path(rs[i], "red");
        }
        if (ys[i] === 25) {
            i
            path(ys[i], "yellow");
        }
        if (bs[i] === 25) {
            path(bs[i], "blue");
        }

        //if value is 26. 
        if (gs[i] === 26) {
            path(gs[i], "green");
        }
        if (rs[i] === 26) {
            path(rs[i], "red");
        }
        if (ys[i] === 26) {
            i
            path(ys[i], "yellow");
        }
        if (bs[i] === 26) {
            path(bs[i], "blue");
        }

        //if value is 27. 
        if (gs[i] === 27) {
            path(gs[i], "green");
        }
        if (rs[i] === 27) {
            path(rs[i], "red");
        }
        if (ys[i] === 27) {
            path(ys[i], "yellow");
        }
        if (bs[i] === 27) {
            path(bs[i], "blue");
        }

        //if value is 28. 
        if (gs[i] === 28) {
            path(gs[i], "green");
        }
        if (rs[i] === 28) {
            path(rs[i], "red");
        }
        if (ys[i] === 28) {
            path(ys[i], "yellow");
        }
        if (bs[i] === 28) {
            path(bs[i], "blue");
        }

        //if value is 29. 
        if (gs[i] === 29) {
            path(gs[i], "green");
        }
        if (rs[i] === 29) {
            path(rs[i], "red");
        }
        if (ys[i] === 29) {
            path(ys[i], "yellow");
        }
        if (bs[i] === 29) {
            path(bs[i], "blue");
        }

        //if value is 30. 
        if (gs[i] === 30) {
            path(gs[i], "green");
        }
        if (rs[i] === 30) {
            path(rs[i], "red");
        }
        if (ys[i] === 30) {
            path(ys[i], "yellow");
        }
        if (bs[i] === 30) {
            path(bs[i], "blue");
        }

        //if value is 31. 
        if (gs[i] === 31) {
            path(gs[i], "green");
        }
        if (rs[i] === 31) {
            path(rs[i], "red");
        }
        if (ys[i] === 31) {
            path(ys[i], "yellow");
        }
        if (bs[i] === 31) {
            path(bs[i], "blue");
        }

        //if value is 32. 
        if (gs[i] === 32) {
            path(gs[i], "green");
        }
        if (rs[i] === 32) {
            path(rs[i], "red");
        }
        if (ys[i] === 32) {
            i
            path(ys[i], "yellow");
        }
        if (bs[i] === 32) {
            path(bs[i], "blue");
        }

        //if value is 33. 
        if (gs[i] === 33) {
            path(gs[i], "green");
        }
        if (rs[i] === 33) {
            path(rs[i], "red");
        }
        if (ys[i] === 33) {
            i
            path(ys[i], "yellow");
        }
        if (bs[i] === 33) {
            path(bs[i], "blue");
        }

        //if value is 34. 
        if (gs[i] === 34) {
            path(gs[i], "green");
        }
        if (rs[i] === 34) {
            path(rs[i], "red");
        }
        if (ys[i] === 34) {
            i
            path(ys[i], "yellow");
        }
        if (bs[i] === 34) {
            path(bs[i], "blue");
        }

        //if value is 35. 
        if (gs[i] === 35) {
            path(gs[i], "green");
        }
        if (rs[i] === 35) {
            path(rs[i], "red");
        }
        if (ys[i] === 35) {
            path(ys[i], "yellow");
        }
        if (bs[i] === 35) {
            path(bs[i], "blue");
        }

        //if value is 36. 
        if (gs[i] === 36) {
            path(gs[i], "green");
        }
        if (rs[i] === 36) {
            path(rs[i], "red");
        }
        if (ys[i] === 36) {
            i
            path(ys[i], "yellow");
        }
        if (bs[i] === 36) {
            path(bs[i], "blue");
        }

        //if value is 37. 
        if (gs[i] === 37) {
            path(gs[i], "green");
        }
        if (rs[i] === 37) {
            path(rs[i], "red");
        }
        if (ys[i] === 37) {
            i
            path(ys[i], "yellow");
        }
        if (bs[i] === 37) {
            path(bs[i], "blue");
        }

        //if value is 38. 
        if (gs[i] === 38) {
            path(gs[i], "green");
        }
        if (rs[i] === 38) {
            path(rs[i], "red");
        }
        if (ys[i] === 38) {
            i
            path(ys[i], "yellow");
        }
        if (bs[i] === 38) {
            path(bs[i], "blue");
        }

        //if value is 39. 
        if (gs[i] === 39) {
            path(gs[i], "green");
        }
        if (rs[i] === 39) {
            path(rs[i], "red");
        }
        if (ys[i] === 39) {
            i
            path(ys[i], "yellow");
        }
        if (bs[i] === 39) {
            path(bs[i], "blue");
        }

        //if value is 40. 
        if (gs[i] === 40) {
            path(gs[i], "green");
        }
        if (rs[i] === 40) {
            path(rs[i], "red");
        }
        if (ys[i] === 40) {
            path(ys[i], "yellow");
        }
        if (bs[i] === 40) {
            path(bs[i], "blue");
        }

        //if value is 41. 
        if (gs[i] === 41) {
            path(gs[i], "green");
        }
        if (rs[i] === 41) {
            path(rs[i], "red");
        }
        if (ys[i] === 41) {
            i
            path(ys[i], "yellow");
        }
        if (bs[i] === 41) {
            path(bs[i], "blue");
        }

        //if value is 42. 
        if (gs[i] === 42) {
            path(gs[i], "green");
        }
        if (rs[i] === 42) {
            path(rs[i], "red");
        }
        if (ys[i] === 42) {
            i
            path(ys[i], "yellow");
        }
        if (bs[i] === 42) {
            path(bs[i], "blue");
        }

        //if value is 43. 
        if (gs[i] === 43) {
            path(gs[i], "green");
        }
        if (rs[i] === 43) {
            path(rs[i], "red");
        }
        if (ys[i] === 43) {
            i
            path(ys[i], "yellow");
        }
        if (bs[i] === 43) {
            path(bs[i], "blue");
        }

        //if value is 44. 
        if (gs[i] === 44) {
            path(gs[i], "green");
        }
        if (rs[i] === 44) {
            path(rs[i], "red");
        }
        if (ys[i] === 44) {
            i
            path(ys[i], "yellow");
        }
        if (bs[i] === 44) {
            path(bs[i], "blue");
        }

        //if value is 45. 
        if (gs[i] === 45) {
            path(gs[i], "green");
        }
        if (rs[i] === 45) {
            path(rs[i], "red");
        }
        if (ys[i] === 45) {
            path(ys[i], "yellow");
        }
        if (bs[i] === 45) {
            path(bs[i], "blue");
        }

        //if value is 46. 
        if (gs[i] === 46) {
            path(gs[i], "green");
        }
        if (rs[i] === 46) {
            path(rs[i], "red");
        }
        if (ys[i] === 46) {
            path(ys[i], "yellow");
        }
        if (bs[i] === 46) {
            path(bs[i], "blue");
        }

        //if value is 47. 
        if (gs[i] === 47) {
            path(gs[i], "green");
        }
        if (rs[i] === 47) {
            path(rs[i], "red");
        }
        if (ys[i] === 47) {
            path(ys[i], "yellow");
        }
        if (bs[i] === 47) {
            path(bs[i], "blue");
        }

        //if value is 48. 
        if (gs[i] === 48) {
            path(gs[i], "green");
        }
        if (rs[i] === 48) {
            path(rs[i], "red");
        }
        if (ys[i] === 48) {
            path(ys[i], "yellow");
        }
        if (bs[i] === 48) {
            path(bs[i], "blue");
        }

        //if value is 49. 
        if (gs[i] === 49) {
            path(gs[i], "green");
        }
        if (rs[i] === 49) {
            path(rs[i], "red");
        }
        if (ys[i] === 49) {
            path(ys[i], "yellow");
        }
        if (bs[i] === 49) {
            path(bs[i], "blue");
        }

        //if value is 50. 
        if (gs[i] === 50) {
            path(gs[i], "green");
        }
        if (rs[i] === 50) {
            path(rs[i], "red");
        }
        if (ys[i] === 50) {
            path(ys[i], "yellow");
        }
        if (bs[i] === 50) {
            path(bs[i], "blue");
        }

        //if value is 51. 
        if (gs[i] === 51) {
            path(gs[i], "green");
        }
        if (rs[i] === 51) {
            path(rs[i], "red");
        }
        if (ys[i] === 51) {
            path(ys[i], "yellow");
        }
        if (bs[i] === 51) {
            path(bs[i], "blue");
        }

        //if value is 52. 
        if (gs[i] === 52) {
            path(gs[i], "green");
        }
        if (rs[i] === 52) {
            path(rs[i], "red");
        }
        if (ys[i] === 52) {
            path(ys[i], "yellow");
        }
        if (bs[i] === 52) {
            path(bs[i], "blue");
        }
    }

    //For Home.
    if (gs[i] === 53) { //green home.

        path(gs[i], "green");
    }
    if (gs[i] === 54) {

        path(gs[i], "green");
    }
    if (gs[i] === 55) {

        path(gs[i], "green");
    }
    if (gs[i] === 56) {

        path(gs[i], "green");
    }
    if (gs[i] === 57) {

        path(gs[i], "green");
    }
    if (gs[i] === 58) {

        path(gs[i], "green");
    }
    if (rs[i] === 59) { //red home.
        path(rs[i], "red");
    }
    if (rs[i] === 60) {
        path(rs[i], "red");
    }
    if (rs[i] === 61) {
        path(rs[i], "red");
    }
    if (rs[i] === 62) {
        path(rs[i], "red");
    }
    if (rs[i] === 63) {
        path(rs[i], "red");
    }
    if (rs[i] === 64) {
        path(rs[i], "red");
    }
    if (bs[i] === 65) { //blue home.
        path(bs[i], "blue");
    }
    if (bs[i] === 66) {
        path(bs[i], "blue");
    }
    if (bs[i] === 67) {
        path(bs[i], "blue");
    }
    if (bs[i] === 68) {
        path(bs[i], "blue");
    }
    if (bs[i] === 69) {
        path(bs[i], "blue");
    }
    if (bs[i] === 70) {
        path(bs[i], "blue");
    }
    if (ys[i] === 71) { //yellow home.
        path(ys[i], "yellow");
    }
    if (ys[i] === 72) {
        path(ys[i], "yellow");
    }
    if (ys[i] === 73) {
        path(ys[i], "yellow");
    }
    if (ys[i] === 74) {
        path(ys[i], "yellow");
    }
    if (ys[i] === 75) {
        path(ys[i], "yellow");
    }
    if (ys[i] === 76) {
        path(ys[i], "yellow");
    }

}

function countdown() {
    document.querySelector(".countdown").style.backgroundColor = "white";
    document.querySelector(".countdown #chronometer").style.visibility = "visible";
    document.querySelector(".countdown #counter").style.visibility = "visible";
    document.querySelector(".countdown #chronometer").src = "images/count-down.gif";
    document.querySelector(".countdown #counter").src = "images/counter.gif";
    document.querySelector(".btn").disabled = "blocked";
    timer = setTimeout(function() {
        animationend(null);
        updater(null);
        disappear(null);
        checker(null);
        dispose_countdown(null);
    }, 15000);
}

function dispose_countdown() {
    clearTimeout(timer);
    document.querySelector(".countdown #chronometer").style.visibility = "hidden";
    document.querySelector(".countdown #chronometer").src = "";
    document.querySelector(".countdown").style.backgroundColor = "";
    document.querySelector(".countdown #counter").style.visibility = "hidden";
    document.querySelector(".countdown #counter").src = "";
    setTimeout(function() {
        document.querySelector(".btn").disabled = "";
    }, 1000);
}