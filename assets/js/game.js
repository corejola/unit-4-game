$(document).ready(function () {
    // Function Game Start

    // Game in progress = True
    //Initial Conditions
    // var gameInProgress = true;
    // Initial Conditions:
    //Target Number = 0
    var targetNum = null;
    // Player's total score = 0
    var playerScore = 0;
    //      Wins = 0
    var wins = 0;
    //      Losses = 0

    var losses = 0;
    var mindGem = 0;
    var soulGem = 0;
    var spaceGem = 0;
    var timeGem = 0;

    function stoneReset() {

        //infinity stone random number generator
        mindGem = Math.floor(Math.random() * (13 - 1)) + 1;
        soulGem = Math.floor(Math.random() * (13 - 1)) + 1;
        spaceGem = Math.floor(Math.random() * (13 - 1)) + 1;
        timeGem = Math.floor(Math.random() * (13 - 1)) + 1;
    }

    // console.log(mindGem)
    // console.log(soulGem)
    // console.log(spaceGem)
    // console.log(timeGem)

    // for (var i = 0; i < infinityStones.length; i++) {
    //     var randomValue = Math.floor(Math.random() * (13 - 1)) + 1;
    //     infinityStones[i];
    //     // numberCrystal.html(randomValue);
    // };

    function gameStart() {

        //target number random number generator initialized
        targetNum = Math.floor(Math.random() * (121 - 19)) + 19;
        console.log(targetNum);

        stoneReset();

        //initial conditions tied to HTML elements
        $('#targetNumber').html(targetNum);
        $('#wins-counter').html(wins);
        $('#losses-counter').html(losses);
        $('#points').html(playerScore);

        //score initial conditions, carry over wins and losses from last roundc

        // gameInProgress = true;
        //      Target number generated (random) = ~19 - 120

    }

    // if players points === target number
    // wins++ to HTML Score element, game in progress = false, 
    // if players points > target number, 
    //loss ++ to HTML Score element, game in progress = false,

    function inGame() {

        if (playerScore === targetNum) {
            console.log("win");
            // wins++;
            // $('#wins-counter').html(wins);
            // gameStart();
        }
        if (playerScore > targetNum) {
            // losses++;
            console.log("lose");
            // $('#losses-counter').html(losses);
            // gameStart();
        };

    };

    // Crystal Numbers #1-4 ( ~1 - 12) per crystal using for loop?

    //return all player inputs

    // player clicks on 1 of 4 crystals, 
    // crystals random value determined at begining of round
    // as player clicks, the crystal values are added to your total score box (playrs points)

    //click functions
    $('#mindGem').on("click", function () {
        console.log(mindGem);
        playerScore += mindGem;
        $('#points').html(playerScore);
    });
    $('#soulGem').on("click", function () {
        console.log(soulGem);
        playerScore += soulGem;
        $('#points').html(playerScore);
    });
    $('#spaceGem').on("click", function () {
        console.log(spaceGem);
        playerScore += spaceGem;
        $('#points').html(playerScore);
    });
    $('#timeGem').on("click", function () {
        console.log(timeGem);
        playerScore += timeGem;
        $('#points').html(playerScore);
    });


    gameStart();

    inGame();

    // function Game Start ()
    // gameStart()
})