document.querySelector("#modify").innerHTML = `<p> Last Modification: ${document.lastModified}</p>`;

document.getElementById("year").innerHTML = new Date().getFullYear();

const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("r");

// RANGE event listener


function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}



const kp1 = document.querySelector("#password");
const kp2 = document.querySelector("#passwordrept");
const message = document.querySelector("#formmessage");


// This should be refactored.
function checkSame() {
	if (kp1.value !== kp2.value) {
		message.textContent = "❗Key Phrases DO NOT MATCH!";
		message.style.visibility = "show";
		kp2.style.backgroundColor = "#fff0f3";
		kp2.value = "";
		kp2.focus();
	} else {
		message.style.display = "none";
		kp2.style.backgroundColor = "#fff";
		kp2.style.color = "#000";
	}
}
