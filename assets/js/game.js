$(document).ready(function () {

    // Initial Conditions:
    var targetNum = null;
    var playerScore = 0;
    var wins = 0;
    var losses = 0;

    //infinity stone random number generator between 1-12
    // for (var i = 0; i < infinityStones.length; i++) {    
    //     var randomValue = Math.floor(Math.random() * (13 - 1)) + 1;
    //     infinityStones[i];
    //     // numberCrystal.html(randomValue);
    // };

    function gameRestart() {

        $('.infinityStone').empty();
        //target number random number generator initialized
        // targetNum;
        targetNum = Math.floor(Math.random() * (121 - 19)) + 19;
        // console.log(targetNum);
        playerScore = 0;

        var stones = [
            "assets/images/MindGem.PNG",
            "assets/images/SoulGem.PNG",
            "assets/images/SpaceGem.PNG",
            "assets/images/TimeGem.PNG"];

        for (var i = 0; i < 4; i++) {
            var randomValue = Math.floor(Math.random() * (12)) + 1;
            var stoneNumber = $('<img>');
            stoneNumber.attr({
                "class": 'stone',
                "data-random": randomValue,
                "src": stones[i],
            });
            $('.infinityStone').append(stoneNumber);

        }

        console.log("targetNum is " + targetNum)
        $('#targetNumber').html(targetNum);
        // gameInProgress = true;
        inGame()
    }

    // if players score === target number
    // wins++ to HTML Score element, game in progress = false, 
    // if players score > target number, 
    //loss ++ to HTML Score element, game in progress = false,

    function inGame() {
        // player clicks on 1 of 4 crystals, 
        // crystals random value determined at begining of round
        // as player clicks, the crystal values are added to your total score box (playrs points)

        //click functions
        $('.stone').on("click", function () {
            var stoneValue = ($(this).attr("data-random"));
            stoneValue = parseInt(stoneValue);
            // console.log(stoneValue);
            playerScore += stoneValue;
            console.log(playerScore)

            if (playerScore === targetNum) {
                // console.log("win");
                wins++;
                $('#wins-counter').html(wins);
                gameRestart();
            }
            if (playerScore > targetNum) {
                losses++;
                // console.log("lose");
                $('#losses-counter').html(losses);
                gameRestart();
            };
            $('#points').html(playerScore);
        });

        $('#wins-counter').html(wins);
        $('#losses-counter').html(losses);


    };

    gameRestart();
    // inGame();
})