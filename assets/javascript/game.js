$(document).ready(function () {
    var crystalOne = 0;
    var crystalTwo = 0;
    var crystalThree = 0;
    var crystalFour = 0;
    var crystalOneBtn = $("#crystalOne");
    var crystalTwoBtn = $("#crystalTwo");
    var crystalThreeBtn = $("#crystalThree");
    var crystalFourBtn = $("#crystalFour");
    var score = 0;
    var randomNumber = 0;
    var wins = 0;
    var losses = 0;

    var init = function () {
        // sets score to 0
        score = 0;
        $("#score").text("Your total score is: " + score);

        // sets number to a random number
        randomNumber = 19 + Math.floor(Math.random() * 120);
        console.log("target score is " + randomNumber);
        $("#number").text("The target score is " + randomNumber);

        // sets crystals to random numbers
        crystalOne = 1 + Math.floor(Math.random() * 12);
        crystalTwo = 1 + Math.floor(Math.random() * 12);
        crystalThree = 1 + Math.floor(Math.random() * 12);
        crystalFour = 1 + Math.floor(Math.random() * 12);
        console.log("crystal one is " + crystalOne);
        console.log("crystal two is " + crystalTwo);
        console.log("crystal three is " + crystalThree);
        console.log("crystal four is " + crystalFour);
        // prints wins and losses
        $("#wins").text("Wins: " + wins);
        $("#losses").text("Losses: " + losses);
    }

    // adds crystal value to current score on click
    $(crystalOneBtn).on("click", function () {
        score = score + crystalOne;
        $("#score").text("Your total score is: " + score);
        if (score === randomNumber) {
            win();
        }
        if (score > randomNumber) {
            lose();
        }
    })
    $(crystalTwoBtn).on("click", function () {
        score = score + crystalTwo;
        $("#score").text("Your total score is: " + score);
        if (score === randomNumber) {
            win();
        }
        if (score > randomNumber) {
            lose();
        }
    })
    $(crystalThreeBtn).on("click", function () {
        score = score + crystalThree;
        $("#score").text("Your total score is: " + score);
        if (score === randomNumber) {
            win();
        }
        if (score > randomNumber) {
            lose();
        }
    })
    $(crystalFourBtn).on("click", function () {
        score = score + crystalFour;
        $("#score").text("Your total score is: " + score);
        if (score === randomNumber) {
            win();
        }
        if (score > randomNumber) {
            lose();
        }
    })

    var lose = function () {
        losses++;
        init();
    }

    var win = function () {
        wins++;
        init();
    }
    init();
})


