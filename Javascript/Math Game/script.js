var playing = false;
var score=0; 
var timeremaining=60;
var myCounter;
var number1;
var number2;

document.getElementById("startGame").onclick = function(){
    document.getElementById("startGame").style.backgroundColor = 'rgb(18,149,69)'
    if(playing==true){
        location.reload();
        
    }else{
        playing = true;
        score++;
        document.getElementById("scorevalue").innerHTML = score;
        document.getElementById("time").style.display = "block";
        document.getElementById("startGame").innerHTML = "Reset Game";
        document.getElementById("timevalue").innerHTML = timeremaining;
        document.getElementById("textbox2").style.color = 'rgb(0,0,0)';
        
        
        startCountdown();
        generating();
    

    }

}
function startCountdown(){
   
    myCounter = setInterval(function(){timeremaining-=1; document.getElementById("timevalue").innerHTML = timeremaining;
if(timeremaining==0){
    stopCountdown();
    playing=false;
}},1000);
}
function stopCountdown(){
    document.getElementById("gameOver").style.display = "block";
    document.getElementById("time").style.display = "none";
    clearInterval(myCounter);
    playing=false;
}
function generating(){
    var good=number1*number2;
    number1 = 1+ Math.round(Math.random()*9);
    number2 = 1+ Math.round(Math.random()*9);
    var good=number1*number2;
    document.getElementById("numbers").innerHTML = number1 + "x" + number2;
    var correctPossition = 1+ Math.round(Math.random()*3);
    document.getElementById("box"+correctPossition).innerHTML =good;


var answear = [good];
    for(i=1;i<5;i++){
       
        if(i !=correctPossition){
            var wrong;
            do{
               wrong =(1+ Math.round(Math.random()*9))*(1+ Math.round(Math.random()*9));
            }
            while(answear.indexOf(wrong)>-1){
                document.getElementById("box"+i).innerHTML = wrong;
                answear.push(wrong)
        }
    
    }
}
function hide(id){
    document.getElementById(id).style.display = "none";
}
function show(id){
    document.getElementById(id).style.display = "block";
}

for(i=1;i<5;i++){
    var score=0;
    document.getElementById("box" + i).onclick = function(){
        if(playing== true){
            if(this.innerHTML == number1*number2){
                score++;
                document.getElementById("scorebox").innerHTML = "<p>Score: " + score+ " </p>" ;
            
                hide("incorrect");
                 show("correct");
                 setTimeout(function(){hide("correct")},1000);
            generating();
            }else{
                hide("correct");
                show("incorrect");
                setTimeout(function(){hide("incorrect")},1000);
        
            }
        
        }

    }
}
}
