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

var team1Name;
var team2Name;
var Team1Cap;
var Team2Cap;
var Team1ViseCap;
var Team2ViseCap;
var player2Selected = [];
var player1Selected = [];
var ar = [];
var ar2 = [];
var i = 0;
var creditRem = 100;
var bowlerCount = 0;
var batsmanCount = 0;
var wkCount = 0;
var credit;

function chooseCaptainAndViseCaptain(playingArray) {
    if (playingArray == player1Selected) {
        localStorage.setItem("player1Selected", JSON.stringify(player1Selected))
    };
    if (playingArray == player2Selected) {
        localStorage.setItem("player2Selected", JSON.stringify(player2Selected))
    };
    if (playingArray.length < 11) {
        alert("Please select 11 Player");
        return;
    }
    document.getElementById("selectedCap").innerHTML = null;
    document.getElementById("selectedViseCap").innerHTML = null;
    let optionList = document.getElementById("selectedCap").options;
    let optionList2 = document.getElementById("selectedViseCap").options;
    playingArray.forEach((option) =>
        optionList.add(
            new Option(`${option.name},${option.playingRole},${option.credit}`)
        )
    );
    playingArray.forEach((option) =>
        optionList2.add(
            new Option(`${option.name},${option.playingRole},${option.credit}`)
        )
    );
}

function team2Selection() {
    if (player1Selected.length < 11) {
        alert("Please select 11 Player");
        return;
    }
    var name1 = document.getElementById("selectedCap");
    var name2 = document.getElementById("selectedViseCap");
    if (name1.selectedIndex == name2.selectedIndex) {
        alert("Captain and visecaptain are not same please change");
        return;
    }
    location.href = `./team2Selectionpage.html`;
}
var newArray;
var bowlerCount1 = document.getElementById("bowCount");
var batsmanCount1 = document.getElementById("batCount");
var wkCount1 = document.getElementById("wkCOunt");

function loadPage2(mainArray) {
    newArray = JSON.parse(localStorage.getItem(`newArray`));
    teamWinner = localStorage.getItem("winnerTeam");
    team1 = localStorage.getItem("team1");
    team2 = localStorage.getItem("team2");
    bowlerCount1.innerHTML = 0
    batsmanCount1.innerHTML = 0
    wkCount1.innerHTML = 0
    var remCredit = document.getElementById("remainingCredit");
    remCredit.innerHTML = 100;
    if (teamWinner === team1) {
        document.getElementById("ChooseTeam").innerHTML = `${team2}`;
    } else {
        document.getElementById("ChooseTeam").innerHTML = `${team1}`;
    }
    i = 0;
    var selectBox = document.getElementById("addItem");
    for (let i = 0; i < newArray.length; i++) {
        var option = newArray[i];
        selectBox.add(
            new Option(`${i + 1} ,${option.name},${option.playingRole},${option.credit}`)
        );
        ar2.push(newArray[i]);
    }
}

function remainingPlayerSelect(mainArray, playingArray) {
    var left = document.getElementById("addItem");
    var right = document.getElementById("selectedItem");
    var index = left.selectedIndex;
    if (index == -1) return;
    var v = `${playingArray.length + 1}:${mainArray[index].name},${mainArray[index].playingRole
        },${mainArray[index].credit}`;
    var remCredit = document.getElementById("remainingCredit");

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
    bowlerCount1.innerHTML = bowlerCount;
    batsmanCount1.innerHTML = batsmanCount;
    wkCount1.innerHTML = wkCount;
    remCredit.innerHTML = creditRem;
    right.add(new Option(v));
    // var option = data[index];
    left.remove(index);
    i++;
    mainArray.splice(index, 1);
    if (mainArray == ar) {
        localStorage.setItem("newArray", JSON.stringify(mainArray));
    }

}

function remainingPlayerdeSelect(mainArray, playingArray) {
    var left = document.getElementById("addItem");
    var right = document.getElementById("selectedItem");
    var index = right.selectedIndex;
    if (index == -1) return;
    if (playingArray[index].playingRole == "Bowler") {
        bowlerCount--;
    }
    if (playingArray[index].playingRole == "Batsman") {
        batsmanCount--;
    }
    if (playingArray[index].playingRole == "Wicketkeeper") {
        wkCount--;
    }
    bowlerCount1.innerHTML = bowlerCount;
    batsmanCount1.innerHTML = batsmanCount;
    wkCount1.innerHTML = wkCount;
    var remCredit = document.getElementById("remainingCredit");
    creditRem = creditRem + playingArray[index].credit;
    left.add(
        new Option(
            `${playingArray[index].name},
            ${playingArray[index].playingRole},
            ${playingArray[index].credit}`
        )
    );
    mainArray.push(playingArray[index]);
    playingArray.splice(index, 1);
    right.remove(index);
    remCredit.innerHTML = creditRem;
}

function selectCaptain(playingArray, teamCaptain) {
    var selectedCap = document.getElementById("selectedCap").selectedIndex;
    teamCap = playingArray[selectedCap];
    document.getElementById("result1").innerHTML = `${teamCap.name}`;
    console.log("teamCaptain == Team1Cap", playingArray == player1Selected);
    console.log("teamCaptain == Team2Cap", playingArray == player2Selected);
    if (playingArray == player1Selected) {
        Team1Cap = teamCap;
        localStorage.setItem("Team1Cap", JSON.stringify(teamCap));
    }
    if (playingArray == player2Selected) {
        Team2Cap = teamCap;
        localStorage.setItem("Team2Cap", JSON.stringify(teamCap));
    }
}

function selectVisecaptain(playingArray, teamCaptain, teamViseCaptain) {
    var selectedCap = document.getElementById("selectedViseCap").selectedIndex;
    // teamCap = JSON.parse(localStorage.getItem(`${teamCaptain}`));
    teamVisecap = playingArray[selectedCap];
    document.getElementById("result2").innerHTML = `${teamVisecap.name}`;
    if (teamCaptain.name == teamVisecap.name) {
        alert("Cap and vise same");
        return;
    }
    if (playingArray == player1Selected) {
        Team1ViseCap = teamVisecap;
        localStorage.setItem("Team1ViseCap", JSON.stringify(teamVisecap));
    }
    if (playingArray == player2Selected) {
        Team2ViseCap = teamVisecap;
        localStorage.setItem("Team2ViseCap", JSON.stringify(teamVisecap));
    }
}

function startMatch() {
    if (player2Selected.length < 11) {
        alert("Please select 11 Player");
        return;
    }
    if (Team2Cap.name == Team2ViseCap.name) {
        alert("Cap and vise same");
        return
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
    var player1Team = JSON.parse(localStorage.getItem("player1Selected"));
    console.log("player1Team", player1Team);
    var player2Team = JSON.parse(localStorage.getItem("player2Selected"));
    console.log("player2Team", player2Team);

    var Team1Cap = JSON.parse(localStorage.getItem("Team1Cap"));
    var Team1ViseCap = JSON.parse(localStorage.getItem("Team1ViseCap"));
    var Team2Cap = JSON.parse(localStorage.getItem("Team2Cap"));
    var Team2ViseCap = JSON.parse(localStorage.getItem("Team2ViseCap"));

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

    const team1Bowler = player1Team.filter((word) => word.playingRole == "Bowler");
    const team1Batsman = player1Team.filter((word) => word.playingRole == "Batsman");
    const team1WK = player1Team.filter((word) => word.playingRole == "Wicketkeeper");
    var playing11Team1 = team1WK.concat(team1Batsman, team1Bowler);
    playing11Team1.forEach((item) => (item.score = 0));
    playing11Team1.forEach((item) => (item.point = 0));
    localStorage.setItem("playing11Team1", JSON.stringify(playing11Team1));

    const team2Bowler = player2Team.filter((word) => word.playingRole == "Bowler");
    const team2Batsman = player2Team.filter((word) => word.playingRole == "Batsman");
    const team2WK = player2Team.filter((word) => word.playingRole == "Wicketkeeper");
    var playing11Team2 = team2WK.concat(team2Batsman, team2Bowler);
    playing11Team2.forEach((item) => (item.score = 0));
    playing11Team2.forEach((item) => (item.point = 0));
    localStorage.setItem("playing11Team2", JSON.stringify(playing11Team2));

    var list = document.getElementById("myList");
    playing11Team1.forEach((item) => {
        // var index = left.selectedIndex;
        var v = `${item.name},${item.playingRole},${item.credit}`;
        // if (index == -1) return;
        if (item.name == Team1Cap.name) {
            v = `${item.name},${item.playingRole},${item.credit} - Captain(Point x 2)`;
        }
        if (item.name == Team1ViseCap.name) {
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
        if (item.name == Team2Cap.name) {
            v = `${item.name},${item.playingRole},${item.credit} - Captain(Point x 2)`;
        }
        if (item.name == Team2ViseCap.name) {
            v = `${item.name},${item.playingRole},${item.credit} - Vice Captain(Point x 1.5)`;
        }
        let li = document.createElement("li");
        li.innerText = v;
        list2.appendChild(li);
    });
}
var playing11Team1 = JSON.parse(localStorage.getItem("playing11Team1"));
var playing11Team2 = JSON.parse(localStorage.getItem("playing11Team2"));
function hitAndGetrun() {
    // document.getElementById("selectBut").disabled = true;
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
        scoreArray = []
        scoreBoard.innerHTML += "\n";
        scoreBoard.innerHTML += "New inning stared  \n";
        scoreBoard.innerHTML += " \n";
        document.getElementById("selectBut2").style.visibility = "visible";
        document.getElementById("selectBut").style.visibility = "hidden";
        return;
    }
    getRuns(playing11Team1, playing11Team2);
}


function getRunForTeam2() {
    // document.getElementById("selectBut2").disabled = true;
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
            if (scoreArray[i] == "") {
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
        localStorage.setItem("playing11Team2", JSON.stringify(playing11Team2));
        scoreBoard.innerHTML += "\n";
        scoreBoard.innerHTML += "Match finished \n";
        scoreBoard.innerHTML += " \n";
        // document.getElementById("selectBut2").style.visibility = "visible";
        document.getElementById("selectBut").style.visibility = "hidden";
        document.getElementById("selectBut2").style.visibility = "hidden";
        // location.href = `./scoreBoard.html`;
        return
    }
    getRuns(playing11Team2, playing11Team1);
    // var totalRun = singleRun + dblRun + threeRun + boundrey + six;
    // totalRun =(singleRun * 1) + (dblRun * 2) + (threeRun * 3) + (boundrey * 4) + (six * 6);
}
function getRuns(team1, team2) {
    var run = Math.floor(Math.random() * 7);
    switch (run) {
        case 0:
            // setTimeout(() => {
            scoreBoard.innerHTML += `${over}.${ball + 1} - ${time.toLocaleString()} - Wicket \n`;
            wicket++;
            fanPointBowler += 10;
            batsman.innerHTML = team1[wicket].name;
            bowler.innerHTML = team2[bowlerChange].name;
            ball++;
            indiRun = 0;
            fanIndiPoint = team1[wicket - 1].point;
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
            team1.push((team1[wicket - 1].score = indiRun));
            team1.push((team1[wicket - 1].point = fanIndiPoint));
            if (team1 === playing11Team1) { localStorage.setItem("playing11Team1", JSON.stringify(team1)) }
            // localStorage.setItem("indiScore", indiScore);
            scoreArray.splice(0, scoreArray.length);
            document.getElementById("selectBut").disabled = false;
            // }, 1000);
            break;
        case 1:
            // setTimeout(() => {
            scoreBoard.innerHTML += `${over}.${ball + 1} - ${time.toLocaleString()} - Single Run \n`;
            batsman.innerHTML = team1[wicket].name;
            bowler.innerHTML = team2[bowlerChange].name;
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
            batsman.innerHTML = team1[wicket].name;
            bowler.innerHTML = team2[bowlerChange].name;
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
            batsman.innerHTML = team1[wicket].name;
            bowler.innerHTML = team2[bowlerChange].name;
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
            batsman.innerHTML = team1[wicket].name;
            bowler.innerHTML = team2[bowlerChange].name;
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
            batsman.innerHTML = team1[wicket].name;
            bowler.innerHTML = team2[bowlerChange].name;
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
            batsman.innerHTML = team1[wicket].name;
            bowler.innerHTML = team2[bowlerChange].name;
            six++;
            fanPointPlayer += six * 6 + 1;
            ball++;
            scoreArray.push(6);
            document.getElementById("selectBut").disabled = false;
            // }, 1000);
            break;
    }
}

function getScoreboard() {
    document.getElementById("winner").innerHTML = "";
    var playing11Team1 = JSON.parse(localStorage.getItem("playing11Team1"));
    var playing11Team2 = JSON.parse(localStorage.getItem("playing11Team2"));
    var Team1Cap = JSON.parse(localStorage.getItem("Team1Cap"));
    var Team1ViseCap = JSON.parse(localStorage.getItem("Team1ViseCap"));
    var Team2Cap = JSON.parse(localStorage.getItem("Team2Cap"));
    var Team2ViseCap = JSON.parse(localStorage.getItem("Team2ViseCap"));
    var team1Runs = localStorage.getItem("team1Runs");
    var team2Runs = localStorage.getItem("team2Runs");
    document.getElementById("ScoreTeam1").innerHTML = team1Runs;
    document.getElementById("ScoreTeam2").innerHTML = team2Runs;

    // document.getElementById("addItem").innerHTML = "1st inning batting"
    var totalScoreTeam1 = document.getElementById("totalScoreTeam1");
    var score1 = 0;
    var totalScoreTeam2 = document.getElementById("totalScoreTeam2");
    var score2 = 0;
    function teamScore(teamScore, totalScorePrint, score) {
        if (teamScore == playing11Team2) { score = score2; }
        teamScore.forEach((item) => {
            if (item.name) {
                if (item.name == Team1Cap.name) {
                    score += item.point * 2;
                    return;
                }
                if (item.name == Team1ViseCap.name) {
                    score += item.point * 1.5;
                    return;
                }
                score += item.point;
            }
        });
        totalScorePrint.innerHTML = score;
    }

    teamScore(playing11Team1, totalScoreTeam1, score1);
    teamScore(playing11Team2, totalScoreTeam2, score2);

    var team1 = localStorage.getItem("team1");
    var team2 = localStorage.getItem("team2");
    if (score1 > score2) {
        document.getElementById("winner").innerHTML = team1;
    } else {
        document.getElementById("winner").innerHTML = team2;
    }

    function printScore(team1, team2, list, score) {
        team1.forEach((item) => {
            // var index = left.selectedIndex;
            if (item.name) {
                var v = `${item.name} - Run: ${item.score} / Point: ${item.point}`;
                if (item.name == Team1Cap.name || item.name == Team2Cap.name) {
                    v = `${item.name} - Run: ${item.score} / Point: ${item.point * 2} - Captain(Point x 2)`;
                }
                if (item.name == Team1ViseCap.name || item.name == Team2ViseCap.name) {
                    v = `${item.name} - Run: ${item.score} / Point: ${item.point * 1.5
                        } - Vice Captain(Point x 1.5)`;
                }
                score += item.point;
                let li = document.createElement("li");
                li.innerText = v;
                list.appendChild(li);
            }
        });
        // var list2 = document.getElementById("myList2Score");
        let li = document.createElement("li");
        li.innerHTML = `<h3 style="text-align:center;"> Bowling </h3>`;
        list.appendChild(li);
        team2.forEach((item) => {
            if (item.wicket || item.wicket == 0) {
                var v = `${item.name} - Wicket: ${item.wicket} / Point: ${item.point}`;
                if (item.name == Team2Cap.name || item.name == Team1Cap.name) {
                    v = `${item.name} - Wicket: ${item.wicket} / Point: ${(item.point) * 2} - Captain(Point x 2)`;
                }
                if (item.name == Team2ViseCap.name || item.name == Team1ViseCap.name) {
                    v = `${item.name} - Wicket: ${item.wicket} / Point: ${(item.point) * 1.5} - Vice Captain(Point x 1.5)`;
                }
                let li = document.createElement("li");
                li.innerText = v;
                list.appendChild(li);
                // }
            }
        });
    }
    var list1 = document.getElementById("myListScore");
    list1.innerHTML = `<h1 style="text-align:center;"> 1st Inning </h1><h3 style="text-align:center;"> Batting</h3>`;
    printScore(playing11Team1, playing11Team2, list1, score1);

    var list2 = document.getElementById("myList2Score");
    list2.innerHTML = `<h1 style="text-align:center;"> 2nd Inning </h1><h3 style="text-align:center;"> Batting</h3>`;
    printScore(playing11Team2, playing11Team1, list2, score2);
}

