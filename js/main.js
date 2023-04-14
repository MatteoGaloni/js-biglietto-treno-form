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

    let total= 0;


    if (!km) {
        alert("nessun dato inserito")
    } else {

        if (!age) {
            alert("nessuna eta inserita")
        }
        // ***Dicharo prezzoBiglietto e prezzoBilgietto con relativo sconto ***
    
        let prezzoBiglietto = km * 0.21;
        let sconto20percento = prezzoBiglietto - (prezzoBiglietto * 20 / 100);
        let sconto40percento = prezzoBiglietto - (prezzoBiglietto * 40 / 100);
        let euro = "€"
        
            // ***Condizione***
        
        

        if (age < 18) {
           total = sconto20percento.toFixed(2) + euro;
        } else if (age > 65) {
            total = sconto40percento.toFixed(2) + euro;
        } else {
            total = prezzoBiglietto.toFixed(2) + euro;
        }       
        
    }

    document.getElementById("ticketName").innerText= name
    document.getElementById("ticketKm").innerText= km
    document.getElementById("ticketAge").innerText= age
    document.getElementById("ticketPrice").innerText= total

    

    
})
    
   


















// *****variabile km*****





// ***Dichiaro la variabile eta passegero
    // let etaPasseggero = parseInt(prompt("Quanti anni hai?"));
    // console.log("L'età passeggero è", typeof etaPasseggero);

  
    






