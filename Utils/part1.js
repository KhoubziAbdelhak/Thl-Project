
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Exercice 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function checkCharacters(str) {
    return /^[a-b-c]+$/.test(str);
}

document.getElementById("button-exo1-p1").addEventListener("click", function () {
    var word = document.getElementById("part1-1").value;
    // console.log(word);

    // check tha word has just a b or a c
    // if yes, return the reverse of the word
    // if no, return "this word is not from the language"
    var reverse = word.split("").reverse().join("");
    // console.log(word)
    if (checkCharacters(word) || word == "") {
        document.getElementById("result-exo1").innerHTML = reverse;
    } else {
        document.getElementById("result-exo1").innerHTML = "this word is not from the language";
    }
});

// event click Enter on the input
document.getElementById("part1-1").addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("button-exo1-p1").click();
    }
}
);



document.getElementById("button-exo1-p2").addEventListener("click", function () {



    var word = document.getElementById("part1-2").value;
    // console.log(word);
    var n = document.getElementById("part1-2-n").value;
    // console.log(n);
    n = parseInt(n);
    // duplicate the word n times
    // if n is not a number, return "Enter an interger"
    // check tha word has just a b or a c
    // if yes put the duplicate word in the id puissance  
    // if no, return "this word is not from the language"
    if (isNaN(n)) {
        document.getElementById("puissance").innerHTML = "Enter an interger";
    }
    var duplicate = word.repeat(n);
    if (checkCharacters(word) || word == "") {
        document.getElementById("puissance").innerHTML = duplicate;
    }
    else {
        document.getElementById("puissance").innerHTML = "this word is not from the language";
    }

});

// add event click Enter on the input
document.getElementById("part1-2").addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("button-exo1-p2").click();
    }
});

