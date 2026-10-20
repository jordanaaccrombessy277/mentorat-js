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
    client: { nom: "Mariam", adresse: { ville: "Cotonou" } },
    articles: [],
  },
  {
    id: 4,
    client: { nom: "Awa", adresse: { ville: "Cotonou" } },
    articles: ["règle", "stylo", "stylo"],
  },
];

function commandesParVille(commandes) {
  const tab = {};
  for (const element of commandes) {
    tab[element.client.adresse.ville] =
      tab[element.client.adresse.ville] + 1 || 1;
  }
  return tab;
}

console.log(commandesParVille(commandes));
console.log(JSON.stringify(commandes, null, 2));

function articlesUniques(commandes) {
  const tab = [];
  for (const element of commandes) {
    for (const article of element.articles) {
      tab.push(article);
    }
  }

  for (let i = 0; i < tab.length; i++) {
    if (tab[i] === tab[i + 1]) {
      const nouveauTab = tab.filter((element) => element !== tab[i]);
    }
  }
  return tab;
}

console.log(articlesUniques(commandes));
