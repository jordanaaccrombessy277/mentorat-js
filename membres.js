
const membres = [
  { prenom: "Jordana", age: 26, techno: "React" },
  { prenom: "Arnold", age: 30, techno: "NextJS" },
  { prenom: "Manie", age: 21, techno: "VueJS" },
  { prenom: "JB", age: 31, techno: "React" },
];

function compterParTechno(membres){
  const techs = {};
  for (const membre of membres){
    techs[membre.techno] = (techs[membre.techno] || 0 ) + 1;
  }
  return techs;
}

function calculerAgeMoyen(tableauMembres){
    // Si le tableau est vide, on retourne null
    if(tableauMembres.length === 0) return null 
    let somme = 0;
    for (const membre of tableauMembres){
        somme = somme + membre.age
    }
    return somme / tableauMembres.length
}

function trouverLePlusAge(tableauMembres){
  // Si le tableau est vide, on retourne null
  if(tableauMembres.length === 0) return null
  let membrePlusAge = tableauMembres[0];
  for (const membre of tableauMembres){
    if(membre.age > membrePlusAge.age){
      membrePlusAge = membre
    }
  }
  return membrePlusAge
}

function grouperParTechno(tableauMembres){
  const techs = {};
  for (const membre of tableauMembres){
      if(techs[membre.techno]){
        techs[membre.techno].push(membre.prenom)
      }else{
        techs[membre.techno] = [membre.prenom];
      }
  }
  return techs;
}

console.log("trouver le plus agé", trouverLePlusAge(membres))
console.log("calculer age moyen", calculerAgeMoyen(membres))
console.log("grouper par techno", grouperParTechno(membres))
console.log("compter par techno", compterParTechno(membres))
console.log("trouver le plus agé avec un tableau vide", trouverLePlusAge([]))
console.log("calculer age moyen avec un tableau vide", calculerAgeMoyen([]))