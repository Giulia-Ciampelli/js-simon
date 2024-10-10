// BONUS:
// Inseriamo la validazione: se l'utente mette due numeri uguali o inserisce cose diverse da numeri lo blocchiamo in qualche modo.
// Se l’utente ha inserito qualcosa di non valido, segnaliamolo visivamente nel form.

// 1. creazione di variabili
// variabili per il timer
let num = document.getElementById('timer');
let seconds = 30;
let clock = setInterval(timer, 1000);

// variabili per comparazione array
let arrSimon = [];
let userCheck = [];
let numFound = [];
let arrCount = 0;

// altre variabili
// #region simon output
let simonOutput = document.getElementById('simon');
// #endregion simon output

// #region form numeri
let formElement = document.querySelector('form');
let formOne = document.getElementById('num-1');
let formTwo = document.getElementById('num-2');
let formThree = document.getElementById('num-3');
let formFour = document.getElementById('num-4');
let formFive = document.getElementById('num-5');
let checkButton = document.getElementById('button');
// #endregion form numeri

// #region output di verifica
let countOutput = document.getElementById('num-count');
let numCheckOutput = document.getElementById('num-found');
// #endregion output di verifica

// 2. funzione random con ciclo for *5
function randomNum(min, max) {
    for (let i = 0; i < 5; i++) {
        arrSimon.push(Math.floor(Math.random() * (max - min)) + min);
    }
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
checkButton.addEventListener('click', function (e) {
    e.preventDefault();
    arrCheck();
})

console.log(`arrSimon: ${arrSimon}, userCheck: ${userCheck}`);

// 5.comparazione di array
function arrCheck() {
    userCheck = [
        Number(formOne.value),
        Number(formTwo.value),
        Number(formThree.value),
        Number(formFour.value),
        Number(formFive.value)
    ];

    for (let i = 0; i < userCheck.length; i++) {
        if (arrSimon.includes(Number(userCheck[i]))) {
            arrCount++;
            numFound.push(userCheck[i]);
        }
    }
    console.log(`${arrCount}, ${numFound}`);
    countOutput.innerHTML = arrCount;
    numCheckOutput.innerHTML = numFound;
}