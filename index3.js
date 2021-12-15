var a = document.getElementsByClassName("d4");
a[0].style.background = "rgb(102,102,102)";
a[0].classList.add("white-color");
console.log("hello world");
var b = document.getElementById("foot");
clicked = () => {
  if (b.classList != "round") {
    b.classList.add("round");
  }
  setTimeout(function() {
    b.classList.remove("round");
  }, 800);
};
var c = document.getElementsByClassName("home2");
clicked2 = () => {
  if (c[0].classList != "round2") {
    c[0].classList.add("round2");
  }
  setTimeout(function() {
    c[0].classList.remove("round2");
  }, 800);
};