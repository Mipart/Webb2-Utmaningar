//Marcus Forsberg TE16

// Deklarera konstanter för knapparna och resultat texten
const text = document.querySelector("#message");
// Lägg till click-event listeners för knapparna som anropar varsin funktion/metod
document.querySelector("#toggle").addEventListener("click",hide);
// Deklarera allt annat här
var toggle = true;
function hide(){
    if(toggle){
        text.style.visibility = "hidden";
    }else{
        text.style.visibility = "visible";
    }
    toggle = !toggle;
}