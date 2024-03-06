// Function to roll dice and determine winner
function rollDice() {
    // Get player names from HTML
    var player1Name = document.getElementById('player1Name').innerText; // Get Player 1 name
    var player2Name = document.getElementById('player2Name').innerText; // Get Player 2 name

    // Generate random numbers between 1 and 6 for both players
    var player1Value = Math.floor(Math.random() * 6) + 1; // Generate random number for player 1
    var player2Value = Math.floor(Math.random() * 6) + 1; // Generate random number for player 2

    // Update the dice display with the generated values
    document.getElementById('player1Dice').innerText = player1Value; // Update player 1 dice display
    document.getElementById('player2Dice').innerText = player2Value; // Update player 2 dice display

    // Determine the winner and display the result
    var winner;
    if (player1Value > player2Value) {
        winner = player1Name; // Set winner as Player 1 name
    } else if (player1Value < player2Value) {
        winner = player2Name; // Set winner as Player 2 name
    } else {
        winner = "It's a tie!"; // It's a tie
    }

    // Delay the alert by 500 milliseconds (half a second)
    setTimeout(function() {
        alert("The winner is: " + winner); // Display winner
    }, 500);
}
