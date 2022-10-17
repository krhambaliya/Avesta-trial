const data = [{
  name: "Virat Kohli",
  playingRole: "Batsman",
  credit: 10,
},
{
  name: "Jasprit Bumrah",
  playingRole: "Bowler",
  credit: 12,
},
{
  name: "Rohit Sharma",
  playingRole: "Batsman",
  credit: 11,
},
{
  name: "Yuzvendra Chahal",
  playingRole: "Bowler",
  credit: 9,
},
{
  name: "Mohammed Shami",
  playingRole: "Bowler",
  credit: 8,
},
{
  name: "Suryakumar Yadav",
  playingRole: "Batsman",
  credit: 9,
},
{
  name: "Prasidh Krishna",
  playingRole: "Bowler",
  credit: 7,
},
{
  name: "Hardik Pandya",
  playingRole: "Batsman",
  credit: 9,
},
{
  name: "Shikhar Dhawan",
  playingRole: "Batsman",
  credit: 8,
},
{
  name: "Ravindra Jadeja",
  playingRole: "Batsman",
  credit: 10,
},
{
  name: "Arshdeep Singh",
  playingRole: "Bowler",
  credit: 6,
},
{
  name: "Ravichandran Ashwin",
  playingRole: "Bowler",
  credit: 11,
},
{
  name: "Deepak Chahar",
  playingRole: "Bowler",
  credit: 9,
},
{
  name: "Ruturaj Gaikwad",
  playingRole: "Batsman",
  credit: 8,
},
{
  name: "Deepak Hooda",
  playingRole: "Batsman",
  credit: 9,
},
{
  name: "Ishan Kishan",
  playingRole: "Bowler",
  credit: 10,
},
{
  name: "Shreyas Iyer",
  playingRole: "Batsman",
  credit: 10,
},
{
  name: "Venkatesh Iyer",
  playingRole: "Wicketkeeper",
  credit: 9,
},
{
  name: "Dinesh Karthik",
  playingRole: "Wicketkeeper",
  credit: 11,
},
{
  name: "Kuldeep Yadav",
  playingRole: "Bowler",
  credit: 9,
},
{
  name: "Bhuvneshwar Kumar",
  playingRole: "Bowler",
  credit: 12,
},
{
  name: "Mohammed Siraj",
  playingRole: "Bowler",
  credit: 10,
},
{
  name: "Devdutt Padikkal",
  playingRole: "Batsman",
  credit: 9,
},
{
  name: "Rishabh Pant",
  playingRole: "Wicketkeeper",
  credit: 10,
},
{
  name: "Moeen Ali",
  playingRole: "Bowler",
  credit: 9,
},
{
  name: "James Anderson",
  playingRole: "Bowler",
  credit: 12,
},
{
  name: "Jonny Bairstow",
  playingRole: "Batsman",
  credit: 11,
},
{
  name: "Sam Billings",
  playingRole: "Batsman",
  credit: 10,
},
{
  name: "Stuart Broad",
  playingRole: "Bowler",
  credit: 9,
},
{
  name: "Rory Burns",
  playingRole: "Bowler",
  credit: 8,
},
{
  name: "Jos Buttler",
  playingRole: "Batsman",
  credit: 10,
},
{
  name: "Zak Crawley",
  playingRole: "Batsman",
  credit: 9,
},
{
  name: "Sam Curran",
  playingRole: "Bowler",
  credit: 8,
},
{
  name: "Tom Curran",
  playingRole: "Bowler",
  credit: 7,
},
{
  name: "Chris Jordan",
  playingRole: "Bowler",
  credit: 11,
},
{
  name: "Jack Leach",
  playingRole: "Batsman",
  credit: 10,
},
{
  name: "Liam Livingstone",
  playingRole: "Batsman",
  credit: 12,
},
{
  name: "Reece Topley",
  playingRole: "Bowler",
  credit: 11,
},
{
  name: "David Willey",
  playingRole: "Wicketkeeper",
  credit: 9,
},
{
  name: "Joe Root",
  playingRole: "Batsman",
  credit: 9,
},
{
  name: "Ben Stokes",
  playingRole: "Batsman",
  credit: 10,
},
{
  name: "Pat Cummins",
  playingRole: "Bowler",
  credit: 11,
},
{
  name: "Aaron Finch",
  playingRole: "Batsman",
  credit: 10,
},
{
  name: "Cameron Green",
  playingRole: "Batsman",
  credit: 9,
},
{
  name: "Josh Hazlewood",
  playingRole: "Bowler",
  credit: 9,
},
{
  name: "Travis Head",
  playingRole: "Wicketkeeper",
  credit: 8,
},
{
  name: "Usman Khawaja",
  playingRole: "Batsman",
  credit: 11,
},
{
  name: "Marnus Labuschagne",
  playingRole: "Bowler",
  credit: 10,
},
{
  name: "Nathan Lyon",
  playingRole: "Bowler",
  credit: 9,
},
];

var creditRemaining = 100;
var bowlerCount = 0;
var batsmanCount = 0;
var wkCount = 0;
var displayBowlerCount = document.getElementById("bowCount");
var displayBatsmanCount = document.getElementById("batCount");
var displayWicketKeeperCount = document.getElementById("wkCOunt");
var Team1Cap;
var Team2Cap;
var Team1ViseCap;
var Team2ViseCap;

function team1SelectionPageDataLoad(selectBox) {
  var teamWinner = localStorage.getItem("winnerTeam");
  document.getElementById("ChooseTeam").innerHTML = `${teamWinner}`;
  playerCounterForBowBatWC();
  givePlayerListToSelectBox(selectBox);
}

var creditRem = 100;
var credit;
function remainingPlayerSelect(leftSideSelectBoxPlayerDetails, rightSideSelectBoxPlayerDetails) {
  var leftSideSelectionBox = document.getElementById("addItem");
  var rightSideSelectionBox = document.getElementById("selectedItem");
  var index = leftSideSelectionBox.selectedIndex;
  if (index == -1) return;
  var displayPlayerDetails = `${rightSideSelectBoxPlayerDetails.length + 1}:${leftSideSelectBoxPlayerDetails[index].name},${leftSideSelectBoxPlayerDetails[index].playingRole
    },${leftSideSelectBoxPlayerDetails[index].credit}`;
  if (teamLengthCheck(rightSideSelectBoxPlayerDetails)) { return };
  if (checkCredit(leftSideSelectBoxPlayerDetails, index)) { return };
  if (checkPlayerRole(leftSideSelectBoxPlayerDetails, index)) { return };
  creditRem = creditRem - leftSideSelectBoxPlayerDetails[index].credit;
  rightSideSelectBoxPlayerDetails.push(leftSideSelectBoxPlayerDetails[index]);
  printPlayerCounter();
  addPlayerDetailsInTeam(rightSideSelectionBox, displayPlayerDetails, leftSideSelectionBox, index, leftSideSelectBoxPlayerDetails);
}

function teamLengthCheck(rightSideSelectBoxPlayerDetails) {
  if (rightSideSelectBoxPlayerDetails.length == 11) { alert("only 11 slected"); return true };
}

function checkCredit(leftSideSelectBoxPlayerDetails, index) {
  if (creditRem - leftSideSelectBoxPlayerDetails[index].credit < 0) { alert("Cant have more then 100 crredit"); return true; }
}

function checkPlayerRole(leftSideSelectBoxPlayerDetails, index, rightSideSelectBoxPlayerDetails) {
  if (leftSideSelectBoxPlayerDetails[index].playingRole == "Bowler") {
    if (bowlerCount == 5) { alert("Already pick 5 Bowler"); return true; }
    bowlerCount++;
  }
  if (leftSideSelectBoxPlayerDetails[index].playingRole == "Batsman") {
    if (batsmanCount == 5) { alert("Already pick 5 Batsman"); return true; }
    batsmanCount++;
  }
  if (leftSideSelectBoxPlayerDetails[index].playingRole == "Wicketkeeper") {
    if (wkCount == 1) { alert("Already pick 1 Wicketkeeper"); return true; }
    wkCount++;
  }
}

var playersDetailsForTeam1 = [];
var playersDetailsForTeam2 = [];
function addPlayerDetailsInTeam(rightSideSelectionBox, displayPlayerDetails, leftSideSelectionBox, index, leftSideSelectBoxPlayerDetails) {
  rightSideSelectionBox.add(new Option(displayPlayerDetails));
  leftSideSelectionBox.remove(index);
  leftSideSelectBoxPlayerDetails.splice(index, 1);
  if (leftSideSelectBoxPlayerDetails == playersDetailsForTeam1) { localStorage.setItem("newArray", JSON.stringify(leftSideSelectBoxPlayerDetails)); }
}

function printPlayerCounter() {
  displayBowlerCount.innerHTML = bowlerCount;
  displayBatsmanCount.innerHTML = batsmanCount;
  displayWicketKeeperCount.innerHTML = wkCount;
  var remCredit = document.getElementById("remainingCredit");
  remCredit.innerHTML = creditRem;
}

function remainingPlayerdeSelect(leftSideSelectBoxPlayerDetails, rightSideSelectBoxPlayerDetails) {
  var leftSideSelectionBox = document.getElementById("addItem");
  var rightSideSelectionBox = document.getElementById("selectedItem");
  var index = rightSideSelectionBox.selectedIndex;
  var displayPlayerDetails = `${leftSideSelectBoxPlayerDetails.length + 1}:${rightSideSelectBoxPlayerDetails[index].name},${rightSideSelectBoxPlayerDetails[index].playingRole},${rightSideSelectBoxPlayerDetails[index].credit}`;
  if (index == -1) return;
  decreaseCountByRole(rightSideSelectBoxPlayerDetails, index);
  removePlayerDetailsFromTeam(rightSideSelectBoxPlayerDetails, index, leftSideSelectionBox, displayPlayerDetails, leftSideSelectBoxPlayerDetails, rightSideSelectionBox);
  printPlayerCounter();
}

function decreaseCountByRole(rightSideSelectBoxPlayerDetails, index) {
  if (rightSideSelectBoxPlayerDetails[index].playingRole == "Bowler") { bowlerCount--; }
  if (rightSideSelectBoxPlayerDetails[index].playingRole == "Batsman") { batsmanCount--; }
  if (rightSideSelectBoxPlayerDetails[index].playingRole == "Wicketkeeper") { wkCount--; }
}

function removePlayerDetailsFromTeam(rightSideSelectBoxPlayerDetails, index, leftSideSelectionBox, displayPlayerDetails, leftSideSelectBoxPlayerDetails, rightSideSelectionBox) {
  creditRem = creditRem + rightSideSelectBoxPlayerDetails[index].credit;
  leftSideSelectionBox.add(new Option(displayPlayerDetails));
  leftSideSelectBoxPlayerDetails.push(rightSideSelectBoxPlayerDetails[index]);
  rightSideSelectBoxPlayerDetails.splice(index, 1);
  rightSideSelectionBox.remove(index);
}

function playerCounterForBowBatWC() {
  displayBowlerCount.innerHTML = 0;
  displayBatsmanCount.innerHTML = 0;
  displayWicketKeeperCount.innerHTML = 0;
  var remCredit = document.getElementById("remainingCredit");
  remCredit.innerHTML = 100;
}

function givePlayerListToSelectBox() {
  var selectBox = document.getElementById("addItem");
  for (let i = 0; i < data.length; i++) {
    var option = data[i];
    selectBox.add(new Option(`${i + 1} ,${option.name},${option.playingRole},${option.credit}`));
    playersDetailsForTeam1.push(option);
  }
}

var player1SelectedTeam = [];
var player2SelectedTeam = [];
function chooseCaptainAndViseCaptain(rightSideSelectBoxPlayerDetails) {
  if (rightSideSelectBoxPlayerDetails == player1SelectedTeam) {
    localStorage.setItem("player1SelectedTeam", JSON.stringify(player1SelectedTeam))
  };
  if (rightSideSelectBoxPlayerDetails == player2SelectedTeam) {
    localStorage.setItem("player2SelectedTeam", JSON.stringify(player2SelectedTeam))
  };
  if (rightSideSelectBoxPlayerDetails.length < 11) {
    alert("Please select 11 Player");
    return;
  }
  listOptionForCaptionAndViseSelection(rightSideSelectBoxPlayerDetails);
}

function listOptionForCaptionAndViseSelection(rightSideSelectBoxPlayerDetails) {
  document.getElementById("selectedCap").innerHTML = null;
  document.getElementById("selectedViseCap").innerHTML = null;
  let optionList = document.getElementById("selectedCap").options;
  let optionList2 = document.getElementById("selectedViseCap").options;
  giveOptionList(rightSideSelectBoxPlayerDetails, optionList);
  giveOptionList(rightSideSelectBoxPlayerDetails, optionList2);
}

function giveOptionList(rightSideSelectBoxPlayerDetails, listOfOption) {
  rightSideSelectBoxPlayerDetails.forEach((option) => listOfOption.add(
    new Option(`${option.name},${option.playingRole},${option.credit}`)
  ));
}

function selectCaptain(rightSideSelectBoxPlayerDetails, teamCaptain) {
  var selectedCap = document.getElementById("selectedCap").selectedIndex;
  var teamCap = rightSideSelectBoxPlayerDetails[selectedCap];
  document.getElementById("result1").innerHTML = `${teamCap.name}`;
  setCaptainForTeamLocalTeam(rightSideSelectBoxPlayerDetails, teamCap);
}

function setCaptainForTeamLocalTeam(rightSideSelectBoxPlayerDetails, teamCap) {
  if (rightSideSelectBoxPlayerDetails == player1SelectedTeam) {
    Team1Cap = teamCap;
    localStorage.setItem("Team1Cap", JSON.stringify(teamCap));
  }
  if (rightSideSelectBoxPlayerDetails == player2SelectedTeam) {
    Team2Cap = teamCap;
    localStorage.setItem("Team2Cap", JSON.stringify(teamCap));
  }
}

function selectVisecaptain(rightSideSelectBoxPlayerDetails, teamCaptain, teamViseCaptain) {
  var selectedCap = document.getElementById("selectedViseCap").selectedIndex;
  // teamCap = JSON.parse(localStorage.getItem(`${teamCaptain}`));
  var teamVisecap = rightSideSelectBoxPlayerDetails[selectedCap];
  document.getElementById("result2").innerHTML = `${teamVisecap.name}`;
  if (teamCaptain.name == teamVisecap.name) {
    alert("Captain and ViseCaptain can't be same");
    return;
  }
  setViseCaptainForTeamLocalTeam(rightSideSelectBoxPlayerDetails, teamVisecap);
}

function setViseCaptainForTeamLocalTeam(rightSideSelectBoxPlayerDetails, teamVisecap) {
  if (rightSideSelectBoxPlayerDetails == player1SelectedTeam) {
    Team1ViseCap = teamVisecap;
    localStorage.setItem("Team1ViseCap", JSON.stringify(teamVisecap));
  }
  if (rightSideSelectBoxPlayerDetails == player2SelectedTeam) {
    Team2ViseCap = teamVisecap;
    localStorage.setItem("Team2ViseCap", JSON.stringify(teamVisecap));
  }
}

function team2Selection() {
  if (player1SelectedTeam.length < 11) { alert("Please select 11 Player"); return; }
  var name1 = document.getElementById("selectedCap");
  var name2 = document.getElementById("selectedViseCap");
  if(selectCaptionForDisplay()){return}
  if (name1.selectedIndex == name2.selectedIndex) {
    alert("Captain and visecaptain cannot be same");
    return;
  }
  location.href = `./team2Selectionpage.html`;
}

function selectCaptionForDisplay() {
  if(document.getElementById("result1").innerHTML == "" || document.getElementById("result2").innerHTML == ""){
    alert("Please select caption")
    return true;
  }
}