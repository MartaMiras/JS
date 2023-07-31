let user = {
  name: "Cosimo",
  age: 30,
};
// Crea un nuevo objeto vacío para almacenar la copia del objeto de usuario
let newUser = {};
// Copie las propiedades del objeto de usuario a newUser usando un bucle for...in
for (let key in user) {
  newUser[key] = user[key];
}
// Ahora modifique la propiedad de nombre de newUser
newUser.name = "Paolo";
console.log(newUser);
console.log(user);
