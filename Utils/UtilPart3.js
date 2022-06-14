// the code for the part 3 of the utils file



// a langage contains a , b
// the grammer is S -> aaSb | Sa | null
// create a function to check if a word is in the language

// function check if a word has only a and b
function checkCharacters(str) {
	return /^[a-b]+$/.test(str);
}

function check(str) {

	if (str === "") {
		return true
	}

	if (str[str.length - 1] === 'b') {
		if (str[0] === 'a' && str[1] === 'a') {
			return true && check(str.slice(2, str.length - 1));
		} else {
			return false;
		}
	}

	if (str[str.length - 1] === 'a') {
		return true && check(str.slice(0, str.length - 1));
	}

}

function checkWord(str) {
	if (str === "") {
		return true;
	}
	if (checkCharacters(str) == true) {
		return check(str);
	}

	return false
}


document.getElementById("button-exo3").addEventListener("click", function() {
	var word = document.getElementById("part3").value;
	var respond = (checkWord(word)) ? "the word is in the language" : "the word is not from the language"; 

	document.getElementById("result-exo3").innerHTML = respond;

});


// add event click Enter on the input
document.getElementById("part3").addEventListener("keyup", function(event) {
	if(event.key == "Enter") {
		event.preventDefault();
		document.getElementById("button-exo3").click();
	}
})

