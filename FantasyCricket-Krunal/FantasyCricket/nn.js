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