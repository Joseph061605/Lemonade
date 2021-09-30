//A. Defining Variables
    //1. Title
var PsPl = document.getElementById("PsPl")
var SP = document.getElementById("SP")
var Bank = document.getElementById("Bank")
var FP = document.getElementById("FP")
var Rst = document.getElementById("Rst")
var RobP = document.getElementById("RobP")
    //2.Stores
        //a. Count Display
var SB = document.getElementById("SB")
var S1C = document.getElementById("S1C")
var S2C = document.getElementById("S2C")
var S3C = document.getElementById("S3C")
var S4C = document.getElementById("S4C")
var S5C = document.getElementById("S5C")
        //b. Count and Profit
var S1Count =1
var S2Count =0
var S3Count =0
var S4Count =0
var S5Count =0
var SProfit=1
var S1Profit =1
var S2Profit =0
var S3Profit =0
var S4Profit =0
var S5Profit =0
        //c. Upgrade Buttons
var S1U = document.getElementById("S1U")
var S2U = document.getElementById("S2U")
var S3U = document.getElementById("S3U")
var S4U = document.getElementById("S4U")
        //d. Sell Buttons
var S1S =document.getElementById("S1S")
var S2S =document.getElementById("S2S")
var S3S =document.getElementById("S3S")
var S4S =document.getElementById("S4S")
var S5S =document.getElementById("S5S")

    //3. Factories
        //a. Count Display
var FB = document.getElementById("FB")
var F1C = document.getElementById("F1C")
var F2C = document.getElementById("F2C")
var F3C = document.getElementById("F3C")
var F4C = document.getElementById("F4C")
var F5C = document.getElementById("F5C")
        //b. Count and Profit
var F1Count =1
var F2Count =0
var F3Count =0
var F4Count =0
var F5Count =0
var FProfit=1
var F1Profit =1
var F2Profit =0
var F3Profit =0
var F4Profit =0
var F5Profit =0
        //c. Ugrade Buttons
var F1U = document.getElementById("F1U")
var F2U = document.getElementById("F2U")
var F3U = document.getElementById("F3U")
var F4U = document.getElementById("F4U")
        //d. Fell Buttons
var F1S =document.getElementById("F1S")
var F2S =document.getElementById("F2S")
var F3S =document.getElementById("F3S")
var F4S =document.getElementById("F4S")
var F5S =document.getElementById("F5S")
    //4. General
var Timer;
var Money =0;
var Play=false;
    //5. Game Over
var End = document.getElementById("End")
var gameOver =false
    //6. robbing
var RP = 5
//B. Defining Functions

// Game over - called when out of money
function GO(){
    Play=false;
    PsPl.innerText ="PLAY";
    clearInterval(Timer);
    PsPl.classList.add("disA")
    PsPl.classList.remove("act")
    Bank.style.color="red"
    SP.style.color="red"
    FP.style.color="red"
    End.innerHTML = '<div id="gameOver">Game Over</div>'
    gameOver=true
}
    //Robbing
function Rob(){
    var robbed=Math.round(Math.random()*100)
    if(robbed<=RP){
        Money-(SProfit/2)
        RobP.style.color="red"
    }
    else{
        RobP.style.color="#87CEEB"
    }
}
    //2. Action
// callback that updates buttons and money 
function timerAction(){
        //a. Stores Profit
    S1Profit =S1Count
    S2Profit =S2Count*2
    S3Profit =S3Count*4
    S4Profit =S4Count*8
    S5Profit =S5Count*16
        //b. Factory Profit
    F1Profit =F1Count
    F2Profit =F2Count*2
    F3Profit =F3Count*4
    F4Profit =F4Count*8
    F5Profit =F5Count*16
        //c. Total Profits
    SProfit =S1Profit+S2Profit+S3Profit+S4Profit+S5Profit
    FProfit =F1Profit+F2Profit+F3Profit+F4Profit+F5Profit
    Money +=SProfit
        //d. Factory Produce with Store Produce
    if(FProfit<SProfit){
        Money -=((S1Profit-F2Profit)*4)
        FP.style.color ="red"
    }
    else{
        FP.style.color ="#87CEEB"
    };
    // Robbing
    if(RP<=100){
    RP = SProfit*5
    }
    Rob()
        //e. Visual Updates
    S1C.innerText="Amount: "+S1Count
    S2C.innerText="Amount: "+S2Count
    S3C.innerText="Amount: "+S3Count
    S4C.innerText="Amount: "+S4Count
    S5C.innerText="Amount: "+S5Count
    F1C.innerText="Amount: "+F1Count
    F2C.innerText="Amount: "+F2Count
    F3C.innerText="Amount: "+F3Count
    F4C.innerText="Amount: "+F4Count
    F5C.innerText="Amount: "+F5Count
    SP.innerText ="$"+SProfit+" per sec"
    Bank.innerText ="$"+Money
    FP.innerText =FProfit+" product per sec"
    RobP.innerText=RP+"% chance of being robbed"
        //f. lvl1 button updates
    if(Money>=25){
        if(!SB.classList.contains("act")){
            SB.classList.add("act");
            SB.classList.remove("disA");
        };
        if(!FB.classList.contains("act")){
            FB.classList.add("act");
            FB.classList.remove("disA");
        };
    }
    else{
        if(!SB.classList.contains("disA")){
            SB.classList.add("disA");
            SB.classList.remove("act");
        };
        if(!FB.classList.contains("disA")){
            FB.classList.add("disA");
            FB.classList.remove("act");
        };
    };
    if(S1Count>=1){
        if(!S1S.classList.contains("act")){
            S1S.classList.add("act");
            S1S.classList.remove("disA");
        };
    }
    else{
        if(!S1S.classList.contains("disA")){
            S1S.classList.add("disA");
            S1S.classList.remove("act");
        }
    };
    if(F1Count>=1){
        if(!F1S.classList.contains("act")){
            F1S.classList.add("act");
            F1S.classList.remove("disA");
        };
    }
    else{
        if(!F1S.classList.contains("disA")){
            F1S.classList.add("disA");
            F1S.classList.remove("act");
        }
    };
        //g. lvl2 button updates
    if(Money>=50){
        if(!S1U.classList.contains("act")&&S1Count>=1){
            S1U.classList.add("act");
            S1U.classList.remove("disA");
        }
        else if(S1Count<1){
            S1U.classList.add("disA");
            S1U.classList.remove("act");
        };
        if(!F1U.classList.contains("act")&&F1Count>=1){
            F1U.classList.add("act");
            F1U.classList.remove("disA");
        }
        else if(F1Count<1){
            F1U.classList.add("disA");
            F1U.classList.remove("act");
        };
    }
    else{
        if(!S1U.classList.contains("disA")){
            S1U.classList.add("disA");
            S1U.classList.remove("act");
        };
        if(!F1U.classList.contains("disA")){
            F1U.classList.add("disA");
            F1U.classList.remove("act");
        };
    };
    if(S2Count>=1){
        if(!S2S.classList.contains("act")){
            S2S.classList.add("act");
            S2S.classList.remove("disA");
        };
    }
    else{
        if(!S2S.classList.contains("disA")){
            S2S.classList.add("disA");
            S2S.classList.remove("act");
        }
    };
    if(F2Count>=1){
        if(!F2S.classList.contains("act")){
            F2S.classList.add("act");
            F2S.classList.remove("disA");
        };
    }
    else{
        if(!F2S.classList.contains("disA")){
            F2S.classList.add("disA");
            F2S.classList.remove("act");
        }
    };
        //h. lvl3 button updates
    if(Money>=100){
        if(!S2U.classList.contains("act")&&S2Count>=1){
            S2U.classList.add("act");
            S2U.classList.remove("disA");
        }
        else if(S2Count<1){
            S2U.classList.add("disA");
            S2U.classList.remove("act");
        };
        if(!F2U.classList.contains("act")&&F2Count>=1){
            F2U.classList.add("act");
            F2U.classList.remove("disA");
        }
        else if(F2Count<1){
            F2U.classList.add("disA");
            F2U.classList.remove("act");
        };
    }
    else{
        if(!S2U.classList.contains("disA")){
            S2U.classList.add("disA");
            S2U.classList.remove("act");
        };
        if(!F2U.classList.contains("disA")){
            F2U.classList.add("disA");
            F2U.classList.remove("act");
        };
    };
    if(S3Count>=1){
        if(!S3S.classList.contains("act")){
            S3S.classList.add("act");
            S3S.classList.remove("disA");
        };
    }
    else{
        if(!S3S.classList.contains("disA")){
            S3S.classList.add("disA");
            S3S.classList.remove("act");
        }
    };
    if(F3Count>=1){
        if(!F3S.classList.contains("act")){
            F3S.classList.add("act");
            F3S.classList.remove("disA");
        };
    }
    else{
        if(!F3S.classList.contains("disA")){
            F3S.classList.add("disA");
            F3S.classList.remove("act");
        }
    };
        //i. lvl4 button updates
    if(Money>=200){
        if(!S3U.classList.contains("act")&&S3Count>=1){
            S3U.classList.add("act");
            S3U.classList.remove("disA");
        }
        else if(S3Count<1){
            S3U.classList.add("disA");
            S3U.classList.remove("act");
        };
        if(!F3U.classList.contains("act")&&F3Count>=1){
            F3U.classList.add("act");
            F3U.classList.remove("disA");
        }
        else if(F3Count<1){
            F3U.classList.add("disA");
            F3U.classList.remove("act");
        };
    }
    else{
        if(!S3U.classList.contains("disA")){
            S3U.classList.add("disA");
            S3U.classList.remove("act");
        };
        if(!F3U.classList.contains("disA")){
            F3U.classList.add("disA");
            F3U.classList.remove("act");
        };
    };
    if(S4Count>=1){
        if(!S4S.classList.contains("act")){
            S4S.classList.add("act");
            S4S.classList.remove("disA");
        };
    }
    else{
        if(!S4S.classList.contains("disA")){
            S4S.classList.add("disA");
            S4S.classList.remove("act");
        }
    };
    if(F4Count>=1){
        if(!F4S.classList.contains("act")){
            F4S.classList.add("act");
            F4S.classList.remove("disA");
        };
    }
    else{
        if(!F4S.classList.contains("disA")){
            F4S.classList.add("disA");
            F4S.classList.remove("act");
        }
    };
        //j. lvl5 button updates
    if(Money>=400){
        if(!S4U.classList.contains("act")&&S4Count>=1){
            S4U.classList.add("act");
            S4U.classList.remove("disA");
        }
        else if(S4Count<1){
            S4U.classList.add("disA");
            S4U.classList.remove("act");
        };
        if(!F4U.classList.contains("act")&&F4Count>=1){
            F4U.classList.add("act");
            F4U.classList.remove("disA");
        }
        else if(F4Count<1){
            F4U.classList.add("disA");
            F4U.classList.remove("act");
        };
    }
    else{
        if(!S4U.classList.contains("disA")){
            S4U.classList.add("disA");
            S4U.classList.remove("act");
        }; 
        if(!F4U.classList.contains("disA")){
            F4U.classList.add("disA");
            F4U.classList.remove("act");
        };
    };
    if(S5Count>=1){
        if(!S5S.classList.contains("act")){
            S5S.classList.add("act");
            S5S.classList.remove("disA");
        };
    }
    else{
        if(!S5S.classList.contains("disA")){
            S5S.classList.add("disA");
            S5S.classList.remove("act");
        }
    };
    if(F5Count>=1){
        if(!F5S.classList.contains("act")){
            F5S.classList.add("act");
            F5S.classList.remove("disA");
        };
    }
    else{
        if(!F5S.classList.contains("disA")){
            F5S.classList.add("disA");
            F5S.classList.remove("act");
        }
    };

        //k. game over
    if(Money<0){
        GO()
    };
    if(SProfit<1){
        GO()
    };
};
    //3. Timer
function main(){
    Timer=setInterval(timerAction, 1000);
};
//C. Buttons
    //1. Pause and Play
PsPl.addEventListener("click",function(){
    if(!gameOver){
        if(!Play){
            PsPl.innerText ="PAUSE";
            Play=true;
            main();
        }
        else{
            PsPl.innerText ="PLAY";
            Play=false;
            clearInterval(Timer);
        };
    };
});
    //2. Restarting
Rst.addEventListener("click",function(){
    window.location.reload()
});
    //3. Store Upgrades
        //a. lvl1
SB.addEventListener("click",function(){
if(Money>= 25){
    Money-= 25
    S1Count+= 1
    timerAction()
}
});
        //b. lvl2
S1U.addEventListener("click",function(){
if(Money>= 50&&S1Count>=1){
    Money-= 50
    S1Count-=1
    S2Count+= 1
    timerAction()
}
});
        //c. lvl3
S2U.addEventListener("click",function(){
    if(Money>= 100&&S2Count>=1){
        Money-= 100
        S2Count-=1
        S3Count+= 1
        timerAction()
    }
});
        //d. lvl4
S3U.addEventListener("click",function(){
    if(Money>= 200&&S3Count>=1){
        Money-= 200
        S3Count-=1
        S4Count+= 1
        timerAction()
    }
});
        //e. lvl5
S4U.addEventListener("click",function(){
    if(Money>= 400&&S4Count>=1){
        Money-= 400
        S4Count-=1
        S5Count+= 1
        timerAction()
    }
});
    //4. Store Selling
        //a. lvl1
S1S.addEventListener("click",function(){
    if(S1Count>=1){
        Money+= 12
        S1Count-=1
        timerAction()
    }
});
        //b. lvl2
S2S.addEventListener("click",function(){
    if(S2Count>=1){
        Money+= 25
        S2Count-=1
        timerAction()
    }
});
        //c. lvl3
S3S.addEventListener("click",function(){
    if(S3Count>=1){
        Money+= 50
        S3Count-=1
        timerAction()
    }
});
        //d. lvl4
S4S.addEventListener("click",function(){
    if(S4Count>=1){
        Money+= 100
        S4Count-=1
        timerAction()
    }
});
        //e. lvl5
S5S.addEventListener("click",function(){
    if(S5Count>=1){
        Money+= 200
        S5Count-=1
        timerAction()
    }
});
    //5. Factory Upgrades
        //a. lvl1
FB.addEventListener("click",function(){
    if(Money>= 25){
        Money-= 25
        F1Count+= 1
        timerAction()
    }
});
        //b. lvl2
F1U.addEventListener("click",function(){
    if(Money>= 50&&F1Count>=1){
        Money-= 50
        F1Count-=1
        F2Count+= 1
        timerAction()
    }
});
        //c. lvl3
F2U.addEventListener("click",function(){
    if(Money>= 100&&F2Count>=1){
        Money-= 100
        F2Count-=1
        F3Count+= 1
        timerAction()
    }
});
        //d. lvl4
F3U.addEventListener("click",function(){
    if(Money>= 200&&F3Count>=1){
        Money-= 200
        F3Count-=1
        F4Count+= 1
        timerAction()
    }
});
        //3. lvl5
F4U.addEventListener("click",function(){
    if(Money>= 400&&F4Count>=1){
        Money-= 400
        F4Count-=1
        F5Count+= 1
        timerAction()
    }
});
    //6. Factory Selling        
        //a. lvl1
F1S.addEventListener("click",function(){
    if(F1Count>=1){
        Money+= 12
        F1Count-=1
        timerAction()
    }
});
        //b. lvl2
F2S.addEventListener("click",function(){
    if(F2Count>=1){
        Money+= 25
        F2Count-=1
        timerAction()
    }
});
        //c. lvl3
F3S.addEventListener("click",function(){
    if(F3Count>=1){
        Money+= 50
        F3Count-=1
        timerAction()
    }
});
        //d. lvl4
F4S.addEventListener("click",function(){
    if(F4Count>=1){
        Money+= 100
        F4Count-=1
        timerAction()
    }
});
        //e. lvl5
F5S.addEventListener("click",function(){
    if(F5Count>=1){
        Money+= 200
        F5Count-=1
        timerAction()
    }
});