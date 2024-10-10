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

// 1. funzione random con ciclo for *5
function randomNum(min, max) {
    let arrSimon = [];
    return Math.floor(Math.random() * (max - min)) + min;
}

for (let i = 0; i < 5; i++) {
    console.log(randomNum(1, 10));
}

// 2. creazione di array?
let arrUser = [];

// 3. funzione setInterval per timer di 30 secondi

// 4. appare form di input (da scrivere nell'index)

// 5.comparazione di array