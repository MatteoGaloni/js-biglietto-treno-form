// *****variabile km*****

// let numeroKm = parseInt(prompt("Quanti chilometri vuoi percorrere?"));
// console.log("I chilometri da percorrere sono", typeof numeroKm);


if (isNaN(numeroKm)) {
    alert("la distanza non è un numero");
} else if (!numeroKm) {
     alert("nessun dato inserito")
} else {  

// ***Dichiaro la variabile eta passegero
    // let etaPasseggero = parseInt(prompt("Quanti anni hai?"));
    // console.log("L'età passeggero è", typeof etaPasseggero);

    if (isNaN(etaPasseggero)) {
    alert("la distanza non è un numero");
    } else if (!etaPasseggero) {
     alert("nessun sconto inserito")
    }
    
    // ***Dicharo prezzoBiglietto e prezzoBilgietto con relativo sconto ***
    
    let prezzoBiglietto = numeroKm * 0.21;
    let sconto20percento = prezzoBiglietto - (prezzoBiglietto * 20 / 100);
    let sconto40percento = prezzoBiglietto - (prezzoBiglietto * 40 / 100);
    let euro = "€"

    // ***Condizione***

    if (parseInt(etaPasseggero) < 18) {
        alert("il prezzo del biglietto è di " + sconto20percento.toFixed(2) + euro);
    } else if (etaPasseggero > 65) {
        alert("il prezzo del biglietto è di " + sconto40percento.toFixed(2) + euro);
    } else {
        alert("il prezzo del biglietto è di " + prezzoBiglietto.toFixed(2) + euro);
    }
}
