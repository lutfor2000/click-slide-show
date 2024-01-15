const slideSelect = document.querySelector(".slides_main").children;
const prevBtn = document.querySelector(".left_btn");
const nextBtn = document.querySelector(".right_btn");
const totalSelide = slideSelect.length;
var countElement = 1;

nextBtn.onclick = function(){
      next("next");
}

prevBtn.onclick = function(){
     next("prev");
}

function next(direction){
    if (direction == "next") {
      countElement++;

       if (countElement == totalSelide) {
         countElement = 0;
       }
    }else{
        
        if (countElement == 0) {
          countElement = totalSelide-1;
        } else {
          countElement--;
        }

    }
    for (i = 0; i < slideSelect.length; i++) {
      slideSelect[i].classList.remove("active_disp");

    }
    slideSelect[countElement].classList.add("active_disp");
}
