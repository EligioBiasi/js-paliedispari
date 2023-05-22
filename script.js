// Palidroma:
const wordContainer = [];
// Chiedere all’utente di inserire una parola:
const insertWord = document.getElementById('user-word').value;
// Creare una funzione per capire se la parola inserita è palindroma

document.getElementById('button-word').addEventListener('click', function(){
    wordContainer.push(insertWord);
    
})

