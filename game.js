var score=[0,1];

var team1={
    name:"Arsenal",
    goal:[],
    score:0
};

var team2={
    name:"Barcelona",
    goal:[],
    score:0
};

var toss;
window.onload = () =>{
    selectToss(); //for deciding the strike
    updateButtonText(); //to update text on button
    updateNames(); //to update the teams playing
    updateScore(); //to update the score of the playing team
}

var selectToss =() =>{
    toss= Math.round(Math.random())+1;
    console.log(toss);
}

var updateButtonText = () =>{
    var button=document.getElementById("strike-button");
    console.log(button);
    button.textContent=`${toss===1?team1.name:team2.name} Penalty Kick`;
}

var updateNames =() =>{
    document.getElementById("team-1-name").textContent=team1.name;
    document.getElementById("team-2-name").textContent=team2.name;
}

var updateScore =() =>{
    document.getElementById("team-1-score").textContent=team1.score;
    document.getElementById("team-2-score").textContent=team2.score;
}