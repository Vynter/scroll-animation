/*let nav = document.querySelector(".nav").style.height;
console.log(nav);
let height = nav.style.height;
console.log(height);*/
window.addEventListener("scroll", function (e) {
  //this.console.log(document.documentElement.scrollTop);
  if (document.documentElement.scrollTop > 5) {
    // nav.style.height += 50;
    //nav.style.height = 180 + "px";
  }
});

window.onscroll = function () {
  if (document.documentElement.scrollTop < 80) {
    document.querySelector(".nav").style.opacity = 1;
    document.querySelector(".nav").setAttribute("style", "height:80px");

    document.getElementsByTagName("ul")[0].setAttribute("style", "top:80px");
  }
  if (document.documentElement.scrollTop > 80) {
    document.querySelector(".nav").style.opacity = 0.9;
    document.querySelector(".nav").setAttribute("style", "height:120px");
    if (window.innerWidth < 700) {
      console.log("cc");
      document.getElementsByTagName("ul")[0].setAttribute("style", "top:120px");
    }

    console.log();
  }
};

let tog = document.querySelector("#brnd");

let list = document.querySelector(".list");

tog.addEventListener("click", () => {
  list.classList.toggle("active");
});
