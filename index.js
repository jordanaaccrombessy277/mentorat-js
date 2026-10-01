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

function trouverParPrenom(tableauMembres, prenomMembre){
    return tableauMembres.find((membre) => membre.prenom === prenomMembre);
}

function calculerAgeMoyen(tableauMembres){
    const initialValue = 0;
    const somme = tableauMembres.reduce((somme, valeurActuelle) => somme + valeurActuelle.age, initialValue );
    return somme / tableauMembres.length;
}

// Cette version de compterParTechno marche, mais elle contient une boucle dans une boucle. Il y a donc 4 * 4 opérations, 
// les conséquences ne sont pas visibles. Mais si le tableau contenait 10000 elements, cela ferait 100.000.000
// opérations. La complexité est donc O(n²) contre O(n²)

function compterParTechno(membres){
    const techs = {}
    for (const membre of membres){
      let i = 0;
      let technoName = membre.techno
      for (const membreTab of membres){
        if(membreTab.techno === technoName){
          i++
        }
      }
       techs[technoName] = i;
    }

    return techs;
}

console.log("trouver par prénom Jordana", trouverParPrenom(membres, 'Jordana'))
console.log("trouver par prénom Jordan", trouverParPrenom(membres, 'Jordan'))
console.log("calculer Age moyen", calculerAgeMoyen(membres))
console.log("compter par techno", compterParTechno(membres))