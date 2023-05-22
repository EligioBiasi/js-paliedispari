// Palidroma:

// Chiedere all’utente di inserire una parola:
const insertWord = document.getElementById('user-word').value;
document.getElementById('button-word').addEventListener('click', function(){
    console.log(insertWord)
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