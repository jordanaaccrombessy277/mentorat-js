if (true) {
  var x = 1;
  let y = 2;
}
let z
console.log(z) // undefined parce que z a été déclaré, mais aucune valeur ne lui a pas été assignée
console.log(x); // 1 parce que x est déclaré avec var, donc son scope s'étend au dela du bloc if. 
// S'il y avait un bloc function qui contenait le if, le scope de x serait limité à la fonction
console.log(y); // ReferenceError parce que y est déclaré avec let, donc son scope est limité au bloc if. En dehors de 
// if, y n'existe pas.

