/* Set an interval that changes the message displayed every few seconds */
setInterval(function(){
    console.log("Calling the interval function");
    // Call the AJAX function
    getNewMessage("../messages.txt");
    
}, 10000);


/* Fetch the new message from the file using AJAX */
function getNewMessage(textFile) {
    console.log("Inside the getNewMessage function");
    const xhttp = new XMLHttpRequest();

    xhttp.onload = function() {
        console.log("Loading AJAX request");
        // Split the contents of the text file into an array
        let responseArray = this.responseText.split("\n");
        console.log("The response array is: " + responseArray);

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