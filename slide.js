var image = new Array();
image[0] = "cartoon-tooth.jpg";

image[1] = "cartoon-tooth2.jpg";

image[2] = "cartoon-tooth3.jpg";

image[3] = "cartoon-tooth4.jpg";

var step = 1;

function slideit(){
	document.getElementById('tooth').src = image[step];
	
	if (step < image.length-1)
		step++;
	else
		step = 0;

	setTimeout("slideit()", 2500);
}

window.onload = slideit;
