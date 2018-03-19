// Deklarera konstanter för knapparna och resultat texten
const btnAlert = document.querySelector("#alert");
const btnConfirm = document.querySelector("#confirm");
const btnPrompt = document.querySelector("#prompt");

const resultat = document.querySelector("#result");
// Lägg till click-event listeners för knapparna som anropar varsin funktion/metod
btnAlert.addEventListener("click",changeOne);
btnConfirm.addEventListener("click",changeTwo);
btnPrompt.addEventListener("click",changeThree);


// Deklarera funktionerna/metoderna här
function changeOne(){
    window.alert("Hello!");
    resultat.textContent = "Alert used";
}

function changeTwo(){
    var r = window.confirm("Are You Sure?");
    if(r){
        resultat.textContent = "Great!";
    }else{
        resultat.textContent = "Too Bad!";
    }
}

function changeThree(){
    var r = window.prompt("Name?");
    resultat.textContent = r;
}