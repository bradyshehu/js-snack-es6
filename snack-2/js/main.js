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
    points: 0,
    fouls: 0,
  },
  {
    name: "Roma",
    points: 0,
    fouls: 0,
  },
  {
    name: "Lazio",
    points: 0,
    fouls: 0,
  },
  {
    name: "Udinese",
    points: 0,
    fouls: 0,
  },
  {
    name: "Juventus",
    points: 0,
    fouls: 0,
  },
  {
    name: "Napoli",
    points: 0,
    fouls: 0,
  },
  {
    name: "Genoa",
    points: 0,
    fouls: 0,
  },
];
console.table(teams);

const teamsWithoutPoints = [];

for (const team of teams) {
  const points = getRandomNumber(1, 80);
  const fouls = getRandomNumber(7, 20);

  team.points = points;
  team.fouls = fouls;

  const deepTeam = { ...team };
  delete deepTeam.points;
  teamsWithoutPoints.push(deepTeam);
}
console.table(teamsWithoutPoints);
console.table(teams);
