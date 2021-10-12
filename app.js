// Defining Variables
// Title
var PsPl = document.getElementById("PsPl")
var SP = document.getElementById("SP")
var Bank = document.getElementById("Bank")
var FP = document.getElementById("FP")
var Rst = document.getElementById("Rst")
var RobP = document.getElementById("RobP")
//Stores
// Count Display
var SB = document.getElementById("SB")
var S1C = document.getElementById("S1C")
var S2C = document.getElementById("S2C")
var S3C = document.getElementById("S3C")
var S4C = document.getElementById("S4C")
var S5C = document.getElementById("S5C")
// Count and Profit
var S1Count = 1
var S2Count = 0
var S3Count = 0
var S4Count = 0
var S5Count = 0
var SProfit = 1
var S1Profit = 1
var S2Profit = 0
var S3Profit = 0
var S4Profit = 0
var S5Profit = 0
// Upgrade Buttons
var S1U = document.getElementById("S1U")
var S2U = document.getElementById("S2U")
var S3U = document.getElementById("S3U")
var S4U = document.getElementById("S4U")
// Sell Buttons
var S1S = document.getElementById("S1S")
var S2S = document.getElementById("S2S")
var S3S = document.getElementById("S3S")
var S4S = document.getElementById("S4S")
var S5S = document.getElementById("S5S")

// Factories
// Count Display
var FB = document.getElementById("FB")
var F1C = document.getElementById("F1C")
var F2C = document.getElementById("F2C")
var F3C = document.getElementById("F3C")
var F4C = document.getElementById("F4C")
var F5C = document.getElementById("F5C")
// Count and Profit
var F1Count = 1
var F2Count = 0
var F3Count = 0
var F4Count = 0
var F5Count = 0
var FProfit = 1
var F1Profit = 1
var F2Profit = 0
var F3Profit = 0
var F4Profit = 0
var F5Profit = 0
// Ugrade Buttons
var F1U = document.getElementById("F1U")
var F2U = document.getElementById("F2U")
var F3U = document.getElementById("F3U")
var F4U = document.getElementById("F4U")
// Sell Buttons
var F1S = document.getElementById("F1S")
var F2S = document.getElementById("F2S")
var F3S = document.getElementById("F3S")
var F4S = document.getElementById("F4S")
var F5S = document.getElementById("F5S")
//Security
// Count Display
var PB = document.getElementById("PB")
var P1C = document.getElementById("P1C")
var P2C = document.getElementById("P2C")
var P3C = document.getElementById("P3C")
var P4C = document.getElementById("P4C")
var P5C = document.getElementById("P5C")
// Count and Profit
var P1Count = 1
var P2Count = 0
var P3Count = 0
var P4Count = 0
var P5Count = 0
var PProfit = 1
var P1Profit = 1
var P2Profit = 0
var P3Profit = 0
var P4Profit = 0
var P5Profit = 0
// Ugrade Buttons
var P1U = document.getElementById("P1U")
var P2U = document.getElementById("P2U")
var P3U = document.getElementById("P3U")
var P4U = document.getElementById("P4U")
// Sell Buttons
var P1S = document.getElementById("P1S")
var P2S = document.getElementById("P2S")
var P3S = document.getElementById("P3S")
var P4S = document.getElementById("P4S")
var P5S = document.getElementById("P5S")
// General
var Timer;
var Money = 0;
var Play = false;
// Game Over
var End = document.getElementById("End")
var gameOver = false
// robbing
var RP = 0
// Defining Functions

// Game over - called when out of money
function GO(reason) {
    Play = false;
    PsPl.innerText = "PLAY";
    clearInterval(Timer);
    PsPl.classList.add("disA")
    PsPl.classList.remove("act")
    Bank.style.color = "red"
    SP.style.color = "red"
    FP.style.color = "red"
    End.innerHTML = '<div id="gameOver">Game Over</div>'
    gameOver = true
}
//Robbing
function Rob() {
    var robbed = Math.round(Math.random() * 100)
    if (robbed <= RP) {
        Money -= (SProfit * 3)
        RobP.style.color = "red"
        if (Money <= 0) {
            GO()
        }
    }
    else {
        RobP.style.color = "#87CEEB"
    }
}
// Action
// callback that updates buttons and money 
function timerAction() {
    // Stores Profit
    S1Profit = S1Count
    S2Profit = S2Count * 2
    S3Profit = S3Count * 4
    S4Profit = S4Count * 8
    S5Profit = S5Count * 16
    // Factory Profit
    F1Profit = F1Count
    F2Profit = F2Count * 2
    F3Profit = F3Count * 4
    F4Profit = F4Count * 8
    F5Profit = F5Count * 16
    //Security Profit
    P1Profit = P1Count
    P2Profit = P2Count * 2
    P3Profit = P3Count * 4
    P4Profit = P4Count * 8
    P5Profit = P5Count * 16
    // Total Profits
    PProfit = P1Profit + P2Profit + P3Profit + P4Profit + P5Profit
    SProfit = S1Profit + S2Profit + S3Profit + S4Profit + S5Profit
    FProfit = F1Profit + F2Profit + F3Profit + F4Profit + F5Profit
    Money += SProfit
    // Factory Produce with Store Produce
    if (FProfit < SProfit) {
        Money -= ((S1Profit - F2Profit) * 4)
        FP.style.color = "red"
    }
    else {
        FP.style.color = "#87CEEB"
    };
    // Robbing
    if (PProfit <= SProfit) {
        RP = 100 - (Math.round((PProfit / SProfit) * 100));
    };
    if (RP <= 100 && RP > 0) {
        Rob()
    };

    // Visual Updates
    S1C.innerText = "Amount: " + S1Count
    S2C.innerText = "Amount: " + S2Count
    S3C.innerText = "Amount: " + S3Count
    S4C.innerText = "Amount: " + S4Count
    S5C.innerText = "Amount: " + S5Count
    F1C.innerText = "Amount: " + F1Count
    F2C.innerText = "Amount: " + F2Count
    F3C.innerText = "Amount: " + F3Count
    F4C.innerText = "Amount: " + F4Count
    F5C.innerText = "Amount: " + F5Count
    P1C.innerText = "Amount: " + P1Count
    P2C.innerText = "Amount: " + P2Count
    P3C.innerText = "Amount: " + P3Count
    P4C.innerText = "Amount: " + P4Count
    P5C.innerText = "Amount: " + P5Count
    SP.innerText = "$" + SProfit + " per sec"
    Bank.innerText = "$" + Money
    FP.innerText = FProfit + " product per sec"
    RobP.innerText = RP + "% chance of being robbed"
    // Store button updates
    //buy
    if (Money >= 25) {
        SB.classList.add("act");
        SB.classList.remove("disA");
    }
    else {
        SB.classList.add("disA");
        SB.classList.remove("act");
    };
    //lvl 1
    if (Money >= 50 && S1Count >= 1) {
        S1U.classList.add("act");
        S1U.classList.remove("disA");
    }
    else {
        S1U.classList.add("disA");
        S1U.classList.remove("act");
    };
    //lvl 2
    if (Money >= 100 && S2Count >= 1) {
        S2U.classList.add("act");
        S2U.classList.remove("disA");
    }
    else {
        S2U.classList.add("disA");
        S2U.classList.remove("act");
    };
    //lvl 3
    if (Money >= 200 && S3Count >= 1) {
        S3U.classList.add("act");
        S3U.classList.remove("disA");
    }
    else {
        S3U.classList.add("disA");
        S3U.classList.remove("act");
    };
    //lvl 4
    if (Money >= 400 && S4Count >= 1) {
        S4U.classList.add("act");
        S4U.classList.remove("disA");
    }
    else {
        S4U.classList.add("disA");
        S4U.classList.remove("act");
    };
    //lvl 1 sell
    if (S1Count >= 1) {
        S1S.classList.add("act");
        S1S.classList.remove("disA");
    }
    else {
        S1S.classList.add("disA");
        S1S.classList.remove("act");
    };
    //lvl 2 sell
    if (S2Count >= 1) {
        S2S.classList.add("act");
        S2S.classList.remove("disA");
    }
    else {
        S2S.classList.add("disA");
        S2S.classList.remove("act");
    };
    //lvl 3 sell
    if (S3Count >= 1) {
        S3S.classList.add("act");
        S3S.classList.remove("disA");
    }
    else {
        S3S.classList.add("disA");
        S3S.classList.remove("act");
    };
    //lvl 4 sell
    if (S4Count >= 1) {
        S4S.classList.add("act");
        S4S.classList.remove("disA");
    }
    else {
        S4S.classList.add("disA");
        S4S.classList.remove("act");
    };
    // Factory button updates
    //buy
    if (Money >= 25) {
        FB.classList.add("act");
        FB.classList.remove("disA");
    }
    else {
        FB.classList.add("disA");
        FB.classList.remove("act");
    };
    //lvl 1
    if (Money >= 50 && F1Count >= 1) {
        F1U.classList.add("act");
        F1U.classList.remove("disA");
    }
    else {
        F1U.classList.add("disA");
        F1U.classList.remove("act");
    };
    //lvl 2
    if (Money >= 100 && F2Count >= 1) {
        F2U.classList.add("act");
        F2U.classList.remove("disA");
    }
    else {
        F2U.classList.add("disA");
        F2U.classList.remove("act");
    };
    //lvl 3
    if (Money >= 200 && F3Count >= 1) {
        F3U.classList.add("act");
        F3U.classList.remove("disA");
    }
    else {
        F3U.classList.add("disA");
        F3U.classList.remove("act");
    };
    //lvl 4
    if (Money >= 400 && F4Count >= 1) {
        F4U.classList.add("act");
        F4U.classList.remove("disA");
    }
    else {
        F4U.classList.add("disA");
        F4U.classList.remove("act");
    };
    //lvl 1 sell
    if (F1Count >= 1) {
        F1S.classList.add("act");
        F1S.classList.remove("disA");
    }
    else {
        F1S.classList.add("disA");
        F1S.classList.remove("act");
    };
    //lvl 2 sell
    if (F2Count >= 1) {
        F2S.classList.add("act");
        F2S.classList.remove("disA");
    }
    else {
        F2S.classList.add("disA");
        F2S.classList.remove("act");
    };
    //lvl 3 sell
    if (F3Count >= 1) {
        F3S.classList.add("act");
        F3S.classList.remove("disA");
    }
    else {
        F3S.classList.add("disA");
        F3S.classList.remove("act");
    };
    //lvl 4 sell
    if (F4Count >= 1) {
        F4S.classList.add("act");
        F4S.classList.remove("disA");
    }
    else {
        F4S.classList.add("disA");
        F4S.classList.remove("act");
    };
    // Security button updates
    //buy
    if (Money >= 25) {
        PB.classList.add("act");
        PB.classList.remove("disA");
    }
    else {
        PB.classList.add("disA");
        PB.classList.remove("act");
    };
    //lvl 1
    if (Money >= 50 && P1Count >= 1) {
        P1U.classList.add("act");
        P1U.classList.remove("disA");
    }
    else {
        P1U.classList.add("disA");
        P1U.classList.remove("act");
    };
    //lvl 2
    if (Money >= 100 && P2Count >= 1) {
        P2U.classList.add("act");
        P2U.classList.remove("disA");
    }
    else {
        P2U.classList.add("disA");
        P2U.classList.remove("act");
    };
    //lvl 3
    if (Money >= 200 && P3Count >= 1) {
        P3U.classList.add("act");
        P3U.classList.remove("disA");
    }
    else {
        P3U.classList.add("disA");
        P3U.classList.remove("act");
    };
    //lvl 4
    if (Money >= 400 && P4Count >= 1) {
        P4U.classList.add("act");
        P4U.classList.remove("disA");
    }
    else {
        P4U.classList.add("disA");
        P4U.classList.remove("act");
    };
    //lvl 1 sell
    if (P1Count >= 1) {
        P1S.classList.add("act");
        P1S.classList.remove("disA");
    }
    else {
        P1S.classList.add("disA");
        P1S.classList.remove("act");
    };
    //lvl 2 sell
    if (P2Count >= 1) {
        P2S.classList.add("act");
        P2S.classList.remove("disA");
    }
    else {
        P2S.classList.add("disA");
        P2S.classList.remove("act");
    };
    //lvl 3 sell
    if (P3Count >= 1) {
        P3S.classList.add("act");
        P3S.classList.remove("disA");
    }
    else {
        P3S.classList.add("disA");
        P3S.classList.remove("act");
    };
    //lvl 4 sell
    if (P4Count >= 1) {
        P4S.classList.add("act");
        P4S.classList.remove("disA");
    }
    else {
        P4S.classList.add("disA");
        P4S.classList.remove("act");
    };
    // game over
    if (Money < 0) {
        GO()
    };
    if (SProfit < 1) {
        GO()
    };
};
// Timer
function main() {
    Timer = setInterval(timerAction, 1000);
};
// Buttons
// Pause and Play
PsPl.addEventListener("click", function () {
    if (!gameOver) {
        if (!Play) {
            PsPl.innerText = "PAUSE";
            Play = true;
            main();
        }
        else {
            PsPl.innerText = "PLAY";
            Play = false;
            clearInterval(Timer);
        };
    };
});
// Restarting
Rst.addEventListener("click", function () {
    window.location.reload()
});
// Store Upgrades
// lvl1
SB.addEventListener("click", function () {
    if (Money >= 25) {
        Money -= 25
        S1Count += 1
        timerAction()
    }
});
// lvl2
S1U.addEventListener("click", function () {
    if (Money >= 50 && S1Count >= 1) {
        Money -= 50
        S1Count -= 1
        S2Count += 1
        timerAction()
    }
});
// lvl3
S2U.addEventListener("click", function () {
    if (Money >= 100 && S2Count >= 1) {
        Money -= 100
        S2Count -= 1
        S3Count += 1
        timerAction()
    }
});
// lvl4
S3U.addEventListener("click", function () {
    if (Money >= 200 && S3Count >= 1) {
        Money -= 200
        S3Count -= 1
        S4Count += 1
        timerAction()
    }
});
// lvl5
S4U.addEventListener("click", function () {
    if (Money >= 400 && S4Count >= 1) {
        Money -= 400
        S4Count -= 1
        S5Count += 1
        timerAction()
    }
});
// Store Selling
// lvl1
S1S.addEventListener("click", function () {
    if (S1Count >= 1) {
        Money += 12
        S1Count -= 1
        timerAction()
    }
});
// lvl2
S2S.addEventListener("click", function () {
    if (S2Count >= 1) {
        Money += 25
        S2Count -= 1
        timerAction()
    }
});
// lvl3
S3S.addEventListener("click", function () {
    if (S3Count >= 1) {
        Money += 50
        S3Count -= 1
        timerAction()
    }
});
// lvl4
S4S.addEventListener("click", function () {
    if (S4Count >= 1) {
        Money += 100
        S4Count -= 1
        timerAction()
    }
});
// lvl5
S5S.addEventListener("click", function () {
    if (S5Count >= 1) {
        Money += 200
        S5Count -= 1
        timerAction()
    }
});
// Factory Upgrades
// lvl1
FB.addEventListener("click", function () {
    if (Money >= 25) {
        Money -= 25
        F1Count += 1
        timerAction()
    }
});
// lvl2
F1U.addEventListener("click", function () {
    if (Money >= 50 && F1Count >= 1) {
        Money -= 50
        F1Count -= 1
        F2Count += 1
        timerAction()
    }
});
// lvl3
F2U.addEventListener("click", function () {
    if (Money >= 100 && F2Count >= 1) {
        Money -= 100
        F2Count -= 1
        F3Count += 1
        timerAction()
    }
});
// lvl4
F3U.addEventListener("click", function () {
    if (Money >= 200 && F3Count >= 1) {
        Money -= 200
        F3Count -= 1
        F4Count += 1
        timerAction()
    }
});
// lvl5
F4U.addEventListener("click", function () {
    if (Money >= 400 && F4Count >= 1) {
        Money -= 400
        F4Count -= 1
        F5Count += 1
        timerAction()
    }
});
// Factory Selling        
// lvl1
F1S.addEventListener("click", function () {
    if (F1Count >= 1) {
        Money += 12
        F1Count -= 1
        timerAction()
    }
});
// lvl2
F2S.addEventListener("click", function () {
    if (F2Count >= 1) {
        Money += 25
        F2Count -= 1
        timerAction()
    }
});
// lvl3
F3S.addEventListener("click", function () {
    if (F3Count >= 1) {
        Money += 50
        F3Count -= 1
        timerAction()
    }
});
// lvl4
F4S.addEventListener("click", function () {
    if (F4Count >= 1) {
        Money += 100
        F4Count -= 1
        timerAction()
    }
});
// lvl5
F5S.addEventListener("click", function () {
    if (F5Count >= 1) {
        Money += 200
        F5Count -= 1
        timerAction()
    }
});
// Security Upgrades
// lvl1
PB.addEventListener("click", function () {
    if (Money >= 25) {
        Money -= 25
        P1Count += 1
        timerAction()
    }
});
// lvl2
P1U.addEventListener("click", function () {
    if (Money >= 50 && P1Count >= 1) {
        Money -= 50
        P1Count -= 1
        P2Count += 1
        timerAction()
    }
});
// lvl3
P2U.addEventListener("click", function () {
    if (Money >= 100 && P2Count >= 1) {
        Money -= 100
        P2Count -= 1
        P3Count += 1
        timerAction()
    }
});
// lvl4
P3U.addEventListener("click", function () {
    if (Money >= 200 && P3Count >= 1) {
        Money -= 200
        P3Count -= 1
        P4Count += 1
        timerAction()
    }
});
// lvl5
P4U.addEventListener("click", function () {
    if (Money >= 400 && P4Count >= 1) {
        Money -= 400
        P4Count -= 1
        P5Count += 1
        timerAction()
    }
});
// Security Selling        
// lvl1
P1S.addEventListener("click", function () {
    if (P1Count >= 1) {
        Money += 12
        P1Count -= 1
        timerAction()
    }
});
// lvl2
P2S.addEventListener("click", function () {
    if (P2Count >= 1) {
        Money += 25
        P2Count -= 1
        timerAction()
    }
});
// lvl3
P3S.addEventListener("click", function () {
    if (P3Count >= 1) {
        Money += 50
        P3Count -= 1
        timerAction()
    }
});
// lvl4
P4S.addEventListener("click", function () {
    if (P4Count >= 1) {
        Money += 100
        P4Count -= 1
        timerAction()
    }
});
// lvl5
P5S.addEventListener("click", function () {
    if (P5Count >= 1) {
        Money += 200
        P5Count -= 1
        timerAction()
    }
});