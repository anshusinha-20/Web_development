var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomDiceImg1 = `dice${randomNumber1}.png`;
var randomImgSrc1 = `images/${randomDiceImg1}`;
var p1 = document.querySelector(".img1").setAttribute("src", randomImgSrc1);

var randomNumber2 = Math.floor(Math.random() * 6 + 1);
var randomDiceImg2 = `dice${randomNumber2}.png`;
var randomImgSrc2 = `images/${randomDiceImg2}`;
var p2 = document.querySelector(".img2").setAttribute("src", randomImgSrc2);

if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML = "🏳️ Draw 🏳️";
}
else if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 wins";
}
else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 wins 🚩";
}
