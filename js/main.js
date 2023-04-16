const generator = document.getElementById("generator")

generator.addEventListener("click", function (e) {
    e.preventDefault()
    let name = document.getElementById("name").value
    let km = document.getElementById("km").value
    let age = document.getElementById("age").value

    // console.log(name + km + age);
    // console.log(typeof name)
    // console.log(typeof km)
    // console.log(typeof age)

    km = parseInt(km)
    // console.log(typeof km);

    age = parseInt(age)

    let total;
    let carrozza = Math.floor( Math.random() * 10 ) + 1;
    let codice = Math.floor( Math.random() * 1000 ) + 1;


    if (!name) {
        alert("Attenzione, nessun nome inserito!")
    } else if (!km) {
        alert("Attenzione, distanza in chilometri non inserita!")
    } else if (!age) { 
        alert("Attenzione, nessuna età inserita!")
    } else {
        // ***Dicharo prezzoBiglietto e prezzoBilgietto con relativo sconto ***
    
            let prezzoBiglietto = km * 0.21;
            let sconto20percento = prezzoBiglietto - (prezzoBiglietto * 20 / 100);
            let sconto40percento = prezzoBiglietto - (prezzoBiglietto * 40 / 100);
            let euro = "€"
            
            
                // ***Condizione***
            
            

            if (age < 18) {
                total = sconto20percento.toFixed(2) + euro;
                age = ("Under 18");
            } else if (age > 65) {
                total = sconto40percento.toFixed(2) + euro;
                age = ("Over 65");
            } else {
                total = prezzoBiglietto.toFixed(2) + euro;
                age = ("Tariffa Standard");

            } 
            

            document.getElementById("ticketName").innerText= name
            // document.getElementById("ticketKm").innerText= km
            document.getElementById("ticketAge").innerText= age
            document.getElementById("ticketPrice").innerText= total
            document.getElementById("carrozza").innerText= carrozza
            document.getElementById("codice").innerText= codice
            
        }   

    
})
    
   


















// *****variabile km*****





// ***Dichiaro la variabile eta passegero
    // let etaPasseggero = parseInt(prompt("Quanti anni hai?"));
    // console.log("L'età passeggero è", typeof etaPasseggero);

  
    






