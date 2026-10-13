const tableauDepense = [
  {
    id: 1,
    titre: "Gaz",
    montant: 5000,
    categorie: "Domestique",
  },
  {
    id: 2,
    titre: "Robe",
    montant: 10000,
    categorie: "Vetements",
  },
];

function ajouterDepense(tableau, nouvelleDepense) {
  const tab = [...tableau, nouvelleDepense];
  return tab;
}

const depense = {
  id: 3,
  titre: "Vin",
  montant: 20000,
  categorie: "Boisson",
};
console.log(ajouterDepense(tableauDepense, depense));
console.log(tableauDepense);

function supprimerDepenseParId(tableau, idDepense) {
  const tab = tableau.filter((element) => element.id !== idDepense);
  return tab;
}

console.log(supprimerDepenseParId(tableauDepense, 1));
console.log(tableauDepense);

function modifierMontantDepense(tableau, idDepense, nouveauMontant) {
  const tab = tableau.map((element) =>
    element.id === idDepense
      ? { ...element, montant: nouveauMontant }
      : element,
  );
  return tab;
}

console.log(modifierMontantDepense(tableauDepense, 1, 6500));
console.log(tableauDepense);

function totalDepense(tableau) {
  const valeurInitiale = 0;
  const total = tableau.reduce(
    (somme, valeurActuelle) => somme + valeurActuelle.montant,
    valeurInitiale,
  );
  return total;
}

console.log("Total depense", totalDepense(tableauDepense));

function filtreDepenseParCategorie(tableau, categorieDepense) {
  const tab = tableau.filter(
    (element) => element.categorie === categorieDepense,
  );
  return tab;
}

console.log(filtreDepenseParCategorie(tableauDepense, "Vetements"));

function afficheDepenseParCategorie(tableau) {
  const filtre = {};
  for (const element of tableau) {
    if (filtre[element.categorie]) {
      filtre[element.categorie].push(element);
    } else {
      filtre[element.categorie] = [element];
    }
  }
  return filtre;
}

console.log(afficheDepenseParCategorie(tableauDepense));
