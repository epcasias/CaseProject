//CASE PROJECT #2: ADDING IF STATEMENT TO CONTACT PAGE
//Author: Eulyssia casias
//Date: 3/29/25
//Write an if statement to input text into h4 element on my Contact page.
    let heading1 = document.getElementById("insta");
    let heading2 = document.getElementById("face");
    let heading3 = document.getElementById("twit");

    if (heading1) {
        heading1.textContent = "Instagram: @ColorsOFelines";  
    }
    if (heading2) {
        heading2.textContent = "Facebook: ColorsOFelines";
    }
    if (heading3) {
        heading3.textContent = "Twitter: ColorsOFelines";
    }


//CASE PROJECT #3: ADDING EXCEPTION HANDLING TO INDEX PAGE FORM
//Author: Eulyssia casias
//Date: 4/5/25
//When the submit button is pushed without an option clicked, an error message will pop up

//creating a function named selectOption
function selectOption(event) {
    //creating exception handling using try catch method
    try {
        
        const form= document.getElementById("favCat"); //declare form to equal to html form by its ID
        
        const selectedOption= form.querySelector('input[name="fav_coat"]:checked'); //declare selectedOption to equal to whatever option is checked using querySelector

        if(!selectedOption) {   //create if statement that if no option is selected then an error message occurs
            throw new error('no option selected');
            }
    }catch (error) {
        alert("SELECT AN OPTION to see results"); //Message in alert window
    }
    event.preventDefault();
}


//CASE PROJECT #4: CREATE JAVASCRIPT TO RETRIEVE EMAIL & USE REGX TO VERIFY EMAIL DOESN'T BELONG TO @GMAIL.COM
//Author: Eulyssia Casias
//Date: 4/13/25

function examineEmail(event) {

    let excludedDomain = "gmail.com"; //declare excluded domain
    let regex = new RegExp('^[a-zA-Z0-9].*@${excludedDomain}$'); //declare the regular Expression for the email
    let emailInput= document.getElementById("email"); //set emailInput equal to the email section on form
    let email = emailInput; //set email equal to the emailInput value
    let errMessage = document.getElementById("emailError") //declare the error message for excluded domain
    //crfeate if statement to examine and validate correct email domain
    if (regex.test(email)) { //use test() method to validate Regular expression
        errMessage.textContent = "@gmail domain is not allowed, try a different one" //set up error message
        event.preventDefault(); //prevent form submission using preventDeafault() method
        return false; //Let user know that email is not qualified
    }
        return true; //submit form if email is qualified
}


//CASE PROJECT #5: CREATE OBJECTS, CONSTURCTOR FUNCTION, ADD METHODS, & CREATE INSTANCES
//Author: Eulyssia Casias
//Date: 4/20/25





//CASE PROJECT #6: ADD MAP SHOWING CURRENT LOCATION ON CONTACT PAGE
//Author: Eulyssia Casias
//Date: 4/23/25
function initMap() {
   
    // Page objects
    let displayMap = document.getElementById("displayMap");
    let routeBox = document.getElementById("routeBox");
    
    // Create a map to the Colors of Felines
    let colorsOfFelines = {lat:35.236707896981564, lng:-101.82792273237715};
    
    let myMap = new google.maps.Map(displayMap, {
       zoom: 11,
       center: colorsOfFelines,//
       fullscreenControl: false
    });
    
    // Add a marker for the colors of felines
    new google.maps.Marker({
       position: colorsOfFelines,//
       map: myMap,
       title: "Colors Of Felines"
    });
    
    // Get the device's current position
    navigator.geolocation.getCurrentPosition(getPos, handleError);
    
    function getPos(pos) {
       let myPosition = {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude
       }
             
       console.log(myPosition);
       
       // Set up direction service and rendering
       let routeFind = new google.maps.DirectionsService();
       let routeDraw = new google.maps.DirectionsRenderer();
          
       // Drive from current location to Colors of felines
       let  myRoute = {
          origin: myPosition,
          destination: colorsOfFelines,//
          travelMode: "DRIVING"
       }  
 
       // Generate directions for the route
       routeFind.route(myRoute, function(result, status) {
          if (status == "OK") {
             routeDraw.setDirections(result);
              //Display route and directions
             routeDraw.setMap(myMap);
             routeDraw.setPanel(routeBox);
          } else {
             routeBox.textContent = "Directions Unavailable: " + status;
          }
       }); 
       
    } 
    
    // In case of geolocation error
    function handleError(err) {
       console.log("Geolocation error: " + err.message);
    } 
 }

//CASE PROJECT #7: CREATE A ZIP CODE VERIFIER USING AJAX ON CONTACT PAGE
//Author: Eulyssia Casias
//Date: 5/5/25

//Declare and get the input values
let postalCode = document.getElementById("postalCode");
let place = document.getElementById("place");
let region = document.getElementById("region");
let country = document.getElementById("country");

postalCode.onblur = function() {
            
            let codeValue = postalCode.value;
            let countryValue = country.value;
            //Set the place & region to empty text strings to be filled in the readystatechange
            place.value = "";
            region.value = "";


            let xhr = new XMLHttpRequest(); //use XMLHttpRequest object to send asynchronous request over HTTP

            let url = `http://api.zippopotam.us/${countryValue}/${codeValue}` //set the ZIP code api 
            //manage the changing request event
            xhr.onreadystatechange= function(){
            if(xhr.readyState === 4 && xhr.status === 200) //determine the current state of the request object
            {
                  let json = JSON.parse(xhr.response);
                  place.value = json.places[0]["place name"]; //Get the value for the city that goes with the zip code
                  region.value = json.places[0]["state abbreviation"]; //Get the value for the state that goes with the zip code
            }
      }

      xhr.open("GET", url, true); //specify the GET method, url and true to set up asynchronous request
      xhr.send(); //submit the request
}