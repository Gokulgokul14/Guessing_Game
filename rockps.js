
let arr=["Rock","Paper","Scissor"];

let ran = Math.floor(Math.random() * 3);
        const r = document.getElementById("p");
        const scr = document.querySelector(".screen");
        const popp = document.querySelector(".pop");

        function play() {
            const inputElem = document.getElementById("userinput");
            let val = inputElem.value.trim();
            val = val.substring(0,1).toUpperCase() + val.substring(1).toLowerCase();
            if (val === "") {
                r.textContent = "Please enter the Guess";
                r.style.display = "block";
                r.focus();
                return;
            }
            if (val == arr[ran]) {
                scr.style.display = "block";
                popp.textContent = "Congratulations!!\nYou Won!! 🎉🎉";
                popp.style.backgroundColor = "rgb(111, 255, 0)";
                popp.style.display = "block";
                r.style.display = "none";
            } else {
                scr.style.display = "block";
                popp.textContent = `Sorry, you lost!\nIt was ${arr[ran]}`;
                popp.style.backgroundColor = "#e74c3c";
                popp.style.display = "block";
                r.style.display = "none";
            }
        }
        // Hide popup and overlay on click, reset for next round
        scr.addEventListener("click", resetGame);
        popp.addEventListener("click", resetGame);

        function resetGame() {
            scr.style.display = "none";
            popp.style.display = "none";
            document.getElementById("userinput").value = "";
            ran = Math.floor(Math.random() * 3);
        }