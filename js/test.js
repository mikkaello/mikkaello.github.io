(function () {

    window.onload = function () {
        var viewContainer = document.querySelector('.view_container > ul');
        var firstLi = viewContainer.firstElementChild;
        var controlContainer = document.querySelector('.control_container');
        controlContainer.addEventListener('click', handler);

        var pressMe = document.getElementsByClassName("pressMe");
        console.log(pressMe);
        pressMe[1].onclick = function() {
            alert( 'Спасибо' );
        };
        
        function createNewElement() {
            var newDiv = document.createElement("div");
            console.log(newDiv);
            newDiv.style.height = '200px';
            newDiv.style.backgroundColor = 'red';
            var lastDiv = document.getElementsByClassName('last');
            lastDiv[0].appendChild(newDiv);
        }

        pressMe[0].onclick = createNewElement;

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
                    // function colorFirstElement()
                    // {
                    //     var li = viewContainer.firstElementChild;
                    //     if(li)
                    //     {
                    //         li.className = 'first_element_chosen';
                    //     }
                    // }
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

        }



    }


})();
