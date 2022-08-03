let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
console.log(number);

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(typeof guess);

  if (!guess) {
    document.querySelector(".message").textContent = "No value! ";
  } else if (guess == number) {
    document.querySelector(".message").textContent = "Correct value! ";
    document.querySelector("body").style.backgroundImage =
      "linear-gradient(to right, rgb(2, 92, 51), rgb(76, 206, 139))";
    document.querySelector(".number").textContent = number;
    document.querySelector(".number").style.width = "40rem";
  } else if (guess > number) {
    if (score > 0) {
      document.querySelector(".message").textContent = "Too high value! ";
      score--;
      document.querySelector(".score").textContent = String(score);
    } else {
      document.querySelector(".message").textContent = "You lost the game";
    }
  } else {
    if (score > 0) {
      document.querySelector(".message").textContent = "Too low value! ";
      score--;
      document.querySelector(".score").textContent = String(score);
    } else {
      document.querySelector(".message").textContent = "You lost the game";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  console.log("clicked");
  score = 20;
  document.querySelector(".score").textContent = String(score);
  document.querySelector("body").style.backgroundImage =
    "linear-gradient(to right, rgb(2, 2, 66), rgb(55, 68, 151))";
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "Start guessing... ";
  document.querySelector(".number").textContent = "?";
});
