const commandes = [
  {
    id: 1,
    client: { nom: "Awa", adresse: { ville: "Cotonou" } },
    articles: ["stylo", "cahier"],
  },
  {
    id: 2,
    client: { nom: "Koffi", adresse: { ville: "Lomé" } },
    articles: ["sac"],
  },
  {
    id: 3,
    client: { nom: "Mariam", adresse: { ville: "Abidjan" } },
    articles: [],
  },
];

function changerVille(commandes, id, nouvelleVille) {
  const tab = commandes.map((element) =>
    element.id === id
      ? {
          ...element,
          client: {
            ...element.client,
            adresse: { ...element.client.adresse, ville: nouvelleVille },
          },
        }
      : element,
  );

  return tab;
}

console.log(
  "changer Ville de Article 2,",
  JSON.stringify(changerVille(commandes, 2, "Paris"), null, 2),
);
console.log(JSON.stringify(commandes, null, 2));
const nouveau1 = changerVille(commandes, 2, "Paris");
console.log(commandes[1].articles);
console.log(nouveau1 === commandes);
console.log(nouveau1[0] === commandes[0]);
console.log(nouveau1[1] === commandes[1]);
console.log(nouveau1[2] === commandes[2]);
console.log(nouveau1[1].client !== commandes[1].client);

function ajouterArticle(commandes, id, article) {
  const tab = commandes.map((element) =>
    element.id === id
      ? { ...element, articles: [...element.articles, article] }
      : element,
  );
  return tab;
}

console.log(JSON.stringify(ajouterArticle(commandes, 2, "Ardoise"), null, 2));
console.log(JSON.stringify(commandes, null, 2));
const nouveau2 = ajouterArticle(commandes, 2, "Ardoise");
console.log(nouveau2 === commandes);
console.log(nouveau2[0] === commandes[0]);
console.log(nouveau2[1] === commandes[1]);
console.log(nouveau2[2] === commandes[2]);

function supprimerCommande(commandes, id) {
  const tab = commandes.filter((element) => element.id !== id);
  return tab;
}

console.log(JSON.stringify(supprimerCommande(commandes, 2), null, 2));
console.log(JSON.stringify(commandes, null, 2));
const nouveau3 = supprimerCommande(commandes, 2);
console.log(nouveau3 === commandes);
console.log(nouveau3[0] === commandes[0]);
console.log(nouveau3[1] === commandes[2]);
console.log(nouveau3[2] === undefined);
