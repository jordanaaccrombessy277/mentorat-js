const prenom = "Jordana";
const age = 26;
const estDebutante = true;

console.log("prenom :", prenom);
console.log("age :", age);
console.log("est débutante :", estDebutante);

console.log(typeof prenom);
console.log(typeof age);
console.log(typeof estDebutante);

function categorie(note) {
  if (note < 10) return "Insuffisant";
  else if (note >= 10 && note <= 15) return "Bien";
  return "Excellent";
}

console.log("note 12 est ", categorie(12));
console.log("note 9 est ", categorie(9));
console.log("note 10 est ", categorie(10));
console.log("note 15 est ", categorie(15));
console.log("note 16 est ", categorie(16));

const tab = [12, 5, 18, 9, 14];

function calculerSomme(tableau) {
  let somme = 0;
  for (const element of tableau) {
    somme = somme + element;
  }
  return somme;
}

console.log("somme est ", calculerSomme(tab));

//let, const et var permettent de définir une variable. let definit la variable en lui attribuant un un scope limité
//var définit une variable en lui attribuant un scope globale. const permet de définir une variable constante

if (tab[0] === 12) {
  var a = 1;
  //let b = 2;
}
console.log(a);
//console.log(b);
