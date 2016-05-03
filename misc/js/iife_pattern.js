(function(iifeLib) {
    "use strict";
    iifeLib();
}
(function(){
    var changeHeading = function () {
        var heading = document.getElementById("heading");
        heading.innerHTML = "What!";
    };
    document.addEventListener("DOMContentLoaded", function (event) {
        changeHeading();
    });
}));