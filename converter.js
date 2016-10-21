
// Get a reference to the button element in the DOM
// var input = document.getElementById("inputTemp");
// var f = document.getElementById("f");
// var c = document.getElementById("c");
var submit = document.getElementById("submit");
var clear = document.getElementById("clear");

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (input) {
	var f = document.getElementById("f");
	var c = document.getElementById("c");

	if (f.checked) {
		toFahrenheit(input);
	} else if (c.checked) {
		toCelsius(input);
	} else {
		alert("please select a unit");
	}


	// console.log(f, c);
  // console.log("event", clickEvent);
}


function toCelsius (input) {
	var outputTemp = (input - 32) * .5556;
	 outPutToDom(outputTemp, "c");
	// console.log("celsius", input);
}

function toFahrenheit (input) {
	 var outputTemp = (input *1.8) + 32;
	outPutToDom(outputTemp, "f");
	// console.log("fahrenheit", input);
}

function checkInput (input) {
	var input = document.getElementById("inputTemp").value ;
	if (input) {
		determineConverter(input);
	} else {
		alert("please put a number in the field");
	}
	
}


// function getInput (input) {
// 	console.log("running", input);
// }


function outPutToDom (outputTemp, type) {
	var output = document.getElementById("output");
	console.log("running", outputTemp.toFixed(1), type);

	if (type === "c") {
		if (outputTemp > 32) {
			output.innerHTML = "<div class='red'>" + outputTemp + "</div>";
		} else if (outputTemp < 0 ) {
			output.innerHTML = "<div class='blue'>" + outputTemp + "</div>";
		} else {
			output.innerHTML = "<div class = 'green'>" + outputTemp + "</div>"
		}
	} else {
		if (outputTemp > 90) {
			output.innerHTML = "<div class='red'>" + outputTemp + "</div>";
		} else if (outputTemp < 32 ) {
			output.innerHTML = "<div class='blue'>" + outputTemp + "</div>";
		} else {
			output.innerHTML = "<div class = 'green'>" + outputTemp + "</div>"
		}
	}

}



// Assign a function to be executed when the button is clicked
submit.addEventListener("click", checkInput);



