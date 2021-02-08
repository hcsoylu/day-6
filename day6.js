function changeFirstHeading() {
  let firstHeading = document.querySelector("h1");
  firstHeading.innerText = "Hello Strive!";
}

changeFirstHeading();

function changeBackgroundColor() {
  let backGround = document.querySelector("body");
  backGround.style.backgroundColor = "#ffe100";
}

changeBackgroundColor();

function changeFooter() {
  let fakeFooter = document.getElementById("fake");
  fakeFooter.innerText = "this is a fake adress";
}

changeFooter();

function hideİmg() {
  let imageHide = document.getElementsByClassName("hide");
  for (let i = 0; i < imageHide.length; i++) {
    imageHide[i].style.visibility = "hidden";
  }
}

hideİmg();

function changeColor() {
  let colorChange = document.getElementsByClassName("color");
  for (let i = 0; i < colorChange.length; i++) {
    colorChange[i].style.color =
      "#" + Math.floor(Math.random() * 16777215).toString(16);
  }
}

changeColor();
