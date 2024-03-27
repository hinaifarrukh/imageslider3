
let sp = document.querySelectorAll(".sp");
let box = document.querySelector("#box");
//console.log(sp)
let image = 1;
sp[0].style.backgroundColor="yellow";
function rtarr() {
    
    if (image === 1) {
        box.setAttribute("class", "ban2");
        image = 2;
        sp[0].style.backgroundColor="white";
        sp[1].style.backgroundColor="yellow";
    }
    else if (image === 2) {
        box.setAttribute("class", "ban3");
        image = 3;
        sp[1].style.backgroundColor="white";
        sp[2].style.backgroundColor="yellow";

    }
    else if (image === 3) {
        box.setAttribute("class", "ban4");
        image = 4;
        sp[2].style.backgroundColor="white";
        sp[3].style.backgroundColor="yellow";

    }
    else if (image === 4) {
        box.setAttribute("class", "ban5");
        image = 5;
        sp[3].style.backgroundColor="white";
        sp[4].style.backgroundColor="yellow";

    }
    else if (image === 5) {
        box.setAttribute("class", "ban1");
        image = 1;
        sp[4].style.backgroundColor="white";
        sp[0].style.backgroundColor="yellow";

    }
}
function ltarr() {
    if (image === 5) {
        box.setAttribute("class", "ban4");
        image = 4;
        sp[4].style.backgroundColor="white";
        sp[3].style.backgroundColor="yellow";
    }
    else if (image === 4) {
        box.setAttribute("class", "ban3");
        image = 3;
        sp[3].style.backgroundColor="white";
        sp[2].style.backgroundColor="yellow";
    }
    else if (image === 3) {
        box.setAttribute("class", "ban2");
        image = 2;
        sp[2].style.backgroundColor="white";
       sp[1].style.backgroundColor="yellow";

    }
    else if (image === 2) {
        box.setAttribute("class", "ban1");
        image = 1;
       sp[1].style.backgroundColor="white";
        sp[0].style.backgroundColor="yellow";

    }
    else if (image === 1) {
        box.setAttribute("class", "ban5");
        image = 5;
       sp[0].style.backgroundColor="white";
       sp[4].style.backgroundColor="yellow";

    }
}
 setInterval(()=>{
  rtarr()  },2000)