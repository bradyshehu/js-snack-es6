// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const lightestBikeEl = document.getElementById("lightest-bike");

const bikes = [
  {
    name: "Bici da corsa",
    weight: parseInt(getRandomNumber(20, 300)),
  },
  {
    name: "Mountain bike",
    weight: parseInt(getRandomNumber(20, 300)),
  },
  {
    name: "Bicicletta elettrica",
    weight: parseInt(getRandomNumber(20, 300)),
  },
  {
    name: "Gravel bike",
    weight: parseInt(getRandomNumber(20, 300)),
  },
  {
    name: "Bici da ciclocross",
    weight: parseInt(getRandomNumber(20, 300)),
  },
];

let lightestBike = bikes[0];
console.log(typeof lightestBike, lightestBike);
for (i = 1; i < bikes.length; i++) {
  const currentBike = bikes[i];
  console.log(typeof currentBike, currentBike);
  if (currentBike.weight < lightestBike.weight) {
    lightestBike = currentBike;
  }
  console.log(lightestBike.name, lightestBike.weight);
}
lightestBikeEl.innerText = `La bici piú leggerá é ${lightestBike.name}, con un peso di ${lightestBike.weight} Kg`;
