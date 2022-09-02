const min = document.getElementById("min");
const max = document.getElementById("max");
const val = document.getElementById("txtNumar");
const btn = document.getElementById("btnGhiceste");
const msg = document.getElementById("mesaj");

let gameOver = false;
let incercari = 3;
let minValue, maxValue, valoareGenerata;
minValue = 1;
maxValue = 20;
valoareaGenerata = genereazaNumar(minValue, maxValue);
min.textContent = minValue;
max.textContent = maxValue;

btn.addEventListener('click', ()=>{
    if(gameOver){
        resetGame();
        return;
    }
    if(val.value=='' || isNaN(val.value)){
        alert('Introdu un numar');
        return;
    }else if(val.value<1 || val.value>20){
        msg.textContent='Numărul introdus nu se află între 1 și 20!';
        return;
    }
    let userVal = parseInt(val.value);
    if(userVal!=valoareGenerata){
        incercari--;
        val.value='';
        if(incercari==0){
            onGameOver();
            gameOver=true;
            msg.textContent='Jocul s-a terminat!';
        }else{
            msg.textContent='Mai încearcă';
        }
    }else{
        onGameOver();
        msg.textcontent='Felicitări, ai ghicit!';
    }
})
function onGameOver(){
    gameOver=true;
    val.disabled=true;
    btn.textContent="Mai joaca o dată!";
}
function resetGame(){
    gameOver=false;
    incercari=3;
    msg.textContent='';
    btn.textContent='Ghicește numărul!';
    val.disabled=false;
    val.value='';
    valoareGenerata= genereazaNumar(minValue, maxValue);
}
function genereazaNumar(minValue, maxValue){
    return Math.ceil(minValue + Math.random()*(maxValue-minValue));
}
