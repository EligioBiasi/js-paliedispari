// Palidroma:

// Chiedere all’utente di inserire una parola:
const insertWord = document.getElementById('user-word').value;
let checker = true
document.getElementById('button-word').addEventListener('click', function(){
    if(isPalindrome(insertWord)){
        document.getElementById('output-word').innerHTML='la tua parola è palindroma'
    }else{
        document.getElementById('output-word').innerHTML='la tua parola non è palindroma'

    }
})

// Creare una funzione per capire se la parola inserita è palindroma
function isPalindrome(word){
    for(let i=0;i<insertWord.length/2;i++){
        if(insertWord[i]!==insertWord[insertWord.length-i-1]){
            checker = true
        } else{
            checker = false
        }
    }
}