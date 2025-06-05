//selezione bottone

const ligth_button = document.getElementById("light_button");

//selezione elementi

const turn_off = document.getElementById("white_bulb");
const turn_on = document.getElementById("yellow_bulb");

// funzione evento per il bottone

ligth_button.addEventListener("click", function () {
  console.log("Hai cliccato");

  //funzione per mostrare le immagini alternate

  turn_off.classList.toggle("d-none");
  turn_on.classList.toggle("d-none");
});
