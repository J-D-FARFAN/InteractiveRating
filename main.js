const enviar = document.querySelector(".submit")
const cardOne = document.querySelector(".display__only__cardOne")
const cardTwo = document.querySelector(".display--only--state")
let selected = document.querySelector(".selected")
const states = document.querySelectorAll(".state");
let activeState = null;
let savedContent = null;

states.forEach(state => {
    state.addEventListener("click", function(){
        states.forEach(s => {
            s.style.backgroundColor = "";
            s.style.color = ""; 
        });

        this.style.backgroundColor = "hsl(25, 97%, 53%)";
        this.style.color = "white";

        activeState = this;
        savedContent = this.textContent;
    });
});

enviar.addEventListener("click", function(){
    if(cardOne.style.display = "none"){
        cardTwo.style.display = "flex"
        selected.textContent = savedContent
    }
})