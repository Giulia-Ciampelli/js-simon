console.log('im alive');

// Descrizione:
// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// NOTA: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.
// BONUS:
// Inseriamo la validazione: se l'utente mette due numeri uguali o inserisce cose diverse da numeri lo blocchiamo in qualche modo.
// Se l’utente ha inserito qualcosa di non valido, segnaliamolo visivamente nel form.

// 1. creazione di variabili
// array di confronto
let arrSimon = [];
let userCheck = [];

// variabili per il timer
let num = document.getElementById('timer');
let seconds = 30;
let clock = setInterval(timer, 1000);

// variabili per comparazione array
let arrCount = 0;

// altre variabili
let simonOutput = document.getElementById('simon');
let formElement = document.querySelector('form');
let inputOne = document.getElementById('num-1');
let inputTwo = document.getElementById('num-2');
let inputThree = document.getElementById('num-3');
let inputFour = document.getElementById('num-4');
let inputFive = document.getElementById('num-5');

// 2. funzione random con ciclo for *5
function randomNum(min, max) {
    for (let i = 0; i < 5; i++) {
        arrSimon.push(Math.floor(Math.random() * (max - min)) + min);
    }
    console.log(arrSimon);
    simonOutput.innerHTML = arrSimon;
}
randomNum(1, 10);

// 3. funzione setInterval per timer di 30 secondi
function timer() {
    if (seconds == 0) {
        num.innerHTML = 'Tempo scaduto!';
        clearInterval(clock);
        simonOutput.classList.add('d-none');
        formElement.classList.remove('d-none');
    }
    else {
        num.innerHTML = seconds;
        seconds--;
    }
}

// 4. lettura valori del form e salvataggio nel nuovo array

// 5.comparazione di array
// es snack funzione di comparazione delle vocali?
function arrCheck() {
    for (let i = 0; i < arrSimon.length; i++) {

    }
}