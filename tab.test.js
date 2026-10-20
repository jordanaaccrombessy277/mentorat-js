const notes = [12, 5];
notes.push(20); // ✅ OK : on modifie le contenu
//notes = [1, 2, 3]; // ❌ TypeError : on essaie de remplacer la référence

let notesb = [12, 5];
notesb.push(20); // ✅ OK : on modifie le contenu
//notesb = [1, 2, 3]; // ✅ OK : on change de contenu, la variable contient now la référence du nouveau tableau

const obj = { foo: "bar", baz: 42 };

console.log(Object.entries(obj));
