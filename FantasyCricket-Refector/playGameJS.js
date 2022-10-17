var {
    player1Team,
    player2Team,
    playing11Team1,
    playing11Team2,
    Team1Cap,
    Team1ViseCap,
    Team2Cap,
    Team2ViseCap,
} = getItemFromLocalStorage();

function getItemFromLocalStorage() {
    var player1Team = JSON.parse(localStorage.getItem("player1SelectedTeam"));
    var player2Team = JSON.parse(localStorage.getItem("player2SelectedTeam"));
    var playing11Team1 = player1Team; //JSON.parse(localStorage.getItem("playing11Team1"));
    var playing11Team2 = player2Team; //JSON.parse(localStorage.getItem("playing11Team2"));
    var Team1Cap = JSON.parse(localStorage.getItem("Team1Cap"));
    var Team1ViseCap = JSON.parse(localStorage.getItem("Team1ViseCap"));
    var Team2Cap = JSON.parse(localStorage.getItem("Team2Cap"));
    var Team2ViseCap = JSON.parse(localStorage.getItem("Team2ViseCap"));
    return {
        player1Team,
        player2Team,
        playing11Team1,
        playing11Team2,
        Team1Cap,
        Team1ViseCap,
        Team2Cap,
        Team2ViseCap,
    };
}

function matchPlayingPageDataLoad() {
    getItemFromLocalStorage();
    displayTeamName();
    shortPlayerByPlayingRole(player1Team);
    shortPlayerByPlayingRole(player2Team);
    displayTeamCaptianAndvisecaptain();

}

function displayTeamCaptianAndvisecaptain() {
    var list = document.getElementById("myList");
    var list2 = document.getElementById("myList2");
    displayCaptainAndViseCaptainInTeam(list, playing11Team1, Team1Cap, Team1ViseCap);
    displayCaptainAndViseCaptainInTeam(list2, playing11Team2, Team2Cap, Team2ViseCap);
}

function displayCaptainAndViseCaptainInTeam(playerList, playerDetails, captain, viseCaptain) {

    playerDetails.forEach((item) => {
        if (item.name) {
            var displayPlayerDetails = `${item.name},${item.playingRole},${item.credit}`;
            if (item.name == captain.name) {
                displayPlayerDetails = `${item.name},${item.playingRole},${item.credit} - Captain(Point x 2)`;
            }
            if (item.name == viseCaptain.name) {
                displayPlayerDetails = `${item.name},${item.playingRole},${item.credit} - Vice Captain(Point x 1.5)`;
            }
            let li = document.createElement("li");
            li.innerText = displayPlayerDetails;
            playerList.appendChild(li);
        }
    });
}

function shortPlayerByPlayingRole(playerTeam) {
    const teamBowler = playerTeam.filter((word) => word.playingRole == "Bowler");
    const teamBatsman = playerTeam.filter((word) => word.playingRole == "Batsman");
    const teamWK = playerTeam.filter((word) => word.playingRole == "Wicketkeeper");
    var newPlayingTeam = teamWK.concat(teamBatsman, teamBowler);
    playerTeam.forEach((item) => (item.score = 0));
    playerTeam.forEach((item) => (item.point = 0));
    setPlayingTeamToLocalStorage(playerTeam, newPlayingTeam);
}

function setPlayingTeamToLocalStorage(playerTeam, newPlayingTeam) {
    if (playerTeam == player1Team) {
        playing11Team1 = newPlayingTeam;
        localStorage.setItem("playing11Team1", JSON.stringify(newPlayingTeam));
    }
    if (playerTeam == player2Team) {
        playing11Team2 = newPlayingTeam;
        localStorage.setItem("playing11Team2", JSON.stringify(newPlayingTeam));
    }
}

function displayTeamName() {
    var teamWinner = localStorage.getItem("winnerTeam");
    var team1 = localStorage.getItem("team1");
    var team2 = localStorage.getItem("team2");
    if (teamWinner === team1) {
        document.getElementById("team1").innerHTML = `<h3>${team1}</h3>`;
        document.getElementById("team2").innerHTML = `<h3>${team2}</h3>`;
    } else {
        document.getElementById("team1").innerHTML = `<h2>${team2}</h2>`;
        document.getElementById("team2").innerHTML = `<h2>${team1}</h2>`;
    }
}

var scoreBoard = document.getElementById("scoreBoard");
var ballCount = 0;
var overCount = 0;
var wicket = 0;
var bowlerChange = 10;
var singleRun = 0;
var dblRun = 0;
var threeRun = 0;
var boundrey = 0;
var sixRun = 0;
var dotBallCount = 0;
var individualRunCount = 0;
var individualFantasyPointCount = 0;
var bowlerFantasyPoint = 0;
var time = new Date();
var wicketCounter = 0;

function hitAndGetrun(battingTeam, bowlingTeam) {
    var team1Runs = document.getElementById("runs1").innerHTML;
    var team2Runs = document.getElementById("runs2").innerHTML;
    scoreBoard.scrollTop = scoreBoard.scrollHeight;
    time.setSeconds(time.getSeconds() + 5);
    completeOverThenResetData(bowlingTeam);
    countTotalRunsAndFantasyPoint();
    if (changeInning(battingTeam,team1Runs ,team2Runs)) { return }
    getRuns(battingTeam, bowlingTeam);
    displayScore(battingTeam, team1Runs, team2Runs);
}


function displayScore(battingTeam) {
    totalRun = singleRun * 1 + dblRun * 2 + threeRun * 3 + boundrey * 4 + sixRun * 6;
    if (battingTeam === playing11Team1) {
        document.getElementById("runs1").innerHTML = `${totalRun} / ${wicket} - Over ${overCount}.${ballCount}`;
        localStorage.setItem("team1Runs", document.getElementById("runs1").innerHTML);
    } else {
        document.getElementById("runs2").innerHTML = `${totalRun} / ${wicket} - Over ${overCount}.${ballCount}`;
        localStorage.setItem("team2Runs", document.getElementById("runs2").innerHTML);
    }
}

function changeInning(battingTeam , team1Runs ,team2Runs) {
    if (overCount > 4) {
        individualRunCount = 0;
        individualFantasyPointCount = battingTeam[wicket].point;
        countTotalRunsAndFantasyPoint();
        battingTeam.push((battingTeam[wicket].score = individualRunCount));
        playeroleIsBowlrThenAddBattingAndBowlingPoint(battingTeam);
        setTeamScoreToLocalStorage(battingTeam);
        displayScore(battingTeam, team1Runs, team2Runs);
        if(battingTeam == playing11Team1){resetScoreForNextInnings()};
        inningOverMessgage(battingTeam);
        return true;
    }
}

function inningOverMessgage(battingTeam) {
    if (battingTeam == playing11Team1) {displayInningOverMessage();} 
    if(battingTeam == playing11Team2){ displayMatchFinishMassage(); return;}
}

function displayMatchFinishMassage() {
    scoreBoard.innerHTML += "\n";
    scoreBoard.innerHTML += "Match finished \n";
    scoreBoard.innerHTML += " \n";
    alert("Match finish");
    location.href = `./scoreBoard.html`;
    document.getElementById("selectBut2").style.visibility = "hidden";
}

function displayInningOverMessage() {
    alert("Your inning is overCount");
    scoreBoard.innerHTML += "\n";
    scoreBoard.innerHTML += "New inning stared  \n";
    scoreBoard.innerHTML += " \n";
    document.getElementById("selectBut2").style.visibility = "visible";
    document.getElementById("selectBut").style.visibility = "hidden";
}

function setTeamScoreToLocalStorage(battingTeam,bowlingTeam) {
    if (battingTeam == playing11Team1 || bowlingTeam == playing11Team2 ) {
        localStorage.setItem("playing11Team1", JSON.stringify(battingTeam));
    } 
    if (battingTeam == playing11Team2  || bowlingTeam == playing11Team2 ) {
        localStorage.setItem("playing11Team2", JSON.stringify(battingTeam));
    }
}

function playeroleIsBowlrThenAddBattingAndBowlingPoint(battingTeam) {
    if (battingTeam[wicket].playingRole == "Bowler") {
        battingTeam.push(
            (battingTeam[wicket].point = individualRunCount + individualFantasyPointCount)
        );
    } else {
        battingTeam.push(
            (battingTeam[wicket].point = individualFantasyPointCount)
        );
    }
}

var totalScoreCount = [];
function resetScoreForNextInnings() {
    ballCount = 0;
    overCount = 0;
    wicket = 0;
    bowlerChange = 10;
    singleRun = 0;
    dblRun = 0;
    threeRun = 0;
    boundrey = 0;
    sixRun = 0;
    individualRunCount = 0;
    wicketCounter = 0;
    totalScoreCount = [];
}

function countTotalRunsAndFantasyPoint() {
    for (let i = 0; i < totalScoreCount.length; i++) {
        individualRunCount += totalScoreCount[i];
        countFantasyPoint(i);
    }
}

function countFantasyPoint(i) {
    if (totalScoreCount[i] == 1) { individualFantasyPointCount += 2; }
    if (totalScoreCount[i] == 2) { individualFantasyPointCount += 3; }
    if (totalScoreCount[i] == 3) { individualFantasyPointCount += 4; }
    if (totalScoreCount[i] == 4) { individualFantasyPointCount += 5; }
    if (totalScoreCount[i] == 6) { individualFantasyPointCount += 8; }
}

function completeOverThenResetData(bowlingTeam) {
    if (ballCount == 6) {
        bowlingTeam.push((bowlingTeam[bowlerChange].wicket = wicketCounter));
        bowlingTeam.push((bowlingTeam[bowlerChange].point = bowlerFantasyPoint));
        setWicketCountInTeamDetals(bowlingTeam);
        resetDataforNextOver(bowlingTeam);
    }
}

function resetDataforNextOver(bowlingTeam) {
    wicketCounter = 0;
    ballCount = 0;
    dotBallCount = 0;
    bowlerChange--;
    bowlerFantasyPoint = (bowlingTeam[bowlerChange].point);
    overCount++;
}

function setWicketCountInTeamDetals(bowlingTeam) {
    if (bowlingTeam == playing11Team1) { localStorage.setItem("playing11Team1", JSON.stringify(bowlingTeam)); }
    if (bowlingTeam == playing11Team2) { localStorage.setItem("playing11Team2", JSON.stringify(bowlingTeam)); }
}

function getRuns(battingTeam, bowlingTeam) {
    var run = Math.floor(Math.random() * 7);
    switch (run) {
        case 0:
            // setTimeout(() => {
            scoreBoard.innerHTML += `${overCount}.${ballCount + 1} - ${time.toLocaleString()} - Wicket \n`;
            wicket++;
            bowlerFantasyPoint += 10;
            increaseBallCount(battingTeam, bowlingTeam);
            individualRunCount = 0;
            individualFantasyPointCount = battingTeam[wicket - 1].point;
            countTotalRunsAndFantasyPoint();
            if (individualRunCount == 0) { individualFantasyPointCount = -2; }
            wicketCounter++;
            battingTeam.push((battingTeam[wicket - 1].score = individualRunCount));
            battingTeam.push((battingTeam[wicket - 1].point = individualFantasyPointCount));
            setTeamScoreToLocalStorage(battingTeam);
            // if (battingTeam === playing11Team1 || battingTeam === playing11Team2) { localStorage.setItem("playing11Team1", JSON.stringify(battingTeam)) }
            // if (bowlingTeam === playing11Team2 || bowlingTeam === playing11Team1) { localStorage.setItem("playing11Team2", JSON.stringify(bowlingTeam)) }
            // localStorage.setItem("indiScore", indiScore);
            totalScoreCount.splice(0, totalScoreCount.length);
            document.getElementById("selectBut").disabled = false;
            // }, 1000);
            break;
        case 1:
            // setTimeout(() => {
            scoreBoard.innerHTML += `${overCount}.${ballCount + 1} - ${time.toLocaleString()} - Single Run \n`;
            singleRun++;
            increaseBallCount(battingTeam, bowlingTeam);
            document.getElementById("selectBut").disabled = false;
            totalScoreCount.push(1);
            // }, 1000);
            break;
        case 2:
            // setTimeout(() => {
            scoreBoard.innerHTML += `${overCount}.${ballCount + 1} - ${time.toLocaleString()} - Double Run \n`;
            dblRun++;
            increaseBallCount(battingTeam, bowlingTeam);
            totalScoreCount.push(2);
            document.getElementById("selectBut").disabled = false;
            // }, 1000);
            break;
        case 3:
            // setTimeout(() => {
            scoreBoard.innerHTML += `${overCount}.${ballCount + 1} - ${time.toLocaleString()} - Three Runs \n`;
            threeRun++;
            increaseBallCount(battingTeam, bowlingTeam);
            totalScoreCount.push(3);
            document.getElementById("selectBut").disabled = false;
            // }, 1000);
            break;
        case 4:
            // setTimeout(() => {
            scoreBoard.innerHTML += `${overCount}.${ballCount + 1} - ${time.toLocaleString()} - Boundary \n`;
            boundrey++;
            increaseBallCount(battingTeam, bowlingTeam);
            totalScoreCount.push(4);
            document.getElementById("selectBut").disabled = false;
            // }, 1000);
            break;
        case 5:
            // setTimeout(() => {
            scoreBoard.innerHTML += `${overCount}.${ballCount + 1} - ${time.toLocaleString()} - Dot Ball \n`;
            dotBallCount++;
            bowlerFantasyPoint++;
            increaseBallCount(battingTeam, bowlingTeam);
            totalScoreCount.push(0);
            document.getElementById("selectBut").disabled = false;
            // }, 1000);
            break;

        case 6:
            // setTimeout(() => {
            scoreBoard.innerHTML += `${overCount}.${ballCount + 1} - ${time.toLocaleString()} - Six \n`;
            sixRun++;
            increaseBallCount(battingTeam, bowlingTeam);
            totalScoreCount.push(6);
            document.getElementById("selectBut").disabled = false;
            // }, 1000);
            break;
    }
}

function increaseBallCount(battingTeam, bowlingTeam) {
    batsman = document.getElementById("batsman")
    bowler = document.getElementById("bowler")
    batsman.innerHTML = battingTeam[wicket].name;
    bowler.innerHTML = bowlingTeam[bowlerChange].name;
    ballCount++;
}

