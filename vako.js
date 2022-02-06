const plass3 = document.getElementById("imgbtn");
const drop = document.querySelector("header");

var number = 1;

plass3.addEventListener("click",  ()=> {
    if(number == 1) {
        drop.style.display = "block";
        number = 0;

    } else if(number == 0) {
        drop.style.display = "none";
        number = 1;
    }
});