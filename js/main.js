/* Global elements */

// Array of links to display in the table of contents
const tableOfContentsLinks = [
    {
        label: "Week01",
        url: "week1/index.html"
    },
    {
        label: "Week02",
        url: "week2/index.html"
    }
]




/* Functions */

/* 
Selects an ol element from the html page. 
Reads a list of links from an array.
For each of the items in the array of links, creates a li element,
adds an a element with the label url from the list of links, and adds the new li element
into the ol element grabbed above.
*/
function createTableOfContents(listOfLinks) {
    
    // select the ol element
    var htmlList = document.getElementById("table-of-contents-list-of-links");

    // Loop through the elements in the listOfLinks array
    for (let i = 0; i < listOfLinks.length; i++) {
        // Create a li element
        let listElement = document.createElement("li");
        // Create the a element
        let aElement = document.createElement("a");
        // Change the url of the a element
        aElement.href = listOfLinks[i].url;
        // Create the link label
        let linkLabel = listOfLinks[i].label;
        let linkLabelNode = document.createTextNode(linkLabel);
        // Append the label to the a element
        aElement.appendChild(linkLabelNode);
        // Append the a element to the li element
        listElement.appendChild(aElement);
        // Add the li element to the html list
        htmlList.appendChild(listElement);
    }

}


/* Function calls */

// Create the table of contents
createTableOfContents(tableOfContentsLinks);
