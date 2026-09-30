console.log("Hello, équipe !");

const age = 26;
const prenom = "Jordana";
const langagePrefere = "JS";
const AGE_MINIMUM = 25;

const technos = ["React", "ExpressJS", "NextJS"];

console.log("Taille du tableau techno", technos.length);

console.log("Première techno", technos[0]);

function presenter(name, myAge, langage) {
  return `Bonjour, je m'appelle ${name}, j'ai ${myAge} ans et ${langage} est mon langage préféré`;
}

console.log(presenter(prenom, age, langagePrefere));

const membres = [
  { prenom: "Jordana", age: 26, techno: "React" },
  { prenom: "Arnold", age: 30, techno: "NextJS" },
  { prenom: "Manie", age: 21, techno: "VueJS" },
  { prenom: "JB", age: 31, techno: "React" },
];

for (const membre of membres) {
  console.log("prenom", membre.prenom);
}

const prenoms = membres.map((membre) => membre.prenom);

console.log("tab prenoms", prenoms);

const membresDePlusDe25Ans = membres.filter(
  (membre) => membre.age > AGE_MINIMUM,
);

console.log("Plus de 25 ans", membresDePlusDe25Ans);
