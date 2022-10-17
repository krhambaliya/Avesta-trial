var score1 = 0;
var score2 = 0;
function getScoreboard() {
    document.getElementById("winner").innerHTML = "";
    displayTeamScore();
    var { playing11Team1, playing11Team2 } = calculateTeamSCore();
    displayWinner(score1, score2);
    firstInningScoreBoard(playing11Team1, playing11Team2);
    secondInningScoreBoard(playing11Team2, playing11Team1);
}

var totalScoreTeam1 = document.getElementById("totalScoreTeam1");
var totalScoreTeam2 = document.getElementById("totalScoreTeam2");
function calculateTeamSCore() {
    var playing11Team1 = JSON.parse(localStorage.getItem("playing11Team1"));
    var playing11Team2 = JSON.parse(localStorage.getItem("playing11Team2"));
    teamScore(playing11Team1, totalScoreTeam1, score1);
    teamScore(playing11Team2, totalScoreTeam2, score2);
    return { playing11Team1, playing11Team2 };
}

function firstInningScoreBoard(battingTeam, bowlingTeam) {
    var list1 = document.getElementById("myListScore");
    list1.innerHTML = `<h1 style="text-align:center;"> 1st Inning </h1><h3 style="text-align:center;"> Batting</h3>`;
    printScore(battingTeam, bowlingTeam, list1, score1);
}

function secondInningScoreBoard(battingTeam, bowlingTeam) {
    var list2 = document.getElementById("myList2Score");
    list2.innerHTML = `<h1 style="text-align:center;"> 2nd Inning </h1><h3 style="text-align:center;"> Batting</h3>`;
    printScore(battingTeam, bowlingTeam, list2, score2);
}

function printScore(battingTeam, bowlingTeam, list, score) {
    battingScoreDisplay(battingTeam, score, list);
    displayBowling(list);
    bowlingScoreDisplay(bowlingTeam, list);
}


function battingScoreDisplay(battingTeam, score, list) {
    battingTeam.forEach((item) => {
        // var index = left.selectedIndex;
        if (item.name) {
            var displayPlayerDetails = `${item.name} - Run: ${item.score} / Point: ${item.point}`;
            if (item.name == Team1Cap.name || item.name == Team2Cap.name) {
                displayPlayerDetails = `${item.name} - Run: ${item.score} / Point: ${item.point * 2} - Captain(Point x 2)`;
            }
            if (item.name == Team1ViseCap.name || item.name == Team2ViseCap.name) {
                displayPlayerDetails = `${item.name} - Run: ${item.score} / Point: ${item.point * 1.5} - Vice Captain(Point x 1.5)`;
            }
            score += item.point;
            createListElement(displayPlayerDetails, list);
        }
    });
    return score;
}

function createListElement(displayPlayerDetails, list) {
    let li = document.createElement("li");
    li.innerText = displayPlayerDetails;
    list.appendChild(li);
}

function bowlingScoreDisplay(bowlingTeam,list) {
    bowlingTeam.forEach((item) => {
        if (item.wicket || item.wicket == 0) {
            var displayPlayerDetails = `${item.name} - Wicket: ${item.wicket} / Point: ${item.point}`;
            if (item.name == Team2Cap.name || item.name == Team1Cap.name) {
                displayPlayerDetails = `${item.name} - Wicket: ${item.wicket} / Point: ${(item.point) * 2} - Captain(Point x 2)`;
            }
            if (item.name == Team2ViseCap.name || item.name == Team1ViseCap.name) {
                displayPlayerDetails = `${item.name} - Wicket: ${item.wicket} / Point: ${(item.point) * 1.5} - Vice Captain(Point x 1.5)`;
            }
            createListElement(displayPlayerDetails, list);
        }
    });
}

function teamScore(teamScore, totalScorePrint, score) {
    teamScore.forEach((item) => {
        if (item.name) {
            if (item.name == Team1Cap.name || item.name == Team2Cap.name) {
                score += (item.point * 2);
                return;
            }
            if (item.name == Team1ViseCap.name || item.name == Team2ViseCap.name) {
                score += (item.point * 1.5);
                return;
            }
            score += item.point;
        }
    });
    totalScorePrint.innerHTML = score;
    if(totalScorePrint == totalScoreTeam1){score1 = score}
    if(totalScorePrint == totalScoreTeam2){score2 = score}
}

function displayTeamScore() {
    var team1Runs = localStorage.getItem("team1Runs");
    var team2Runs = localStorage.getItem("team2Runs");
    document.getElementById("ScoreTeam1").innerHTML = team1Runs;
    document.getElementById("ScoreTeam2").innerHTML = team2Runs;
    var team1 = localStorage.getItem("team1");
    var team2 = localStorage.getItem("team2");
    if (team1Runs > team2Runs) {
        document.getElementById("winner").innerHTML = team1;
    } else {
        document.getElementById("winner").innerHTML = team2;
    }
}

function displayBowling(list) {
    let li = document.createElement("li");
    li.innerHTML = `<h3 style="text-align:center;"> Bowling </h3>`;
    list.appendChild(li);
}

function displayWinner(score1, score2) {
    var team1 = localStorage.getItem("team1");
    var team2 = localStorage.getItem("team2");
    if (score1 > score2) {
        document.getElementById("winner").innerHTML = team1;
    } else {
        document.getElementById("winner").innerHTML = team2;
    }
}



