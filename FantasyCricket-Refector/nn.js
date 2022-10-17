const result1 = player1Selected.map(word => word.playingRole == "Bowler");
const result2 = player1Selected.map(word => word.playingRole == "Batsman");
const result3 = player1Selected.map(word => word.playingRole == "Wicketkeeper");
totalBowler = 0;
totalBatsman = 0;
totalWK = 0;
credit = 0;
for (let i = 0; i < player1Selected.length; i++) {
    credit += player1Selected[i].credit
    if (result1[i] == true) {
        totalBowler++;
        if (totalBowler > 5) {
            alert("Cant pick more then 5 bowler")

            return;
        }

    }
    if (result2[i] == true) {
        totalBatsman++;
        if (totalBatsman > 5) {
            alert("Cant pick more then 5 batsman")
            return;
        }
    }
    if (result3[i] == true) {
        totalWK++;
        if (totalWK > 1) {
            alert("Cant pick more then 1 Wicketkeeper")
            return;
        }
    }
    if (credit > 100) {
        alert("Credit is more then 100")
        return;
    }

}



localStorage.setItem('newArr', JSON.stringify(ar));
newArray = JSON.parse(localStorage.getItem('newArr'))


 // const result11 = player1Selected.filter(word => word.playingRole == "Bowler");
    
    // const result21 = player1Selected.filter(word => word.playingRole == "Batsman");
    // const result31 = player1Selected.filter(word => word.playingRole == "Wicketkeeper");
// if (result1.length < 5) {
        //     player1Selected.push(ar[index]);    
        // } else {
        //     alert("Cant pick more then 5 bowler")
        //     return;
        // }
        
        // if (result2.length > 5) {
        //     alert("Cant pick more then 5 batsman")
        //     return;
        // } else {
        //     player1Selected.push(ar[index]);
        // }

        // if (result3.length > 1) {
        //     alert("Cant pick more then 1 Wicketkeeper")
        //     return;
        // } else {
        //     player1Selected.push(ar[index]);
        // }




// const runsData = [
//     {run:1,fantasyPoints:2},
//     {run:2,fantasyPoints:3},
//     {run:3,fantasyPoints:4},
//     {run:4,fantasyPoints:5},
//     {run:6,fantasyPoints:8}
// ]

// for (let i = 0; i < scoreArray.length; i++){
    //     runsData.forEach((runs)=>{
    //         if(runs.run == scoreArray[i]){
    //             fanIndiPoint += runs.fantasyPoints;
    //         }
    //     })
    // }

//at 106
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

    
    function displayWinner(score1, score2) {
        var team1 = localStorage.getItem("team1");
        var team2 = localStorage.getItem("team2");
        if (score1 > score2) {
            document.getElementById("winner").innerHTML = team1;
        } else {
            document.getElementById("winner").innerHTML = team2;
        }
    }