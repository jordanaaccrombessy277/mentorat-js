// Exercice 1
// const a = [1, 2, 3];
// const b = a;
// b.push(4);
// const c = a.slice(); // slice() sans argument crée une copie
// c.push(5);
// console.log(a, b, c, a === b, a === c);

//[1,2,3,4] [1,2,3,4] [1,2,3,4,5] true, false

// Exercice 2

function ajouterMutation(tab, x) {
  tab.push(x);
  return tab;
}

function ajouterSansMutation(tab, x) {
  const c = tab.slice();
  c.push(x);
  return c;
}

const original1 = [3, 1, 7];
const resultat1 = ajouterMutation(original1, 10);
console.log(original1); // [3, 1, 7, 10]
console.log(resultat1); // [3, 1, 7, 10]
console.log(original1 === resultat1); // true

const original2 = [3, 1, 7];
const resultat2 = ajouterSansMutation(original2, 10);
console.log(original2); // [3, 1, 7]
console.log(resultat2); //[3, 1, 7, 10]
console.log(original2 === resultat2); // false

// Exercice 3
// function retirerValeur(tab, x) {
//   const tab2 = [];
//   for (const element of tab) {
//     if (element !== x) {
//       tab2.push(element);
//     }
//   }
//   return tab2;
// }

function retirerValeur(tab, x) {
  const tab2 = tab.filter((element) => element !== x);
  return tab2;
}

const a = [4, 2, 4, 9];
const b = retirerValeur(a, 4);
console.log(a); // [4, 2, 4, 9]
console.log(b); // [2, 9]
console.log(a === b); // false

function remplacerALIndex(tab, index, x) {
  if (index >= tab.length || index < 0) return null;
  let compteur = 0;
  const tab2 = [];
  for (const element of tab) {
    if (compteur === index) {
      tab2.push(x);
    } else {
      tab2.push(element);
    }
    compteur += 1;
  }
  return tab2;
}

const c = [4, 2, 4, 9];
const d = remplacerALIndex(c, 1, 99);
console.log(c); // [4, 2, 4, 9]
console.log(d); // [4, 99, 4, 9]
console.log(c === d); // false
const e = remplacerALIndex(c, 10, 99);
console.log(e); // null
const f = remplacerALIndex(c, 4, 99);
console.log(f); // null
const g = remplacerALIndex(c, -1, 99);
console.log(g); // null
