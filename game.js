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
    var result=document.getElementById("result");
    result.style.visibility=" ";
    if(team1.goal.length==5&&team2.goal.length==5){
        button.remove();
        result.textContent = team1.score === team2.score ? `Its a draw`: `${team1.score > team2.score? team1.name:team2.name} Wins`;
    }
    else{
        // check if the strike is over
        toss = team1.goal.length ===5 ? 2 : team2.goal.length === 5 ? 1 : toss;
    }
    button.textContent=`${toss===1?team1.name:team2.name} Penalty Kick`;

};

var updateNames =() =>{
    document.getElementById("team-1-name").textContent=team1.name;
    document.getElementById("team-2-name").textContent=team2.name;
    
}

var updateScore =() =>{
    document.getElementById("team-1-score").textContent=team1.score;
    document.getElementById("team-2-score").textContent=team2.score;
    updateGoal();
}

// strike button click
var handleStrikeButtonClick =() =>{
    var goal=score[Math.floor(Math.random()*score.length)];
    console.log(goal);
// check which team is on strike
if(toss===1){
    team1.goal.push(goal);
    team1.score=calculateScore(team1.goal); //updating score of team1 
}
else{
    team2.goal.push(goal);
    team2.score=calculateScore(team2.goal); //updating score of team2
}
updateButtonText();
updateScore();
}
var calculateScore=(goal)=>{
    console.log("calculate score method");
    return goal.map(num=>{
        return num=='w'?0:num;
    }).reduce((total,num)=>total+num);
};

var updateGoal = () =>{
    var teamOnegoalElement = document.getElementById("team-1-round-goal").children;
    var teamTwogoalElement = document.getElementById("team-2-round-goal").children;
    // update runs on score board
    team1.goal.forEach((goal,index)=>{
        teamOnegoalElement[index].textContent = goal;
    });
    team2.goal.forEach((goal,index)=>{
        teamTwogoalElement[index].textContent = goal;
    });
}; 
