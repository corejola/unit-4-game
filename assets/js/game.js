$(document).ready(function () {
    // Function Game Start

    // Game in progress = True
    //Initial Conditions
    var gameInProgress = true;
    // var crystals = [image1];/
    // Initial Conditions:
    //      Player's total score = 0
    var playerScore;
    //      Wins = 0
    var wins = 0;
    //      Losses = 0
    var losses = 0;

    var mindGem = Math.floor(Math.random() * (13 - 1)) + 1;
    var souldGem = Math.floor(Math.random() * (13 - 1)) + 1;
    var spaceGem = Math.floor(Math.random() * (13 - 1)) + 1;
    var timeGem = Math.floor(Math.random() * (13 - 1)) + 1;

    console.log(mindGem)
    console.log(souldGem)
    console.log(spaceGem)
    console.log(timeGem)

    var targetNum = Math.floor(Math.random() * (121 - 19)) + 19;
    console.log(targetNum);
    $('#targetNumber').html(targetNum);
    $('#wins-counter').html(wins);
    $('#losses-counter').html(losses);
    function gameStart() {

        //      Target number generated (random) = ~19 - 120

    }
    gameStart();
    // Crystal Numbers #1-4 ( ~1 - 12) per crystal (using for loop
    // var crystal = [];
    // value between 1 - 12
    // for (var i = 0; i < var.length; i++) {
    // 	    var Crystal =  Math.floor(math.random() * (13 - 1)) +1;
    // 	    var image = $('<img>)
    // 	    Image.attr(crystal[i])
    // 	    $('#crystal').apend(image)?
    //      .push(crystal);?


    // function crystalNumberGenerator() {
    //     for (var i = 0; i < infinityStones.length; i++) {
    //         var randomValue = Math.floor(Math.random() * (13 - 1)) + 1;
    //         infinityStones[i];
    //         // numberCrystal.html(randomValue);
    //     }
    // };




    // Function Game in Progress
    // player clicks on 1 of 4 crystals, player click stored to a variable
    // as player clicks crystals, random crystal value is added to player points

    // if players points === target number
    // wins++ to HTML Score element, game in progress = false, 
    // if players points > target number, 
    //loss ++ to HTML Score element, game in progress = false,
    //
    // function Game Start ()
    // gameStart()
})