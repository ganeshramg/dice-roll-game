function roll(){

    var a = Math.floor(Math.random() * 6) + 1;
    var b = Math.floor(Math.random() * 6) + 1;

    document.getElementById('num1').src = "images/" + a + ".png"
    document.getElementById('num2').src = "images/" + b + ".png"
    var msg = ''
    var ret = ''
    if (a>b){
        msg = "Player 1 wins"      
    } else if (b > a){
        msg = "Player 2 wins"
    } else {
        msg = "Draw Match" 
    }
    document.querySelector('span').textContent = msg
    // return ret
}

function reset(){
    document.getElementById('num1').src = "images/1.png"
    document.getElementById('num2').src = "images/1.png"
    document.querySelector('span').textContent = "Click the \"Roll\" button!"
}

document.getElementById('rollButton').addEventListener('click',roll)
document.getElementById('resetButton').addEventListener('click',reset)

