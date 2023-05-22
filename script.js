// Palidroma:

// Chiedere all’utente di inserire una parola:
document.getElementById('button-word').addEventListener('click', function(){
    let insertWord = document.getElementById('user-word').value;
    if(isPalindrome(insertWord)){
        document.getElementById('output-word').innerHTML='la tua parola è palindroma'
    }else{
        document.getElementById('output-word').innerHTML='la tua parola non è palindroma'
    }
})

// Creare una funzione per capire se la parola inserita è palindroma
function isPalindrome(word){
    for(let i=0;i<word.length/2;i++){
        if(word[i]!==word[word.length-i-1]){
            return false
        } 
    }
        return true
}




// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function randomNumber(){
   return Math.floor(Math.random() * 5) + 1;
}
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
    function sum(somma){
        if((randomNumber()+somma)%2===1){
            return false
        }else{
            return true
        }
    }
// Dichiariamo chi ha vinto.
document.getElementById('odd-button').addEventListener('click', function(){
    let userNumber = parseInt(document.getElementById('user-number').value);
    document.getElementById('pc-number').innerHTML ='il numero del computer è:'+' '+randomNumber()
    if(sum(userNumber)){
        document.getElementById('output-dice').innerHTML = 'ha vinto: il giocatore! Il numero è dispari'
    }else{
        document.getElementById('output-dice').innerHTML = 'ha vinto: il computer! Il numero è pari'

    }
})

document.getElementById('even-button').addEventListener('click', function(){
    let userNumber = parseInt(document.getElementById('user-number').value);
    document.getElementById('pc-number').innerHTML ='il numero del computer è:'+' '+randomNumber()
    if(sum(userNumber)==false){
        document.getElementById('output-dice').innerHTML = 'ha vinto: il giocatore! Il numero è pari'
    }else{
        document.getElementById('output-dice').innerHTML = 'ha vinto: il computer! Il numero è dispari'
    }
})