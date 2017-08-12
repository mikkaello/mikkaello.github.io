(function () {
    document.addEventListener("DOMContentLoaded", function () {

        var allDivs = document.querySelectorAll(".container div");

        for (var i = 0; i < allDivs.length; i++) {
            allDivs[i].addEventListener('mouseover', changeColor);
        }

        function changeColor() {
            var r = Math.floor(Math.random() * (256));
            var g = Math.floor(Math.random() * (256));
            var b = Math.floor(Math.random() * (256));
            var c = '#' + r.toString(16) + g.toString(16) + b.toString(16);
            this.style.backgroundColor = c;
            this.innerHTML = c;

        }


////////////////////////////
        var topDiv = document.querySelector(".wrap");
        topDiv.addEventListener('click', handler);
        function handler(e) {
            if (event.target.className == 'hidecontent') {
                console.log(event);
                topDiv.removeChild(topDiv.firstElementChild);
            }
        }

/////////////////////////////

        var mainDiv = document.getElementById("main-div");
        mainDiv.onmouseover = function (e) {
            var target = e && e.target || window.event.srcElement;
            var attribute = target.getAttribute('data-tooltip');

            if (!attribute) {
                return 0;
            }
            var newToolTip = document.createElement("a");
            newToolTip.innerHTML = attribute;

            newToolTip.classList.add("tooltip-content");
            target.appendChild(newToolTip);

        }
        mainDiv.onmouseout = function (e) {
            var emptyToolTip = null;
            var target = e && e.target;
            if (target.firstElementChild.className == "tooltip-content") {
                emptyToolTip = target.firstElementChild;
                target.removeChild(emptyToolTip);
            }
        }



        window.onbeforeunload = function () {
            return "Вы уверены?";
        };
    })
})();

