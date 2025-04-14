// Creare un array di oggetti di squadre di calcio.
//
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
//
// Nome sarà l'unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà "punti" fatti e "falli subiti".
//
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e
// falli subiti e stampiamo tutto in console.

getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const teams = [
  {
    name: "Inter",
    points: getRandomNumber(1, 80),
    fouls: getRandomNumber(7, 20),
  },
  {
    name: "Roma",
    points: getRandomNumber(1, 80),
    fouls: getRandomNumber(7, 20),
  },
  {
    name: "Lazio",
    points: getRandomNumber(1, 80),
    fouls: getRandomNumber(7, 20),
  },
  {
    name: "Udinese",
    points: getRandomNumber(1, 80),
    fouls: getRandomNumber(7, 20),
  },
  {
    name: "Juventus",
    points: getRandomNumber(1, 80),
    fouls: getRandomNumber(7, 20),
  },
  {
    name: "Napoli",
    points: getRandomNumber(1, 80),
    fouls: getRandomNumber(7, 20),
  },
  {
    name: "Genoa",
    points: getRandomNumber(1, 80),
    fouls: getRandomNumber(7, 20),
  },
];
console.table(teams);

const teamsWithoutPoints = [];

for (const team of teams) {
  delete team.points;
  teamsWithoutPoints.push(team);
}
console.table(teamsWithoutPoints);
