const notes = [12, 5, 18, 9, 14, 7, 16];

const notesSuperieurOuEgalA10 = notes.filter((note) => note >= 10);

console.log("Notes supérieures ou égales à 10", notesSuperieurOuEgalA10);

function categorie(note) {
  if (note < 10) return "Insuffisant";
  else if (note >= 10 && note <= 15) return "Bien";
  return "Excellent";
}

const mentionsNotes = notes.map((note) => categorie(note));

console.log("Mentions des notes", mentionsNotes);

function calculerSomme(tableau) {
  if (tableau.length === 0) return null;
  const initialValue = 0;
  const sommeNotes = tableau.reduce(
    (somme, currentValue) => somme + currentValue,
    initialValue,
  );
  return sommeNotes;
}

function moyenneNotes(tableau) {
  if (tableau.length === 0) return null;
  return calculerSomme(tableau) / tableau.length;
}

console.log("Moyenne des notes", moyenneNotes(notes));

// notes.push(20) fonctionne parce que les tableaux ne sont pas comme les autres variables.
