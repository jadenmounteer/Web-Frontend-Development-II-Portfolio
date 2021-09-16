
/* Fetch the new message from the file using AJAX */
function getNewMessage(textFile) {
    const xhttp = new XMLHttpRequest();

    xhttp.onload = function() {
        // Split the contents of the text file into an array
        let responseArray = this.responseText.split("\n");

        // Find a random number based on the array's length
        var randomNumber = Math.floor(Math.random() * responseArray.length);

        // Display the message based on the random number
        let messageToDisplay = responseArray[randomNumber];

        // Display the message to the screen
        document.getElementById("message-span").innerHTML = messageToDisplay
    };

    xhttp.open("GET", textFile);
    xhttp.send();

}