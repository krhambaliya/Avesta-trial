var Team2Cap = JSON.parse(localStorage.getItem("Team2Cap"));
var Team2ViseCap = JSON.parse(localStorage.getItem("Team2ViseCap")); 

function team2SelectionPageDataLoad() {
    playersDetailsForTeam2 = JSON.parse(localStorage.getItem(`newArray`));
    playerCounterForBowBatWC();
    displayTeamName();
    givePlayerListToSelectBox();
}

function givePlayerListToSelectBox() {
    var selectBox = document.getElementById("addItem");
    for (let i = 0; i < playersDetailsForTeam2.length; i++) {
        var option = playersDetailsForTeam2[i];
        selectBox.add(new Option(`${i + 1} ,${option.name},${option.playingRole},${option.credit}`));
    }
}

function displayTeamName() {
    teamWinner = localStorage.getItem("winnerTeam");
    team1 = localStorage.getItem("team1");
    team2 = localStorage.getItem("team2");
    if (teamWinner === team1) {
        document.getElementById("ChooseTeam").innerHTML = `${team2}`;
    } else {
        document.getElementById("ChooseTeam").innerHTML = `${team1}`;
    }
}


function startMatch() {
    if (player2SelectedTeam.length < 11) {alert("Please select 11 Player"); return;}
    if (captainAndVisecaptainCheck()) {return;}
    if(selectCaptionForDisplay()){return}
    location.href = `./playGame.html`;
}

function selectCaptionForDisplay() {
    if(document.getElementById("result1").innerHTML == "" || document.getElementById("result2").innerHTML == ""){
      alert("Please select caption")
      return true;
    }
  }

function captainAndVisecaptainCheck() {
    if(Team2Cap.name == Team2ViseCap.name) {alert("Captain and visecaptain can't be same"); return true};
}