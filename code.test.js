const user = { nom: "Aya", adresse: { ville: "Cotonou", rue: "Sike" } };
const copie = { ...user, nom: "Koffi" };
copie.adresse.ville = "Porto-Novo";
console.log(user.adresse.ville);
copie.adresse = {};
console.log(copie.adresse);
console.log(user.adresse);

const copie1 = {
  ...user,
  nom: "Koffi",
  adresse: { ...user.adresse, ville: "Porto-Novo" },
};
console.log(copie1);
console.log(user);
