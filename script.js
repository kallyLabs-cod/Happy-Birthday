const blowCandle = document.getElementById("blowCandle");
const Letter = document.getElementById("Letter");
const closeLetter = document.getElementById("closeLetter");

blowCandle.addEventListener("click", function() {
    Letter.classList.add("show");
});

closeLetter.addEventListener("click", function() {
    Letter.classList.remove("show");

    Boochi.play();
});

