
//CASE PROJECT #5: CREATE OBJECT, CONSTRUCTOR FUNCTION, INSERT INTO HTML CODE
//Author: Eulyssia Casias
//Date: 4/21/25

function coatCare(title, image, description, bathing) {
  this.title= title;
  this.image= image;
  this.description= description;
  this.bathing= bathing;
}

let coatType = new coatCare("Shorthair", "<img src='images/shortHair.jpeg' id='careImg'>", "For shorthaired cats, their coats need little grooming. With weekly brushing, their coat will look good and healthy. When you brush their coats you are removing the dead hair, doing this about once a week will suffice. It will also prevent the hair from shedding everywhere.", "For shorthaired cats, baths are not usually necessary. Only bathe if your cat gets very dirty.");

let coatType2 = new coatCare("Longhair", "<img src='images/longhair.jpg' id='careImg'>", "For Longhair cats, their coats must be brushed frequently. Brushing their coat either daily or at least three times a week is necessary. They need frequent brushing to prevent matting and tangles. Their coats get tangled easily if not brushed for a few days and can get severely matted if it goes unbrushed for weeks.", "Longhair cats need to be bathed regularly if they are allowed outside visits. Weekly if not, the cat may not be able to keep their long hair clean on their own.");

let htmlCode = "";

for (let x of coatCare) { //Got stuck here

  htmlCode = '<h1>COAT CARE</h1>'
	'<h2 id="coatlength">Shorthair</h2>'
	'<img src="images/shortHair.jpeg" id="careImg" width="473" height="334">'
	'<p>For shorthaired cats, their coats need little grooming. With weekly brushing, their coat will look good and healthy. When you brush their coats you are removing the dead hair, doing this about once a week will suffice. It will also prevent the hair from shedding everywhere.'
	'</p>'
	'<h3 id="bathing">Bathing</h3>'
	'<p>'
		'For shorthaired cats, baths are not usually necessary. Only bathe if your cat gets very dirty.'
	'</p>'
	'<h2 id="coatlength">Longhair Coat</h2>'
	'<img src="images/longhair.jpg" id="careImg">'
	'<p>For Longhair cats, their coats must be brushed frequently. Brushing their coat either daily or at least three times a week is necessary. They need frequent brushing to prevent matting and tangles. Their coats get tangled easily if not brushed for a few days and can get severely matted if it goes unbrushed for weeks.'
	'</p>'
	'<h3 id="bathing">Bathing</h3>'
	'<p>'
		'Longhair cats need to be bathed regularly if they are allowed outside visits. Weekly if not, the cat may not be able to keep their long hair clean on their own.'
	'</p>'


  document.getElementById("catContainer").innerHTML = htmlCode;

}









//let htmlCode = ""

//for (let x of cats) {
// htmlCode = 

 //document.getElementById("catContainer").innerHTML= htmlCode;

//}