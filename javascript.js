var boardState = new Array(9);
let i = 0;
let j = 0;
var a = 0;
var all = document.getElementsByTagName("td")
var checkState = false;
function playerScoreUpdate(){
    i++;
    document.getElementById("playerScoreHolder").innerHTML=i;
}
function computerScoreUpdate(){
    j++;
    document.getElementById("computerScoreHolder").innerHTML=j;
}
function selectX(){
    reset()
    a = 0;
    document.getElementById('x').style.backgroundColor = "green";
    document.getElementById('o').style.backgroundColor = "black";
    console.log('selectX')
}
function selectO(){
    reset()
    a = 1;
    computerPlayer()
    document.getElementById('x').style.backgroundColor = "black";
    document.getElementById('o').style.backgroundColor = "green";
    console.log('selectO')
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
function computerPlayer(){
    let k = getRandomInt(9);
    if(a ==0){
        if(all[k].innerHTML == ""){
            all[k].innerHTML = 'O';
            game()
        }
        else if(checkState ==false){
            computerPlayer()
        }
    }
    else if(a == 1){
        if(all[k].innerHTML ==""){
            all[k].innerHTML = 'X';
            game()
        }
        else if(checkState == false){
            computerPlayer()
        }
    }
}
function updateBoard(input){
    if(a ==0 && document.getElementById(input).innerHTML == "" && checkState == false){
        document.getElementById(input).innerHTML = 'X';
        if(checkState == false){
            computerPlayer()
        }
    
    }
    else if(a==1 && document.getElementById(input).innerHTML == "" && checkState == false){
        document.getElementById(input).innerHTML = 'O';
        if(checkState == false){
            computerPlayer()
        }
      
    }
    else{
        console.log(a)
        console.log(checkState)
        console.log(boardState)
        console.log('error placePlayerBlock')
    }
}
function game(){
    let count = 0;
    for(var i= 0; i<all.length;i++){
        if(all[i].innerHTML == 'X'){
            boardState[i] = 0;
            count++;
        }
        else if(all[i].innerHTML =='O'){
            boardState[i] = 1;
            count++;
        }
    }
    if(checkState == false && count< 9){
        checkEnd()
    }
}
function checkEnd(){
        if((boardState[0]== 0 && boardState[1] == 0 && boardState[2] == 0)
            || (boardState[3]== 0 && boardState[4] == 0 && boardState[5] == 0)
            || (boardState[6]== 0 && boardState[7] == 0 && boardState[8] == 0)
            || (boardState[0]== 0 && boardState[3] == 0 && boardState[6] == 0)
            || (boardState[1]== 0 && boardState[4] == 0 && boardState[7] == 0)
            || (boardState[2]== 0 && boardState[5] == 0 && boardState[8] == 0)){
                if(a == 1){
                    computerScoreUpdate();
                    checkState = true;
                }
                else{
                    playerScoreUpdate();
                    checkState = true;
                }

            }
        else if((boardState[0]== 0 && boardState[4] == 0 && boardState[8] == 0) || (boardState[2]== 0 && boardState[4] == 0 && boardState[6] == 0)) {
            if(a == 1){
                computerScoreUpdate();
                checkState = true;
            }
            else{
                playerScoreUpdate();
                checkState = true;
            }
    
        }
        else if((boardState[0]== 1 && boardState[1] == 1 && boardState[2] == 1)
        || (boardState[3]== 1 && boardState[4] == 1 && boardState[5] == 1)
        || (boardState[6]== 1 && boardState[7] == 1 && boardState[8] == 1)
        || (boardState[0]== 1 && boardState[3] == 1 && boardState[6] == 1)
        || (boardState[1]== 1 && boardState[4] == 1 && boardState[7] == 1)
        || (boardState[2]== 1 && boardState[5] == 1 && boardState[8] == 1)){
            if(a == 0){
                computerScoreUpdate();
                checkState = true;
            }
            else{
                playerScoreUpdate();
                checkState = true;
            }

        }
        else if((boardState[0]== 1 && boardState[4] == 1 && boardState[8] == 1) || (boardState[2]== 1 && boardState[4] == 1 && boardState[6] == 1)) {
            if(a == 0){
                computerScoreUpdate();
                checkState = true;
            }
            else{
                playerScoreUpdate();
                checkState = true;
            }
        }
        
    }
function reset(){
    for(var i = 0, max = all.length; i<max; i++){
        all[i].innerHTML ="";
    }
    a = 0;
    boardState = new Array(9);
    checkState = false;
}
