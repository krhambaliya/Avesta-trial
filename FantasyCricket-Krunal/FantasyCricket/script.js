const data = [
    {
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
var fanPointTeam = 0;
var time = new Date()
var scoreArray = []
var WicketTakker = []
var indiScore = [];
var fanIndiPoint = [];
var scoreArrayTeam2 = []
var WicketTakkerTeam2 = []
var indiScoreTeam2 = [];
var indiRun = 0;
var fanIndiPoint = 0;
var wicketCounter = 0;

function displayTeam1() {
    document.playerDetails.player1team.value = document.playerDetails.player1.value;
}
function displayTeam2() {
    document.playerDetails.player2team.value = document.playerDetails.player2.value;
}

var team1;
var team2;
teamArr = [];

function clickFortoss() {
    team1 = document.playerDetails.player1.value;
    localStorage.setItem("team1", team1)
    team2 = document.playerDetails.player2.value;
    localStorage.setItem("team2", team2)
    const element = document.getElementById("firstPage");
    let x = (Math.floor(Math.random() * 2) == 0);
    if (x) {
        document.getElementById("result").innerHTML = `${team1} Won the toss, wait 5 sec for next page`;
        // document.getElementById("ChooseTeam").innerHTML = document.getElementById("result").innerHTML ;
        console.log(document.playerDetails.player1.value)
        teamArr.push(team1);
        setTimeout(() => {
            element.style.visibility = "hidden";
            location.href = `./team1Selectionpage.html`
            document.getElementById("ChooseTeam").innerHTML = `${team1}`;
        }, 5000);
        localStorage.setItem("winnerTeam", teamArr)
        return teamArr;
    } else {
        document.getElementById("result").innerHTML = `${team2} Won the toss, wait 5 sec for next page`;
        // document.getElementById("result").innerHTML = team2;

        console.log(team2)
        teamArr.push(document.playerDetails.player2.value);
        setTimeout(() => {
            element.style.visibility = "hidden";
            location.href = `./team1Selectionpage.html`
            document.getElementById("ChooseTeam").innerHTML = `${team2}`;
        }, 5000);
        localStorage.setItem("winnerTeam", (teamArr))
        return teamArr;
    }

};

function loadPage() {
    // document.location.href = `./teamSelectionpage.html
    var teamWinner = localStorage.getItem('winnerTeam')
    console.log(teamWinner)
    // var tossWinner = document.getElementById("result").value ;
    // console.log("tossWinner", tossWinner);
    document.getElementById("ChooseTeam").innerHTML = `${teamWinner}`;
    console.log("page 2 load")
    var selectBox = document.getElementById("addItem");

    for (let i = 0; i < data.length; i++) {
        var option = data[i];
        // console.log("option", option);
        // var val = JSON.stringify() 
        // console.log(val)
        selectBox.add(new Option(`${option.name},${option.playingRole},${option.credit}`));
        ar.push(option)
        // ${i + 1}:
        // console.log(ar)
    }

    player1Selected = [];
    var remCredit = document.getElementById("remainingCredit");
    remCredit.innerHTML = 100;


}
// console.log((Object.entries(data)[3]))

// var selectBox = document.getElementById("addItem");
// var ar = [];
// for (let i = 0; i < data.length; i++) {
//     var option = data[i];
//     // console.log("option", option);
//     // var val = JSON.stringify() 
//     // console.log(val)
//     selectBox.add(new Option(`${i + 1}:${option.name},${option.playingRole},${option.credit}`));
//     ar.push(option)
//     // console.log(ar)
// }

// player1Selected = [];

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
    var v = `${player1Selected.length + 1}:${ar[index].name},${ar[index].playingRole},${ar[index].credit}`; // takes value written in option
    // console.log("options[index]", left.options[index]);

    // console.log("v", v);
    if (index == -1) return;
    credit = 0;
    var remCredit = document.getElementById("remainingCredit");




    if (player1Selected.length < 11) {
        // if (player1Selected.length < 0) {
        // }


        // for (let i = 0; i < player1Selected.length; i++) {
        //     credit += player1Selected[i].credit
        //     if (credit > 100) {
        //         alert("Credit is more then 100")
        //         return;
        //     }
        // }


        if (creditRem - ar[index].credit < 0) {
            alert("Cant have more then 100 crredit")
            return;

        } else {
            if (ar[index].playingRole == "Bowler") {
                if (bowlerCount == 5) {
                    alert("Already pick 5 Bowler");
                    return;
                }
                bowlerCount++;
            }
            console.log("bowlerCount", bowlerCount);
            if (ar[index].playingRole == "Batsman") {
                if (batsmanCount == 5) {
                    alert("Already pick 5 Batsman")
                    return;
                }
                batsmanCount++;
            }
            console.log("batsmanCount", batsmanCount);
            if (ar[index].playingRole == "Wicketkeeper") {
                if (wkCount == 1) {
                    alert("Already pick 1 Wicketkeeper")
                    return;
                }
                wkCount++;
            }
            console.log("wkCount", wkCount);
            creditRem = creditRem - ar[index].credit
            player1Selected.push(ar[index]);
        }



    } else {

        alert("only 11 slected")
        return;
    }

    // console.log("new1.text", new1.text);


    remCredit.innerHTML = creditRem;
    right.add(new Option(v));
    // player1Selected.forEach(item => creditRem = creditRem - item.credit)

    // remCredit.innerHTML = credit;
    // var option = data[index];
    // right.add(new Option(`${index+1}:${option.name},${option.playingRole},${option.credit}`));
    left.remove(index);
    i++;
    ar.splice(index, 1)
    // console.log("ar", ar);
    localStorage.setItem('newArr', JSON.stringify(ar));



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
    // console.log(player1Selected);
    // var v = `${i+1}:${player1Selected[index].name},${player1Selected[index].playingRole},${player1Selected[index].credit}`;
    console.log("player1Selected[index].name", player1Selected[index]);


    var remCredit = document.getElementById("remainingCredit");
    creditRem = creditRem + player1Selected[index].credit

    left.add(new Option(`${player1Selected[index].name},${player1Selected[index].playingRole},${player1Selected[index].credit}`));
    // ${ar.length}:
    ar.push(player1Selected[index])
    player1Selected.splice(index, 1)
    right.remove(index);
    remCredit.innerHTML = creditRem;

}


function chooseCaptain() {
    console.log(player1Selected);
    localStorage.setItem('player1Select', JSON.stringify(player1Selected));
    console.log("player1Selected", player1Selected);
    if (player1Selected.length < 11) {
        alert("Please select 11 Player")
        return;
    }
    if (creditRem < 0) {
        alert("Credit is more then 100")
        return;
    }
    // var newjj = JSON.parse(localStorage.getItem('player1Select'))
    // console.log("newjj", newjj);
    document.getElementById("selectedCap").innerHTML = null;
    document.getElementById("selectedViseCap").innerHTML = null;
    let optionList = document.getElementById("selectedCap").options;
    let optionList2 = document.getElementById("selectedViseCap").options;

    player1Selected.forEach(option =>
        optionList.add(
            new Option(`${option.name},${option.playingRole},${option.credit}`)
        )
        // console.log(`${option.name},${option.playingRole},${option.credit}`)
    );
    player1Selected.forEach(option =>
        optionList2.add(
            new Option(`${option.name},${option.playingRole},${option.credit}`)
        )
        // console.log(`${option.name},${option.playingRole},${option.credit}`)
    );
}

var getcap; //Give caption for team 1
function selectedcaptain() {
    var selectedCap = document.getElementById("selectedCap");
    var index = selectedCap.selectedIndex;
    console.log(`${player1Selected[index].name},${player1Selected[index].playingRole},${player1Selected[index].credit}`);
    getcap = player1Selected[index];
    console.log("getcap", getcap);
    document.getElementById("result1").innerHTML = `${getcap.name}`
    localStorage.setItem("Team1Cap", JSON.stringify(getcap))

    return getcap;

}
var getVisecap; //Give vicecaption for team 1
function chooseVisecaption() {
    var selectedCap = document.getElementById("selectedViseCap");
    var index = selectedCap.selectedIndex;
    console.log(`${player1Selected[index].name},${player1Selected[index].playingRole},${player1Selected[index].credit}`);
    if (player1Selected[index].name === getcap.name) {
        alert("Captain and visecaptain are not same please change")
        return;
    }
    getVisecap = player1Selected[index];
    console.log("getVisecap", getVisecap);
    document.getElementById("result2").innerHTML = `${getVisecap.name}`
    localStorage.setItem("Team1ViseCap", JSON.stringify(getVisecap))
    return getVisecap;
}

function team2select() {
    if (player1Selected.length < 11) {
        alert("Please select 11 Player")
        return;
    }
    var name1 = document.getElementById("selectedCap");
    var name2 = document.getElementById("selectedViseCap");
    console.log("name", name1.selectedIndex);
    console.log("name", name2.selectedIndex);
    if (name1.selectedIndex == name2.selectedIndex) {
        alert("Captain and visecaptain are not same please change")
        return;
    }
    location.href = `./team2Selectionpage.html`

}
var newArray;

function loadPage2() {
    newArray = JSON.parse(localStorage.getItem('newArr'))
    teamWinner = (localStorage.getItem('winnerTeam'))
    team1 = (localStorage.getItem("team1"))
    team2 = (localStorage.getItem("team2"))
    bowlerCount = 0;
    bowlerCount = 0;
    wkCount = 0;
    var remCredit = document.getElementById("remainingCredit");
    remCredit.innerHTML = 100;
    console.log(teamWinner, team1, team2);
    if (teamWinner === team1) {
        document.getElementById("ChooseTeam").innerHTML = `${team2}`;
    } else {
        document.getElementById("ChooseTeam").innerHTML = `${team1}`;
    }
    ar2 = []
    player2Selected = [];
    i = 0;
    var getcapTeam2;
    var getVisecapTeam2;
    var selectBox = document.getElementById("addItem2");
    for (let i = 0; i < newArray.length; i++) {
        var option = newArray[i];
        selectBox.add(new Option(`${option.name},${option.playingRole},${option.credit}`));
        ar2.push(newArray[i])
        // ${i + 1}:
        // console.log(ar)
    }
}

function remainingPlayer() {
    var left = document.getElementById("addItem2");
    var right = document.getElementById("selectedItem2");

    var index = left.selectedIndex;
    var v = `${player2Selected.length + 1}:${ar2[index].name},${ar2[index].playingRole},${ar2[index].credit}`;
    if (index == -1) return;
    // ${i + 1}:
    var credit = 0;
    var remCredit = document.getElementById("remainingCredit");
    


    if (player2Selected.length < 11) {
        // for (let i = 0; i < player2Selected.length; i++) {
        //     credit += player2Selected[i].credit;
        //     if (credit > 100) {
        //         alert("Credit is more then 100")
        //         return;
        //     }
        // }
        if (creditRem - ar2[index].credit < 0) {
            alert("Cant have more then 100 crredit")
            return;

        } else {
            if (ar2[index].playingRole == "Bowler") {
                if (bowlerCount == 5) {
                    alert("Already pick 5 Bowler")
                    return;
                }
                bowlerCount++;
            }
            if (ar2[index].playingRole == "Batsman") {
                if (batsmanCount == 5) {
                    alert("Already pick 5 Batsman")
                    return;
                }
                batsmanCount++;
            }
            if (ar2[index].playingRole == "Wicketkeeper") {
                if (wkCount == 1) {
                    alert("Already pick 1 Wicketkeeper")
                    return;
                }
                wkCount++;
            }
            creditRem = creditRem - ar2[index].credit
            player2Selected.push(ar2[index]);
        }
    }else {
        alert("only 11 slected")
        return;
    }

    
    remCredit.innerHTML = creditRem;

    // console.log("new1.text", new1.text);
    right.add(new Option(v));
    // var option = data[index];
    // right.add(new Option(`${index+1}:${option.name},${option.playingRole},${option.credit}`));
    left.remove(index);
    i++;
    ar2.splice(index, 1)
    console.log("ar", ar2);
    console.log(player2Selected)
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
    console.log("index", index);
    if (index == -1) return;
    var remCredit = document.getElementById("remainingCredit");
    creditRem = creditRem + player2Selected[index].credit
    // console.log(player1Selected);
    // var v = `${i+1}:${player1Selected[index].name},${player1Selected[index].playingRole},${player1Selected[index].credit}`;
    console.log("player2Selected[index].name", player2Selected[index]);
    left.add(new Option(`${player2Selected[index].name},${player2Selected[index].playingRole},${player2Selected[index].credit}`));
    ar2.push(player2Selected[index])
    // ${ar2.length}:
    player2Selected.splice(index, 1)
    right.remove(index);
    remCredit.innerHTML = creditRem;
}

function chooseCaptainTeam2() {
    console.log(player2Selected);
    if (player2Selected.length < 11) {
        alert("Please select 11 Player")
        return;
    }
    localStorage.setItem('player2Selected', JSON.stringify(player2Selected));
    document.getElementById("selectedCap2").innerHTML = null;
    document.getElementById("selectedViseCap2").innerHTML = null;
    let optionList = document.getElementById("selectedCap2").options;
    let optionList2 = document.getElementById("selectedViseCap2").options;

    player2Selected.forEach(option =>
        optionList.add(
            new Option(`${option.name},${option.playingRole},${option.credit}`)
        )
        // console.log(`${option.name},${option.playingRole},${option.credit}`)
    );
    player2Selected.forEach(option =>
        optionList2.add(
            new Option(`${option.name},${option.playingRole},${option.credit}`)
        )
        // console.log(`${option.name},${option.playingRole},${option.credit}`)
    );
}

function selectedcaptainTeam2() {

    var selectedCap = document.getElementById("selectedCap2");
    var index = selectedCap.selectedIndex;
    console.log(`${player2Selected[index].name},${player2Selected[index].playingRole},${player2Selected[index].credit}`);
    // if (player2Selected[index].name === getVisecapTeam2.name) {
    //     alert("Captain and visecaptain are not same please change")
    //     return;
    // }
    getcapTeam2 = player2Selected[index];
    console.log("getcapTeam2", getcapTeam2);
    document.getElementById("result1").innerHTML = `${getcapTeam2.name}`
    localStorage.setItem("Team2Cap", JSON.stringify(getcapTeam2))
    return getcapTeam2;

}

function chooseVisecaptionTeam2() {
    var selectedCap = document.getElementById("selectedViseCap2");
    var index = selectedCap.selectedIndex;
    console.log(`${player2Selected[index].name},${player2Selected[index].playingRole},${player2Selected[index].credit}`);
    if (player2Selected[index].name === getcapTeam2.name) {
        alert("Captain and visecaptain are not same please change")
        return;
    }
    getVisecapTeam2 = player2Selected[index];
    console.log("getVisecapTeam2", getVisecapTeam2);
    document.getElementById("result2").innerHTML = `${getVisecapTeam2.name}`
    localStorage.setItem("Team2ViseCap", JSON.stringify(getVisecapTeam2))
    return getVisecapTeam2;
}

function startMatch() {
    if (player2Selected.length < 11) {
        alert("Please select 11 Player")
        return;
    }
    var name1 = document.getElementById("selectedCap2");
    var name2 = document.getElementById("selectedViseCap2");
    console.log("name", name1.selectedIndex);
    console.log("name", name2.selectedIndex);
    if (name1.selectedIndex == name2.selectedIndex) {
        alert("Captain and visecaptain are not same please change")
        return;
    }
    location.href = `./playGame.html`
}


function loadData() {
    var player1Team = JSON.parse(localStorage.getItem('player1Select'))
    var player2Team = JSON.parse(localStorage.getItem('player2Selected'))

    var team1cap = JSON.parse(localStorage.getItem("Team1Cap"))
    var team1visecap = JSON.parse(localStorage.getItem("Team1ViseCap"))

    var team2cap = JSON.parse(localStorage.getItem("Team2Cap"))
    var team2visecap = JSON.parse(localStorage.getItem("Team2ViseCap"))
    // var newOrder = []       // Make list of wc batsman and bowling lineup
    // var player1Team = JSON.parse(localStorage.getItem('player1Select'))
    // // var player2Team = JSON.parse(localStorage.getItem('player2Selected'))
    // const result1 = player1Team.filter(word => word.playingRole == "Bowler");
    // const result2 = player1Team.filter(word => word.playingRole == "Batsman");
    // const result3 = player1Team.filter(word => word.playingRole == "Wicketkeeper");
    // console.log("result1", result1 , result2 , result3);
    // newOrder.push(result1 , result2 , result3);
    // var playeing11 = result3.concat(result2 , result1)

    // console.log("team1cap", team1cap);
    // console.log("team1visecap", team1visecap);

    teamWinner = (localStorage.getItem('winnerTeam'))
    team1 = (localStorage.getItem("team1"))
    team2 = (localStorage.getItem("team2"))

    if (teamWinner === team1) {
        document.getElementById("team1").innerHTML = `<h3>${team1}</h3>`;
        document.getElementById("team2").innerHTML = `<h3>${team2}</h3>`;
    } else {
        document.getElementById("team1").innerHTML = `<h2>${team2}</h2>`;
        document.getElementById("team2").innerHTML = `<h2>${team1}</h2>`;
    }

    var player1Team = JSON.parse(localStorage.getItem('player1Select'))
    // var player2Team = JSON.parse(localStorage.getItem('player2Selected'))
    const team1Bowler = player1Team.filter(word => word.playingRole == "Bowler");
    const team1Batsman = player1Team.filter(word => word.playingRole == "Batsman");
    const team1WK = player1Team.filter(word => word.playingRole == "Wicketkeeper");
    var playing11Team1 = team1WK.concat(team1Batsman, team1Bowler)
    playing11Team1.forEach(item => item.score = 0)
    playing11Team1.forEach(item => item.point = 0)
    localStorage.setItem("playing11Team1", JSON.stringify(playing11Team1))


    var player2Team = JSON.parse(localStorage.getItem('player2Selected'))
    // var player2Team = JSON.parse(localStorage.getItem('player2Selected'))
    const team2Bowler = player2Team.filter(word => word.playingRole == "Bowler");
    const team2Batsman = player2Team.filter(word => word.playingRole == "Batsman");
    const team2WK = player2Team.filter(word => word.playingRole == "Wicketkeeper");
    var playing11Team2 = team2WK.concat(team2Batsman, team2Bowler)
    playing11Team2.forEach(item => item.score = 0)
    playing11Team2.forEach(item => item.point = 0)
    localStorage.setItem("playing11Team2", JSON.stringify(playing11Team2))



    var list = document.getElementById("myList");
    playing11Team1.forEach((item) => {
        // var index = left.selectedIndex;
        var v = `${item.name},${item.playingRole},${item.credit}`;
        // if (index == -1) return;
        if (item.name == team1cap.name) {
            v = `${item.name},${item.playingRole},${item.credit} - Captain(Point x 2)`
        }
        if (item.name == team1visecap.name) {
            v = `${item.name},${item.playingRole},${item.credit} - Vice Captain(Point x 1.5)`
        }
        let li = document.createElement("li");
        li.innerText = v;
        list.appendChild(li);
    })
    var list2 = document.getElementById("myList2");
    playing11Team2.forEach((item) => {
        // var index = left.selectedIndex;
        var v = `${item.name},${item.playingRole},${item.credit}`;
        // if (index == -1) return;
        if (item.name == team2cap.name) {
            v = `${item.name},${item.playingRole},${item.credit} - Captain(Point x 2)`
        }
        if (item.name == team2visecap.name) {
            v = `${item.name},${item.playingRole},${item.credit} - Vice Captain(Point x 1.5)`
        }
        let li = document.createElement("li");
        li.innerText = v;
        list2.appendChild(li);
    })


}

function hitAndGetrun() {
    // document.getElementById("selectBut").disabled = true;
    var playing11Team1 = JSON.parse(localStorage.getItem("playing11Team1"))
    var playing11Team2 = JSON.parse(localStorage.getItem("playing11Team2"))
    console.log("playing11Team2", playing11Team2);
    console.log("playing11Team1", playing11Team1);
    // console.log("playing11Team2", playing11Team2);

    // var fanPointPlayer = 0;
    // var fanPointBowler = 0;
    // var fanPointTeam = 0;

    var batsman = document.getElementById("batsman")
    var bowler = document.getElementById("bowler")
    var scoreBoard = document.getElementById("scoreBoard")
    scoreBoard.scrollTop = scoreBoard.scrollHeight;
    // batsman.innerHTML = playing11Team1[0].name
    // bowler.innerHTML = playing11Team2[10].name
    time.setSeconds(time.getSeconds() + 5)
    // console.log(time.toLocaleString())

    // if (playing11Team1[wicket].name == team1cap.name || playing11Team2[bowlerChange].name == team2cap.name) {
    //     console.log("Point x 2 for caption")
    // }
    // if (playing11Team1[wicket].name == team1visecap.name || playing11Team2[bowlerChange].name == team2visecap.name) {
    //     console.log("Point x 1.5 for Vise caption")
    // }

    if (ball == 6) {
        playing11Team2.push(playing11Team2[bowlerChange].wicket = wicketCounter);
        playing11Team2.push(playing11Team2[bowlerChange].point = fanPointBowler);
        localStorage.setItem("playing11Team2", JSON.stringify(playing11Team2));
        console.log(fanPointBowler)
        console.log(fanPointPlayer)
        // console.log(dotBall)
        fanPointBowler = 0;
        wicketCounter = 0;
        ball = 0;
        dotBall = 0;
        // wicketCounter = 0;
        bowlerChange--;
        over++;
    }
    totalRun = (singleRun * 1) + (dblRun * 2) + (threeRun * 3) + (boundrey * 4) + (six * 6);
    document.getElementById("runs1").innerHTML = `${totalRun} / ${wicket} - Over ${over}.${ball}`;

    if (over > 4) {
        totalRun = (singleRun * 1) + (dblRun * 2) + (threeRun * 3) + (boundrey * 4) + (six * 6);
        var team1Runs = document.getElementById("runs1").innerHTML;
        localStorage.setItem("team1Runs", team1Runs);
        console.log("team1Runs", team1Runs);

        indiRun = 0;
        // document.getElementById("runs").innerHTML = null;
        for (let i = 0; i < scoreArray.length; i++) {
            indiRun += scoreArray[i];

            // if (scoreArray[i] == 0) { fanIndiPoint += 0 }
            if (scoreArray[i] == 1) { fanIndiPoint += 2 }
            if (scoreArray[i] == 2) { fanIndiPoint += 3 }
            if (scoreArray[i] == 3) { fanIndiPoint += 4 }
            if (scoreArray[i] == 4) { fanIndiPoint += 5 }
            if (scoreArray[i] == 6) { fanIndiPoint += 8 }
            // console.log("indiRun", indiRun);
            // console.log("scoreArray", scoreArray[i]);
            //    scoreArray.splice(0,scoreArray.length)
        }
        playing11Team1.push(playing11Team1[wicket].score = indiRun);
        playing11Team1.push(playing11Team1[wicket].point = fanIndiPoint);
        console.log("playing11Team1", playing11Team1);
        console.log("playing11Team1", playing11Team2);
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
        fanIndiPoint = 0;
        // console.log("totalRun", totalRun);
        // console.log(WicketTakker)
        // console.log(indiScore)
        indiRun = 0;
        wicketCounter = 0;
        // fanPointPlayer = 0;
        // fanPointBowler = 0;
        // fanPointTeam = 0;
        scoreBoard.innerHTML += ("\n")
        scoreBoard.innerHTML += ("New inning stared  \n")
        scoreBoard.innerHTML += (" \n")


        // const indices = [];
        // var element = 'W';
        // let idx = scoreArray.indexOf(element);
        // while (idx !== -1) {
        //     indices.push(idx);
        //     idx = scoreArray.indexOf(element, idx + 1);
        // }
        // console.log(indices);


        document.getElementById("selectBut2").style.visibility = "visible";
        document.getElementById("selectBut").style.visibility = "hidden";
        return;
    }



    // const indices = [];
    // var element = 'W';
    // let idx = scoreArray.indexOf(element);
    // while (idx !== -1) {
    //     indices.push(idx);
    //     idx = scoreArray.indexOf(element, idx + 1);
    // }
    // console.log(indices);
    var run = Math.floor(Math.random() * 7)
    switch (run) {
        case 0:
            // console.log(`${over}.${ball + 1} Wicket`)
            // setTimeout(() => {     
            scoreBoard.innerHTML += (`${over}.${ball + 1} - ${time.toLocaleString()} - Wicket \n`)
            wicket++;

            fanPointBowler += 10;
            batsman.innerHTML = playing11Team1[wicket].name;
            bowler.innerHTML = playing11Team2[bowlerChange].name;
            // var WicketBowler = playing11Team2[bowlerChange].name;
            ball++;
            indiRun = 0;
            fanIndiPoint = 0;
            for (let i = 0; i < scoreArray.length; i++) {
                indiRun += scoreArray[i];
                if (scoreArray[i] == 1) { fanIndiPoint += 2 }
                if (scoreArray[i] == 2) { fanIndiPoint += 3 }
                if (scoreArray[i] == 3) { fanIndiPoint += 4 }
                if (scoreArray[i] == 4) { fanIndiPoint += 5 }
                if (scoreArray[i] == 6) { fanIndiPoint += 8 }
                // console.log("indiRun", indiRun);
                // console.log("scoreArray", scoreArray[i]);
                //    scoreArray.splice(0,scoreArray.length)
            }
            if (indiRun == 0) {
                fanIndiPoint = -2;
            }
            console.log(fanIndiPoint)
            wicketCounter++;
            // for (let i = 0; i < WicketTakker.length; i++) {

            //     if (playing11Team2[bowlerChange].name == WicketTakker[i][0]) {
            //         // console.log("Same bowler take more wicket");
            //         // WicketTakker.push([playing11Team2[bowlerChange].name, wicketCounter]);
            //         WicketTakker[i][0] = wicketCounter;
            //     }
            // }
            // WicketTakker.push([playing11Team2[bowlerChange].name, wicketCounter]);

            // console.log("WicketTakker", WicketTakker);
            // playing11Team1
            playing11Team1.push(playing11Team1[wicket - 1].score = indiRun);
            playing11Team1.push(playing11Team1[wicket - 1].point = fanIndiPoint);
            localStorage.setItem("playing11Team1", JSON.stringify(playing11Team1));
            // localStorage.setItem("indiScore", indiScore);


            // for (let i = 0; i < indiScore.length; i++) {     // For print score

            //         console.log(indiScore[i][0]);
            //         console.log(playing11Team1[i].name);
            //         var list = document.getElementById("myList");
            //         v = `Vice Captain(Point x 1.5) - ${(indiScore[i][1])}`

            //         let li = document.createElement("li");
            //         li.innerText = v;
            //         list.appendChild(li);
            //     // }
            // }


            // console.log("indiScore", indiScore);
            // console.log("indiRun", indiRun);
            // console.log(`${playing11Team1[wicket - 1].name} score is ${indiRun}`);
            scoreArray.splice(0, (scoreArray.length));

            document.getElementById("selectBut").disabled = false;
            // setTimeout(()=>{
            //     document.getElementById("selectBut").disabled = false;
            //     console.log('Button Activated')}, 1000))


            // }, 1000);              

            break;

        case 1:
            // console.log(`${over}.${ball + 1} Single Run`)
            // setTimeout(() => {
            scoreBoard.innerHTML += (`${over}.${ball + 1} - ${time.toLocaleString()} - Single Run \n`)
            batsman.innerHTML = playing11Team1[wicket].name;
            bowler.innerHTML = playing11Team2[bowlerChange].name;
            fanPointPlayer += singleRun + 1;
            singleRun++;
            ball++;
            document.getElementById("selectBut").disabled = false;
            scoreArray.push(1);
            //console.log(ball);
            // return;
            // }, 1000);
            break;
        case 2:
            // console.log(`${over}.${ball + 1} Double Run`)
            // setTimeout(() => {
            scoreBoard.innerHTML += (`${over}.${ball + 1} - ${time.toLocaleString()} - Double Run \n`)
            batsman.innerHTML = playing11Team1[wicket].name
            bowler.innerHTML = playing11Team2[bowlerChange].name
            dblRun++;
            fanPointPlayer += (dblRun * 2) + 1;
            ball++;
            scoreArray.push(2)
            document.getElementById("selectBut").disabled = false;
            //console.log(ball);
            // return;
            // }, 1000);
            break;
        case 3:
            // console.log(`${over}.${ball + 1} Three Runs`)
            // setTimeout(() => {
            scoreBoard.innerHTML += (`${over}.${ball + 1} - ${time.toLocaleString()} - Three Runs \n`)
            batsman.innerHTML = playing11Team1[wicket].name
            bowler.innerHTML = playing11Team2[bowlerChange].name
            threeRun++;
            fanPointPlayer += (threeRun * 3) + 1;
            ball++;
            scoreArray.push(3)
            document.getElementById("selectBut").disabled = false;
            //console.log(ball);
            // return;
            // }, 1000);
            break;
        case 4:
            // console.log(`${over}.${ball + 1} Boundary`)
            // setTimeout(() => {
            scoreBoard.innerHTML += (`${over}.${ball + 1} - ${time.toLocaleString()} - Boundary \n`)
            batsman.innerHTML = playing11Team1[wicket].name
            bowler.innerHTML = playing11Team2[bowlerChange].name
            boundrey++;
            fanPointPlayer += (boundrey * 4) + 1;
            ball++;
            scoreArray.push(4)
            document.getElementById("selectBut").disabled = false;

            //console.log(ball);
            // return;
            // }, 1000);
            break;
        case 5:
            // console.log(`${over}.${ball + 1} Dot Ball`)
            // setTimeout(() => {
            scoreBoard.innerHTML += (`${over}.${ball + 1} - ${time.toLocaleString()} - Dot Ball \n`)
            batsman.innerHTML = playing11Team1[wicket].name;
            bowler.innerHTML = playing11Team2[bowlerChange].name;
            dotBall++;
            fanPointBowler++;
            ball++;
            scoreArray.push(0)
            document.getElementById("selectBut").disabled = false;
            //console.log(ball);
            // return;
            // }, 1000);
            break;

        case 6:
            // console.log(`${over}.${ball + 1} Six`)
            // setTimeout(() => {
            scoreBoard.innerHTML += (`${over}.${ball + 1} - ${time.toLocaleString()} - Six \n`)
            batsman.innerHTML = playing11Team1[wicket].name
            bowler.innerHTML = playing11Team2[bowlerChange].name

            six++;
            fanPointPlayer += (six * 6) + 1;
            ball++;
            scoreArray.push(6)

            document.getElementById("selectBut").disabled = false;
            //console.log(ball);
            // return;
            // }, 1000);
            break;
    } 
    // if (totalRun == 0) {
    //     console.log("totalRun", totalRun);
    // } else {
    //     console.log("totalRun", totalRun);
    //     fantasyPoint = ((singleRun + 1) + ((dblRun * 2) + 1) + ((threeRun * 3) + 1) + (5 * boundrey) + (8 * six))

    //     console.log("fantasyPoint", fantasyPoint);
    // }



}

function getRunForTeam2() {
    // document.getElementById("selectBut2").disabled = true;
    var playing11Team1 = JSON.parse(localStorage.getItem("playing11Team1"))
    var playing11Team2 = JSON.parse(localStorage.getItem("playing11Team2"))
    // console.log("playing11Team1", playing11Team1);
    // console.log("playing11Team2", playing11Team2);

    var batsman = document.getElementById("batsman")
    var bowler = document.getElementById("bowler")
    var scoreBoard = document.getElementById("scoreBoard")
    scoreBoard.scrollTop = scoreBoard.scrollHeight;

    // batsman.innerHTML = playing11Team1[0].name
    // bowler.innerHTML = playing11Team2[10].name


    time.setSeconds(time.getSeconds() + 5)
    // if (playing11Team2[wicket].name == team2cap.name || playing11Team1[bowlerChange].name == team1cap.name) {
    //     console.log("Point x 2 for caption")
    // }
    // if (playing11Team2[wicket].name == team2visecap.name || playing11Team1[bowlerChange].name == team1visecap.name) {
    //     console.log("Point x 1.5 for Vise caption")
    // }
    if (ball == 6) {
        // WicketTakkerTeam2.push([playing11Team1[bowlerChange].name, wicketCounter]);

        playing11Team1.push(playing11Team1[bowlerChange].wicket = wicketCounter);
        playing11Team1.push(playing11Team1[bowlerChange].point = fanPointBowler);
        localStorage.setItem("playing11Team1", JSON.stringify(playing11Team1));
        fanPointBowler = 0;
        dotBall = 0;
        console.log(fanPointBowler)
        console.log(fanPointPlayer)
        wicketCounter = 0;
        ball = 0;
        bowlerChange--;
        over++;
    }
    totalRun = (singleRun * 1) + (dblRun * 2) + (threeRun * 3) + (boundrey * 4) + (six * 6);
    document.getElementById("runs2").innerHTML = `${totalRun} / ${wicket} - Over ${over}.${ball}`;
    if (over > 4) {
        totalRun = (singleRun * 1) + (dblRun * 2) + (threeRun * 3) + (boundrey * 4) + (six * 6);
        // var team2Runs = document.getElementById("runs").innerHTML;
        // localStorage.setItem("team2Runs",team2Runs),
        // localStorage.setItem("team1Runs",team1Runs);
        indiRun = 0;
        fanIndiPoint = playing11Team2[wicket].point;
        for (let i = 0; i < scoreArrayTeam2.length; i++) {
            indiRun += scoreArrayTeam2[i];
            if (scoreArray[i] == 1) { fanIndiPoint += 2 }
            if (scoreArray[i] == 2) { fanIndiPoint += 3 }
            if (scoreArray[i] == 3) { fanIndiPoint += 4 }
            if (scoreArray[i] == 4) { fanIndiPoint += 5 }
            if (scoreArray[i] == 6) { fanIndiPoint += 8 }
            // console.log("indiRun", indiRun);
            // console.log("scoreArray", scoreArray[i]);
            //    scoreArray.splice(0,scoreArray.length)
        }
        // indiScoreTeam2.push([playing11Team2[wicket].name, indiRun]);

        playing11Team2.push(playing11Team2[wicket].score = indiRun);
        console.log("playing11Team1", playing11Team1);
        playing11Team2.push(playing11Team2[wicket].point = indiRun + fanIndiPoint);
        console.log("playing11Team2", playing11Team2);
        localStorage.setItem("playing11Team2", JSON.stringify(playing11Team2));

        // ball = 0;
        // over = 0;
        // wicket = 0;
        // bowlerChange = 10;
        // singleRun = 0;
        // dblRun = 0;
        // threeRun = 0;
        // boundrey = 0;
        // six = 0;
        scoreBoard.innerHTML += ("\n")
        scoreBoard.innerHTML += ("Match finished \n")
        scoreBoard.innerHTML += (" \n")


        // const indices = [];
        // var element = 'W';
        // let idx = scoreArray.indexOf(element);
        // while (idx !== -1) {
        //     indices.push(idx);
        //     idx = scoreArray.indexOf(element, idx + 1);
        // }
        // console.log(indices);

        // console.log("totalRun", totalRun);
        // console.log(WicketTakkerTeam2)
        // console.log(indiScoreTeam2)
        // document.getElementById("selectBut2").style.visibility = "visible";
        document.getElementById("selectBut").style.visibility = "hidden";
        document.getElementById("selectBut2").style.visibility = "hidden";
        location.href = `./scoreBoard.html`
        return;
    }

    var run = Math.floor(Math.random() * 7)
    switch (run) {
        case 0:
            // console.log(`${over}.${ball + 1} Wicket`)
            // setTimeout(() => {
            scoreBoard.innerHTML += (`${over}.${ball + 1} - ${time.toLocaleString()} - Wicket \n`)
            wicket++;
            fanPointBowler += 10;
            batsman.innerHTML = playing11Team2[wicket].name;
            bowler.innerHTML = playing11Team1[bowlerChange].name;
            ball++;
            indiRun = 0;
            fanIndiPoint = 0;
            for (let i = 0; i < scoreArrayTeam2.length; i++) {
                indiRun += scoreArrayTeam2[i];

                if (scoreArrayTeam2[i] == 1) { fanIndiPoint += 2 }
                if (scoreArrayTeam2[i] == 2) { fanIndiPoint += 3 }
                if (scoreArrayTeam2[i] == 3) { fanIndiPoint += 4 }
                if (scoreArrayTeam2[i] == 4) { fanIndiPoint += 5 }
                if (scoreArrayTeam2[i] == 6) { fanIndiPoint += 8 }
                // console.log("indiRun", indiRun);
                // console.log("scoreArray", scoreArray[i]);
                //    scoreArray.splice(0,scoreArray.length)
            }
            if (indiRun == 0) {
                fanIndiPoint = -2;
            }
            wicketCounter++;
            // for (let i = 0; i < WicketTakkerTeam2.length; i++) {

            //     if (playing11Team1[bowlerChange].name == WicketTakkerTeam2[i][0]) {

            //         WicketTakkerTeam2[i][0] = wicketCounter;
            //     }
            // }
            // WicketTakkerTeam2.push([playing11Team1[bowlerChange].name, wicketCounter]);

            // playing11Team1
            // if (indiRun == 0) { fanIndiPoint = -2 }
            playing11Team2.push(playing11Team2[wicket - 1].score = indiRun);
            playing11Team2.push(playing11Team2[wicket - 1].point = fanIndiPoint);
            localStorage.setItem("playing11Team2", JSON.stringify(playing11Team2));
            // indiScoreTeam2.push([playing11Team2[wicket - 1].name, indiRun]);
            // localStorage.setItem("indiScore", indiScore);


            // for (let i = 0; i < indiScore.length; i++) {     // For print score

            //         console.log(indiScore[i][0]);
            //         console.log(playing11Team1[i].name);
            //         var list = document.getElementById("myList");
            //         v = `Vice Captain(Point x 1.5) - ${(indiScore[i][1])}`

            //         let li = document.createElement("li");
            //         li.innerText = v;
            //         list.appendChild(li);
            //     // }
            // }


            // console.log("indiScore", indiScore);
            // console.log("indiRun", indiRun);
            // console.log(`${playing11Team2[wicket - 1].name} score is ${indiRun}`);
            scoreArrayTeam2.splice(0, (scoreArrayTeam2.length));
            // scoreArray.push("W")
            // indiRun = 0;
            document.getElementById("selectBut2").disabled = false;
            // console.log("totalRun", totalRun);
            //console.log(ball);
            // return;
            // }, 100);
            break;
        case 1:
            // console.log(`${over}.${ball + 1} Single Run`);
            // setTimeout(() => {
            scoreBoard.innerHTML += (`${over}.${ball + 1} - ${time.toLocaleString()} - Single Run \n`)

            batsman.innerHTML = playing11Team2[wicket].name
            bowler.innerHTML = playing11Team1[bowlerChange].name
            fanPointPlayer += singleRun + 1;
            singleRun++;
            ball++;
            document.getElementById("selectBut2").disabled = false;
            console.log("totalRun", totalRun);
            scoreArrayTeam2.push(1)
            //console.log(ball);
            // return;
            // }, 1000);
            break;
        case 2:
            // console.log(`${over}.${ball + 1} Double Run`)
            // setTimeout(() => {

            scoreBoard.innerHTML += (`${over}.${ball + 1} - ${time.toLocaleString()} - Double Run \n`)

            batsman.innerHTML = playing11Team2[wicket].name
            bowler.innerHTML = playing11Team1[bowlerChange].name
            dblRun++;
            fanPointPlayer += (dblRun * 2) + 1;
            ball++;
            scoreArrayTeam2.push(2)
            document.getElementById("selectBut2").disabled = false;
            console.log("totalRun", totalRun);
            //console.log(ball);
            // return;
            // }, 1000);
            break;
        case 3:
            console.log(`${over}.${ball + 1} Three Runs`)
            // setTimeout(() => {
            scoreBoard.innerHTML += (`${over}.${ball + 1} - ${time.toLocaleString()} - Three Runs \n`)

            batsman.innerHTML = playing11Team2[wicket].name
            bowler.innerHTML = playing11Team1[bowlerChange].name
            threeRun++;
            fanPointPlayer += (threeRun * 3) + 1;
            ball++;
            scoreArrayTeam2.push(3)
            document.getElementById("selectBut2").disabled = false;
            console.log("totalRun", totalRun);
            //console.log(ball);
            // return;
            // }, 1000);
            break;
        case 4:
            console.log(`${over}.${ball + 1} Boundary`)
            // setTimeout(() => {
            scoreBoard.innerHTML += (`${over}.${ball + 1} - ${time.toLocaleString()} - Boundary \n`)

            batsman.innerHTML = playing11Team2[wicket].name
            bowler.innerHTML = playing11Team1[bowlerChange].name
            boundrey++;
            fanPointPlayer += (boundrey * 4) + 1;
            ball++;
            scoreArrayTeam2.push(4)
            document.getElementById("selectBut2").disabled = false;
            console.log("totalRun", totalRun);
            //console.log(ball);
            // return;
            // }, 1000);
            break;
        case 5:
            console.log(`${over}.${ball + 1} Dot Ball`)
            // setTimeout(() => {
            scoreBoard.innerHTML += (`${over}.${ball + 1} - ${time.toLocaleString()} - Dot Ball \n`)

            batsman.innerHTML = playing11Team2[wicket].name;
            bowler.innerHTML = playing11Team1[bowlerChange].name;
            dotBall++;
            fanPointBowler++;
            ball++;
            scoreArrayTeam2.push(0)
            document.getElementById("selectBut2").disabled = false;
            console.log("totalRun", totalRun);
            //console.log(ball);
            // return;
            // }, 1000);
            break;

        case 6:
            console.log(`${over}.${ball + 1} Six`)
            // setTimeout(() => {
            scoreBoard.innerHTML += (`${over}.${ball + 1} - ${time.toLocaleString()} - Six \n`)

            batsman.innerHTML = playing11Team2[wicket].name
            bowler.innerHTML = playing11Team1[bowlerChange].name
            six++;
            fanPointPlayer += (six * 6) + 1;
            ball++;
            scoreArrayTeam2.push(6)
            document.getElementById("selectBut2").disabled = false;
            console.log("totalRun", totalRun);
            //console.log(ball);
            // return;
            // }, 1000);
            break;
    }


    // var totalRun = singleRun + dblRun + threeRun + boundrey + six;
    // console.log("singleRun", singleRun *1);
    // console.log("dblRun", dblRun * 2);
    // console.log("threeRun", threeRun * 3 );
    // console.log("boundrey", boundrey * 4);
    // console.log("six", six * 6);

    // totalRun =(singleRun * 1) + (dblRun * 2) + (threeRun * 3) + (boundrey * 4) + (six * 6);
    // console.log("totalRun", totalRun);
}
function getScoreboard() {
    // var scoreArray = []
    // var WicketTakker = []
    // var indiScore = [];
    // var scoreArrayTeam2 = []
    // var WicketTakkerTeam2 = []
    // var indiScoreTeam2 = [];
    document.getElementById("winner").innerHTML = ""
    var playing11Team1 = JSON.parse(localStorage.getItem("playing11Team1"));
    console.log("playing11Team1", playing11Team1);
    var playing11Team2 = JSON.parse(localStorage.getItem("playing11Team2"));
    console.log("playing11Team2", playing11Team2);

    var team1cap = JSON.parse(localStorage.getItem("Team1Cap"))
    var team1visecap = JSON.parse(localStorage.getItem("Team1ViseCap"))

    var team2cap = JSON.parse(localStorage.getItem("Team2Cap"))
    var team2visecap = JSON.parse(localStorage.getItem("Team2ViseCap"))

    var team1Runs = localStorage.getItem("team1Runs")
    var team2Runs = localStorage.getItem("team2Runs")

    document.getElementById("ScoreTeam1").innerHTML = team1Runs;
    document.getElementById("ScoreTeam2").innerHTML = team2Runs;

    var totalScoreTeam1 = document.getElementById("totalScoreTeam1")
    var score = 0
    playing11Team1.forEach(item => {
        if (item.name) {
            if (item.name == team1cap.name) {
                score += (item.point) * 2;
                return;
            }
            if (item.name == team1visecap.name) {
                score += (item.point) * 1.5;
                return
            }
            score += item.point;
            console.log("score2", score);
        }
    })
    totalScoreTeam1.innerHTML = score;

    var totalScoreTeam2 = document.getElementById("totalScoreTeam2")
    var score2 = 0
    playing11Team2.forEach(item => {
        if (item.name) {
            if (item.name == team2cap.name) {
                score2 += (item.point) * 2;
                return;
            }
            if (item.name == team2visecap.name) {
                score2 += (item.point) * 1.5;
                return;
            }
            score2 += item.point;
            console.log("score", score2);
        }
    })
    totalScoreTeam2.innerHTML = score2;

    var team1 = localStorage.getItem("team1")
    var team2 = localStorage.getItem("team2")
    if (score > score2) {
        document.getElementById("winner").innerHTML = team1;
    } else {
        document.getElementById("winner").innerHTML = team2;
    }

    var list = document.getElementById("myListScore");

    playing11Team1.forEach((item) => {
        // var index = left.selectedIndex;
        if (item.name) {
            // if(item.score == 0){ item.point = -2}
            var v = `${item.name} - Run: ${item.score} / Point: ${item.point}`;
            // var v = `${item}`;
            // // if (index == -1) return;
            // if (item.name == team1cap.name) {
            //     v = `${item.name},${item.playingRole},${item.credit} - Captain(Point x 2)`
            // }
            // if (item.name == team1visecap.name) {
            //     v = `${item.name},${item.playingRole},${item.credit} - Vice Captain(Point x 1.5)`
            // }
            if (item.name == team1cap.name) {
                v = `${item.name} - Run: ${item.score} / Point: ${(item.point) * 2} - Captain(Point x 2)`
            }
            if (item.name == team1visecap.name) {
                v = `${item.name} - Run: ${item.score} / Point: ${(item.point) * (3 / 2)} - Vice Captain(Point x 1.5)`
            }
            score += item.point;
            let li = document.createElement("li");
            li.innerText = v;
            list.appendChild(li);

        }
        // if(item.point){
        //     score += item.point ;
        //     console.log("score", score);
        //     totalScoreTeam1.innerHTML = score;
        // }

    })
    // var list2 = document.getElementById("myList2Score");
    let li = document.createElement("li");
    li.innerText = "\n"
    list.appendChild(li);
    playing11Team2.forEach((item) => {
        // // var index = left.selectedIndex;
        // var v = `${item.name},${item.playingRole},${item.credit}`;
        // // if (index == -1) return;

        // let li = document.createElement("li");
        // li.innerText = v;
        // list1.appendChild(li);
        if (item.wicket || item.wicket == 0) {

            var v = `${item.name} - Wicket: ${item.wicket} / Point: ${item.point}`;
            // var v = `${item}`;
            // // if (index == -1) return;
            if (item.name == team2cap.name) {
                v = `${item.name} - Wicket: ${item.wicket} / Point: ${(item.point) * 2} - Captain(Point x 2)`
            }
            if (item.name == team2visecap.name) {
                v = `${item.name} - Wicket: ${item.wicket} / Point: ${(item.point) * 1.5} - Vice Captain(Point x 1.5)`
            }
            let li = document.createElement("li");
            li.innerText = v;
            list.appendChild(li);
            // } 
        }
    })
    var myList2 = document.getElementById("myList2Score");
    playing11Team2.forEach((item) => {
        // var index = left.selectedIndex;
        if (item.name) {

            var v = `${item.name} - Run: ${item.score} / Point: ${item.point}`;
            // var v = `${item}`;
            // // if (index == -1) return;
            if (item.name == team2cap.name) {
                v = `${item.name} - Run: ${item.score} / Point: ${(item.point) * 2} - Captain(Point x 2)`
            }
            if (item.name == team2visecap.name) {
                v = `${item.name} - Run: ${item.score} / Point: ${(item.point) * 1.5} - Vice Captain(Point x 1.5)`
            }
            let li = document.createElement("li");
            li.innerText = v;
            myList2.appendChild(li);
        }
    })
    // var list2 = document.getElementById("myList2Score");
    let li2 = document.createElement("li");
    li2.innerText = "\n";
    myList2.appendChild(li2);
    // list2.appendChild(li);

    playing11Team1.forEach((item) => {
        if (item.wicket || item.wicket == 0) {

            var v = `${item.name} - Wicket: ${item.wicket} / Point: ${item.point}`;
            // var v = `${item}`;
            // // if (index == -1) return;
            if (item.name == team1cap.name) {
                v = `${item.name} - Wicket: ${item.wicket} / Point: ${(item.point) * 2} - Captain(Point x 2)`
            }
            if (item.name == team1visecap.name) {
                v = `${item.name} - Wicket: ${item.wicket} / Point: ${(item.point) * 1.5} - Vice Captain(Point x 1.5)`
            }
            let li = document.createElement("li");
            li.innerText = v;
            myList2.appendChild(li);
        }
    })
}
