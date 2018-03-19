//Marcus Forsberg TE16

// Deklarera konstanter för knapparna och resultat texten
const btnColor = document.querySelector("#color"); //Sätter upp en länk mellan cod och html
const btnSize = document.querySelector("#size");
const btnFont = document.querySelector("#font");


// Lägg till click-event listeners för knapparna som anropar varsin funktion/metod
btnColor.addEventListener("click",function(){ // Skappar en tillfällig metod.
    btnColor.style.backgroundColor = "red"; //Justerar css igenom javascript
});

btnSize.addEventListener("click",function(){
    btnSize.style.fontSize = "50px";
});

btnFont.addEventListener("click",function(){
    btnFont.style.fontFamily = "Impact";
})
// Deklarera funktionerna/metoderna här