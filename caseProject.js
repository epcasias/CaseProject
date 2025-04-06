//CASE PROJECT #2: ADDING IF STATEMENT TO CONTACT PAGE
//Author: Eulyssia casias
//Date: 3/29/25
//changing my if statement to be more helpful
//trying to write an if statement to input text into h4 element within a div on my Contact page.
    const myDiv = document.getElementById("socials");
    const heading1 = document.getElementById("insta");
    const heading2 = document.getElementById("face");
    const heading3 = document.getElementById("twit");

    if (myDiv === "heading1") {
        heading1.textContent = "Instagram: @ColorsOFelines";
        heading2.textContent = "Facebook: ColorsOFelines";
        heading3.textContent = "Twitter: ColorsOFelines";
    }




//CASE PROJECT #3: ADDING EXCEPTION HANDLING TO INDEX PAGE FORM
//Author: Eulyssia casias
//Date: 4/5/25

//When the submit button is pushed without an option clicked, an error message will pop up

//creating a function named selectOption
function selectOption() {
    //creating exception handling using try catch method
    try {
        
        const form= document.getElementById("favCat"); //declare form to equal to html form by its ID
        
        const selectedOption= form.querySelector('input[name="fav_coat"]:checked'); //declare selectedOption to equal to whatever option is checked using querySelector
        
        if(!selectedOption) {   //create if statement that if no option is selected then an error message occurs
            throw new error('no option selected');
            }
    }catch (error) {
        console.error('an error occurred:',error.message); //put error message in console
        alert("SELECT AN OPTION to see results"); //Message in alert window
    }
};