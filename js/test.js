(function () {
    window.onload = function () {
        var viewContainer = document.querySelector('.view_container > ul');
        var firstLi = viewContainer.firstElementChild;
        var controlContainer = document.querySelector('.control_container');
        controlContainer.addEventListener('click', handler);

       function handler(event) {
             if(event.target.tagName == 'INPUT')
             {
                 if(event.target.value== 'Add Element')
                 {
                    var newLi = document.createElement('li');
                    newLi.innerHTML = 'New Item';
                     var collectionLi = document.querySelectorAll('.view_container>ul>li');
                     if(collectionLi.length==0){
                         newLi.className = 'first_element_chosen';
                     }
                    viewContainer.appendChild(newLi);

                 }
                 if(event.target.value== 'Delete Last'&&viewContainer.childElementCount>0)
                 {
                    viewContainer.removeChild(viewContainer.lastElementChild);
                 }
                 if(event.target.value== 'Add at the Beginning')
                 {
                     var newLi = document.createElement('li');
                     newLi.innerHTML = 'New Item at the Beginning';
                     viewContainer.insertBefore(newLi, viewContainer.firstElementChild);

                 }
                 function findCurrent()
                    {
                        var collectionLi = document.querySelectorAll('.view_container>ul>li');
                        if(collectionLi.length == 0)
                            {
                                console.log("Empty");
                                return 0;
                            }
                        else {
                        for(i = 0; i <= collectionLi.length-1; i++)
                            {
                            if(collectionLi[i].className == 'first_element_chosen')
                                {
                                return collectionLi[i];
                                }
                            }
                    }}
                    if (event.target.value== 'Down'){
                       var current = findCurrent();
                       console.log(current);
                       if(current == 0){console.log('Nothing to move');}
                            else if(current.nextElementSibling == null){current.className = '' ;
                              viewContainer.firstElementChild.className = 'first_element_chosen';}
                           else {current.nextElementSibling.className = 'first_element_chosen';
                            current.className = '';}
                        }
                 if(event.target.value== 'Up'){
                     var current = findCurrent();
                     if(current.previousElementSibling == null){current.className = '' ;
                         viewContainer.lastElementChild.className = 'first_element_chosen';}
                     else{current.previousElementSibling.className = 'first_element_chosen';
                     current.className = '';}
                 }

             };

        };
////////////////////////Second part////////////////////////////////////////////////////////////

var startTimerButton = document.querySelector(".start_timer");
var timerVisual = document.querySelector(".timer");
var stopTimerButton = document.querySelector(".stop_timer");
startTimerButton.addEventListener('click', setTimer);
var startTime = new Date().getTime();


    function setTimer () {

          var timerId = setTimeout(function(){
                timerVisual.innerHTML = Math.round((new Date().getTime()-startTime)/1000);
                setTimer ();
            }, 1000);
          function stop() {
             clearTimeout(timerId);

                  var sec = new Date();
                  sec.setSeconds(0);

              timerVisual.innerHTML = sec.getUTCSeconds();

          }
        stopTimerButton.addEventListener('click',stop);
        };

///////////////////////////Timers/////////////////////////////

        var startTimerButton_2 = document.querySelector(".start_timer_v2");
        var timerVisual_2 = document.querySelector(".timer_v2");
        var stopTimerButton_2 = document.querySelector(".stop_timer_v2");
        var reverseTimerButton = document.querySelector(".reverse_timer_v2")
        startTimerButton_2.addEventListener('click', createTimer);
        reverseTimerButton.addEventListener('click', runReverse);

function createTimer() {
    var timerName = setTimeout(function () {
        timerVisual_2.innerHTML++;
        if (timerVisual_2.innerHTML < 30) {
        createTimer();
        }
        else {clearTimeout(timerName);}

    },1000);
}

        function runReverse() {
            var timerName_2 = setTimeout(function () {
                timerVisual_2.innerHTML--;
                if (timerVisual_2.innerHTML >0) {
                    runReverse();
                }
                else {clearTimeout(timerName_2);
                    timerVisual_2.innerHTML++;}

            },1000);
        }
////////////////////////Letter count//////////////////////////////////////
var getCountButton = document.querySelector(".get_count");
var visualAmount = document.querySelector(".amount");

getCountButton.onclick = function getString() {
 var testString = document.querySelector(".example_text").value;
 console.log(testString);
    var searchSymbol = document.querySelector(".searchSymbol").value;
   var temp = testString.split(searchSymbol);
console.log(temp);
       visualAmount.innerHTML = temp.length-1;

}
////////////////////////Slider///////////////////////////////////////
var sliderLeft = document.querySelector(".slider_left");
var sliderRight = document.querySelector(".slider_right");
sliderLeft.onclick = sliderMoveLeft;
sliderRight.onclick = sliderMoveRight;
var shiftLeft = 0;
var shiftRight = 0;
var line = document.querySelector(".line");
function sliderMoveLeft(){
    shiftRight -=128;
    shiftLeft -=128;
    if(shiftLeft<-768){
        return 0;
    }

    line.style.left = shiftLeft+"px";

}
function sliderMoveRight() {
    shiftRight +=128;
    shiftLeft +=128;
    if(shiftRight>768){
        return 0;
    }

    line.style.right = shiftRight+"px";
    line.style.left = shiftLeft+"px";
}

}})();

