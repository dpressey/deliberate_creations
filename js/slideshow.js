// Store the URL for images in an array
var slideShowImages = ['img/slideshow1.jpg', 
					   'img/slideshow2.jpg', 
					   'img/slideshow3.jpg', 
					   'img/slideshow4.jpg', 
					   'img/slideshow5.jpg'
]

// Counter for cycling through images
var counter = 0;

// Obtain the image tag by id
var element = document.getElementById('slideshow');


// Function increments the counter variable 
// and calls the nextImage function after 1 second
function iterator(){
	counter++;
	setTimeout('nextImage()', 2000);
	// Set the counter back to zero to re-loop from the beginning
	if (counter > 4) {
		counter = 0;
	}
}

// Sets the image tag's src attribute to one
// of images in slideShowImages array
function nextImage(){
	element.setAttribute('src', slideShowImages[counter]);
	setTimeout('iterator()', 3000);
}


// call the functions to 'bounce' of one another
nextImage();
iterator();