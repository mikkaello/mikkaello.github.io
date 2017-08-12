(function () {

    document.addEventListener("DOMContentLoaded", function () {

        var ballWrapper = document.querySelector(".wrap");

         ballWrapper.addEventListener("mouseover", function (e) {

            var ball;
                if(e.target.className==="ball"){
                    ball = e.target;

                    main(ball);

                }



            });

function main(ball) {
            ball.addEventListener("mousedown", getTheBall);
        function getTheBall(e) {
            var coords = getCoords(ball);
            var shiftX = e.pageX - coords.left;
            var shiftY = e.pageY - coords.top;

            ball.style.position = "absolute";
            document.body.appendChild(ball);
            moveAt(e);

            ball.style.zIndex = 1000;


            function moveAt(e) {
                ball.style.left = e.pageX - shiftX + "px";
                ball.style.top = e.pageY - shiftY + "px";
            }
            document.onmousemove = function (e) {
                moveAt(e);
            };
            ball.onmouseup = function () {
                document.onmousemove = null;
                ball.onmouseup = null;
            };
        }

        ball.addEventListener("dragstart", function() {
            return false;
        });

        function getCoords(elem) {
            var box = elem.getBoundingClientRect();
            console.log(box);

            return {
                top: box.top + pageYOffset,
                left: box.left + pageXOffset
            };

        }

}
    });
})();