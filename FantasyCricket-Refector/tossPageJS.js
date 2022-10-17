function displayTeam1Name() {
  document.playerDetails.player1team.value = document.playerDetails.player1.value;
}

function displayTeam2Name() {
  document.playerDetails.player2team.value = document.playerDetails.player2.value;
}

var winnerTeamName = [];
function clickFortoss() {
  if(teamNameCheck()){return};  
  if(teamNameCheckForSame()){return};  
  team1Name = document.playerDetails.player1.value;
  team2Name = document.playerDetails.player2.value;
  let random = Math.floor(Math.random() * 2);
  getTossWinner(random);
  localStorage.setItem("team1", team1Name);
  localStorage.setItem("team2", team2Name);
}

function teamNameCheck() {
  if (
    document.playerDetails.player1team.value == ""  ||
    document.playerDetails.player2team.value == "" 
  ) {
    alert("Enter valid name");
    return true;
  }
}
function teamNameCheckForSame() {
  if (
    document.playerDetails.player1team.value == "Team 1 Name" ||
    document.playerDetails.player2team.value == "Team 2 Name"
  ) {
    alert("Please Enter Name");
    return true;
  }
}


function getTossWinner(random) {
  if(random==0){displayWinnerTeam(team1Name)}
  else{displayWinnerTeam(team2Name)}
}

function displayWinnerTeam(teamName) {
  document.getElementById("result").innerHTML = `${teamName} Won the toss, wait 5 sec for next page`;
  gotoTeamSelectionPage(teamName);
  winnerTeamName.push(teamName);
  localStorage.setItem("winnerTeam", winnerTeamName);
  return winnerTeamName;
}

function gotoTeamSelectionPage(teamName) {
  const element = document.getElementById("firstPage");
  document.getElementById("click").style.visibility = "hidden";
  setTimeout(() => {
    element.style.visibility = "hidden";
    location.href = `./team1Selectionpage.html`;
    document.getElementById("ChooseTeam").innerHTML = `${teamName}`;
  }, 5000);
}
