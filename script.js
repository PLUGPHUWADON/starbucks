let main = document.getElementById("main");
let menuham = document.querySelector(".menuham");
let clickmenu = document.querySelector(".clickmenu");
let circlegreen = document.querySelector(".circlegreen");
let img = document.querySelector(".conimg > img");
let items = document.querySelector(".boxitems");
let arritems = document.querySelectorAll(".boxitems > img");

let arrcolor = ["#036b42","#e86ec2","#e9aab8"]
let indexitems = 0;

menuham.addEventListener("click",() => {
    clickmenu.classList.toggle("addheightmenu");
});

if (window.innerHeight >= 1024) {
    circlegreen.style.width = "50vw";
    circlegreen.style.height = "50vw";
}

if (window.innerHeight >= 1366) {
    main.style.height = "100vh";
}

items.addEventListener("click",(event) => {
    if (event.target.tagName == "IMG") { 
        let index = Array.from(arritems).indexOf(event.target);
        if (indexitems != index) {
            indexitems = index;
            circlegreen.style.backgroundColor = arrcolor[index];
            img.classList.add("addimgslideRight");
            setTimeout(() => {
                if (index == 1) {
                    img.style.width = "230px";
                }
                else{
                    img.style.width = "300px";
                }
                img.src = event.target.src;
                img.classList.remove("addimgslideRight");
            }, 1000);
        }
    }
});