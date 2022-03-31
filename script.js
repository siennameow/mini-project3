
var wins = 0;
var ties = 0;
var losses = 0;

var computerPick = ["R", "P", "S"];
function myFunction(){
    alert ("Lets play Rock, Paper, Scissors!")
    var playGame = function() {
    
    var userResult = prompt("Choose your weapon: R, P, or S:");

    if (!userResult) {
        return;
    }
    userResult = userResult.toUpperCase();

    var random = Math.floor(Math.random() * computerPick.length);
    var computerResult = computerPick[random];
    alert("Rock, paper, scissors, shoot!");

    if (
        (userResult === "R" && computerResult === "R") || 
        (userResult === "P" && computerResult === "P") || 
        (userResult=== "S" && computerResult === "S")
    ) {
        ties++;
        window.alert("It's a tie, let's play again!");

    } else if (
        (userResult === "R" && computerResult === "S") || 
        (userResult === "P" && computerResult === "R") || 
        (userResult=== "S" && computerResult === "P")
    ) {
        wins++;
        window.alert("You won, you crashed the computer!");

    } else {
        losses++;
        window.alert("You lost, the computer is way ahead of you!");
    }
     
    window.alert(
        "\nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties
    );

    var playAgain = window.confirm("Do you want to play again?");

    if (playAgain) {
        playGame();
    }
    };

    playGame();

}

