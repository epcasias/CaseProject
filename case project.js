//CASE PROJECT #2: Adding Else if statement to Pages
//Author: Eulyssia casias
//Date: 3/29/25

//Add event handler to an element
//use addEventListener to add windowalert when nav link is clicked
document.addEventListener('click', function(event) {
    //create else if statement targeting the event ID
    if (event.target.id === "catGallery") {
        window.alert("View the Cat Gallery"); //execute when home navigation is clicked
    } else if (event.target.id === "descriptions") {
        window.alert("Lets Go Into Detail!"); //execute when description navigation is clicked
    } else if (event.target.id === "contact") {
        window.alert("View our Socials!") //execute when contact navigation is clicked
    }
})
