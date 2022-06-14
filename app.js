// function include script file 
function include(file) {
    var script = document.createElement('script');
    script.src = file;
    document.getElementsByTagName('head')[0].appendChild(script);
}

include("Utils/UtilPart1.js");
include("Utils/UtilPart2.js");
include("Utils/UtilPart3.js");
