var totalSeconds; // Total number of seconds on the timer
var flash = false; // Used to toggle the red background for when the timer hits 0:00

// Called onload, calculates and formats timer display
function StartTimer() {
    totalSeconds = 20; // Set to number of seconds left

    setInterval("Timer_Tick()", 1000); // Start the timer, set to go off every second

    var seconds = totalSeconds % 60; // Calculate remainder seconds
    var secondsTens = Math.floor(seconds / 10); // Separate seconds into two displays (so 12:01 isn't 12:1)
    var secondsOnes = seconds % 10;
    var minutes = Math.floor(totalSeconds / 60); // Calculate whole minutes

    document.getElementById("Timer").innerHTML = "" + minutes + ":" + secondsTens + secondsOnes; // Show timer
}

// Subtract one second from the remaining time and update the timer
function Timer_Tick() {
    if (totalSeconds > 0) // If there is time left...
    {
        totalSeconds--; // Decrement the total number of seconds remaining

        var seconds = totalSeconds % 60; // Recalculate timer values and display them
        var secondsTens = Math.floor(seconds / 10);
        var secondsOnes = seconds % 10;
        var minutes = Math.floor(totalSeconds / 60);

        document.getElementById("Timer").innerHTML = "" + minutes + ":" + secondsTens + secondsOnes;
    } else { // If 0:00 has been hit, just switch between black and red background

    }
}