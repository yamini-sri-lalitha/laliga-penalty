var score=[0,1];

var team1={
    name:"Arsenal",
    goal:[],
    score:0
};

var team2={
    name:"liverpool",
    goal:[],
    score:0
};

var team3={
    name:"chelsea",
    goal:[],
    score:0
};

var team4={
    name:"real madrid",
    goal:[],
    score:0
};

var team5={
    name:"liverpool",
    goal:[],
    score:0
};

var team6={
    name:"chelsea",
    goal:[],
    score:0
};



var toss,toss1,toss2;
window.onload = () =>{
    selectToss(); //for deciding the strike
    updateButtonText(); //to update text on button
    updateNames(); //to update the teams playing
    updateScore(); //to update the score of the playing team
    selectToss1(); 
    updateButtonText1(); 
    updateNames1(); 
    updateScore1(); 
    selectToss2(); 
    updateButtonText2(); 
    updateNames2(); 
    updateScore2(); 
}

//for semifinal 1
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
    // update goals on score board
    team1.goal.forEach((goal,index)=>{
        teamOnegoalElement[index].textContent = goal;
    });
    team2.goal.forEach((goal,index)=>{
        teamTwogoalElement[index].textContent = goal;
    });
}; 

//for semifinal 2
var selectToss1 =() =>{
    toss1= Math.round(Math.random())+1;
    console.log(toss1);
}

var updateButtonText1 = () =>{
    var button1=document.getElementById("strike-button1");
    console.log(button1);
    var result1=document.getElementById("result1");
    result1.style.visibility=" ";
    if(team3.goal.length==5&&team4.goal.length==5){
        button1.remove();
        result1.textContent = team3.score === team4.score ? `Its a draw`: `${team3.score > team4.score? team3.name:team4.name} Wins`;
    }
    else{
        // check if the strike is over
        toss1 = team3.goal.length ===5 ? 2 : team4.goal.length === 5 ? 1 : toss1;
    }
    button1.textContent=`${toss1===1?team3.name:team4.name} Penalty Kick`;

};

var updateNames1 =() =>{
    document.getElementById("team-3-name").textContent=team3.name;
    document.getElementById("team-4-name").textContent=team4.name;
    
}

var updateScore1 =() =>{
    document.getElementById("team-3-score").textContent=team3.score;
    document.getElementById("team-4-score").textContent=team4.score;
    updateGoal1();
}

// strike button click
var handleStrikeButtonClick1 =() =>{
    var goal=score[Math.floor(Math.random()*score.length)];
    console.log(goal);
// check which team is on strike
if(toss1===1){
    team3.goal.push(goal);
    team3.score=calculateScore(team3.goal); //updating score of team3
}
else{
    team4.goal.push(goal);
    team4.score=calculateScore(team4.goal); //updating score of team4
}
updateButtonText1();
updateScore1();
}
var calculateScore1=(goal)=>{
    console.log("calculate score method");
    return goal.map(num=>{
        return num=='w'?0:num;
    }).reduce((total,num)=>total+num);
};

var updateGoal1 = () =>{
    var teamthreegoalElement = document.getElementById("team-3-round-goal").children;
    var teamfourgoalElement = document.getElementById("team-4-round-goal").children;
    // update runs on score board
    team3.goal.forEach((goal,index)=>{
        teamthreegoalElement[index].textContent = goal;
    });
    team4.goal.forEach((goal,index)=>{
        teamfourgoalElement[index].textContent = goal;
    });
}; 


//for final
var selectToss2=() =>{
    toss2= Math.round(Math.random())+1;
    console.log(toss2);
}

var updateButtonText2 = () =>{
    var button2=document.getElementById("strike-button2");
    console.log(button2);
    var result2=document.getElementById("result2");
    result2.style.visibility=" ";
    if(team5.goal.length==5&&team6.goal.length==5){
        button2.remove();
        result2.textContent = team5.score === team6.score ? `Its a draw`: `${team5.score > team6.score? team5.name:team6.name} Wins`;
    }
    else{
        // check if the strike is over
        toss2 = team5.goal.length ===5 ? 2 : team6.goal.length === 5 ? 1 : toss2;
    }
    button2.textContent=`${toss2===1?team5.name:team6.name} Penalty Kick`;

};

var updateNames2 =() =>{
    document.getElementById("team-5-name").textContent=team5.name;
    document.getElementById("team-6-name").textContent=team6.name;
    
}

var updateScore2 =() =>{
    document.getElementById("team-5-score").textContent=team5.score;
    document.getElementById("team-6-score").textContent=team6.score;
    updateGoal2();
}

// strike button click
var handleStrikeButtonClick2 =() =>{
    var goal=score[Math.floor(Math.random()*score.length)];
    console.log(goal);
// check which team is on strike
if(toss2===1){
    team5.goal.push(goal);
    team5.score=calculateScore(team5.goal); //updating score of team1 
}
else{
    team6.goal.push(goal);
    team6.score=calculateScore(team6.goal); //updating score of team2
}
updateButtonText2();
updateScore2();
}
var calculateScore2=(goal)=>{
    console.log("calculate score method");
    return goal.map(num=>{
        return num=='w'?0:num;
    }).reduce((total,num)=>total+num);
};

var updateGoal2 = () =>{
    var teamFivegoalElement = document.getElementById("team-5-round-goal").children;
    var teamSixgoalElement = document.getElementById("team-6-round-goal").children;
    // update runs on score board
    team5.goal.forEach((goal,index)=>{
        teamFivegoalElement[index].textContent = goal;
    });
    team6.goal.forEach((goal,index)=>{
        teamSixgoalElement[index].textContent = goal;
    });
}; 
