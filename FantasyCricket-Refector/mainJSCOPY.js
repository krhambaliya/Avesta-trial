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
var ar = [];

function displayTeam1Name() {
    document.playerDetails.player1team.value =
        document.playerDetails.player1.value;
}

function displayTeam2Name() {
    document.playerDetails.player2team.value =
        document.playerDetails.player2.value;
}

var team1Name;
var team2Name;
teamArr = [];

function clickFortoss() {
    team1Name = document.playerDetails.player1.value;
    localStorage.setItem("team1", team1Name);
    team2Name = document.playerDetails.player2.value;
    localStorage.setItem("team2", team2Name);
    const element = document.getElementById("firstPage");
    let random = Math.floor(Math.random() * 2) == 0;
    if (random) {
        document.getElementById(
            "result"
        ).innerHTML = `${team1Name} Won the toss, wait 5 sec for next page`;
        teamArr.push(team1Name);
        setTimeout(() => {
            element.style.visibility = "hidden";
            location.href = `./team1Selectionpage.html`;
            document.getElementById("ChooseTeam").innerHTML = `${team1Name}`;
        }, 5000);
        localStorage.setItem("winnerTeam", teamArr);
        return teamArr;
    } else {
        document.getElementById(
            "result"
        ).innerHTML = `${team2Name} Won the toss, wait 5 sec for next page`;
        teamArr.push(document.playerDetails.player2.value);
        setTimeout(() => {
            element.style.visibility = "hidden";
            location.href = `./team1Selectionpage.html`;
            document.getElementById("ChooseTeam").innerHTML = `${team2Name}`;
        }, 5000);
        localStorage.setItem("winnerTeam", teamArr);
        return teamArr;
    }
}

function loadPage() {
    var teamWinner = localStorage.getItem("winnerTeam");
    document.getElementById("ChooseTeam").innerHTML = `${teamWinner}`;
    var selectBox = document.getElementById("addItem");

    for (let i = 0; i < data.length; i++) {
        var option = data[i];
        selectBox.add(
            new Option(`${option.name},${option.playingRole},${option.credit}`)
        );
        ar.push(option);
    }

    player1Selected = [];
    var remCredit = document.getElementById("remainingCredit");
    remCredit.innerHTML = 100;
}

var i = 0;
var creditRem = 100;
var bowlerCount = 0;
var batsmanCount = 0;
var wkCount = 0;
var credit;

function selectPlayer() {
    var left = document.getElementById("addItem");
    var right = document.getElementById("selectedItem");
    var index = left.selectedIndex;
    var v = `${player1Selected.length + 1}:${ar[index].name},${ar[index].playingRole
        },${ar[index].credit}`;

    if (index == -1) return;
    credit = 0;
    var remCredit = document.getElementById("remainingCredit");
    // if (player1Selected.length < 11) {
    //     if (creditRem - ar[index].credit < 0) {
    //         alert("Cant have more then 100 crredit");
    //         return;
    //     } else {
    //         if (ar[index].playingRole == "Bowler") {
    //             if (bowlerCount == 5) {
    //                 alert("Already pick 5 Bowler");
    //                 return;
    //             }
    //             bowlerCount++;
    //         }
    //         if (ar[index].playingRole == "Batsman") {
    //             if (batsmanCount == 5) {
    //                 alert("Already pick 5 Batsman");
    //                 return;
    //             }
    //             batsmanCount++;
    //         }
    //         if (ar[index].playingRole == "Wicketkeeper") {
    //             if (wkCount == 1) {
    //                 alert("Already pick 1 Wicketkeeper");
    //                 return;
    //             }
    //             wkCount++;
    //         }
    //         creditRem = creditRem - ar[index].credit;
    //         player1Selected.push(ar[index]);
    //     }
    // } else {
    //     alert("only 11 slected");
    //     return;
    // }

    function checkPlayerCount(mainArray,playingArray){
        if (playingArray.length < 11) {
            if (creditRem - mainArray[index].credit < 0) {
                alert("Cant have more then 100 crredit");
                return;
            } else {
                if (mainArray[index].playingRole == "Bowler") {
                    if (bowlerCount == 5) {
                        alert("Already pick 5 Bowler");
                        return;
                    }
                    bowlerCount++;
                }
                if (mainArray[index].playingRole == "Batsman") {
                    if (batsmanCount == 5) {
                        alert("Already pick 5 Batsman");
                        return;
                    }
                    batsmanCount++;
                }
                if (mainArray[index].playingRole == "Wicketkeeper") {
                    if (wkCount == 1) {
                        alert("Already pick 1 Wicketkeeper");
                        return;
                    }
                    wkCount++;
                }
                creditRem = creditRem - mainArray[index].credit;
                playingArray.push(mainArray[index]);
            }
        } else {
            alert("only 11 slected");
            return;
        }
    }

    checkPlayerCount(ar,player1Selected);

    remCredit.innerHTML = creditRem;
    right.add(new Option(v));
    // remCredit.innerHTML = credit;
    // var option = data[index];
    // right.add(new Option(`${index+1}:${option.name},${option.playingRole},${option.credit}`));
    left.remove(index);
    i++;
    ar.splice(index, 1);
    // console.log("ar", ar);
    localStorage.setItem("newArr", JSON.stringify(ar));
}

function deSelectPlayer() {
    var left = document.getElementById("addItem");
    var right = document.getElementById("selectedItem");
    var index = right.selectedIndex;

    if (player1Selected[index].playingRole == "Bowler") {
        bowlerCount--;
    }
    if (player1Selected[index].playingRole == "Batsman") {
        batsmanCount--;
    }
    if (player1Selected[index].playingRole == "Wicketkeeper") {
        wkCount--;
    }
    if (index == -1) return;

    var remCredit = document.getElementById("remainingCredit");
    creditRem = creditRem + player1Selected[index].credit;
    left.add(
        new Option(
            `${player1Selected[index].name},   
            ${player1Selected[index].playingRole},
            ${player1Selected[index].credit}`
        )
    );
    ar.push(player1Selected[index]);
    player1Selected.splice(index, 1);
    right.remove(index);
    remCredit.innerHTML = creditRem;
}

function chooseCaptainAndViseCaptain() {
    localStorage.setItem("player1Select", JSON.stringify(player1Selected));
    if (player1Selected.length < 11) { alert("Please select 11 Player"); return; }
    document.getElementById("selectedCap").innerHTML = null;
    document.getElementById("selectedViseCap").innerHTML = null;
    let optionList = document.getElementById("selectedCap").options;
    let optionList2 = document.getElementById("selectedViseCap").options;

    player1Selected.forEach((option) =>
        optionList.add(
            new Option(`${option.name},${option.playingRole},${option.credit}`)
        )
    );
    player1Selected.forEach((option) =>
        optionList2.add(
            new Option(`${option.name},${option.playingRole},${option.credit}`)
        )
    );
}

function selectCaptainTeam1() {
    var selectedCap = document.getElementById("selectedCap").selectedIndex;
    getCapTeam1 = player1Selected[selectedCap];
    document.getElementById("result1").innerHTML = `${getCapTeam1.name}`;
    localStorage.setItem("Team1Cap", JSON.stringify(getCapTeam1));
}

function selectVisecaptainTeam1() {
    var selectedCap = document.getElementById("selectedViseCap").selectedIndex;
    if (player1Selected[selectedCap].name === getCapTeam1.name) {
        alert("Captain and visecaptain are not same please change");
        return;
    }
    getVisecapTeam1 = player1Selected[selectedCap];
    document.getElementById("result2").innerHTML = `${getVisecapTeam1.name}`;
    localStorage.setItem("Team1ViseCap", JSON.stringify(getVisecapTeam1));
}

function team2Selection() {
    if (player1Selected.length < 11) { alert("Please select 11 Player"); return; }
    var name1 = document.getElementById("selectedCap");
    var name2 = document.getElementById("selectedViseCap");
    if (name1.selectedIndex == name2.selectedIndex) {
        alert("Captain and visecaptain are not same please change");
        return;
    }
    location.href = `./team2Selectionpage.html`;
}
var newArray;

function loadPage2() {
    newArray = JSON.parse(localStorage.getItem("newArr"));
    teamWinner = localStorage.getItem("winnerTeam");
    team1 = localStorage.getItem("team1");
    team2 = localStorage.getItem("team2");
    bowlerCount = 0;
    bowlerCount = 0;
    wkCount = 0;
    var remCredit = document.getElementById("remainingCredit");
    remCredit.innerHTML = 100;
    if (teamWinner === team1) {
        document.getElementById("ChooseTeam").innerHTML = `${team2}`;
    } else {
        document.getElementById("ChooseTeam").innerHTML = `${team1}`;
    }
    ar2 = [];
    player2Selected = [];
    i = 0;
    var selectBox = document.getElementById("addItem2");
    for (let i = 0; i < newArray.length; i++) {
        var option = newArray[i];
        selectBox.add(
            new Option(`${option.name},${option.playingRole},${option.credit}`)
        );
        ar2.push(newArray[i]);
    }
}

function remainingPlayerSelect() {
    var left = document.getElementById("addItem2");
    var right = document.getElementById("selectedItem2");
    var index = left.selectedIndex;
    var v = `${player2Selected.length + 1}:${ar2[index].name},${ar2[index].playingRole
            },${ar2[index].credit}`;
    if (index == -1) return;
    var remCredit = document.getElementById("remainingCredit");

    if (player2Selected.length < 11) {
        if (creditRem - ar2[index].credit < 0) {
            alert("Cant have more then 100 crredit");
            return;
        } else {
            if (ar2[index].playingRole == "Bowler") {
                if (bowlerCount == 5) {
                    alert("Already pick 5 Bowler");
                    return;
                }
                bowlerCount++;
            }
            if (ar2[index].playingRole == "Batsman") {
                if (batsmanCount == 5) {
                    alert("Already pick 5 Batsman");
                    return;
                }
                batsmanCount++;
            }
            if (ar2[index].playingRole == "Wicketkeeper") {
                if (wkCount == 1) {
                    alert("Already pick 1 Wicketkeeper");
                    return;
                }
                wkCount++;
            }
            creditRem = creditRem - ar2[index].credit;
            player2Selected.push(ar2[index]);
        }
    } else {
        alert("only 11 slected");
        return;
    }

    remCredit.innerHTML = creditRem;
    right.add(new Option(v));
    // var option = data[index];
    // right.add(new Option(`${index+1}:${option.name},${option.playingRole},${option.credit}`));
    left.remove(index);
    i++;
    ar2.splice(index, 1);
    // console.log("ar", ar2);
    // localStorage.setItem('ar2', JSON.stringify(player2Selected));
}

function remainingPlayerdeSelect() {
    var left = document.getElementById("addItem2");
    var right = document.getElementById("selectedItem2");
    var index = right.selectedIndex;
    if (player2Selected[index].playingRole == "Bowler") {
        bowlerCount--;
    }
    if (player2Selected[index].playingRole == "Batsman") {
        batsmanCount--;
    }
    if (player2Selected[index].playingRole == "Wicketkeeper") {
        wkCount--;
    }
    if (index == -1) return;
    var remCredit = document.getElementById("remainingCredit");
    creditRem = creditRem + player2Selected[index].credit;
    left.add(
        new Option(
            `${player2Selected[index].name},
            ${player2Selected[index].playingRole},
            ${player2Selected[index].credit}`
        )
    );
    ar2.push(player2Selected[index]);
    player2Selected.splice(index, 1);
    right.remove(index);
    remCredit.innerHTML = creditRem;
}

function chooseCaptainAndViseCaptainTeam2() {
    localStorage.setItem("player2Selected", JSON.stringify(player2Selected));
    if (player2Selected.length < 11) { alert("Please select 11 Player"); return; }
    document.getElementById("selectedCap2").innerHTML = null;
    document.getElementById("selectedViseCap2").innerHTML = null;
    let optionList = document.getElementById("selectedCap2").options;
    let optionList2 = document.getElementById("selectedViseCap2").options;

    player2Selected.forEach((option) =>
        optionList.add(
            new Option(`${option.name},${option.playingRole},${option.credit}`)
        )
    );
    player2Selected.forEach((option) =>
        optionList2.add(
            new Option(`${option.name},${option.playingRole},${option.credit}`)
        )
    );
}

function selectCaptainTeam2() {
    var selectedCap = document.getElementById("selectedCap2");
    var index = selectedCap.selectedIndex;
    // console.log(`${player2Selected[index].name},${player2Selected[index].playingRole},${player2Selected[index].credit}`);
    getcapTeam2 = player2Selected[index];
    document.getElementById("result1").innerHTML = `${getcapTeam2.name}`;
    localStorage.setItem("Team2Cap", JSON.stringify(getcapTeam2));

}

function selectVisecaptainTeam2() {
    var selectedCap = document.getElementById("selectedViseCap2");
    var index = selectedCap.selectedIndex;
    if (player2Selected[index].name === getcapTeam2.name) {
        alert("Captain and visecaptain are not same please change");
        return;
    }
    getVisecapTeam2 = player2Selected[index];
    document.getElementById("result2").innerHTML = `${getVisecapTeam2.name}`;
    localStorage.setItem("Team2ViseCap", JSON.stringify(getVisecapTeam2));
    return getVisecapTeam2;
}

function startMatch() {
    if (player2Selected.length < 11) { alert("Please select 11 Player"); return; }
    var name1 = document.getElementById("selectedCap2");
    var name2 = document.getElementById("selectedViseCap2");
    if (name1.selectedIndex == name2.selectedIndex) {
        alert("Captain and visecaptain are not same please change");
        return;
    }
    location.href = `./playGame.html`;
}

var ball = 0;
var over = 0;
var wicket = 0;
var bowlerChange = 10;
var singleRun = 0;
var dblRun = 0;
var threeRun = 0;
var boundrey = 0;
var six = 0;
var dotBall = 0;
var fanPointPlayer = 0;
var fanPointBowler = 0;
var time = new Date();
var scoreArray = [];
var indiScore = [];
var fanIndiPoint = [];
var scoreArrayTeam2 = [];
var WicketTakkerTeam2 = [];
var indiScoreTeam2 = [];
var indiRun = 0;
var fanIndiPoint = 0;
var wicketCounter = 0;

function loadData3() {
    var player1Team = JSON.parse(localStorage.getItem("player1Select"));
    var player2Team = JSON.parse(localStorage.getItem("player2Selected"));

    var team1cap = JSON.parse(localStorage.getItem("Team1Cap"));
    var team1visecap = JSON.parse(localStorage.getItem("Team1ViseCap"));

    var team2cap = JSON.parse(localStorage.getItem("Team2Cap"));
    var team2visecap = JSON.parse(localStorage.getItem("Team2ViseCap"));

    teamWinner = localStorage.getItem("winnerTeam");
    team1 = localStorage.getItem("team1");
    team2 = localStorage.getItem("team2");

    if (teamWinner === team1) {
        document.getElementById("team1").innerHTML = `<h3>${team1}</h3>`;
        document.getElementById("team2").innerHTML = `<h3>${team2}</h3>`;
    } else {
        document.getElementById("team1").innerHTML = `<h2>${team2}</h2>`;
        document.getElementById("team2").innerHTML = `<h2>${team1}</h2>`;
    }

    var player1Team = JSON.parse(localStorage.getItem("player1Select"));
    // var player2Team = JSON.parse(localStorage.getItem('player2Selected'))
    const team1Bowler = player1Team.filter(
        (word) => word.playingRole == "Bowler"
    );
    const team1Batsman = player1Team.filter(
        (word) => word.playingRole == "Batsman"
    );
    const team1WK = player1Team.filter(
        (word) => word.playingRole == "Wicketkeeper"
    );
    var playing11Team1 = team1WK.concat(team1Batsman, team1Bowler);
    playing11Team1.forEach((item) => (item.score = 0));
    playing11Team1.forEach((item) => (item.point = 0));
    localStorage.setItem("playing11Team1", JSON.stringify(playing11Team1));

    var player2Team = JSON.parse(localStorage.getItem("player2Selected"));
    // var player2Team = JSON.parse(localStorage.getItem('player2Selected'))
    const team2Bowler = player2Team.filter(
        (word) => word.playingRole == "Bowler"
    );
    const team2Batsman = player2Team.filter(
        (word) => word.playingRole == "Batsman"
    );
    const team2WK = player2Team.filter(
        (word) => word.playingRole == "Wicketkeeper"
    );
    var playing11Team2 = team2WK.concat(team2Batsman, team2Bowler);
    playing11Team2.forEach((item) => (item.score = 0));
    playing11Team2.forEach((item) => (item.point = 0));
    localStorage.setItem("playing11Team2", JSON.stringify(playing11Team2));

    var list = document.getElementById("myList");
    playing11Team1.forEach((item) => {
        // var index = left.selectedIndex;
        var v = `${item.name},${item.playingRole},${item.credit}`;
        // if (index == -1) return;
        if (item.name == team1cap.name) {
            v = `${item.name},${item.playingRole},${item.credit} - Captain(Point x 2)`;
        }
        if (item.name == team1visecap.name) {
            v = `${item.name},${item.playingRole},${item.credit} - Vice Captain(Point x 1.5)`;
        }
        let li = document.createElement("li");
        li.innerText = v;
        list.appendChild(li);
    });
    var list2 = document.getElementById("myList2");
    playing11Team2.forEach((item) => {
        // var index = left.selectedIndex;
        var v = `${item.name},${item.playingRole},${item.credit}`;
        // if (index == -1) return;
        if (item.name == team2cap.name) {
            v = `${item.name},${item.playingRole},${item.credit} - Captain(Point x 2)`;
        }
        if (item.name == team2visecap.name) {
            v = `${item.name},${item.playingRole},${item.credit} - Vice Captain(Point x 1.5)`;
        }
        let li = document.createElement("li");
        li.innerText = v;
        list2.appendChild(li);
    });
}

function hitAndGetrun() {
    // document.getElementById("selectBut").disabled = true;
    var playing11Team1 = JSON.parse(localStorage.getItem("playing11Team1"));
    var playing11Team2 = JSON.parse(localStorage.getItem("playing11Team2"));
    var batsman = document.getElementById("batsman");
    var bowler = document.getElementById("bowler");
    var scoreBoard = document.getElementById("scoreBoard");

    scoreBoard.scrollTop = scoreBoard.scrollHeight;
    time.setSeconds(time.getSeconds() + 5);

    if (ball == 6) {
        playing11Team2.push((playing11Team2[bowlerChange].wicket = wicketCounter));
        playing11Team2.push((playing11Team2[bowlerChange].point = fanPointBowler));
        localStorage.setItem("playing11Team2", JSON.stringify(playing11Team2));
        wicketCounter = 0;
        ball = 0;
        dotBall = 0;
        // wicketCounter = 0;
        bowlerChange--;
        fanPointBowler = (playing11Team2[bowlerChange].point);
        over++;
    }
    totalRun = singleRun * 1 + dblRun * 2 + threeRun * 3 + boundrey * 4 + six * 6;
    document.getElementById(
        "runs1"
    ).innerHTML = `${totalRun} / ${wicket} - Over ${over}.${ball}`;

    if (over > 4) {
        totalRun =
            singleRun * 1 + dblRun * 2 + threeRun * 3 + boundrey * 4 + six * 6;
        var team1Runs = document.getElementById("runs1").innerHTML;
        localStorage.setItem("team1Runs", team1Runs);
        indiRun = 0;
        fanIndiPoint = playing11Team1[wicket].point;
        console.log("playing11Team1[wicket].point;", playing11Team1[wicket].point);
        // document.getElementById("runs").innerHTML = null;
        for (let i = 0; i < scoreArray.length; i++) {
            indiRun += scoreArray[i];
            if (scoreArray[i] == 1) {
                fanIndiPoint += 2;
            }
            if (scoreArray[i] == 2) {
                fanIndiPoint += 3;
            }
            if (scoreArray[i] == 3) {
                fanIndiPoint += 4;
            }
            if (scoreArray[i] == 4) {
                fanIndiPoint += 5;
            }
            if (scoreArray[i] == 6) {
                fanIndiPoint += 8;
            }
            if (scoreArrayTeam2[i] == "") {
                fanIndiPoint += 0;
            }
            //    scoreArray.splice(0,scoreArray.length)
        }
        playing11Team1.push((playing11Team1[wicket].score = indiRun));
        // playing11Team1.push((playing11Team1[wicket].point = fanIndiPoint));
        if (playing11Team1[wicket].playingRole == "Bowler") {
            playing11Team1.push(
                (playing11Team1[wicket].point = indiRun + fanIndiPoint)
            );
        } else {
            playing11Team1.push(
                (playing11Team1[wicket].point = fanIndiPoint)
            );
        }
        localStorage.setItem("playing11Team1", JSON.stringify(playing11Team1));
        alert("Your inning is over");
        ball = 0;
        over = 0;
        wicket = 0;
        bowlerChange = 10;
        singleRun = 0;
        dblRun = 0;
        threeRun = 0;
        boundrey = 0;
        six = 0;
        indiRun = 0;
        wicketCounter = 0;
        scoreBoard.innerHTML += "\n";
        scoreBoard.innerHTML += "New inning stared  \n";
        scoreBoard.innerHTML += " \n";

        document.getElementById("selectBut2").style.visibility = "visible";
        document.getElementById("selectBut").style.visibility = "hidden";
        return;
    }

    var run = Math.floor(Math.random() * 7);
    switch (run) {
        case 0:
            // setTimeout(() => {
            scoreBoard.innerHTML += `${over}.${ball + 1} - ${time.toLocaleString()} - Wicket \n`;
            wicket++;
            fanPointBowler += 10;
            batsman.innerHTML = playing11Team1[wicket].name;
            bowler.innerHTML = playing11Team2[bowlerChange].name;
            ball++;
            indiRun = 0;
            fanIndiPoint = 0;
            for (let i = 0; i < scoreArray.length; i++) {
                indiRun += scoreArray[i];
                if (scoreArray[i] == 1) {
                    fanIndiPoint += 2;
                }
                if (scoreArray[i] == 2) {
                    fanIndiPoint += 3;
                }
                if (scoreArray[i] == 3) {
                    fanIndiPoint += 4;
                }
                if (scoreArray[i] == 4) {
                    fanIndiPoint += 5;
                }
                if (scoreArray[i] == 6) {
                    fanIndiPoint += 8;
                }
            }
            if (indiRun == 0) {
                fanIndiPoint = -2;
            }
            wicketCounter++;
            playing11Team1.push((playing11Team1[wicket - 1].score = indiRun));
            playing11Team1.push((playing11Team1[wicket - 1].point = fanIndiPoint));
            localStorage.setItem("playing11Team1", JSON.stringify(playing11Team1));
            // localStorage.setItem("indiScore", indiScore);
            scoreArray.splice(0, scoreArray.length);
            document.getElementById("selectBut").disabled = false;
            // }, 1000);

            break;

        case 1:
            // setTimeout(() => {
            scoreBoard.innerHTML += `${over}.${ball + 1} - ${time.toLocaleString()} - Single Run \n`;
            batsman.innerHTML = playing11Team1[wicket].name;
            bowler.innerHTML = playing11Team2[bowlerChange].name;
            fanPointPlayer += singleRun + 1;
            singleRun++;
            ball++;
            document.getElementById("selectBut").disabled = false;
            scoreArray.push(1);
            // }, 1000);
            break;
        case 2:
            // setTimeout(() => {
            scoreBoard.innerHTML += `${over}.${ball + 1} - ${time.toLocaleString()} - Double Run \n`;
            batsman.innerHTML = playing11Team1[wicket].name;
            bowler.innerHTML = playing11Team2[bowlerChange].name;
            dblRun++;
            fanPointPlayer += dblRun * 2 + 1;
            ball++;
            scoreArray.push(2);
            document.getElementById("selectBut").disabled = false;
            // }, 1000);
            break;
        case 3:
            // setTimeout(() => {
            scoreBoard.innerHTML += `${over}.${ball + 1} - ${time.toLocaleString()} - Three Runs \n`;
            batsman.innerHTML = playing11Team1[wicket].name;
            bowler.innerHTML = playing11Team2[bowlerChange].name;
            threeRun++;
            fanPointPlayer += threeRun * 3 + 1;
            ball++;
            scoreArray.push(3);
            document.getElementById("selectBut").disabled = false;
            // }, 1000);
            break;
        case 4:
            // setTimeout(() => {
            scoreBoard.innerHTML += `${over}.${ball + 1} - ${time.toLocaleString()} - Boundary \n`;
            batsman.innerHTML = playing11Team1[wicket].name;
            bowler.innerHTML = playing11Team2[bowlerChange].name;
            boundrey++;
            fanPointPlayer += boundrey * 4 + 1;
            ball++;
            scoreArray.push(4);
            document.getElementById("selectBut").disabled = false;
            // }, 1000);
            break;
        case 5:
            // setTimeout(() => {
            scoreBoard.innerHTML += `${over}.${ball + 1} - ${time.toLocaleString()} - Dot Ball \n`;
            batsman.innerHTML = playing11Team1[wicket].name;
            bowler.innerHTML = playing11Team2[bowlerChange].name;
            dotBall++;
            fanPointBowler++;
            ball++;
            scoreArray.push(0);
            document.getElementById("selectBut").disabled = false;
            // }, 1000);
            break;

        case 6:
            // setTimeout(() => {
            scoreBoard.innerHTML += `${over}.${ball + 1} - ${time.toLocaleString()} - Six \n`;
            batsman.innerHTML = playing11Team1[wicket].name;
            bowler.innerHTML = playing11Team2[bowlerChange].name;
            six++;
            fanPointPlayer += six * 6 + 1;
            ball++;
            scoreArray.push(6);
            document.getElementById("selectBut").disabled = false;
            // }, 1000);
            break;
    }
}

function getRunForTeam2() {
    // document.getElementById("selectBut2").disabled = true;
    var playing11Team1 = JSON.parse(localStorage.getItem("playing11Team1"));
    var playing11Team2 = JSON.parse(localStorage.getItem("playing11Team2"));
    var batsman = document.getElementById("batsman");
    var bowler = document.getElementById("bowler");
    var scoreBoard = document.getElementById("scoreBoard");

    scoreBoard.scrollTop = scoreBoard.scrollHeight;
    time.setSeconds(time.getSeconds() + 5);
    if (ball == 6) {
        playing11Team1.push((playing11Team1[bowlerChange].wicket = wicketCounter));
        playing11Team1.push((playing11Team1[bowlerChange].point = fanPointBowler));
        localStorage.setItem("playing11Team1", JSON.stringify(playing11Team1));
        // fanPointBowler = 0;
        dotBall = 0;
        wicketCounter = 0;
        ball = 0;
        bowlerChange--;
        fanPointBowler = (playing11Team1[bowlerChange].point);
        over++;
    }
    totalRun = singleRun * 1 + dblRun * 2 + threeRun * 3 + boundrey * 4 + six * 6;
    document.getElementById(
        "runs2"
    ).innerHTML = `${totalRun} / ${wicket} - Over ${over}.${ball}`;
    if (over > 4) {
        totalRun =
            singleRun * 1 + dblRun * 2 + threeRun * 3 + boundrey * 4 + six * 6;
        var team2Runs = document.getElementById("runs2").innerHTML;
        localStorage.setItem("team2Runs", team2Runs),
            indiRun = 0;
        fanIndiPoint = playing11Team2[wicket].point;
        console.log("playing11Team2[wicket].point", playing11Team2[wicket].point);
        for (let i = 0; i < scoreArrayTeam2.length; i++) {
            indiRun += scoreArrayTeam2[i];
            if (scoreArrayTeam2[i] == 1) {
                fanIndiPoint += 2;
            }
            if (scoreArrayTeam2[i] == 2) {
                fanIndiPoint += 3;
            }
            if (scoreArrayTeam2[i] == 3) {
                fanIndiPoint += 4;
            }
            if (scoreArrayTeam2[i] == 4) {
                fanIndiPoint += 5;
            }
            if (scoreArrayTeam2[i] == 6) {
                fanIndiPoint += 8;
            }
            if (scoreArrayTeam2[i] == "") {
                fanIndiPoint += 0;
            }
            console.log("fanIndiPoint", fanIndiPoint);
            //    scoreArray.splice(0,scoreArray.length)
        }
        // indiScoreTeam2.push([playing11Team2[wicket].name, indiRun]);

        playing11Team2.push((playing11Team2[wicket].score = indiRun));
        console.log("indiRun", indiRun);
        console.log("playing11Team2[wicket].playingRole", playing11Team2[wicket].playingRole);
        // if (playing11Team2[wicket].playingRole == "Bowler") {
        //     playing11Team2.push(
        //         (playing11Team2[wicket].point = indiRun + fanIndiPoint)
        //     );
        // } else {
        playing11Team2.push(
            (playing11Team2[wicket].point = fanIndiPoint)
        );
        // }
        console.log("indiRun + fanIndiPoint", fanIndiPoint);
        localStorage.setItem("playing11Team2", JSON.stringify(playing11Team2));
        scoreBoard.innerHTML += "\n";
        scoreBoard.innerHTML += "Match finished \n";
        scoreBoard.innerHTML += " \n";
        // document.getElementById("selectBut2").style.visibility = "visible";
        document.getElementById("selectBut").style.visibility = "hidden";
        document.getElementById("selectBut2").style.visibility = "hidden";
        location.href = `./scoreBoard.html`;
        return
    }

    var run = Math.floor(Math.random() * 7);
    switch (run) {
        case 0:
            // setTimeout(() => {
            scoreBoard.innerHTML += `${over}.${ball + 1
                } - ${time.toLocaleString()} - Wicket \n`;
            wicket++;
            fanPointBowler += 10;
            batsman.innerHTML = playing11Team2[wicket].name;
            bowler.innerHTML = playing11Team1[bowlerChange].name;
            ball++;
            indiRun = 0;
            // fanIndiPoint = 0;
            fanIndiPoint = playing11Team2[wicket - 1].point;
            for (let i = 0; i < scoreArrayTeam2.length; i++) {
                indiRun += scoreArrayTeam2[i];

                if (scoreArrayTeam2[i] == 1) {
                    fanIndiPoint += 2;
                }
                if (scoreArrayTeam2[i] == 2) {
                    fanIndiPoint += 3;
                }
                if (scoreArrayTeam2[i] == 3) {
                    fanIndiPoint += 4;
                }
                if (scoreArrayTeam2[i] == 4) {
                    fanIndiPoint += 5;
                }
                if (scoreArrayTeam2[i] == 6) {
                    fanIndiPoint += 8;
                }
                //    scoreArray.splice(0,scoreArray.length)
            }
            if (indiRun == 0) {
                fanIndiPoint += -2;
            }
            wicketCounter++;
            playing11Team2.push((playing11Team2[wicket - 1].score = indiRun));
            playing11Team2.push((playing11Team2[wicket - 1].point = fanIndiPoint));
            localStorage.setItem("playing11Team2", JSON.stringify(playing11Team2));
            // indiScoreTeam2.push([playing11Team2[wicket - 1].name, indiRun]);
            // localStorage.setItem("indiScore", indiScore);
            scoreArrayTeam2.splice(0, scoreArrayTeam2.length);
            // indiRun = 0;
            document.getElementById("selectBut2").disabled = false;
            // }, 1000);
            break;
        case 1:
            // setTimeout(() => {
            scoreBoard.innerHTML += `${over}.${ball + 1} - ${time.toLocaleString()} - Single Run \n`;
            batsman.innerHTML = playing11Team2[wicket].name;
            bowler.innerHTML = playing11Team1[bowlerChange].name;
            fanPointPlayer += singleRun + 1;
            singleRun++;
            ball++;
            document.getElementById("selectBut2").disabled = false;
            scoreArrayTeam2.push(1);
            // }, 1000);
            break;
        case 2:
            // setTimeout(() => {
            scoreBoard.innerHTML += `${over}.${ball + 1} - ${time.toLocaleString()} - Double Run \n`;
            batsman.innerHTML = playing11Team2[wicket].name;
            bowler.innerHTML = playing11Team1[bowlerChange].name;
            dblRun++;
            fanPointPlayer += dblRun * 2 + 1;
            ball++;
            scoreArrayTeam2.push(2);
            document.getElementById("selectBut2").disabled = false;
            // }, 1000);
            break;
        case 3:
            // setTimeout(() => {
            scoreBoard.innerHTML += `${over}.${ball + 1} - ${time.toLocaleString()} - Three Runs \n`;
            batsman.innerHTML = playing11Team2[wicket].name;
            bowler.innerHTML = playing11Team1[bowlerChange].name;
            threeRun++;
            fanPointPlayer += threeRun * 3 + 1;
            ball++;
            scoreArrayTeam2.push(3);
            document.getElementById("selectBut2").disabled = false;
            // }, 1000);
            break;
        case 4:
            // setTimeout(() => {
            scoreBoard.innerHTML += `${over}.${ball + 1} - ${time.toLocaleString()} - Boundary \n`;
            batsman.innerHTML = playing11Team2[wicket].name;
            bowler.innerHTML = playing11Team1[bowlerChange].name;
            boundrey++;
            fanPointPlayer += boundrey * 4 + 1;
            ball++;
            scoreArrayTeam2.push(4);
            document.getElementById("selectBut2").disabled = false;
            // }, 1000);
            break;

        case 5:
            // setTimeout(() => {
            scoreBoard.innerHTML += `${over}.${ball + 1} - ${time.toLocaleString()} - Dot Ball \n`;
            batsman.innerHTML = playing11Team2[wicket].name;
            bowler.innerHTML = playing11Team1[bowlerChange].name;
            dotBall++;
            fanPointBowler++;
            ball++;
            scoreArrayTeam2.push(0);
            document.getElementById("selectBut2").disabled = false;
            // }, 1000);
            break;

        case 6:
            // setTimeout(() => {
            scoreBoard.innerHTML += `${over}.${ball + 1} - ${time.toLocaleString()} - Six \n`;
            batsman.innerHTML = playing11Team2[wicket].name;
            bowler.innerHTML = playing11Team1[bowlerChange].name;
            six++;
            fanPointPlayer += six * 6 + 1;
            ball++;
            scoreArrayTeam2.push(6);
            document.getElementById("selectBut2").disabled = false;
            // }, 1000);
            break;
    }
    // var totalRun = singleRun + dblRun + threeRun + boundrey + six;
    // totalRun =(singleRun * 1) + (dblRun * 2) + (threeRun * 3) + (boundrey * 4) + (six * 6);
}

function getScoreboard() {
    document.getElementById("winner").innerHTML = "";
    var playing11Team1 = JSON.parse(localStorage.getItem("playing11Team1"));
    var playing11Team2 = JSON.parse(localStorage.getItem("playing11Team2"));
    var team1cap = JSON.parse(localStorage.getItem("Team1Cap"));
    var team1visecap = JSON.parse(localStorage.getItem("Team1ViseCap"));
    var team2cap = JSON.parse(localStorage.getItem("Team2Cap"));
    var team2visecap = JSON.parse(localStorage.getItem("Team2ViseCap"));
    var team1Runs = localStorage.getItem("team1Runs");
    var team2Runs = localStorage.getItem("team2Runs");

    document.getElementById("ScoreTeam1").innerHTML = team1Runs;
    document.getElementById("ScoreTeam2").innerHTML = team2Runs;

    // document.getElementById("addItem").innerHTML = "1st inning batting"
    var totalScoreTeam1 = document.getElementById("totalScoreTeam1");
    var score = 0;
    playing11Team1.forEach((item) => {
        if (item.name) {
            if (item.name == team1cap.name) {
                score += item.point * 2;
                return;
            }
            if (item.name == team1visecap.name) {
                score += item.point * 1.5;
                return;
            }
            score += item.point;
        }
    });
    totalScoreTeam1.innerHTML = score;

    var totalScoreTeam2 = document.getElementById("totalScoreTeam2");
    var score2 = 0;
    playing11Team2.forEach((item) => {
        if (item.name) {
            if (item.name == team2cap.name) {
                score2 += item.point * 2;
                return;
            }
            if (item.name == team2visecap.name) {
                score2 += item.point * 1.5;
                return;
            }
            score2 += item.point;
        }
    });
    totalScoreTeam2.innerHTML = score2;

    var team1 = localStorage.getItem("team1");
    var team2 = localStorage.getItem("team2");
    if (score > score2) {
        document.getElementById("winner").innerHTML = team1;
    } else {
        document.getElementById("winner").innerHTML = team2;
    }

    var list1 = document.getElementById("myListScore");
    list1.innerHTML = `<h1 style="text-align:center;"> 1st Inning </h1><h3 style="text-align:center;"> Batting</h3>`;
    playing11Team1.forEach((item) => {
        // var index = left.selectedIndex;
        if (item.name) {
            var v = `${item.name} - Run: ${item.score} / Point: ${item.point}`;
            if (item.name == team1cap.name) {
                v = `${item.name} - Run: ${item.score} / Point: ${item.point * 2} - Captain(Point x 2)`;
            }
            if (item.name == team1visecap.name) {
                v = `${item.name} - Run: ${item.score} / Point: ${item.point * 1.5
                    } - Vice Captain(Point x 1.5)`;
            }
            score += item.point;
            let li = document.createElement("li");
            li.innerText = v;
            list1.appendChild(li);
        }
    });
    // var list2 = document.getElementById("myList2Score");
    let li = document.createElement("li");
    li.innerHTML = `<h3 style="text-align:center;"> Bowling </h3>`;
    list1.appendChild(li);
    playing11Team2.forEach((item) => {
        if (item.wicket || item.wicket == 0) {
            var v = `${item.name} - Wicket: ${item.wicket} / Point: ${item.point}`;
            if (item.name == team2cap.name) {
                v = `${item.name} - Wicket: ${item.wicket} / Point: ${(item.point) * 2} - Captain(Point x 2)`;
            }
            if (item.name == team2visecap.name) {
                v = `${item.name} - Wicket: ${item.wicket} / Point: ${(item.point) * 1.5} - Vice Captain(Point x 1.5)`;
            }
            let li = document.createElement("li");
            li.innerText = v;
            list1.appendChild(li);
            // }
        }
    });

    var list2 = document.getElementById("myList2Score");
    list2.innerHTML = `<h1 style="text-align:center;"> 2nd Inning </h1><h3 style="text-align:center;"> Batting</h3>`;
    playing11Team2.forEach((item) => {
        // var index = left.selectedIndex;
        if (item.name) {
            var v = `${item.name} - Run: ${item.score} / Point: ${item.point}`;
            if (item.wicket || item.wicket == 0) {
                var v = `${item.name} - Run: ${item.score} / Point: ${item.point}`;
                if (item.name == team2cap.name) {
                    v = `${item.name} - Run: ${item.score} / Point: ${item.point * 2
                        } - Captain(Point x 2)`;
                }
                if (item.name == team2visecap.name) {
                    v = `${item.name} - Run: ${item.score} / Point: ${item.point * 1.5
                        } - Vice Captain(Point x 1.5)`;
                }
                let li = document.createElement("li");
                li.innerText = v;
                list2.appendChild(li);
                return;
            }

            if (item.name == team2cap.name) {
                v = `${item.name} - Run: ${item.score} / Point: ${item.point * 2
                    } - Captain(Point x 2)`;
            }
            if (item.name == team2visecap.name) {
                v = `${item.name} - Run: ${item.score} / Point: ${item.point * 1.5
                    } - Vice Captain(Point x 1.5)`;
            }
            let li = document.createElement("li");
            li.innerText = v;
            list2.appendChild(li);
        }
    });
    // var list2 = document.getElementById("myList2Score");
    let li2 = document.createElement("li");
    li2.innerHTML = `<h3 style="text-align:center;"> Bowling </h3>`;
    list2.appendChild(li2);

    playing11Team1.forEach((item) => {
        if (item.wicket || item.wicket == 0) {
            var v = `${item.name} - Wicket: ${item.wicket} / Point: ${(item.point)} `;
            if (item.name == team1cap.name) {
                v = `${item.name} - Wicket: ${item.wicket} / Point: ${(item.point) * 2} - Captain(Point x 2)`;
            }
            if (item.name == team1visecap.name) {
                v = `${item.name} - Wicket: ${item.wicket} / Point: ${(item.point) * 1.5} - Vice Captain(Point x 1.5)`;
            }
            let li = document.createElement("li");
            li.innerText = v;
            list2.appendChild(li);
        }
    });
}

