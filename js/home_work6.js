(function () {
    window.onload = function () {

var allDivs = document.querySelectorAll("div");

for (var i = 0; i < allDivs.length; i++){
    allDivs[i].addEventListener('mouseover', changeColor);
        }

        function changeColor(){
            var r = Math.floor(Math.random() * (256));
            var g = Math.floor(Math.random() * (256));
            var b = Math.floor(Math.random() * (256));
            var c='#' + r.toString(16) + g.toString(16) + b.toString(16);
            this.style.backgroundColor = c;
            this.innerHTML = c;

        }


}})();