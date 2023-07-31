function printName() {
  let helloName = "Hello John";
  function inner() {
    return helloName;
  }
  return inner;
}
// Crea un cierre llamando a printName y almacenando la función interna devuelta en una variable
const greetingFunction = printName();
console.log(greetingFunction());
