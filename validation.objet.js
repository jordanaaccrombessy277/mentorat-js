// Partie A
function mettreAJourAge(utilisateur, nouvelAge) {
  const copyUtilisateur = { ...utilisateur, age: nouvelAge };
  return copyUtilisateur;
}

const awa = { nom: "Awa", age: 25 };
const awa2 = mettreAJourAge(awa, 26);
// affiche awa, awa2, et awa === awa2
console.log(awa); // { nom: "Awa", age: 25 }
console.log(awa2); // { nom: "Awa", age: 26 }
console.log(awa === awa2); // false

// Partie B
const equipe = [
  { nom: "Awa", age: 25 },
  { nom: "Koffi", age: 30 },
];
const copie = equipe.slice();
copie[0].age = 99;

console.log(equipe[0].age); // 99
console.log(equipe === copie); // false
console.log(equipe[0] === copie[0]); // true

// Partie C
const equipe1 = [
  { nom: "Awa", age: 25 },
  { nom: "Koffi", age: 30 },
];
function vieillirPremier(tableau) {
  const tab = [];
  let compteur = 0;
  for (const element of tableau) {
    if (compteur === 0) {
      tab.push({ ...element, age: element.age + 1 });
    } else {
      tab.push(element);
    }
    compteur++;
  }

  return tab;
}

const resultat = vieillirPremier(equipe1);
console.log(equipe1); // [ { nom: "Awa", age: 25 }, { nom: "Koffi", age: 30 },];
console.log(resultat); // [ { nom: "Awa", age: 26 }, { nom: "Koffi", age: 30 },];
console.log(equipe1[0] === resultat[0]); // false
console.log(equipe1[1] === resultat[1]); // true
