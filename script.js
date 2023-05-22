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
const userNumber = parseInt(document.getElementById('user-number').value);

document.getElementById('odd-button').addEventListener('click', function(){
    
})

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function randomNumber(pcnumber){
    Math.floor(Math.random() * 5) + 1;
}
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)

// Dichiariamo chi ha vinto.