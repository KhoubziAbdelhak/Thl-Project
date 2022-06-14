// the code for the part 2 of the utils file

// take an input from part2 
// than console.log the number

document.getElementById("button-exo2").addEventListener("click", function () {
    var number = document.getElementById("part2").value;
    var array = S(number);
    console.log(array);
    if (array == "Fault") {
        document.getElementById("result-exo2").innerHTML = "Fault";
    } else {

        document.getElementById("result-exo2").innerHTML = array.join(" * ");
    }
});

document.getElementById("part2").addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("button-exo2").click();
    }
});



// S --> AB
// A --> aA/bA/ab
// B --> bC
// C --> aC/bC/§ 

function S(length) {
    if (length < 3)
        return "Fault"
    length -= 3
    var Bl = 0
    var Sarray = []

    while (length >= 0) {
        var Aarray = A(length)
        var Barray = B(Bl)
        // console.log("B : " + Barray)
        var array = Aarray.map(item => {
            var tempArray = []
            for (let n of Barray) {
                tempArray.push(item + n)
            }
            return tempArray
        }).reduce((a, c) => {
            return a.concat(c)
        })
        // console.log(array)
        Sarray = Sarray.concat(array)
        length--
        Bl++
    }
    // console.log(Sarray)

    return Sarray
}


// console.log("S : " )
// console.log(S(6))

function toBin(number) {
    return parseInt((number).toString(2))
}

function A(length) {

    var array = []
    var result = ""
    stopCounter = Math.pow(2, length)

    for (var i = 0; i < stopCounter; i++) {
        var binI = toBin(i)

        for (var j = 0; j < length; j++) {
            if (binI % 10 == 0) {
                result += "a"
            } else {
                result += "b"
            }
            binI = Math.floor(binI / 10)
        }
        result += "ab"
        // console.log("word : " + result)
        array.push(result)
        result = ""
    }

    return array
}


function B(length) {
    var array = C(length).map(item => {
        return "b" + item
    })

    return array
}


function C(length) {

    var array = []
    var result = ""
    stopCounter = Math.pow(2, length)

    for (var i = 0; i < stopCounter; i++) {
        var binI = toBin(i)

        for (var j = 0; j < length; j++) {
            if (binI % 10 == 0) {
                result += "a"
            } else {
                result += "b"
            }
            binI = Math.floor(binI / 10)
        }
        // result += ""
        // console.log("word : " + result)
        array.push(result)
        result = ""
    }

    return array
}







